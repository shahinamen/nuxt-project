// server/api/company.js
import { getConnection } from '../utils/db';

export default defineEventHandler(async (event) => {
  const db = await getConnection();
  const [rows] = await db.execute('SELECT * FROM sessions');
  return rows;
});