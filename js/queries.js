/*
April 6th 2018

queriesJS that calls the sql queries (Insert, SelectAll, Update and Delete)

*/


//queries for the contact table
var Contact = {
    insert: function (options){
        function txFunction(tx) {
            var sql = "INSERT INTO contact(firstName, lastName, emailAddress, subject, message) " +
                "values(?, ?, ?, ?, ?); ";

            function successInsert() {
                console.info("Success: Insert successful.");
                alert("New record added.");
            }

            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll : function(callback){
        var options=[];

        function txFunction(tx) {
            var sql = "SELECT * FROM contact;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){

        function txFunction(tx) {
            var sql = "SELECT * FROM contact WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options){

        function txFunction(tx) {
            var sql = "UPDATE contact " +
                "SET firstName=?, lastName=?, emailAddress=?, subject=?, message=? " +
                "WHERE id=?;";

            function successUpdate() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options){

        function txFunction(tx) {
            var sql = "DELETE FROM contact " +
                "WHERE id=?;";

            function successDelete() {
                console.info("Success: Delete successful");
                alert("Record deleted successfully");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

//queries for the content table
var Content = {
    insert: function (options){
        function txFunction(tx) {
            var sql = "INSERT INTO content(fileName, filePath) " +
                "values(?, ?); ";

            function successInsert() {
                console.info("Success: Insert successful.");
                alert("New record added.");
            }

            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll : function(callback){
        var options=[];

        function txFunction(tx) {
            var sql = "SELECT * FROM content;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){

        function txFunction(tx) {
            var sql = "SELECT * FROM content WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options){

        function txFunction(tx) {
            var sql = "UPDATE content " +
                "SET fileName=?, filePath=? " +
                "WHERE id=?;";

            function successUpdate() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options){

        function txFunction(tx) {
            var sql = "DELETE FROM content " +
                "WHERE id=?;";

            function successDelete() {
                console.info("Success: Delete successful");
                alert("Record deleted successfully");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

//queries for the member table
var Member = {
    insert: function (options){
        function txFunction(tx) {
            var sql = "INSERT INTO member(firstName, lastName, emailAddress, password) " +
                "values(?, ?, ?, ?); ";

            function successInsert() {
                console.info("Success: Insert successful.");
                alert("New record added.");
            }

            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll : function(callback){
        var options=[];

        function txFunction(tx) {
            var sql = "SELECT * FROM member;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){

        function txFunction(tx) {
            var sql = "SELECT * FROM member WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options){

        function txFunction(tx) {
            var sql = "UPDATE member " +
                "SET firstName=?, lastName=?, emailAddress=?, password=? " +
                "WHERE id=?;";

            function successUpdate() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options){

        function txFunction(tx) {
            var sql = "DELETE FROM member " +
                "WHERE id=?;";

            function successDelete() {
                console.info("Success: Delete successful");
                alert("Record deleted successfully");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

//queries for the admin table
var Admin = {
    insert: function (options){
        function txFunction(tx) {
            var sql = "INSERT INTO admin(firstName, lastName, emailAddress, password) " +
                "values(?, ?, ?, ?); ";

            function successInsert() {
                console.info("Success: Insert successful.");
                alert("New record added.");
            }

            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll : function(callback){
        var options=[];

        function txFunction(tx) {
            var sql = "SELECT * FROM admin;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){

        function txFunction(tx) {
            var sql = "SELECT * FROM admin WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options){

        function txFunction(tx) {
            var sql = "UPDATE admin " +
                "SET firstName=?, lastName=?, emailAddress=?, password=? " +
                "WHERE id=?;";

            function successUpdate() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options){

        function txFunction(tx) {
            var sql = "DELETE FROM admin " +
                "WHERE id=?;";

            function successDelete() {
                console.info("Success: Delete successful");
                alert("Record deleted successfully");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};