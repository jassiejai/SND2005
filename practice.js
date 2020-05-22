var users= [
    {firstName : "Brian", lastName: "Lee"},
    {firstName : "Cameron", lastName: "Stephenson"},
    {firstName : "Eric", lastName: "Carr"},
    {firstName : "Trayon", lastName: "Daigle"},
    {firstName : "Jasmine", lastName: "Hart"},
    {firstName : "Jesse", lastName: "Rogers"},
    {firstName : "Christan", lastName: "Gray"},
    {firstName : "John", lastName: "Mckay"},
];

$(document).ready(function(){
        getUsers();
    $(`#addUser`).click(function(){
        addUser();
    });
    
    $(`#updateUser`).click(function(){
        updateUser();
});

class User{
    constructor(firstName = '', lastName = ''){
        this.firstName = firstName;
        this.lastName = lastName;

    }
}

function addUser() {
    //1. capture the form
let firstName = $(`#firstName`).val();
let lastName = $(`#lastName`).val();


    //2. create new user

    let newUser = new User(firstName, lastName)

    //3.push the user object to data source
    users.push(newUser);

    //4.refresh user table
    getUsers();
}


//Read
function getUsers(){
    //1.clear the table
    $(`#Users`).empty();

    //1. loop users
    $.each(users, function(i,user){
        //2. append the data to html
        $('#Users').append(
            `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td><button onclck="getUser(${i});">Get User</button></td>
            </tr>
            `
        );
    });
    

}

function getUser(userId){

    let firstname = users[userid].firstName;
    let lastName = users[userid].lastName;
    
    $(`#firstName`).val(firstName);
    $(`#lastName`).val(lastName);
    $(`#userId`).val(userId)

}

function updateUser() {
    //1. get updated data from html form

    let firstName = $('#firstName').val();
    let lastName = $('lastName').val();
    let userId = $('#userId').val();

    //2.  pass updaed data to user object

    users[userId].firstName = firstName;
    users[userId].lastName = lastName;

    //3. refresh user table
    getUser();
}