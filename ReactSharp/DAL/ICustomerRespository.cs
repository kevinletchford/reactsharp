﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactSharp.Models;

namespace ReactSharp.DAL
{
    internal interface ICustomerRespository
    {
        List<Customer> GetCustomers(int amount, CustomerRespository.SortOrder sort);

        Customer GetSingleCustomer(int customerId);

        int InsertCustomer(Customer ourCustomer);

        bool DeleteCustomer(int customerId);

        bool UpdateCustomer(Customer ourCustomer);
    }
}