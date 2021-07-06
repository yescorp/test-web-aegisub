using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace yhm.Models{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            
            builder.HasKey(prop => prop.id);
            builder.Property(prop => prop.name).HasColumnName("name").IsRequired();
            builder.Property(prop => prop.username).HasColumnName("username").IsRequired();
            builder.Property(prop => prop.password).HasColumnName("password").IsRequired();

        }
    }
}