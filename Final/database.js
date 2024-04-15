



const firebaseConfig = {
    apiKey: "AIzaSyAPrHceRS4nBTxEmoxzga7p_-B1WdMz2Ec",
    authDomain: "froshrecuitmentform.firebaseapp.com",
    databaseURL: "https://froshrecuitmentform-default-rtdb.firebaseio.com",
    projectId: "froshrecuitmentform",
    storageBucket: "froshrecuitmentform.appspot.com",
    messagingSenderId: "332914579057",
    appId: "1:332914579057:web:80612e9d424ee43c872dd0",
    measurementId: "G-EEG7XBG6WX"
  };

  //initialize firebase app
firebase.initializeApp(firebaseConfig);

//reference your database
var recruitmentFormDB=firebase.database().ref('recruitmentForm');
document.getElementById('recruitmentForm').addEventListener('submit',submitForm);

function submitForm(e){
  //console.log("submit form");
  e.preventDefault();
  var name=getElementValue('fname');
  var emailid=getElementValue('femail');
  var rollno=getElementValue('froll');
  var phone=getElementValue('fnumber');
  var branch=getElementValue('fbranch');
  var cg=getElementValue('fcg');
  var hostel=getElementValue('fhostel');
  var Adaptability = document.querySelector('input[name="Adaptability"]:checked').value;
  var Resilience = document.querySelector('input[name="resilience"]:checked').value;
  var Creativity = document.querySelector('input[name="creativity"]:checked').value;
  var Time_Management = document.querySelector('input[name="timemanagement"]:checked').value;
  var Decisiveness = document.querySelector('input[name="Decisiveness"]:checked').value;
  var q1=getElementValue('q1');
  var q2=getElementValue('q2');
  var q3=getElementValue('q3');
  var q4=getElementValue('q4');
  var q5=getElementValue('q5');
  var q6=getElementValue('q6');
  var q7=getElementValue('q7');
  var q8=getElementValue('q8');
  var q9=getElementValue('q9');
  var q10=getElementValue('q10');
  var talent_link=getElementValue('talent-link');

  saveForm(name,emailid,rollno,phone,branch,cg,hostel,Adaptability,Resilience,Creativity,Time_Management,Decisiveness,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,talent_link);

}

const saveForm=(name,emailid,rollno,phone,branch,cg,hostel,Adaptability,Resilience,Creativity,Time_Management,q1,q2,q3,q4,q5,q6,q8,q9,q10,talent_link)=>{
  var newRecruitmentForm=recruitmentFormDB.push();
  console.log("inside save form function")
  console.log(name,emailid,rollno,phone,branch,cg,hostel,Adaptability,Resilience,Creativity,Time_Management,q1,q2,q3,q4,q5,q6,q8,q9,q10,talent_link)
  newRecruitmentForm.set({
    Name:name,
    EmailID:emailid,
    RollNumber:rollno,
    Phone:phone,
    Branch:branch,
    CG:cg,
    Hostel:hostel,
    Adaptability:Adaptability,
    Resilience:Resilience,
    Creativity:Creativity,
    TimeManagement:Time_Management,
    Decisiveness:Decisiveness,
    Question1:q1,
    Question2:q2,
    Question3:q3,
    Question4:q4,
    Question5:q5,
    Question6:q6,
    Question7:q7,
    Question8:q8,
    Question9:q9,
    Question10:q10,
    TalentLink:talent_link
  });
  console.log("Form Submitted");


};

const getElementValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};