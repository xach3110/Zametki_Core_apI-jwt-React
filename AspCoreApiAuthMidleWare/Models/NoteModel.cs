namespace AspCoreApiAuthMidleWare.Models
{
    public class NoteModel
    {
        public Guid Id { get; set; }
        public string NoteTittle {  get; set; }
        public DateTime NoteDate {  get; set; }
        public string NoteText { get; set; }
        public NoteModel() {
            Id = Guid.NewGuid();
            NoteDate = DateTime.Now;
        }
        public NoteModel(string noteTittle, string noteText)
        {
            Id = Guid.NewGuid();
            NoteTittle = noteTittle;
            NoteDate = DateTime.Now;
            NoteText = noteText;
        }
    }
}
