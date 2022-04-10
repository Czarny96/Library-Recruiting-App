using BusinessDataLayer.Interfaces;
using DataAccessLayer.Entities;
using DataAccessLayer.Interfaces;

namespace BusinessDataLayer.Services
{
    public class BookServices : IBookServices
    {
        private readonly IBookRepositories _bookRepositories;

        public BookServices(IBookRepositories bookRepositories)
        {
            _bookRepositories = bookRepositories;
        }

        public Books Add(Books book)
        {
            if (string.IsNullOrEmpty(book.Title))
                throw new Exception("Book can not have an empty title.");

            _bookRepositories.Add(book);
            return book;
        }

        public void Delete(int bookId)
        {
            var book = _bookRepositories.GetById(bookId);
            _bookRepositories.Delete(book);
        }

        public IEnumerable<Books> GetAll()
        {
            return _bookRepositories.GetAll();
        }

        public Books GetById(int id)
        {
            return _bookRepositories.GetById(id);
        }

        public IEnumerable<Books> GetBySearch(string search)
        {
            return _bookRepositories.GetBySearch(search);
        }

        public void Update(Books book)
        {
            _bookRepositories.Update(book);
        }
    }
}
