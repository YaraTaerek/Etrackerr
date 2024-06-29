using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainReact.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }

        public string NationalID { get; set; }
        public string Email { get; set; }
        public string password { get; set; }

        public int Budget { get; set; }

        public int MonthStart { get; set; }
    }
}
