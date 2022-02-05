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
    public class EmployeeController : ApiController
    {
        private static employeeBL employeeBL = new employeeBL();
        // GET: api/Employee
        public IEnumerable<Employee> Get(string fname="", string lname = "",int department=0)
        {

            return employeeBL.GetEmployees(fname, lname,department);
        }



        // GET: api/Employee/5
        public Employee Get(int id)
        {
            return employeeBL.GetEmployee(id);
        }

        // POST: api/Employee
        public string Post(Employee emp)
        {
            employeeBL.AddEmployee(emp);
            return "Created";
        }

        // PUT: api/Employee/5
        public string Put(int id, Employee emp)
        {
            employeeBL.UpdateEmployee(id, emp);
            return "Updated";

        }

        // DELETE: api/Employee/5
        public string Delete(int id)
        {
            employeeBL.DeleteEmployee(id);
            return "Deleted";
        }
    }
}
