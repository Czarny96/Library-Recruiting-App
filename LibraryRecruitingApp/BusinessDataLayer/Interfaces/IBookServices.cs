using DataAccessLayer.Entities;

namespace BusinessDataLayer.Interfaces
{
    public interface IBookServices
    {
        IEnumerable<Books> GetAll();
        IEnumerable<Books> GetBySearch(string search);
        Books GetById(int id);
        Books Add(Books book);
        void Update(Books book);
        void Delete(int book);
    }
}
