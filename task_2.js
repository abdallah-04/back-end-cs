let students = [];
let sucstudents = []; 
let filstudents = [];

function createstudent(name, age, mark) 
{
    students.push({ name: name, age: age, mark: mark });
}

createstudent("Abdallah", 20, 99);
createstudent("Khattab 3m aljame3", 20, 100);
createstudent("Abdallah 3mk :)", 20, 98);
createstudent("Eren", 89, 30);
createstudent("Ice Bear", 32, 30);

students.forEach(stu => {
    if (stu.mark >= 50) 
    {
        sucstudents.push(stu); 
    }
    else 
    {
        filstudents.push(stu); 
    }
});

console.log("Success Students:", sucstudents);
console.log("Failed Students:", filstudents);

