import 'reflect-metadata'
import { Connection, createConnection } from 'typeorm'
import { Note } from './entities/Note';
import { HistoryNote } from './entities/HistoryNote';
import { CategoryNote } from './entities/CategoryNote';
import { Customer } from './entities/Customer';

export const initDb = async (): Promise<Connection> => {
    try {
      const connection = await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'note_easy',
        entities: [Note, HistoryNote, CategoryNote, Customer],
        synchronize: false, // Set to false in production, this option creates database tables on every app launch
      });
  
      console.log('Connected to the database');
      return connection;
    } 
    catch (error) {
      console.error('Error connecting to the database:');
      throw error;
    }
  };