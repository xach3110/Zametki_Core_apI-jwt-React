using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AspCoreApiAuthMidleWare.Controllers
{
    public class DbAplication1Context: IdentityDbContext<IdentityUser>
    {
        

        public DbSet<Models.NoteModel> notes { get; set; }
        public DbAplication1Context(DbContextOptions<DbAplication1Context> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder builder) { base.OnModelCreating(builder); }
    }
}
