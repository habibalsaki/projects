using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Aspnet.Migrations
{
    public partial class FeatureSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Insert into Features (Name) Values ('Feature1')");
            migrationBuilder.Sql("Insert into Features (Name) Values ('Feature2')");
            migrationBuilder.Sql("Insert into Features (Name) Values ('Feature3')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Delete from Features");
        }
    }
}
