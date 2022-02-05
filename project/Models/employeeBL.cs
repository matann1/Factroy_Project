using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class employeeBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();

        public List<Employee> GetEmployees(string fname,string lname, int department)
        {
            if (fname == "" && lname == "" && department == 0)
            {
                return db.Employee.ToList();
            }
            else if(fname!=""&& lname == "" && department == 0)
            {
              
                return db.Employee.Where(x => x.First_Name == fname).ToList();
            }
            else if(fname == "" && lname != "" && department == 0)
            {
                return db.Employee.Where(x => x.Last_Name == lname).ToList();
            }
            else
            {
                return db.Employee.Where(x => x.DepartmentID == department).ToList();
            }
            
        }

     
        public Employee GetEmployee(int id)
        {
            return db.Employee.Where(x => x.ID == id).FirstOrDefault();
        }

        public void AddEmployee(Employee emp)
        {
            db.Employee.Add(emp);
            db.SaveChanges();
        }

        public void UpdateEmployee(int id,Employee emp)
        {
            var e = db.Employee.Where(x => x.ID == id).First();
            e.First_Name = emp.First_Name;
            e.Last_Name = emp.Last_Name;
            e.Start_Work_Year = emp.Start_Work_Year;
            e.DepartmentID = emp.DepartmentID;
            db.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            var e = db.Employee.Where(x => x.ID == id).First();
            db.Employee.Remove(e);
            db.SaveChanges();
        }
    }
}