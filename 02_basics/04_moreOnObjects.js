// object singleton - using constructors

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "mike";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullname: {
      firstName: "ajay",
      lastName: "singh",
    },
  },
};

// console.log(regularUser.fullName.userFullname.firstName);

const object1 = {
  1: "a",
  2: "b",
};

const object2 = {
  3: "c",
  4: "d",
};
const object6 = {
  6: "f",
  7: "h",
};

const object3 = { ...object1, ...object2, ...object6 };
const object4 = Object.assign({}, object1, object2, object3, object6);
console.log(object3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "g@gmail.com",
  },
  {
    id: 3,
    email: "a@gmail.com",
  },
  {
    id: 4,
    email: "l@gmail.com",
  },
];

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// console.log(course.courseInstructor);

const { courseInstructor: instructor } = course;

console.log(instructor);

// {
//     "name": "mike",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
