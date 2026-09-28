
function FriendsList(names){
    this.names=names;
}

// Type your code below this line!
const names = []

for (let i = 0; i < Number(process.argv[3]); i++) {
    names.push(process.argv[i + 4])
}

const friends = new FriendsList(names)



// Type your code above this line!

console.log(friends.names)