using Microsoft.EntityFrameworkCore;
using TodoList.Model;

namespace TodoList.Data
{
    /// <summary>
    /// Entity Context
    /// </summary>
    public class TodoContext : DbContext
    {
        /// <summary>
        /// Constructor for option
        /// </summary>
        /// <param name="opt"></param>
        public TodoContext(DbContextOptions<TodoContext> opt) : base(opt)
        {

        }

        /// <summary>
        /// Table Todo
        /// </summary>
        public DbSet<TodoModel> Todo { get; set; }
    }
}
