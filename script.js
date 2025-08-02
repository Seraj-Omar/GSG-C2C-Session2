/* 
===========================================
📝 JavaScript Homework: Objects Practice
===========================================
Instructions:
- Read each task carefully.
- Write your answers directly below each step.
- Use only: variables, objects, conditions, loops, operators
- Do NOT use functions or arrays or unexplained feature !.

-------------------------------------------------
Task 1: 🧠 Profile Cleanup
-------------------------------------------------
You are given a user profile object. Your job is to clean it up and reformat it.
*/

const user = {
    name: "Amina",
    age: 22,
    email: "amina@example.com",
    password: "123456",
    isAdmin: false,
    extra1: "remove this",
    extra2: "remove this too"
};

// 1. Delete the properties: password, extra1, and extra2
delete user.password;
delete user.extra1;
delete user.extra2;

// 2. Check if the property "email" exists
console.log("email" in user);

// 3. Display all top-level keys and their values in the object
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// 4. Create a new object and copy all the properties from "user" to it manually (with what we explained ONLY!)
const copiedUser = {};
for (const key in user) {
    copiedUser[key] = user[key];
}

// 5. Change the copied object’s "name" to "Omar" and its "email" to "omar@example.com"
copiedUser.name = "Omar";
copiedUser.email = "omar@example.com";

// 6. Log both "user" and the copied object to confirm that editing the copy didn’t affect the original
console.log(user);
console.log(copiedUser);

//-------------------------------------------------
/*
Expected Output Example:
true
name: Amina
age: 22
...
{ name: 'Amina', ... }
{ name: 'Omar', ... }
*/

/* 
-------------------------------------------------
Task 2: 🔍 Permissions Checker
-------------------------------------------------
You are given a user object with permission data. 
Loop through the permissions and print access messages.
*/

const user2 = {
    name: "Layla",
    role: "editor",
    permissions: {
        read: true,
        write: true,
        delete: false
    }
};

// 1. For each permission, print:
//    - "Layla can READ" if it's true
//    - "Layla cannot DELETE" if it's false
for (const key in user2.permissions) {
    console.log(`${user2.name} can${user2.permissions[key] ? '' : 'not'} ${key.toUpperCase()}`);
}

// 2. Add a new property called "lastLogin" with value "2025-07-04"
user2.lastLogin = "2025-07-04";

// 3. Check if user has a "password" property
//    If not, add it and set to "default"
user2.password = user2.password || "default";

// 4. Delete the "role" property
delete user2.role;

// 5. Log the final object
console.log(user2);

//-------------------------------------------------
/*
Expected Output Example:
Layla can READ
Layla can WRITE
Layla cannot DELETE
{
  name: 'Layla',
  permissions: { ... },
  lastLogin: '2025-07-02',
  password: 'default'
}
*/

/* 
  -------------------------------------------------
  Task 3: 🧬 Prototypal Inheritance
  -------------------------------------------------
  In this task, you will explore how one object can (be linked to) another.
  
1. Create an object called "animal" with the following properties:
    - species: "dog"
    - canEat: true
*/
const animal = {
    species: "dog",
    canEat: true
};

//2. Create a new object called "pet" that is linked to "animal"
const pet = Object.create(animal);

//3. Add a property to "pet":
//  - name: "Rocky"
pet.name = "Rocky";

//4. Log these values from "pet":
//  - pet.name
//  - pet.species
//  - pet.canEat
console.log(pet.name);
console.log(pet.species);
console.log(pet.canEat);

//5. Add a new property directly to "pet" called species and set it to "puppy"
pet.species = "puppy";

//6. Log pet.species again — what is the output now? Why?
console.log(pet.species); // "puppy" , we added it directly to pet,it overrides the inherited one

//7. Delete pet.species, then log it again — what do you see and why?
delete pet.species;
console.log(pet.species); // "dog", we deleted the property so it will look for it in the prototype (animal)

//8. Delete animal.species, then log pet.species again — what happens now?
delete animal.species;
console.log(pet.species); // undefined, it didnt find it in pet nor in animal, it returns undefined

//9. Finally, log the prototype of "pet" using the built-in method that returns the prototype of an object.
console.log(Object.getPrototypeOf(pet));

/*
  -------------------------------------------------
  Expected Output (step-by-step):
  Rocky
  dog
  true
  puppy
  dog
  undefined
  [object with canEat: true]
*/