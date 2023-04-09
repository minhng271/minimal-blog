using minimal_blog_backend.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace minimal_blog_backend.Models
{
    public class CategoryModel : Category
    {
        public string NumberOfPost { get; set; }
    }
}
