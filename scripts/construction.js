function Apolo11(parameter) {
    this.parameter = parameter;
    this.TakeOff = function () {
        console.log("🔥")
    }
}
const Falcon21 = new Apolo11("Takeoff Completed - Falcon21")
const Falcon213 = new Apolo11("Takeoff Completed - Falcon213")
const Falcon214 = new Apolo11("Takeoff Completed - Falcon214")
const Falcon215 = new Apolo11("Takeoff Completed - Falcon215")

const today = [];
today.push(Falcon21, Falcon213, Falcon214, Falcon215)

today.forEach(element => {
    console.log(element.parameter);
});

today.splice(0, today.length);
if (today.length === 0) {
    console.log("Delete Correctly");
    console.log("The Information in the array today is: " , today.length)
}


// list do Task Simple Example

function Task(name, description, status) {
    this.nameTask = name;
    this.descriptionTask = description;
    this.statusTask = status;
}

const Task_One = new Task("Read" , "Read about Marco Antonio Solis", true );
const Task_Two = new Task("Art" , "Kill i Andres Gonzales Pined", false );

let taskList = [];
taskList.push(Task_One, Task_Two);

function printTaskList() {
    taskList.forEach(Tasks => {
        console.log(`Name: ${Tasks.nameTask} Description: ${Tasks.descriptionTask} Status: ${Tasks.statusTask ? 'Completed' : 'No Completed'}`);
    });
}

function completeTask(TaskCompleted) {
   taskList.forEach(task => {
       if (task.nameTask === TaskCompleted) {
            console.log(`${TaskCompleted} completed.`);
            task.statusTask = true;
       } else {
        console.log("Task no longer completed")
        task.statusTask = false;

       }
   });
}

// // Print the task list
printTaskList();

// // To Complete the task list
completeTask("Read");

// // print the list Task Completely
printTaskList();


//Contact Manager
function Contact(name, phoneNumber, email) {
    this.NameUser = name;
    this.NumberPhoneUser = phoneNumber;
    this.EmailUser = email;
}

const Contact_One = new Contact("Andres", "10.423.456", "Dick@gmail.com");
const Contact_Two = new Contact("Sebastian", "15.68.684", "Pussy@gmail.com");

let contactList = [];
contactList.push(Contact_One, Contact_Two);

function printContactList() {
    contactList.forEach(Contact => {
        console.log(`Name: ${Contact.NameUser}, Number: ${Contact.NumberPhoneUser}, Email: ${Contact.EmailUser}`);
    });
}

function addContact(NewName, NewPhoneNumber, NewEmail) {
    const NewContact = new Contact(NewName, NewPhoneNumber, NewEmail);
    contactList.push(NewContact);
    console.log("------New Contact recent--------");
    printContactList();
}
try {
    function findContact(parameterUser) {
        let state = false;
        contactList.forEach(UserVerification => {
            if (UserVerification.NameUser === parameterUser) {
                state = true;
                console.log("User Enter or True")
                console.log(`User: ${UserVerification.NameUser} , Number: ${UserVerification.NumberPhoneUser} , Email: ${UserVerification.EmailUser}`)
            }
    
            if (!state) {
                console.log("False");
            }
    
        });
    }
} catch (error) {
    console.log("Error en findContact " , error)
}

// Add contact to contact list
addContact("Giber", "5456454565", "Sebas@gmail.com");

//User registration verification
findContact("Giber")