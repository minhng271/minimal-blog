using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace minimal_blog_backend.Data
{
    [Table("Post_Category")]
    public class Post_Category
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("PostId")]
        public int PostId { get; set; }
        public Post Post { get; set; }

        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
