using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ToDoApi.Models;

namespace ToDoApi.Controllers
{
      [EnableCors(origins: "http://localhost:55032", headers: "*", methods: "*")]
    public class ToDosController : ApiController
    {
        // GET: api/ToDos
        public IEnumerable<ToDo> Get()
        {
            ToDo td1 = new ToDo() { dueDate = new DateTime(2014, 12, 5), id = "12345680", title = "Do This" };
            ToDo td2 = new ToDo() { dueDate = new DateTime(2014, 12, 31), id = "09876543", title = "Then that" };
            return new ToDo[] { td1, td2 };
        }

        // GET: api/ToDos/5
        public ToDo Get(string id)
        {
            return new ToDo();
        }

        // POST: api/ToDos
        public HttpResponseMessage Post([FromBody]ToDo value)
        {
            HttpResponseMessage retval = new HttpResponseMessage(HttpStatusCode.OK);

            return retval;
        }

        // PUT: api/ToDos/5
        public HttpResponseMessage Put(string id, [FromBody]ToDo value)
        {
            HttpResponseMessage retval = new HttpResponseMessage(HttpStatusCode.OK);

            return retval;
        }

        // DELETE: api/ToDos/5
        public HttpResponseMessage Delete(string id)
        {
            HttpResponseMessage retval = new HttpResponseMessage(HttpStatusCode.OK);

            return retval;
        }
    }
}
