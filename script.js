let students = JSON.parse(localStorage.getItem("students")) || [];

function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "admin123"){
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden");
        displayStudents();
    } else {
        alert("Invalid Credentials");
    }
}

function logout(){
    location.reload();
}

function saveStudent(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let editIndex = document.getElementById("editIndex").value;

    if(name === "" || roll === "" || dept === ""){
        alert("Please fill all fields");
        return;
    }

    let student = {
        name:name,
        roll:roll,
        dept:dept
    };

    if(editIndex === ""){
        students.push(student);
    } else {
        students[editIndex] = student;
    }

    localStorage.setItem("students", JSON.stringify(students));

    clearForm();
    displayStudents();
}

function displayStudents(){

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student,index)=>{

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.dept}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
            </td>
            <td>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    document.getElementById("totalStudents").innerText = students.length;
}

function editStudent(index){

    document.getElementById("name").value = students[index].name;
    document.getElementById("roll").value = students[index].roll;
    document.getElementById("dept").value = students[index].dept;
    document.getElementById("editIndex").value = index;
}

function deleteStudent(index){

    if(confirm("Delete this student?")){
        students.splice(index,1);
        localStorage.setItem("students", JSON.stringify(students));
        displayStudents();
    }
}

function clearForm(){

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("dept").value="";
    document.getElementById("editIndex").value="";
}

function searchStudent(){

    let search = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row=>{

        let text = row.innerText.toLowerCase();

        row.style.display = text.includes(search) ? "" : "none";
    });
}