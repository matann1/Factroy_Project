using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class employeeWithDepartmentBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();
        public List<employeeWithDepartment> GetEmployeeWithDeprtments()
        {
            List<employeeWithDepartment> empDep = new List<employeeWithDepartment>();

            foreach (var emp in db.Employee)
            {
                employeeWithDepartment empDe = new  employeeWithDepartment();
                empDe.ID = emp.ID;
                empDe.First_Name = emp.First_Name;
                empDe.Last_Name = emp.Last_Name;
                empDe.Start_Work_Year = emp.Start_Work_Year;
                empDe.DepartmentID = emp.DepartmentID;

                var department = db.Department.Where(x => x.ID == empDe.DepartmentID).First();
           
                    empDe.NameDep = department.Name;
                    empDe.Manager = department.Manager;
               

                empDep.Add(empDe);
            }
            return empDep;
        }
    }
}