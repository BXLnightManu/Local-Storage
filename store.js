const user = {
    name : "Doe",
    firstName : "John"
};

const userString = JSON.stringify(user);

localStorage.setItem("user", userString);