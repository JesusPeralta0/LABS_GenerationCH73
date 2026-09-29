// Task 4: delUser(number)
export async function delUser(id) {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    });
}

