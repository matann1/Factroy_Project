using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project.Models
{
    public class UserBL
    {
        private FactoryDBEntities db = new FactoryDBEntities();

        public List<Users> GetUsers()
        {
            return db.Users.ToList();
            db.SaveChanges();
        }

        public Users GetUser(int id)
        {
            return db.Users.Where(x => x.ID == id).First();
            db.SaveChanges();
        }

        public void AddUser(Users user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }

        public void UpdateUser(int id, Users user)
        {
            Users u = db.Users.Where(x => x.ID == id).First();
            u.Full_Name = user.Full_Name;
            u.User_Name = user.User_Name;
            u.Password = user.Password;
            u.Num_Of_Actions = user.Num_Of_Actions;
            u.Date = user.Date;

            db.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            Users u = db.Users.Where(x => x.ID == id).First();
            db.Users.Remove(u);
            db.SaveChanges();
        }
    }
}