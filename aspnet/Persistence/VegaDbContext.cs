using aspnet.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnet.Persistence
{
    public class VegaDbContext: DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options): base(options)
        {
            
        }

        public DbSet<Make> Makes { get; set; }
    }
}