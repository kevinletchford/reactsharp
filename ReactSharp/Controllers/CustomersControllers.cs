using ReactSharp.Models;
using System.Net;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ReactSharp.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CustomersController : ApiController 
    {
        private static List<Customer> customers =
            new List<Customer>()
            {
                new Customer
                {
                    CustomerID = 1,
                    CompanyName = "Super Auto",
                    Name = "Dan Hammers",
                    AddressLine1  = "Saint Audries Lane",
                    AddressLine2 = "Janners",
                    Town = "Redtown",
                    Postcode = "tn190au",
                    PhoneNumber = "097657856578",
                    EmailAddress = "ido@gmail.com",
                },
               new Customer
                {
                    CustomerID = 2,
                    CompanyName = "Spot Mex Center",
                    Name = "Jim Mackers",
                    AddressLine1  = "Smegway",
                    AddressLine2 = "Smashington",
                    Town = "Smacleford",
                    Postcode = "OU880VW",
                    PhoneNumber = "08973983247",
                    EmailAddress = "sledge@hammer.com",
                },
                new Customer
                {
                    CustomerID = 3,
                    CompanyName = "Wet center for the dry",
                    Name = "Fred Fiaso",
                    AddressLine1  = "The Damberinso",
                    AddressLine2 = "Little Way",
                    Town = "Big town",
                    Postcode = "BN180SX",
                    PhoneNumber = "043873298479832",
                    EmailAddress = "jam@jar.com",
                },
            };

        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(
                HttpStatusCode.OK,
                customers);
        }
        public HttpResponseMessage Post(Customer customer)
        {
            if (customer == null || !ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    "Invalid input");
            }
            customers.Add(customer);
            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }

}