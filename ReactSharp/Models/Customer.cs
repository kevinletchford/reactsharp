using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ReactSharp.Models
{
    public class Customer
    {
        [Required]
        public int CustomerID { get; set; }

        [Required]
        public string CompanyName { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string CompanyAddres { get; set; }

        [Required]
        public string AddressLine1 { get; set; }

        [Required]
        public string AddressLine2 { get; set; }


        [Required]
        public string Town { get; set; }

        [Required]
        public string Postcode { get; set; }


        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string EmailAddress { get; set; }

    }
}
