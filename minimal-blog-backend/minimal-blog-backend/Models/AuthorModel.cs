using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace minimal_blog_backend.Models
{
    public class AuthorModel
    {
        public string Name { get; set; }
        public string Position { get; set; }
        public string Avatar { get; set; }
    }
}
