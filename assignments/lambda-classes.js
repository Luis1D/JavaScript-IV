// CODE here for your Lambda Classes

// ********** PERSON CLASS ********** //

class Person {
    constructor(personValues) {
        this.name = personValues.name;
        this.age = personValues.age;
        this.location = personValues.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// ********** INSTRUCTOR CLASS ********** //

class Instructor extends Person {
    constructor(instructorValues) {
        super(instructorValues);
        this.specialty = instructorValues.specialty;
        this.favLanguage = instructorValues.favLanguage;
        this.catchPhrase = instructorValues.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    gradeUpdate(student) {
        student.grade = Math.floor((Math.random() * 100) + 1);
        console.log(`${this.name} gave ${student.name} a ${student.grade}%`);
    }
}

// ********** STUDENT CLASS ********** //

class Student extends Person {
    constructor(studentValues) {
        super(studentValues);
        this.previousBackground = studentValues.previousBackground;
        this.className = studentValues.className;
        this.favSubjects = studentValues.favSubjects;
        this.grade = studentValues.grade;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if(this.grade > 70) {
            console.log("Congrats! You're graduating!");
        } else {
            console.log("Sorry, You're not graduating..");
        }
    }
}

// ********** PROJECT CLASS ********** //

class ProjectManager extends Instructor {
    constructor(pmValues) {
        super(pmValues);
        this.gradClassName = pmValues.gradClassName;
        this.favInstructor = pmValues.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standup time!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//INSTRUCTORS
const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
  });
const bill = new Instructor({
    name: 'Bill',
    location: 'New York',
    age: 31,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})
const larua = new Instructor({
    name: 'Larua',
    location: 'Florida',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

//STUDENTS
const luis = new Student({
    name: 'Luis',
    location: 'Sacramento',
    age: 24,
    previousBackground: 'Photographer',
    className: 'WEB-21',
    favSubjects: ['Web Development', 'Music', 'Photography'],
    grade: 50
})
const john = new Student({
    name: 'John',
    location: 'Arizona',
    age: 25,
    previousBackground: 'Carwash Attendant',
    className: 'WEB-21',
    favSubjects: ['Web Development', 'Literature', 'Art'],
    grade: 20
})
const maria = new Student({
    name: 'Maria',
    location: 'Nevada',
    age: 21,
    previousBackground: 'Waiter',
    className: 'WEB-21',
    favSubjects: ['Web Development', 'Science', 'Culinary'],
    grade: 80
})

//PM's
const darien = new ProjectManager({
    name: 'Darien',
    location: 'Chicago',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'WEB-21',
    favInstructor: 'Dan'
})
const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
  });

const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});


console.log(christian.speak());
console.log(luis.sprintChallenge('JavaScript'));
console.log(dan.grade(maria,'OOP'));
console.log(darien.debugsCode(john,'CSS'));
console.log(maria.listsSubjects());
console.log(pat.gradeUpdate(luis));
console.log(luis.graduate());
