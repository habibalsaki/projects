namespace Vidly
{
    using System;
    using System.Data.Entity;
    using System.Linq;
    using Vidly.Models;

    public class VidlyContext : DbContext
    {
       
        public VidlyContext()
            : base("name=VidlyContext")
        {
        }
        
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<MembershipType> MembershipType { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<Genre> Genre { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}