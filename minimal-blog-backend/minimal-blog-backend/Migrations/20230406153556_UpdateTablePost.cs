using Microsoft.EntityFrameworkCore.Migrations;

namespace minimal_blog_backend.Migrations
{
    public partial class UpdateTablePost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Banner",
                table: "Post",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Post",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Banner",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Post");
        }
    }
}
