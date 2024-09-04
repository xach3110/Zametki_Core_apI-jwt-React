using AspCoreApiAuthMidleWare.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace AspCoreApiAuthMidleWare.Controllers
{

    [Authorize]
    [ApiController]
    [Route("user/noteController")]

    public class NoteUserController : ControllerBase
    {

        private readonly ILogger<NoteUserController> _logger;
        private readonly DbAplication1Context _dbContext; 

        public NoteUserController(ILogger<NoteUserController> logger, DbAplication1Context dbContext)
        {
            _logger = logger;
            _dbContext = dbContext; 
        }

        [HttpGet(Name = "GetAllNotes")]
        public IActionResult Get()
        {
            if (_dbContext != null && _dbContext.notes != null)
            {
                return Ok(_dbContext.notes);
            }
            return BadRequest("Ошибка: данные не найдены.");
        }

        [HttpPost(Name = "PostNote")]
        public IActionResult Post(string tittle, string text)
        {
            NoteModel newNote = new NoteModel(tittle, text);
            _dbContext.notes.Add(newNote);
            _dbContext.SaveChanges();
            return Ok(newNote);
        }

        [HttpPut(Name = "PutNote")]
        public IActionResult Put(Guid Sid, string title, string text)
        {
            NoteModel uniqueItem = _dbContext.notes.SingleOrDefault(item => item.Id == Sid);
            if (uniqueItem == null)
            {
                return NotFound();
            }
            uniqueItem.NoteTittle = title;
            uniqueItem.NoteText = text;
            _dbContext.SaveChanges();
            return Ok(uniqueItem);
        }

        [HttpDelete(Name = "DeleteNote")]
        public IActionResult Delete(Guid Sid)
        {
            NoteModel uniqueItem = _dbContext.notes.SingleOrDefault(item => item.Id == Sid);
            if (uniqueItem == null)
            {
                return NotFound();
            }

            _dbContext.notes.Remove(uniqueItem);
            _dbContext.SaveChanges();
            return Ok(uniqueItem);
        }
    }
}
