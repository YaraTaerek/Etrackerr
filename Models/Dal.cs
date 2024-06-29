using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace TrainReact.Models
{
    public class Dal
    {
        public Response Registration(User registraion, SqlConnection conn)
        {
            Response resp = new Response();

            SqlCommand query = new SqlCommand("insert into Users(Name,NationalID,Email,Password,Budget,MonthStart) values('" + registraion.UserName + "','" + registraion.NationalID + "','" + registraion.Email + "','" + registraion.password + "','" + registraion.Budget + "','" + registraion.MonthStart, conn);

            conn.Open();
            int i = query.ExecuteNonQuery();
            conn.Close();

            if(i > 0)
            {
                resp.StatusMessage = "Registration Successful";
            }
            else
            {
                resp.StatusMessage = "Registration Failed";
            }

            return resp;
        }

        public Response Login(User registration, SqlConnection conn)
        {
            Response resp = new Response();

            SqlDataAdapter da = new SqlDataAdapter("select * from Users where Email = '" + registration.Email + "' and Password = '" + registration.password + "'", conn);
            DataTable dt = new DataTable();
            da.Fill(dt);

            if(dt.Rows.Count > 0)
            {
                resp.StatusMessage = "Login Successful";

                User reg = new User();

                reg.UserId = Convert.ToInt32(dt.Rows[0]["Id"]);
                reg.UserName = Convert.ToString(dt.Rows[0]["Name"]);
                reg.Email = Convert.ToString(dt.Rows[0]["Email"]);
                resp.user = reg;

            }
            else
            {
                resp.StatusMessage = "Login Successful";
                resp.user = null;
            }

            return resp;
        }
    }
}
