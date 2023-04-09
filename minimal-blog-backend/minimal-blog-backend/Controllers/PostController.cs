using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using minimal_blog_backend.Data;
using minimal_blog_backend.Models;
using System;
using System.IO;
using System.Linq;

namespace minimal_blog_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly IWebHostEnvironment _env;

        public PostController(MyDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var listPosts = _context.Post
                .Include(o => o.Author)
                .Include(o => o.Post_Categories)
                .ThenInclude(o => o.Category)
                .ToList();

            return Ok(listPosts);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var post = _context.Post.SingleOrDefault(jo => jo.Id == id);
            if (post != null)
            {
                return Ok(post);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult CreateNew(PostModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var post = new Post
                {
                    AuthorId = model.AuthorId,
                    CreateAt = model.CreateAt,
                    Title = model.Title,
                    Banner = model.Banner,
                    Content = model.Content,
                    Post_Categories = model.Post_Categories
                };
                _context.Post.Add(post);
                _context.SaveChanges();
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateJobById(int id, PostModel model)
        {
            var post = _context.Post.SingleOrDefault(po => po.Id == id);
            if (post != null)
            {
                post.AuthorId = model.AuthorId;
                post.CreateAt = model.CreateAt;
                post.Title = model.Title;
                post.Banner = model.Banner;
                post.Content = model.Content;
                post.Post_Categories = model.Post_Categories;
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
            var post = _context.Post.SingleOrDefault(po => po.Id == id);
            if (post != null)
            {
                _context.Remove(post);
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
