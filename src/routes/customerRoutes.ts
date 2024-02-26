import { ServerRoute } from '@hapi/hapi';
import CustomerController from '../controllers/customerController';

const customerRoutes: ServerRoute[] = [
  {
    method: 'POST',
    path: '/customers',
    handler: CustomerController.createCustomer,
  },
  {
    method: 'GET',
    path: '/customers',
    handler: CustomerController.getAllCustomer,
  },
  {
    method: 'GET',
    path: '/customers/{customerId}',
    handler: CustomerController.getCustomerById,
  },
  {
    method: 'PUT',
    path: '/customers/{customerId}',
    handler: CustomerController.updateCustomer,
  },
  {
    method: 'DELETE',
    path: '/customers/{customerId}',
    handler: CustomerController.deleteCustomer,
  },
];

export default customerRoutes;
