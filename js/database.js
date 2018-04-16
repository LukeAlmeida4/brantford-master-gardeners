/*
April 6th 2018

databaseJS that opens the database and creates the contact, admin, content and member table to store the data
Includes drop tables

*/


var db;


function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ") -- " + error.message);
}
function successTransaction() {
    console.info("Success: Transaction is successful");
}

function successInsert() {
    console.info("Success: Insert successful.");
    alert("New record added.");
}

var DB = {
    createDatabase: function(){
        var shortName = "bmgdb";
        var version = "1.0";
        var displayName = "DB for used Brantford Master Gardeners website";
        var dbSize = 2 * 1024 * 1024;


        console.info("Creating database ...");
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },
    createTables: function (){

        function successCreate() {
            console.info("Success: Table created successfully");
        }

        function txFunction(tx) {
            var options = [];
            var sql;
            
            //creating the contact table
            console.info("Creating table: contact ...");
            sql = "CREATE TABLE IF NOT EXISTS contact(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstName VARCHAR(20) NOT NULL," +
                "lastName VARCHAR(20) NOT NULL," +
                "emailAddress VARCHAR(20) NOT NULL," +
                "subject VARCHAR(20) NOT NULL," +
                "message VARCHAR(150) NOT NULL);";
            tx.executeSql(sql,options,successCreate,errorHandler);
            
            //creating the content table
            console.info("Creating table: content ...");
            sql = "CREATE TABLE IF NOT EXISTS admin(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fileName VARCHAR(40) NOT NULL," +
                "filePath VARCHAR(255) NOT NULL);";
            tx.executeSql(sql,options,successCreate,errorHandler);
            
            //creating the member table
            console.info("Creating table: member ...");
            sql = "CREATE TABLE IF NOT EXISTS member(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstName VARCHAR(20) NOT NULL," +
                "lastName VARCHAR(20) NOT NULL," +
                "emailAddress VARCHAR(100) NOT NULL," +
                "password VARCHAR(150) NOT NULL);";
            tx.executeSql(sql,options,successCreate,errorHandler);
            
            //creating the admin table
            console.info("Creating table: admin ...");
            sql = "CREATE TABLE IF NOT EXISTS admin(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstName VARCHAR(20) NOT NULL," +
                "lastName VARCHAR(20) NOT NULL," +
                "emailAddress VARCHAR(20) NOT NULL," +
                "password VARCHAR(150) NOT NULL);";
            tx.executeSql(sql,options,successCreate,errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function(){

        function successDrop() {
            console.info("Success: Dropping table successful");
        }
        function txFunction(tx) {
            var options = [];
            var sql;
            
            console.info("Dropping table: contact");
            sql = "DROP TABLE IF EXISTS contact;";
            tx.executeSql(sql,options, successDrop, errorHandler);
            
            console.info("Dropping table: member");
            sql = "DROP TABLE IF EXISTS member;";
            tx.executeSql(sql,options, successDrop, errorHandler);
            
            console.info("Dropping table: admin");
            sql = "DROP TABLE IF EXISTS admin;";
            tx.executeSql(sql,options, successDrop, errorHandler);
            
            console.info("Dropping table: content");
            sql = "DROP TABLE IF EXISTS content;";
            tx.executeSql(sql,options, successDrop, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};