// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    let maxId = 0;

    for (let user of users) {
        if (user.id > maxId) {
            maxId = user.id;
        }
    }

    const newUser = {
        id: maxId + 1,
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
}




