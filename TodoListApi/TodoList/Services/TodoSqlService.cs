using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Data;
using TodoList.Model;

namespace TodoList.Services
{
    public class TodoSqlService : ITodoService
    {
        TodoContext m_context = null;

        public TodoSqlService(TodoContext context)
        {
            m_context = context;
        }        
        
        public async Task<List<TodoModel>> GetAll()
        {
            return await m_context.Todo.ToListAsync();
        }

        public async Task<TodoModel> Get(int id)
        {
            return await m_context.Todo.FirstOrDefaultAsync(t => t.Id == id);
        }

       
        public async Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Update(int id, TodoModel model)
        {
            var todo = await m_context.Todo.FirstOrDefaultAsync(t => t.Id == id);
            
            if (todo != null)
            {
                // can use automapper but to small here
                todo.Title = model.Title;
                todo.State = model.State;
                todo.Detail = model.Detail;
                m_context.Update<TodoModel>(todo);
                await m_context.SaveChangesAsync();
            }

            return true;
        }

        public async Task<TodoModel> Create(TodoModel model)
        {
            var res = await m_context.Todo.AddAsync(model);            
            await m_context.SaveChangesAsync();
            return model;
        }
    }
}