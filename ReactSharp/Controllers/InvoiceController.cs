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
    public class InvoiceController : ApiController
    {
        //Get: api/Invoice
        public IEnumerable<Invoice> Get()
        {
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ReactSharp"].ToString()))
            {
                return con.Query<Invoice>(@"
                       SElECT i.Id
                             ,i.InvoiceNumber
                             ,i.InvoiceDate
                             ,i.VatRate
                             ,COUNT(ii.Id) AS ItemCount
                       FROM  Invoice i
                       LEFT  JOIN InvoiceItem ii ON i.Id = ii.InvoiceId
                       GROUP BY i.Id, i.InvoiceNumber, i.InvoiceDate, i.VatRate");
            }
        }

        // GET: api/Invoice/5
        public Invoice Get(int id)
        {
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["KevsInvoicing"].ToString()))
            {
                var invoice = con.Query<Invoice>("SELECT * FROM Invoice WHERE Id = @Id", new {Id = id}).FirstOrDefault();
                if (invoice == null)
                    return null;

                var items =
                    con.Query<InvoiceItem>("SELECT * FROM InvoiceItem WHERE InvoiceId = @InvoiceId",
                        new {InvoiceId = id}).ToList();
                invoice.Items = items;
                invoice.ItemCount = items.Count;

                return invoice;
            }
        }


    }
}