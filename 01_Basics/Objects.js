// Singleton is declaration of an object using Constructor;

//Onject using literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "sai",
    // mySym: "myKey1",
    [mySym]: "myKey2",
    age: 23,
    location: "hyderabad",
    mail: "user@gmail.com",
    isLoggedIn: true
}

// console.log(Jsuser.mail); //using direct access

Jsuser.mail = "artist123@gmail.com";
// console.log(Jsuser["mail"]); // using brackets "string"
console.log(typeof Jsuser["email"]);
console.log(Jsuser[mySym]);
// console.log(typeof Jsuser.mySym);
// console.log(typeof Jsuser[mySym]);
console.log(Jsuser);
Object.freeze(Jsuser);