import { Request, ResponseToolkit } from '@hapi/hapi';
import { getRepository } from 'typeorm';
import { HistoryNote } from '../db/entities/HistoryNote';

class HistoryController {
    static async createHistory(request: Request, h: ResponseToolkit) {
      try {
        const { action } = request.payload as {
          action: string;
          Idnoted: number;
        };
  
        const historyRepository = getRepository(HistoryNote);
  
        const newHistory = historyRepository.create({
          action,
          // createdAt: new Date(),
        });
  
        const savedHistory = await historyRepository.save(newHistory);
  
        return h.response(savedHistory).code(201);
      } catch (error) {
        console.error('Error creating history:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getAllHistory(request: Request, h: ResponseToolkit) {
      try {
        const historyRepository = getRepository(HistoryNote);
        const allHistory = await historyRepository.find();
        return h.response(allHistory);
      } catch (error) {
        console.error('Error getting all history:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getHistoryById(request: Request, h: ResponseToolkit) {
        try {
          const historyRepository = getRepository(HistoryNote);
          const historyId = request.params.historyId;
          const history = await historyRepository.findOne({ where: { idHistoryNote: historyId } });
    
          if (!history) {
            return h.response('History not found').code(404);
          }
    
          return h.response(history);
        } catch (error) {
          console.error('Error getting history by ID:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
    
    static async deleteHistory(request: Request, h: ResponseToolkit) {
        try {
          const historyRepository = getRepository(HistoryNote);
          const historyId = request.params.historyId;
          const existingHistory = await historyRepository.findOne({ where: { idHistoryNote: historyId } });
    
          if (!existingHistory) {
            return h.response('History not found').code(404);
          }
    
          await historyRepository.remove(existingHistory);
    
          return h.response('history deleted successfully');
        } catch (error) {
          console.error('Error deleting history:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
  
  }
  
  export default HistoryController;