//VARIABLES

let unitName=document.getElementById("unit-Name"); //

let unitCode=document.getElementById("unit-code"); //

let lecName=document.getElementById("lec-name"); //

let venue=document.getElementById("venue") //

/* let timeAndDate=document.getElementById("datetime-local").value; */ //

let lessonDetails=document.getElementById("lessondetails"); //Gets the div containing form for lesson details

/* let viewBtn=document.getElementById("viewPage"); */

let studentData=document.getElementById("studentDetails"); //GETS THE STUDENT REG NUMBER

/* let studentItem=document.createElement("li"); //A CREATED LIST TO HOLD REG NUMBER
studentItem.innerHTML=studentData.value; */

let studentsPresentList=document.getElementById("see-students"); //SELECT DIV WITH STUDENTS MARKED PRESENT

let studentsList=document.getElementById("studentsmarked"); //SELECTS THE ORDERED LIST WITH MARKED STUDENTS

let rollCallDiv=document.getElementById("roll-call") // SELECTS THE DIV WITH ROLL CALL HEADING

let viewAttendanceDiv=document.getElementById("viewPage");// DIV WITH INFO OF VIEW ATTENDANCE

//FUNCTIONS

//FUNCTION TO ASSIGN DISPLAY AREA WITH HEADER
function markDisplayArea(){
        let displayHeader=document.getElementById("display-area");
        let unitHeading=document.createElement("h4");
        unitHeading.innerHTML="Lesson Details";
        displayHeader.appendChild(unitHeading)
        let unitNameLabel=document.createElement("p");
        let unitCodeLabel=document.createElement("p");
        let lecNameLabel=document.createElement("p");
        let unitVenueLabel=document.createElement("p");
        unitCodeLabel.innerHTML="Unit Code: " + unitCode.value;
        lecNameLabel.innerHTML="Lecturer: "+ lecName.value;
        unitNameLabel.innerHTML="Unit Name: "+ unitName.value;
        unitVenueLabel.innerHTML="Venue: "+ venue.value;
        displayHeader.appendChild(unitNameLabel);
        displayHeader.appendChild(unitCodeLabel);
        displayHeader.appendChild(lecNameLabel);
        displayHeader.appendChild(unitVenueLabel);
}

//FUNCTION TO HIDE LESSON DETAILS LIST WHEN SAVE BTN CLICKED
function hideDetSec(){
        lessonDetails.classList.add("displayList");
}

//FUNCTION TO DISPLAY THE REG SECTION WHEN  LESSO DETAILS SAVED
function displayTakeRollCallSection(){
        rollCallDiv.classList.remove("displayList")
}

//function to operate on registration number







//to hide view details section
function hidelowerBtn(){
        viewAttendanceDiv.classList.add("displayList");
        studentsPresentList.classList.add("displayList");
}

//function to avoid repetition
function checkIfRegistered(){
        let allPresent=[];
        if ( allPresent.includes(studentData.value)) {
                alert("Student Already registered")
        } else {
                let studentRegNumber=document.createElement("li");
                studentRegNumber.innerHTML=studentData.value;
                studentsList.appendChild(studentRegNumber);
                allPresent.unshift(studentRegNumber.innerHTML);
                saveData()
                studentData.value='';
                viewAttendanceDiv.classList.remove("displayList");
        }
      console.log(allPresent)
}
//FUNCTION TO SHOW VIEW ATTENDANCE BTN
function displayViewBtn(){
       if (studentData.value!=='') {
                        /* studentsPresentArray.push(studentRegNumber); */
                        checkIfRegistered()
                        saveData()

                }
        else {
                alert("Registration Number cannot be empty!")
       }
       

}

//function to show the students data
function showRegisteredStudent(){
        studentsPresentList.classList.remove("displayList");
        viewAttendanceDiv.classList.add("displayList");
}

function checkLessonValues(){
        if (unitName.value!==''&& unitCode.value!==''&& lecName.value!==''&& venue.value!=='') {
               markDisplayArea();
               displayTakeRollCallSection();
               hideDetSec();
                
        } else {
                alert("Please enter data!");

        }
}



        




let studentsPresentHeading=document.createElement("h4");
studentsPresentHeading.innerHTML="Students Present";
//TO SHOW REGISTERED STUDENT

/* function showRegisteredStudent(){
        studentsPresentList.classList.remove("displayList");
        let student=document.createElement("li");
        student.innerHTML=studentData.value;
        studentsList.appendChild(student);
        studentData.value='';
        viewAttendanceDiv.classList.add("displayList");

} */
//function to reset data



function saveData(){
        localStorage.setItem("data",studentsList.innerHTML);
}

function getData(){
        studentsList.innerHTML =localStorage.getItem("data");
}

getData();
function resetData(){
        studentsList.innerHTML='';
        unitCodeLabel.innerHTML=''
        lecNameLabel.innerHTML='';
        unitNameLabel.innerHTML='';
        unitVenueLabel.innerHTML='';
        saveData()
        getData()
}