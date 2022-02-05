using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using project.Models;
using System.Web.Http.Cors;

namespace project.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DepartmentController : ApiController
    {
        private static DepartmentBL departmentBL = new DepartmentBL();
        // GET: api/Department
        public IEnumerable<Department> Get()
        {
            return departmentBL.GetDepartments();
        }

        // GET: api/Department/5
        public Department Get(int id)
        {
            return departmentBL.GetDepartment(id);
        }

        // POST: api/Department
        public string Post(Department dep)
        {
            departmentBL.AddDepartment(dep);
            return "Created";
        }

        // PUT: api/Department/5
        public string Put(int id, Department dep)
        {
            departmentBL.UpdateDepartment(id, dep);
            return "Updated";
        }

        // DELETE: api/Department/5
        public string Delete(int id)
        {
            var temp=departmentBL.DeleteDepartment(id);
            if (temp)
            {
                return "Deleted";
            }
            else
            {
                return "Error";
            }
        }
    }
}
