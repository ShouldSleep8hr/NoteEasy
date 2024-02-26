import { Request, ResponseToolkit } from '@hapi/hapi';
import { getRepository } from 'typeorm';
import { Note } from '../db/entities/Note'; // Replace with the actual path to your Note entity
import { HistoryNote } from '../db/entities/HistoryNote';

class NoteController {
    static async createNote(request: Request, h: ResponseToolkit) {
      try {
        const { title, content, idcustomer, idcategory } = request.payload as {
          title: string;
          content: string;
          idcustomer: number;
          idcategory: number | null;
        };
  
        const noteRepository = getRepository(Note);
  
        const newNote = noteRepository.create({
          title,
          content,
          idcustomer,
          idcategory,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
  
        const savedNote = await noteRepository.save(newNote);
  
        return h.response(savedNote).code(201);
      } catch (error) {
        console.error('Error creating note:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getAllNotes(request: Request, h: ResponseToolkit) {
      try {
        const noteRepository = getRepository(Note);
        const allNotes = await noteRepository.find();
        return h.response(allNotes);
      } catch (error) {
        console.error('Error getting all notes:', error);
        return h.response('Internal Server Error').code(500);
      }
    }
  
    static async getNoteById(request: Request, h: ResponseToolkit) {
        try {
          const noteRepository = getRepository(Note);
          const noteId = request.params.noteId;
          const note = await noteRepository.findOne({ where: { idNote: noteId } });
    
          if (!note) {
            return h.response('Note not found').code(404);
          }
    
          return h.response(note);
        } catch (error) {
          console.error('Error getting note by ID:', error);
          return h.response('Internal Server Error').code(500);
        }
    }

    static async updateNote(request: Request, h: ResponseToolkit) {
        try {
          const noteRepository = getRepository(Note);
          const historyRepository = getRepository(HistoryNote);

          const noteId = request.params.noteId;
          const existingNote = await noteRepository.findOne({ where: { idNote: noteId } });
    
          if (!existingNote) {
            return h.response('Note not found').code(404);
          }
    
          const { title, content, idcustomer, idcategory } = request.payload as {
            title: string;
            content: string;
            idcustomer: number;
            idcategory: number | null;
          };

          // Create a history entry with old content
          const historyEntry = historyRepository.create({
            noteId,
            oldTitle: existingNote.title,
            oldContent: existingNote.content,
            updatedAt: new Date(),
          });
          // Save the history entry
          await historyRepository.save(historyEntry);
    
          existingNote.title = title;
          existingNote.content = content;
          existingNote.idcustomer = idcustomer;
          existingNote.idcategory = idcategory;
          existingNote.updatedAt = new Date();
    
          const updatedNote = await noteRepository.save(existingNote);
    
          return h.response(updatedNote);
        } catch (error) {
          console.error('Error updating note:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
    
    static async deleteNote(request: Request, h: ResponseToolkit) {
        try {
          const noteRepository = getRepository(Note);
          const noteId = request.params.noteId;
          const note = await noteRepository.findOne({ where: { idNote: noteId } });
    
          if (!note) {
            return h.response('Note not found').code(404);
          }
    
          await noteRepository.remove(note);
    
          return h.response('Note deleted successfully');
        } catch (error) {
          console.error('Error deleting note:', error);
          return h.response('Internal Server Error').code(500);
        }
    }
  
  }
  
  export default NoteController;