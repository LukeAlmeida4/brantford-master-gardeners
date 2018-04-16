/*
April 6th 2018

scriptJS that runs the functions for the used vehicle web application
Includes form validations

*/

//function to validate the contact form
//rules are the internal notation for the form to follow server side, while message is intended for the user client side
function doValidate_frmContact() {
    var form = $("#frmContact");
    //validation goes here
    form.validate({
        rules: {
            txtFirstName: {
                required: true,
                rangelength: [2, 20]
            },
            txtLastName: {
                required: true,
                rangelength: [2, 20]
            },
            txtEmailAddress: {
                required: true,
                email: true,
            },
            selSubject: {
                required: true,
            },
            txtMessage: {
                required: true,
            }
        },
        messages: {
            txtFirstName: {
                required: "First Name is Required",
                rangelength: "First Name must be between 2 and 30 characters long"
            },
            txtLastName: {
                required: "Last Name is required",
                rangelength: "Last Name must be between 2 and 30 characters long"
            },
            txtEmailAddress: {
                required: "Email address is required",
                email: "must be valid email format"
            },
            selSubject: {
                required: "Subject is required"
            },
            txtMessage: {
                required: "Message is required"
            }
        }
    });

    //--------------------
    return form.valid();
}

//function to validate the contact form
//rules are the internal notation for the form to follow server side, while message is intended for the user client side
function doValidate_frmMemberLogin() {
    var form = $("#frmMemberLogin");
    //validation goes here
    form.validate({
        rules: {
            txtMemberEmailAddress: {
                required: true,
                email: true,
            },
            txtMemberPassword: {
                required: true,
                rangelength: [8, 20]
            }
        },
        messages: {
            txtMemberEmailAddress: {
                required: "Email address is required",
                email: "must be valid email format"
            },
            txtMemberPassword: {
                required: "Password is required",
                rangelength: "Password must be atleast 8 characters long"
            }
        }
    });

    //--------------------
    return form.valid();
}

//function to validate the contact form
//rules are the internal notation for the form to follow server side, while message is intended for the user client side
function doValidate_frmAdminLogin() {
    var form = $("#frmAdminLogin");
    //validation goes here
    form.validate({
        rules: {
            txtAdminEmailAddress: {
                required: true,
                email: true,
            },
            txtAdminPassword: {
                required: true,
                rangelength: [8, 20]
            }
        },
        messages: {
            txtAdminEmailAddress: {
                required: "Email address is required",
                email: "must be valid email format"
            },
            txtAdminPassword: {
                required: "Password is required",
                rangelength: "Password must be atleast 8 characters long"
            }
        }
    });

    //--------------------
    return form.valid();
}

//function to add contact emails to the table vehicle
function addContactForm() {
    if (doValidate_frmContact()) {
        console.info("Information entered is valid, ready to insert");

        //do stuff for inserting to table
        var firstName = $("#txtFirstName").val();
        var lastName = $("#txtLastName").val();
        var emailAddress = $("#txtEmailAddress").val();
        var subject = $("#selSubject").val();
        var message = $("#txtMessage").val();

        var options = [firstName, lastName, emailAddress, subject, message];

        Contact.insert(options);
    }
}

//inserting default emails into the admin table
function createDefaultAdminEmail() {

    var firstName = "admin";
    var lastName = "default";
    var emailAddress = "admin@brantfordmastergardeners.com";
    var password = "Capstone123";

    var options = [firstName, lastName, emailAddress, password];

    Admin.insert(options);
}

//inserting default emails into the member table
function createDefaultMemberEmail() {

    var firstName = "member";
    var lastName = "default";
    var emailAddress = "member@brantfordmastergardeners.com";
    var password = "Capstone123";

    var options = [firstName, lastName, emailAddress, password];

    Member.insert(options);
}

//NEEDS TO BE COMPLETED
function memberLogin() {
    if (doValidate_frmMemberLogin()) {
        console.info("Information entered is valid, ready to login");
        var firstName = "member";
        var lastName = "default";
        var memberEmailAddress = $("#txtMemberEmailAddress").val();
        var memberPassword = $("#txtMemberPassword").val();

        var options = [memberEmailAddress, memberPassword, firstName, lastName];

        Member.insert(options);
        window.open("member-login.html");
        //PETER/MILAN USE IF STATEMENTS TO CHECK IF THE VALUES ARE CORRECT, IF SO THEM OPEN THE WINDOW BELOW, IF NOT OUTPUT A MESSAGE THAT LOGIN INFORMATION IS INCORRECT AND TO TRY AGAIN

    }
}

//NEEDS TO BE COMPLETED
function adminLogin() {
    if (doValidate_frmAdminLogin()) {
        console.info("Information entered is valid, ready to login");
        //do stuff for inserting to table
        var firstName = "admin";
        var lastName = "default";
        var adminEmailAddress = $("#txtAdminEmailAddress").val();
        var adminPassword = $("#txtAdminPassword").val();

        var options = [firstName, lastName, adminEmailAddress, adminPassword];

        Admin.insert(options);
        window.open("admin-login.html");

        //PETER/MILAN USE IF STATEMENTS TO CHECK IF THE VALUES ARE CORRECT, IF SO THEM OPEN THE WINDOW BELOW, IF NOT OUTPUT A MESSAGE THAT LOGIN //INFORMATION IS INCORRECT AND TO TRY AGAIN


    }
}

//Function for displaying content to the content output div inside the admin-login.html page
function displayUploadedContent() {

    function successSelectAll(tx, results) {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i]; // results.rows.item(i) also works

            console.info("file name: " + row['fileName'] + " file path: " + row['filePath']);

            htmlCode += "<li data-row-id=" + row['id'] +
                ">" +
                "<h1>File Name: " + row['fileName'] + "</h1>" +
                "<h1>File Path: " + row['filePath'] + "</h1>" +
                "</li><hr>";
        }

        document.getElementById('contentOutput').innerHTML += htmlCode;

    }

    Content.selectAll(successSelectAll);

}

//NEEDS TO BE COMPLETED - COPY THE FUNCTION ABOVE THIS ONE
function displayContactEmails() {
    var adminEmailAddress = $("#txtAdminEmailAddress").val();
    var adminPassword = $("#txtAdminPassword").val();
    var userInfo = adminEmailAddress + " " + adminPassword

    document.getElementById("adminOutput").innerHTML = userInfo;

}

