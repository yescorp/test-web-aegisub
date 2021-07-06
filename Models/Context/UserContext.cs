using System;
using Microsoft.EntityFrameworkCore;

namespace yhm.Models{

    public class UserContext : DbContext{
        public UserContext(DbContextOptions<UserContext> options)
        :base(options){ }

        protected override void OnModelCreating(ModelBuilder builder){
            builder.ApplyConfiguration(new UserConfiguration());
        }
        public DbSet<User> users {get; set;}
    }
}