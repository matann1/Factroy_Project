using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class employeeWithDepartment
    {
        public int ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public int Start_Work_Year { get; set; }
        public int DepartmentID { get; set; }

        public string NameDep { get; set; }
        public int Manager { get; set; }
    }
}