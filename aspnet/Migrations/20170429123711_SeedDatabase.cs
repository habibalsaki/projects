using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Aspnet.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
            migrationBuilder.Sql("Insert into Makes (Name) Values ('Make1')");
            migrationBuilder.Sql("Insert into Makes (Name) Values ('Make2')");
            migrationBuilder.Sql("Insert into Makes (Name) Values ('Make3')");


            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make1-ModelA', (SELECT ID FROM Makes WHERE NAME='Make1'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make1-ModelB', (SELECT ID FROM Makes WHERE NAME='Make1'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make1-ModelC', (SELECT ID FROM Makes WHERE NAME='Make1'))");
        
            
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make2-ModelA', (SELECT ID FROM Makes WHERE NAME='Make2'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make2-ModelB', (SELECT ID FROM Makes WHERE NAME='Make2'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make2-ModelC', (SELECT ID FROM Makes WHERE NAME='Make2'))");

            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make3-ModelA', (SELECT ID FROM Makes WHERE NAME='Make3'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make3-ModelB', (SELECT ID FROM Makes WHERE NAME='Make3'))");
            migrationBuilder.Sql("Insert into Models (Name, MakeId) Values ('Make3-ModelC', (SELECT ID FROM Makes WHERE NAME='Make3'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes");
        }
    }
}
