using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ReactSharp.Models;
using Dapper;
namespace ReactSharp.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CustomerController : ApiController 
    {
        //Get: api/Customer
        public IEnumerable<Customer> Get()
        {
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ReactSharp"].ToString()))
            {
                return con.Query<Customer>(@"
                    SELECT   Id
                            ,CompanyName
                            ,Name
                            ,AddressLine1
                            ,AddressLine2
                            ,Town
                            ,Postcode
                            ,PhoneNumber
                            ,EmailAddress
                    FROM  Customer");
            }
        }
        // GET: api/Customer/5

        public Customer Get(int id)
        {
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ReactSharp"].ToString()))
            {
                return con.Query<Customer>(@"
                    SELECT   Id
                            ,CompanyName
                            ,Name
                            ,AddressLine1
                            ,AddressLine2
                            ,Town
                            ,Postcode
                            ,PhoneNumber
                            ,EmailAddress
                    FROM  Customer WHERE Id = @Id", new { Id = id }).FirstOrDefault();
            };

        }


    }

}