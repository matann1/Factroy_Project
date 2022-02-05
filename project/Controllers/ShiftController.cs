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
    public class ShiftController : ApiController
    {
        private static ShiftBL shiftBL = new ShiftBL();
        // GET: api/Shift
        public IEnumerable<Shift> Get()
        {
            return shiftBL.GetShifts();
        }

        // GET: api/Shift/5
        public Shift Get(int id)
        {
            return shiftBL.GetShift(id);
        }

        // POST: api/Shift
        public string Post(Shift shi)
        {
            shiftBL.AddShift(shi);
            return "Created";
        }

        // PUT: api/Shift/5
        public string Put(int id, Shift shi)
        {
            shiftBL.UpdateShift(id, shi);
            return "Update";
        }

        // DELETE: api/Shift/5
        public string Delete(int id)
        {
            shiftBL.DeleteShift(id);
            return "Deleted";
        }
    }
}
