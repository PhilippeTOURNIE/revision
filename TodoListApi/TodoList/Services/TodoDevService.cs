using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Model;

namespace TodoList.Services
{
    /// <summary>
    /// Class use for Dev
    /// </summary>
    public class TodoDevService : ITodoService
    {
        private List<TodoModel> m_List = new List<TodoModel>(){
                new TodoModel(){Id=1, State=StateTodoEnum.Done,Title = "UserStory_1" },
                new TodoModel(){Id=2, State=StateTodoEnum.New,Title = "UserStory_2" },
                new TodoModel(){Id=3, State=StateTodoEnum.New,Title = "UserStory_3" }
        };

        public Task<List<TodoModel>> GetAll()
        {
            return Task.FromResult(m_List);
        }

        public Task<TodoModel> Get(int id)
        {
            return Task.FromResult( m_List.FirstOrDefault(m => m.Id == id));
        }

        public Task<bool> Update(int id,TodoModel model)
        {
            return Task.FromResult(true);
        }

        public Task<bool> Delete(int id)
        {
            return Task.FromResult(true);
        }

        public Task<TodoModel> Create(TodoModel model)
        {
            throw new NotImplementedException();
        }
    }
}
