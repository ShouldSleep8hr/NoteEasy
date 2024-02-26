"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customerController_1 = require("../controllers/customerController");
var customerRoutes = [
    {
        method: 'POST',
        path: '/customers',
        handler: customerController_1.default.createCustomer,
    },
    {
        method: 'GET',
        path: '/customers',
        handler: customerController_1.default.getAllCustomer,
    },
    {
        method: 'GET',
        path: '/customers/{customerId}',
        handler: customerController_1.default.getCustomerById,
    },
    {
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: customerController_1.default.updateCustomer,
    },
    {
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: customerController_1.default.deleteCustomer,
    },
];
exports.default = customerRoutes;
