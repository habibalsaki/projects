namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingGenreValue : DbMigration
    {
        public override void Up()
        {
            Sql("Insert into [dbo].[Genres] values('war')");
            Sql("Insert into [dbo].[Genres] values('romantic')");
        }
        
        public override void Down()
        {
        }
    }
}
