/*
April 6th 2018

globalJS that connects the front end components to the backend functions. Add vehicle, show vehicle, and update vehicle.
Includes initiation of DB

*/



function memberContentBtn() {
    var memberContainerOne = document.getElementById("membercontainer-one");
    var memberContainerTwo = document.getElementById("membercontainer-two");
    var memberContainerThree = document.getElementById("membercontainer-three");


    var btnContent = document.getElementById("btn-content");
    var btnAccountSettings = document.getElementById("btn-accountsettings");
    var btnContact = document.getElementById("btn-membercontact");


    memberContainerOne.style.display = "block";
    memberContainerTwo.style.display = "none";
    memberContainerThree.style.display = "none";

    btnContent.className += " btn-memberactive";
    btnAccountSettings.className = "btn";
    btnContact.className = "btn";

}

function memberAccountSettingsBtn() {
    var memberContainerOne = document.getElementById("membercontainer-one");
    var memberContainerTwo = document.getElementById("membercontainer-two");
    var memberContainerThree = document.getElementById("membercontainer-three");

    var btnContent = document.getElementById("btn-content");
    var btnAccountSettings = document.getElementById("btn-accountsettings");
    var btnContact = document.getElementById("btn-membercontact");

    memberContainerOne.style.display = "none";
    memberContainerTwo.style.display = "block";
    memberContainerThree.style.display = "none";

    btnContent.className = "btn";
    btnAccountSettings.className += " btn-memberactive";
    btnContact.className = "btn";
}

function memberContactBtn() {
    var memberContainerOne = document.getElementById("membercontainer-one");
    var memberContainerTwo = document.getElementById("membercontainer-two");
    var memberContainerThree = document.getElementById("membercontainer-three");

    var btnContent = document.getElementById("btn-content");
    var btnAccountSettings = document.getElementById("btn-accountsettings");
    var btnContact = document.getElementById("btn-membercontact");

    memberContainerOne.style.display = "none";
    memberContainerTwo.style.display = "none";
    memberContainerThree.style.display = "block";

    btnContent.className = "btn";
    btnAccountSettings.className = "btn";
    btnContact.className += " btn-memberactive";
}

function hamburgerMenu() {
    var leftNav = document.getElementById("leftNav");
    var rightNav = document.getElementById("rightNav");

    if (leftNav.className === "left-nav") {
        rightNav.className += " responsive"
        leftNav.className += " responsive";
    } else {
        leftNav.className = "left-nav";
        rightNav.className = "right-nav";
    }
}

function btnContactSubmit_click() {
    addContactForm();
}

function btnUploadContent_click() {
    addContentForm();
}

function btnMemberLogin_click() {
    memberLogin();
}

function btnAdminLogin_click() {
    adminLogin();
}

function displayContent() {
    document.getElementById('contentOutput').innerHTML = " ";

    displayUploadedContent();
}

function displayContent() {
    document.getElementById('contactOutput').innerHTML = " ";

    displayContactEmails();
}

function createDefaultEmails() {
    createDefaultMemberEmail();
    createDefaultAdminEmail();
}

function init() {
    $("#btnContactSubmit").on("click", btnContactSubmit_click);
    $("#btnMemberLogin").on("click", btnMemberLogin_click);
    $("#btnAdminLogin").on("click", btnAdminLogin_click);

}

function initDB() {
    console.info("Creating Database.");
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables ...");
            DB.createTables();
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB. Can not proceed");
    }

}

$(document).ready(function () {
    initDB();
    init();
});
