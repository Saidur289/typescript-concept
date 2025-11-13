const students = [
  { id: 1, name: "Saif" },
  { id: 2, name: "Taim" },
  { id: 3, name: "Naim" },
  { id: 4, name: "Rafi" },
  { id: 5, name: "Amin" },
];

const snacks = [
  { id: 201, studentId: 1, snackName: "Chips" },
  { id: 202, studentId: 2, snackName: "Burger" },
  { id: 203, studentId: 3, snackName: "Sandwich" },
  { id: 204, studentId: 1, snackName: "Juice" },
  { id: 205, studentId: 5, snackName: "Cookies" },
];
const snackByUserId = snacks.reduce((table, post) => {
    const {studentId} = post;
    console.log(studentId ,post, "hello........................");
    if(!table[studentId]){
        table[studentId] = []
    }

    table[studentId].push(post)
    console.log(table, "hi...........................");
    return table
},{})
const userWithPost = students.map((user) => {
    return {
        ...user,
        bracket: snackByUserId[user.id] || []
    }
})
console.log(JSON.stringify(userWithPost));