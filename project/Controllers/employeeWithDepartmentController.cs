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
    public class employeeWithDepartmentController : ApiController
    {
        private static employeeWithDepartmentBL employeeWithDeprtmentBL = new employeeWithDepartmentBL();
        // GET: api/employeeWithDeprtment
        public IEnumerable<employeeWithDepartment> Get()
        {
            return employeeWithDeprtmentBL.GetEmployeeWithDeprtments();
        }
        // GET: api/employeeWithDeprtment/5

    }
}
