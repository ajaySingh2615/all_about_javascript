const promise1 = new Promise((resolve, reject) => {
  // do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promise1.then(() => console.log("Promise consumed"));

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "mike", email: "mike@gmail.com" });
  }, 1000);
});

promise3.then((user) => {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "mike", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally, the promise is either resolved or rejected");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "abc" });
    } else {
      reject("Error: JS went worng");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// const getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// };

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
