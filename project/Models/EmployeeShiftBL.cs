using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class EmployeeShiftBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();

        public List<EmployeeShift> GetEmployeeShifts()
        {
            return db.EmployeeShift.ToList();
        }

        public EmployeeShift GetEmployeeShift(int id)
        {
            return db.EmployeeShift.Where(x => x.EmployeeID == id).First();
        }

        public void AddEmployeeShift(EmployeeShift empS)
        {
            db.EmployeeShift.Add(empS);
            db.SaveChanges();
        }


        public void UpdateEmployeeShift(int id, EmployeeShift empS)
        {
            var e = db.EmployeeShift.Where(x => x.EmployeeID == id).First();
            e.EmployeeID = empS.EmployeeID;
            e.ShiftID = empS.ShiftID;
            db.SaveChanges();
        }
        public void DeleteEmployeeShift(int id)
        {
            var shifts = db.EmployeeShift.Where(x => x.EmployeeID == id).ToList();
            foreach (var shi in shifts)
            {
                db.EmployeeShift.Remove(shi);
            }
            db.SaveChanges();
        }
    }
}