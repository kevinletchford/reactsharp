import axios from "axios";

const baseUrl = 'http://localhost:56123';
var helper = {
    getCustomer: function(customerId){
        axios.get(`${baseUrl}/api/customer/` + customerId);
    },
    getAllCustomers: function(){
        axios.get(`${baseUrl}/api/customer`);
    }
}


helper.export = helper;