using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Model;
using TodoList.Services;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private ITodoService m_service;

        public TodoController(ITodoService service)
        {
            this.m_service = service;
        }

        // GET: api/<TodoController>
        [HttpGet]
        public async Task<IEnumerable<TodoModel>> Get()
        {
            return await m_service.GetAll();
        }

        // GET api/<TodoController>/5
        [HttpGet("{id}")]
        public async Task<TodoModel> Get(int id)
        {
            return  await m_service.Get(id);
        }

        // POST api/<TodoController>
        [HttpPost]
        public async Task Post([FromBody] TodoModel value)
        {
            await m_service.Create(value);
        }

        // PUT api/<TodoController>/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] TodoModel value)
        {
            await m_service.Update(id,value);
        }

        // DELETE api/<TodoController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await m_service.Delete(id);
        }
    }
}
