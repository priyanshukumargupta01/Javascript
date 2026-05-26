
const user = {
  name: "Priyanshu",
  skills: ["HTML", "CSS", "JS"]
}; 
const {
  name,
  skills: [firstSkill]
} = user; 
console.log(name);
console.log(firstSkill);