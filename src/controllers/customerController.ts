import { Request, ResponseToolkit } from '@hapi/hapi';
import { getRepository } from 'typeorm';
import { Customer } from '../db/entities/Customer';

class CustomerController {
    static async createCustomer(request: Request, h: ResponseToolkit) {
      try {
        const { username, password } = request.payload as {
          username: string;
          password: string;
        };
  
        const customerRepository = getRepository(Customer);
  
        const newCustomer = customerRepository.create({
          username,
          password,
          createdAt: new Date(),
        });
  
        const savedCustomer = await customerRepository.save(newCustomer);
  
        return h.response(savedCustomer).code(201);
      } catch (error) {
        console.error('Error creating customer:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getAllCustomer(request: Request, h: ResponseToolkit) {
      try {
        const customerRepository = getRepository(Customer);
        const allCustomers = await customerRepository.find();
        return h.response(allCustomers);
      } catch (error) {
        console.error('Error getting all customers:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getCustomerById(request: Request, h: ResponseToolkit) {
        try {
          const customerRepository = getRepository(Customer);
          const customerId = request.params.customerId;
          const customer = await customerRepository.findOne({ where: { idCustomer: customerId } });
    
          if (!customer) {
            return h.response('Customer not found').code(404);
          }
    
          return h.response(customer);
        } catch (error) {
          console.error('Error getting customer by ID:', error);
          return h.response('Internal Server Error').code(500);
        }
    }

    static async updateCustomer(request: Request, h: ResponseToolkit) {
        try {
          const customerRepository = getRepository(Customer);
          const customerId = request.params.customerId;
          const existingCustomer = await customerRepository.findOne({ where: { idCustomer: customerId } });
    
          if (!existingCustomer) {
            return h.response('Customer not found').code(404);
          }
    
          const { username, password} = request.payload as {
            username: string;
            password: string;
          };
    
          existingCustomer.username = username;
          existingCustomer.password = password;
    
          const updatedCustomer = await customerRepository.save(existingCustomer);
    
          return h.response(updatedCustomer);
        } catch (error) {
          console.error('Error updating customer:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
    
    static async deleteCustomer(request: Request, h: ResponseToolkit) {
        try {
          const customerRepository = getRepository(Customer);
          const customerId = request.params.customerId;
          const existingCustomer = await customerRepository.findOne({ where: { idCustomer: customerId } });
    
          if (!existingCustomer) {
            return h.response('Customer not found').code(404);
          }
    
          await customerRepository.remove(existingCustomer);
    
          return h.response('Customer deleted successfully');
        } catch (error) {
          console.error('Error deleting customer:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
  
  }
  
  export default CustomerController;