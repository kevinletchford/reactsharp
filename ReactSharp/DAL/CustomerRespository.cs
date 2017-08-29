using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using ReactSharp.Models;

namespace ReactSharp.DAL
{
    public class CustomerRespository : ICustomerRespository
    {
        private readonly IDbConnection _db;

        public CustomerRespository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["ReactSharp"].ConnectionString);
        }

        public List<Customer> GetCustomers(int amount, string sort)
        {
           return this._db.Query<Customer>(@"
                SELECT TOP " + amount +
                @"[Id],
                [CompanyName],
                [Name],
                [AddressLine1],
                [AddressLine2],
                [Town],
                [Postcode],
                [EmailAddress]
                FROM [Customer] 
                ORDER BY Id " + sort).ToList();
        }

        public Customer GetSingleCustomer(int customerId)
        {
            return _db.Query<Customer>(@"
                SELECT
                [Id],
                [CompanyName],
                [Name],
                [AddressLine1],
                [AddressLine2],
                [Town],
                [Postcode],
                [EmailAddress]
                FROM [Customer]
                WHERE Id =@Id", 
                new { Id = customerId }).SingleOrDefault();
        }

        public bool InsertCustomer(Customer ourCustomer)
        {
            int rowsAffected = this._db.Execute(@"
                INSERT Customer(
                             [CompanyName]
                            ,[Name]
                            ,[AddressLine1]
                            ,[AddressLine2]
                            ,[Town]
                            ,[Postcode]
                            ,[PhoneNumber]
                            ,[EmailAddress]) 
                VALUES (     @CompanyName
                            ,@Name
                            ,@AddressLine1
                            ,@AddressLine2
                            ,@Town
                            ,@Postcode
                            ,@PhoneNumber
                            ,@EmailAddress)",
            new
            {
                CustomerId = ourCustomer.Id,
                CompanyName = ourCustomer.CompanyName,
                Name = ourCustomer.Name,
                AddressLine1 = ourCustomer.AddressLine1,
                AddressLine2 = ourCustomer.AddressLine2,
                Town = ourCustomer.Town,
                Postcode = ourCustomer.Postcode,
                PhoneNumber = ourCustomer.PhoneNumber,
                EmailAddress = ourCustomer.EmailAddress
            }
            );
            if (rowsAffected > 0)
            {
                return true;
            }
            return false;
        }

        public bool DeleteCustomer(int customerId)
        {
            int rowsAffected = this._db.Execute(@"DELETE FROM [Customer] WHERE ID = @ID",
            new { Id = customerId });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateCustomer(Customer ourCustomer)
        {
            int rowsAffected = this._db.Execute(
                        "UPDATE [Customer] " +
                        "SET " +
                        " [CompanyName]   = @CompanyName" +
                        ",[Name]          = @Name" +
                        ",[AddressLine1]  = @AddressLine1" +
                        ",[AddressLine2]  = @AddressLine2" +
                        ",[Town]          = @Town" +
                        ",[Postcode]      = @Postcode" +
                        ",[PhoneNumber]   = @PhoneNumber" +
                        ",[EmailAddress]  = @EmailAddress" +
                        "WHERE Id = " + ourCustomer.Id, 
                        ourCustomer);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
