const myObj = {
  js: "JavaScript",
  py: "Python",
  ts: "TypeScript",
  cpp: "C++",
  c: "C",
  java: "Java",
};

for (const key in myObj) {
  // console.log(key)
  console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["JavaScript", "Java", "C++", "Python", "Ruby"];
for (const key in programming) {
  // console.log(key)
  console.log(programming[key]);
}

/* 
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("NZ", "NEWZELAND");

for (const key in map) {
  console.log(key);
}
*/