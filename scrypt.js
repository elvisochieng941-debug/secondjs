const students = [
  {
    name: 'Elvis',
    email: 'elvisemail@gmail.com',
    age: 20,
    course: 'Information Technology',
    mark: 85,
    isActive: true,
    /* getGrade()
        {
            return this.mark;
        },
        toggleStatus()
        {
         return this.isActive;
        }*/
  },
  {
    name: 'Ken',
    email: 'kenemail@hotmail.com',
    age: 27,
    course: 'Medical Science',
    mark: 69,
    isActive: false,
  },
  {
    name: 'Jane',
    email: 'janeemail@gmail.com',
    age: 25,
    course: 'Education Science',
    mark: 89,
    isActive: true,
  },
  {
    name: 'John',
    email: 'johnemail@outlook.com',
    age: 24,
    course: 'Education Arts',
    mark: 46,
    isActive: false,
  },
  {
    name: 'Abraham',
    email: 'abrahamemail@gmail.com',
    age: 21,
    course: 'Information Technology',
    mark: 31,
    isActive: true,
  },
];
function getGrade(mark) {
  if (mark >= 80) {
    return 'A';
  } else if (mark >= 70) {
    return 'B';
  } else if (mark >= 60) {
    return 'C';
  } else if (mark >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}
const studentoutputElement = document.getElementById('cardoneStudents');
const averageMark = document.getElementById('cardoneAverage');
const highestMark = document.getElementById('cardoneHighest');
const activeStudents = document.getElementById('cardoneActive');
function showStatistics() {
  const studentsNumber = students.length;
  studentoutputElement.textContent = studentsNumber;
  const totalMarks = students.reduce((acc, student) => {
    return acc + student.mark;
  }, 0);

  const average = totalMarks / studentsNumber;
  averageMark.textContent = average.toFixed(4);
  if (Number.isNaN(average)) {
    averageMark.textContent = 0;
  }
  const highest = students.reduce((acc, student) => {
    return student.mark > acc ? student.mark : acc;
  }, 0);
  highestMark.textContent = highest;
  const active = students.filter((student) => {
    return student.isActive;
  });
  activeStudents.textContent = active.length;
}
const studentList = document.getElementById('sectionthreeDiv');
function renderStudents() {
  studentList.textContent = '';
  students.forEach((student, index) => {
    const article = document.createElement('article');
    article.className = 'created-article';
    const name = document.createElement('p');
    name.className = 'created-paragraph';
    name.textContent = `Name: ${student.name}`;
    const email = document.createElement('p');
    email.className = 'created-email';
    email.textContent = `Email: ${student.email}`;
    const age = document.createElement('p');
    age.className = 'created-age';
    age.textContent = `Age: ${student.age}`;
    const course = document.createElement('p');
    course.className = 'created-course';
    course.textContent = `Course: ${student.course}`;
    const mark = document.createElement('p');
    mark.className = 'created-mark';
    mark.textContent = `Mark: ${student.mark}`;
    const grade = document.createElement('p');
    grade.className = 'created-grade';
    grade.textContent = `Grade: ${getGrade(student.mark)}`;
    const status = document.createElement('p');
    status.className = 'created-status';
    status.textContent = `Status: ${student.isActive ? 'Active' : 'Inactive'}`;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      students.splice(index, 1);
      alert(`${student.name} deleted successfully`);
      renderStudents();
      showStatistics();
    });

    const toggleButton = document.createElement('button');
    toggleButton.className = 'button';
    toggleButton.textContent = 'Change Status';
    toggleButton.addEventListener('click', () => {
      student.isActive = !student.isActive;
      renderStudents();
      showStatistics();
    });

    const viewdetailsButton = document.createElement('button');
    viewdetailsButton.className = 'button';
    viewdetailsButton.textContent = 'Hide Details';
    viewdetailsButton.addEventListener('click', () => {
      // alert(`Name: ${student.name}\nEmail: ${student.email}\nCourse: ${student.course}\nMark: ${student.mark}\nGrade: ${getGrade(student.mark)}\nStatus: ${student.isActive ? "Active" : "Inactive"}`);
      email.classList.toggle('hidden');
      age.classList.toggle('hidden');
      course.classList.toggle('hidden');
      mark.classList.toggle('hidden');
      grade.classList.toggle('hidden');
      status.classList.toggle('hidden');
      if (email.classList.contains('hidden')) {
        viewdetailsButton.textContent = 'View Details';
      } else {
        viewdetailsButton.textContent = 'Hide Details';
      }
    });

    article.appendChild(name);
    article.appendChild(age);
    article.appendChild(course);
    article.appendChild(mark);
    article.appendChild(grade);
    article.appendChild(status);
    article.appendChild(email);
    article.appendChild(deleteButton);
    article.appendChild(toggleButton);
    article.appendChild(viewdetailsButton);
    studentList.appendChild(article);
  });
}
const formDisplay = document.getElementById('form-display');
const formSubmit = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const courseInput = document.getElementById('course');
const ageInput = document.getElementById('age');
const marksInput = document.getElementById('marks');
formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim().toUpperCase();
  const emailValue = emailInput.value.trim();
  const courseValue = courseInput.value.trim();
  const ageValue = ageInput.value.trim();
  const markValue = marksInput.value.trim();
  if (
    nameValue === '' &&
    emailValue === '' &&
    courseValue === '' &&
    ageValue === '' &&
    markValue === ''
  ) {
    formDisplay.textContent = 'Fill out all the fields';
    return;
  }
  if (nameValue === '') {
    formDisplay.textContent = 'Enter name';
    return;
  }
  if (emailValue === '') {
    formDisplay.textContent = 'Enter email';
    return;
  }
  if (ageValue === '') {
    formDisplay.textContent = 'Enter age';
    return;
  }
  const agetoNumber = Number(ageValue);
  if (Number.isNaN(agetoNumber)) {
    formDisplay.textContent = 'Age must be a number';
    return;
  }
  if (agetoNumber < 16 || agetoNumber > 100) {
    formDisplay.textContent = 'Age must be between 16 and 100';
    return;
  }
  if (courseValue === '') {
    formDisplay.textContent = 'Enter course';
    return;
  }
  if (markValue === '') {
    formDisplay.textContent = 'Enter marks';
    return;
  }
  const marktoNumber = Number(markValue);
  if (Number.isNaN(marktoNumber)) {
    formDisplay.textContent = 'Mark must be a number';
    return;
  }
  if (marktoNumber < 0 || marktoNumber > 100) {
    formDisplay.textContent = 'Mark must be between 0 and 100';
    return;
  }
  const newStudent = {
    name: nameValue,
    email: emailValue,
    age: agetoNumber,
    course: courseValue,
    mark: marktoNumber,
    isActive: true,
  };
  students.push(newStudent);
  renderStudents();
  showStatistics();
  nameInput.value = '';
  emailInput.value = '';
  ageInput.value = '';
  courseInput.value = '';
  marksInput.value = '';
  formDisplay.textContent = '';
});
renderStudents();
showStatistics();
const notfoundDisplay = document.getElementById('notfound-display');
const searchDisplay = document.getElementById('searchDisplay');
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function () {
  searchDisplay.textContent = searchInput.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  let count = 0;
  const articles = studentList.querySelectorAll('.created-article');
  articles.forEach((article, index) => {
    const student = students[index];
    const searchName = student.name.trim().toLowerCase();
    if (searchName.includes(searchValue)) {
      article.classList.remove('hidden');
      count++;
      notfoundDisplay.textContent = '';
    } else {
      article.classList.add('hidden');
    }
  });
  if (count === 0 && searchValue !== '') {
    notfoundDisplay.textContent = 'No student found';
  }
});

const aboutButton = document.getElementById('articlethreeA');
const detailsParagraph = document.querySelector('.details-paragraph');
aboutButton.addEventListener('click', function () {
  detailsParagraph.classList.toggle('hidden');
  if (detailsParagraph.classList.contains('hidden')) {
    aboutButton.textContent = 'Show Details';
  } else {
    aboutButton.textContent = 'Hide Details';
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchInput.value = '';
    renderStudents();
    searchDisplay.textContent = '';
    notfoundDisplay.textContent = '';
  }
});
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === 's') {
    event.preventDefault();
    alert('Student data saved!');
  }
});
const loader = document.getElementById('loaderFirst');
const app = document.getElementById('app');

setTimeout(() => {
  loader.classList.add('hidden');
  app.classList.remove('hidden');
  console.log('Dashboard loaded!');
}, 2000);
