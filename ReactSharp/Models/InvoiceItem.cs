using System;


namespace ReactSharp.Models
{
    public class InvoiceItem
    {
        public int Id { get; set; }
        public int InvoiceId { get; set; }
        public string Name { get; set; }
        public DateTime? Date { get; set; }
        public decimal? Amount { get; set; }
    }
}