using minimal_blog_backend.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace minimal_blog_backend.Models
{
    public class PostModel
    {
        public int AuthorId { get; set; }
        public DateTime CreateAt { get; set; }
        public string Title { get; set; }
        public string Banner { get; set; }
        public string Content { get; set; }

        public ICollection<Post_Category> Post_Categories { get; set; }
    }
}
