const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
 // 1
function getPair(students) {

     let girls = [];
     let boys = [];
     let pair = []
     for (let i = 0; i < students.length; i++) {
         if (students[i].at(-1) === "а") {
             girls.push(students[i])
         } else {
             boys.push(students[i])
         }
     }
     for (let i = 0; i < boys.length; i++) {
         pair.push([boys[i], girls[i]])
     }
     return pair;
 }

 const pairs = getPair(students)
console.log(pairs)
// 2
function giveProject(pairs, themes) {
    let project = [];
    for(let i = 0; i < pairs.length; i++) {
        project.push([pairs[i].join(' i '), themes[i]])
    }
    return project
}
const studentsProject = giveProject(pairs, themes);
console.log(studentsProject)

// 3
function getMarksForStudents(students, marks) {
    let mark = [];
    for(let i = 0; i < students.length; i++ ) {
        mark.push([students[i], marks[i]])
    }
    return mark
}
const marksStudents = getMarksForStudents(students, marks);
console.log(marksStudents)
// 4
function getRandomMarks(studentsProject, marks) {
    let randomMark = []
    for(let i = 0; i < pairs.length; i++) {
        randomMark.push(studentsProject[i].concat(marks[Math.floor(Math.random() * marks.length)]))
    }
    return randomMark;
}
const randomMarkStudents = getRandomMarks(studentsProject, marks);
console.log(randomMarkStudents)

console.log(students);
console.log(themes);
console.log(marks)