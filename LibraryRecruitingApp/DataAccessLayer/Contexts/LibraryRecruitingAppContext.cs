using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Contexts
{
    public class LibraryRecruitingAppContext : DbContext
    {
        public LibraryRecruitingAppContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Books> Books { get; set; }
    }
}