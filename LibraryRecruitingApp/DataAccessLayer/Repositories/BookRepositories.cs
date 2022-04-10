using DataAccessLayer.Contexts;
using DataAccessLayer.Entities;
using DataAccessLayer.Interfaces;

namespace DataAccessLayer.Repositories
{
    public class BookRepositories : IBookRepositories
    {
        private readonly LibraryRecruitingAppContext _context;
        
        public BookRepositories(LibraryRecruitingAppContext context)
        {
            _context = context;
        }

        public Books Add(Books book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return book;
        }

        public void Delete(Books book)
        {
            _context.Books.Remove(book);
            _context.SaveChanges();
        }

        public IEnumerable<Books> GetAll()
        {
            return _context.Books;
        }

        public Books GetById(int id) => _context.Books.SingleOrDefault(x => x.Id == id);

        public IEnumerable<Books> GetBySearch(string search)
        {
            return _context.Books
                .Where(x => x.Title.Contains(search));
        }

        public void Update(Books book)
        {
            _context.Books.Update(book);
            _context.SaveChanges();
        }
    }
}
