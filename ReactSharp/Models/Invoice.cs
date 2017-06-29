using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactSharp.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public string InvoiceNumber { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public decimal? VatRate { get; set; }
        public List<InvoiceItem> Items { get; set; }
        public int ItemCount { get; set; }
    }
}