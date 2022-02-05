using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class ShiftBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();

        public List<Shift> GetShifts()
        {

            return db.Shift.ToList();
        }

        public Shift GetShift(int id)
        {
            return db.Shift.Where(x => x.ID == id).First();
        }

        public void AddShift(Shift emp)
        {
            db.Shift.Add(emp);
            db.SaveChanges();
        }

        public void UpdateShift(int id, Shift shi)
        {
            var s = db.Shift.Where(x => x.ID == id).First();
            s.Date = shi.Date;
            s.Start_Time = shi.End_Time;
            s.Start_Time = s.End_Time;
            db.SaveChanges();
        }

        public void DeleteShift(int id)
        {
            var s = db.Employee.Where(x => x.ID == id).First();
            db.Employee.Remove(s);
            db.SaveChanges();

        }
    }
}