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
    public class EmployeeShiftController : ApiController
    {
        private static EmployeeShiftBL employeeShiftBL = new EmployeeShiftBL();
        // GET: api/EmployeeShift
        public IEnumerable<EmployeeShift> Get()
        {
            return employeeShiftBL.GetEmployeeShifts();
        }

        // GET: api/EmployeeShift/5
        public EmployeeShift Get(int id)
        {
            return employeeShiftBL.GetEmployeeShift(id);
        }

        // POST: api/EmployeeShift
        public string Post(EmployeeShift empS)
        {
            employeeShiftBL.AddEmployeeShift(empS);
            return "Created";
        }

        // PUT: api/EmployeeShift/5
        public string Put(int id, EmployeeShift empS)
        {
            employeeShiftBL.UpdateEmployeeShift(id, empS);
            return "Updated";
        }

        // DELETE: api/EmployeeShift/5
        public string Delete(int id)
        {
            employeeShiftBL.DeleteEmployeeShift(id);
            return "Deleted";
        }
    }
}
