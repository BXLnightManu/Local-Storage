if(localStorage.hasOwnProperty("user")) {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    if(user!==null) {
        console.log(`Name of the user is ${user.name}`);
    }
}