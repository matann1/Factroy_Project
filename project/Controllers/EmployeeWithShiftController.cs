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
    public class EmployeeWithShiftController : ApiController
    {
        private static employeeWithShiftBL employeeWithShiftBL = new employeeWithShiftBL();
        // GET: api/EmployeeWithShift
        public IEnumerable<employeeWithShift> Get()
        {
            return employeeWithShiftBL.GetEmployeeWithShifts();
        }

    }
}
