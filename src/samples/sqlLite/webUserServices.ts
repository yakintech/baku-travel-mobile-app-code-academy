import { SQLiteDatabase } from "react-native-sqlite-storage";
import { WebUser } from "./WebUser";
import { createTable, getDBConnection } from "./dbConfiguration";


export const saveWebUser = async ( webUser: WebUser) => {

    let db = await  getDBConnection();
    
    const insertQuery = `INSERT OR REPLACE INTO WebUser(name) values('${webUser.name}')`

    await db.executeSql(insertQuery);
}




export const getAllWebUsers = async () => {

    let db = await  getDBConnection();

    let webUsers: WebUser[] = [];

    const query = 'Select id, name from WebUser';

    const result = await db.executeSql(query);

    for (let i = 0; i < result[0].rows.length; i++) {

        let webUser: WebUser = {
            id: result[0].rows.item(i).id,
            name: result[0].rows.item(i).name
        }

        webUsers.push(webUser);
    }

    return webUsers;


}


export const deleteWebUserById = async (id: number) => {

    let db = await  getDBConnection();

    const query = `delete from WebUser where Id = ${id}`

    const result = await db.executeSql(query);
}



