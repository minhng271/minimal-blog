using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace minimal_blog_backend.Data
{
    [Table("Post")]
    public class Post
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("AuthorId")]
        public int AuthorId { get; set; }
        public Author Author { get; set; }

        public DateTime CreateAt { get; set; }

        public string Title { get; set; }

        public string Banner { get; set; }

        public string Content { get; set; }


        public virtual ICollection<Post_Category> Post_Categories { get; set; }
    }
}
