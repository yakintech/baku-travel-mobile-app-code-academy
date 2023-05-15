import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'webuser-data.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS WebUser(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
    );`;

  await db.executeSql(query);
};


export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table WebUser`;

  await db.executeSql(query);
};

