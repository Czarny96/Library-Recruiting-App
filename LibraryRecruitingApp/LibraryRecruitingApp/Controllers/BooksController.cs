using BusinessDataLayer.Interfaces;
using DataAccessLayer.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Library_Recruiting_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookServices _bookServices;

        public BooksController(IBookServices bookServices)
        {
            _bookServices = bookServices;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var book = _bookServices.GetAll();
            return Ok(book);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var book = _bookServices.GetById(id);
            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [HttpGet("search/{search}")]
        public IActionResult Get(string search)
        {
            var book = _bookServices.GetBySearch(search);
            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [HttpPost]
        public IActionResult Create(Books newBook)
        {
            var book = _bookServices.Add(newBook);
            return Created($"/book/{book.Id}", book);
        }

        [HttpPut]
        public IActionResult Update(Books updateBook)
        {
            _bookServices.Update(updateBook);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _bookServices.Delete(id);
            return NoContent();
        }
    }
}
