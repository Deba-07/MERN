const promiseOne = new Promise((resolve, reject) => {
  // db calls, network calls, cryptography
  setTimeout(function () {
    console.log("Asynchronus task completed.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed.");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("task 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Deba", email: "deba@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    if (!error) {
      resolve({ username: "Debasis", password: "213245wtgs" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("promise is either resolved or rejected."));

const promiseFive = new Promise((resolve, reject) => {
  let error = true;
  setTimeout(() => {
    if (!error) {
      resolve({ username: "JS", password: "213245wtgs" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Err:", error);
  }
}
getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
