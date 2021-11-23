using System.Collections.Generic;
using System.Threading.Tasks;
using TodoList.Model;

namespace TodoList.Services
{
    public interface ITodoService
    {
        Task<List<TodoModel>>GetAll();

        Task<TodoModel> Get(int id);

        Task<bool> Update(int id,TodoModel model);

        Task<TodoModel> Create(TodoModel model);

        Task<bool> Delete(int id);
    }
}
