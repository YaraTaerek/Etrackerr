using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using TrainReact.Models;

namespace TrainReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpPost]
        [Route("Registration")]
        public Response Registration(User registration)
        {
            Response resp = new Response();

            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("SSSto").ToString());

            Dal dal = new Dal();
            resp = dal.Registration(registration, conn);
            return resp;
        }



        [HttpPost]
        [Route("Login")]
        public Response Login(User registration)
        {
            Response resp = new Response();

            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("SSSto").ToString());

            Dal dal = new Dal();
            resp = dal.Login(registration, conn);
            return resp;
        }
    }
}
