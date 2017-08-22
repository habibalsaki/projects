namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingDataToMembershipType : DbMigration
    {
        public override void Up()
        {


            Sql("Insert into dbo.Customers values('Habib Al Saki',0,1)");
            Sql("Insert into dbo.Customers values('Faiz Ahmed Khan',0,3)");
        }
        
        public override void Down()
        {
        }
    }
}
