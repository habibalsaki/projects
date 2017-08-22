namespace Vidly.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addingNametoMembership : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MembershipTypes", "Name", c => c.String());
            Sql("Update dbo.MembershipTypes set Name='Pay as you go' where Id=1");
            Sql("Update dbo.MembershipTypes set Name='Monthly' where Id=2");
            Sql("Update dbo.MembershipTypes set Name='Quarterly' where Id=3");
            Sql("Update dbo.MembershipTypes set Name='Yearly' where Id=4");
        }
        
        public override void Down()
        {
            DropColumn("dbo.MembershipTypes", "Name");
        }
    }
}
