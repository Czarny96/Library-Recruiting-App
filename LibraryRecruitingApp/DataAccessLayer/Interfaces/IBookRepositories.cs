using DataAccessLayer.Entities;

namespace DataAccessLayer.Interfaces
{
    public interface IBookRepositories
    {
        IEnumerable<Books> GetAll();
        IEnumerable<Books> GetBySearch(string search);
        Books GetById(int id);
        Books Add(Books book);
        void Update(Books book);
        void Delete(Books book);
    }
}
