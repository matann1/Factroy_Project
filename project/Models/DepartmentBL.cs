using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class DepartmentBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();

        public List<Department> GetDepartments()
        {
            
            return db.Department.ToList();
        }

        public Department GetDepartment(int id)
        {
            
            return db.Department.Where(x => x.ID == id).First();
        }

        public void AddDepartment(Department dep)
        {
        //    checkActions(dep.ID);
            db.Department.Add(dep);
            db.SaveChanges();
        }

        public void UpdateDepartment(int id, Department dep)
        {
            //checkActions(id);
            Department d = db.Department.Where(x => x.ID == id).First();
            d.Name = dep.Name;
            d.Manager = dep.Manager;
            db.SaveChanges();
        }

        public Boolean DeleteDepartment(int id)
        {
            //checkActions(id);
            Department d = db.Department.Where(x => x.ID == id).First();
            if (d.Manager != null)
            {
                db.Department.Remove(d);
                db.SaveChanges();
                return true;
            }
            return false;
        }

        public void checkActions(int id)
        {
            var result=db.Users.Find(id).Num_Of_Actions--;
            if (result == 0)
            {

            }
            db.SaveChanges();
        }
    }
}