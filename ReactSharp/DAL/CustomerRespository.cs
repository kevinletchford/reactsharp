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
        public enum SortOrder
        {
            Asc,
            Desc
        }

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

        public List<Customer> GetCustomers(int amount, SortOrder sortOrder)
        {
            var sort = sortOrder == SortOrder.Asc ? "ASC" : "DESC";

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

        public int InsertCustomer(Customer ourCustomer)
        {
            int newCustomerId = this._db.ExecuteScalar<int>(@"
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
                            ,@EmailAddress); SELECT CAST(SCOPE_IDENTITY() as int)",
            ourCustomer
            );
            return newCustomerId;
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

        public int UpdateCustomer(Customer ourCustomer)
        {
            int rowsAffected = this._db.ExecuteScalar<int>(
                        @"UPDATE [Customer] 
                        SET 
                         [CompanyName]   = @CompanyName
                        ,[Name]          = @Name
                        ,[AddressLine1]  = @AddressLine1
                        ,[AddressLine2]  = @AddressLine2
                        ,[Town]          = @Town
                        ,[Postcode]      = @Postcode
                        ,[PhoneNumber]   = @PhoneNumber
                        ,[EmailAddress]  = @EmailAddress
                        WHERE Id = @Id SELECT CAST(SCOPE_IDENTITY() as int)", 
                        ourCustomer);

            return rowsAffected;
        }
    }
}
