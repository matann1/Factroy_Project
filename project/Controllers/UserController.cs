using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using project.Models;
namespace project.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        private static UserBL userBL = new UserBL();
        // GET: api/User
        public IEnumerable<Users> Get()
        {
            return userBL.GetUsers();
        }

        // GET: api/User/5
        public Users Get(int id)
        {
            return userBL.GetUser(id);
        }

        // POST: api/User
        public string Post(Users user)
        {
            userBL.AddUser(user);
            return "Created";
        }

        // PUT: api/User/5
        public string Put(int id, Users user)
        {
            userBL.UpdateUser(id, user);
            return "Update";
        }

        // DELETE: api/User/5
        public string Delete(int id)
        {
            userBL.DeleteUser(id);
            return "Deleted";
        }
    }
}
