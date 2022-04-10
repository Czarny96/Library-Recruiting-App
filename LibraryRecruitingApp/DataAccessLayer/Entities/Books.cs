using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DataAccessLayer.Entities
{
    [Table("Books")]
    public class Books
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }
        
        [Required]
        public uint ISBN { get; set; }
    }
}
