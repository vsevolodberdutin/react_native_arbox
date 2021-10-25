import * as SQLite from 'expo-sqlite'
import {
    Platform,
  } from "react-native";

// function openDatabase() {
//     if (Platform.OS === "web") {
//       return {
//         transaction: () => {
//           return {
//             executeSql: () => {},
//           };
//         },
//       };
//     }
  
//     const db = SQLite.openDatabase("db.db");
//     return db;
//   }
//   const db = openDatabase();
const db = SQLite.openDatabase('users.db')


export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, name TEXT , level TEXT, birthday TEXT, clubName TEXT, workingHours TEXT, address TEXT, phone TEXT, website TEXT, eMail TEXT, memTitle TEXT, memInfo TEXT, formTitle TEXT, formInfo TEXT)',
            // 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL)',
            [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static getUsers() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        )
      })
    })
  }
  
  static createUser({ name, level, clubName, workingHours, address, phone, website, eMail, memTitle, memInfo, formTitle, formInfo, birthday }) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO users (name, level, clubName, workingHours, address, phone, website, eMail, memTitle, memInfo, formTitle, formInfo, birthday) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?)`,
          [ name, level, clubName, workingHours, address, phone, website, eMail, memTitle, memInfo, formTitle, formInfo, birthday ],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

}


