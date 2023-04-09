using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using minimal_blog_backend.Data;
using minimal_blog_backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace minimal_blog_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly MyDbContext _context;

        public AuthorController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var listAuthors = _context.Author.ToList();
            return Ok(listAuthors);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var author = _context.Author.SingleOrDefault(jo => jo.Id == id);
            if (author != null)
            {
                return Ok(author);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult CreateNew(AuthorModel model)
        {
            try
            {
                var job = new Author
                {
                    Name = model.Name,
                    Position = model.Position,
                    Avatar = model.Avatar
                };
                _context.Add(job);
                _context.SaveChanges();
                return Ok(job);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateJobById(int id, AuthorModel model)
        {
            var job = _context.Author.SingleOrDefault(jo => jo.Id == id);
            if (job != null)
            {
                job.Name = model.Name;
                job.Position = model.Position;
                job.Avatar = model.Avatar;
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            var author = _context.Author.SingleOrDefault(au => au.Id == id);
            if (author != null)
            {
                _context.Remove(author);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
