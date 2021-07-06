using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using yhm.Models;
using System.Security.Cryptography;
using System.Text;

namespace yhm.Controllers{
    
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller{
        readonly UserContext Context;

        public UsersController(UserContext context)
        {
            this.Context = context;
        }

        [HttpGet("get")]
        public IActionResult Get(){
            var users = Context.users;
            return Ok(users);
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody] User user){
            
            var newUser = new User(){
                name=user.name,
                username=user.username,
                password=Convert.ToBase64String(MD5.HashData(Encoding.ASCII.GetBytes(user.password)))
            };
            Context.Add(newUser);
            Context.SaveChanges();

            return Ok("Success");
        }

        [HttpPost("update")]
        public IActionResult Update([FromBody] User user){
            


            return Ok("Success");
        }
    }
}