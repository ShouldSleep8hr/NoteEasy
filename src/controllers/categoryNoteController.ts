import { Request, ResponseToolkit } from '@hapi/hapi';
import { getRepository } from 'typeorm';
import { CategoryNote } from '../db/entities/CategoryNote';

class CategoryNoteController {
    static async createCategoryNote(request: Request, h: ResponseToolkit) {
      try {
        const { name } = request.payload as {
          name: string;
        };
  
        const categoryNoteRepository = getRepository(CategoryNote);
  
        const newCategoryNote = categoryNoteRepository.create({
          name,
          createdAt: new Date(),
        });
  
        const savedCategoryNote = await categoryNoteRepository.save(newCategoryNote);
  
        return h.response(savedCategoryNote).code(201);
      } catch (error) {
        console.error('Error creating categoryNote:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getAllCategoryNote(request: Request, h: ResponseToolkit) {
      try {
        const categoryNoteRepository = getRepository(CategoryNote);
        const allCategoryNotes = await categoryNoteRepository.find();
        return h.response(allCategoryNotes);
      } catch (error) {
        console.error('Error getting all categoryNotes:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getCategoryNoteById(request: Request, h: ResponseToolkit) {
        try {
          const categoryNoteRepository = getRepository(CategoryNote);
          const categoryId = request.params.categoryId;
          const categoryNote = await categoryNoteRepository.findOne({ where: { idcategoryNote: categoryId } });
    
          if (!categoryNote) {
            return h.response('CategoryNote not found').code(404);
          }
    
          return h.response(categoryNote);
        } catch (error) {
          console.error('Error getting categoryNote by ID:', error);
          return h.response('Internal Server Error').code(500);
        }
    }

    static async updateCategoryNote(request: Request, h: ResponseToolkit) {
        try {
          const categoryNoteRepository = getRepository(CategoryNote);
          const categoryId = request.params.categoryId;
          const existingCategoryNote = await categoryNoteRepository.findOne({ where: { idcategoryNote: categoryId } });
    
          if (!existingCategoryNote) {
            return h.response('CategoryNote not found').code(404);
          }
    
          const { name } = request.payload as {
            name: string;
          };
    
          existingCategoryNote.name = name;
    
          const updatedCategoryNote = await categoryNoteRepository.save(existingCategoryNote);
    
          return h.response(updatedCategoryNote);
        } catch (error) {
          console.error('Error updating categoryNote:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
    
    static async deleteCategoryNote(request: Request, h: ResponseToolkit) {
        try {
          const categoryNoteRepository = getRepository(CategoryNote);
          const categoryId = request.params.categoryId;
          const existingCategoryNote = await categoryNoteRepository.findOne({ where: { idcategoryNote: categoryId } });
    
          if (!existingCategoryNote) {
            return h.response('CategoryNote not found').code(404);
          }
    
          await categoryNoteRepository.remove(existingCategoryNote);
    
          return h.response('CategoryNote deleted successfully');
        } catch (error) {
          console.error('Error deleting categoryNote:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
  
  }
  
  export default CategoryNoteController;