
import mysql from 'mysql';

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Airtable-maps@11@23',
  database: 'phenology'
});

// Example query function to fetch data from the database
export function fetchDataFromDatabase(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Pollen', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
