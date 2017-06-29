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
                    SELECT   i.CustomerID
                            ,i.CompanyName
                            ,i.Name
                            ,i.AddressLine1
                            ,i.AddressLine2
                            ,i.Town
                            ,i.Postcode
                            ,i.PhoneNumber
                            ,i.EmailAddress
          
                   GROUP BY i.CustomerID,i.CompanyName,i.Name,i.AddressLine1,i.AddressLine2,i.Town,i.Postcode,i.PhoneNumber,i.EmailAddress");
            }
        }

    }

}