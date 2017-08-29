using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ReactSharp.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string Name { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string Town { get; set; }
        public string Postcode { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public List<Invoice> Invoices { get; set; }
        public int InvoiceCount { get; set; }
    }
}
