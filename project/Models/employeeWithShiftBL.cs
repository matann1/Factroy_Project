using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class employeeWithShiftBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();
        public List<employeeWithShift> GetEmployeeWithShifts()
        {
            List<employeeWithShift> empls = new List<employeeWithShift>();

            foreach (var emp in db.Employee)
            {
                employeeWithShift empShi = new employeeWithShift();
                empShi.ID = emp.ID;
                empShi.First_Name = emp.First_Name;
                empShi.Last_Name = emp.Last_Name;
                empShi.Start_Work_Year = emp.Start_Work_Year;
                empShi.DepartmentID = emp.DepartmentID;

                empShi.shifts = new List<Shift>();

                var shiftss = db.EmployeeShift.Where(x => x.EmployeeID == empShi.ID);


                foreach (var shi in shiftss)
                {
                    var result = db.Shift.Where(x => x.ID == shi.ShiftID);
                    foreach (var res in result)
                    {
                        empShi.shifts.Add(res);
                    }
                    
                }

                empls.Add(empShi);
            }
            return empls;
        }
    }
}