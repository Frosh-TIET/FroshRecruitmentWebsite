



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
  var talent_link=getElementValue('talent-link');

  var saveSuccessfull=saveForm(name,emailid,rollno,phone,branch,cg,Adaptability,Resilience,Creativity,Time_Management,Decisiveness,q1,q2,q3,q4,q5,q6,q7,q8,talent_link);
  if(saveSuccessfull){
    window.location.href = 'thankyou.html';
  }
  else{
    alert("Form Submission Failed");
  }

}

const saveForm=(name,emailid,rollno,phone,branch,cg,Adaptability,Resilience,Creativity,Time_Management,Decisiveness,q1,q2,q3,q4,q5,q6,q8,talent_link)=>{
  var newRecruitmentForm=recruitmentFormDB.push();
  console.log("inside save form function")
  var saveSuccessfull=false;
  //console.log(name,emailid,rollno,phone,branch,cg,hostel,Adaptability,Resilience,Creativity,Time_Management,Decisiveness,q1,q2,q3,q4,q5,q6,q8,q9,q10,talent_link)
  newRecruitmentForm.set({
    "Name":name,
    "EmailID":emailid,
    "RollNumber":rollno,
    "Phone Number":phone,
    "Branch":branch,
    "CG":cg,
    "DayScholar":hostel,
    "Adaptability":Adaptability,
    "Resilience":Resilience,
    "Creativity":Creativity,
    "TimeManagement":Time_Management,
    "Decisiveness":Decisiveness,
    "Do you commute to campus regularly or use on-campus housing facilities?":q1,
    "Why do you want to join Frosh?":q2,
    "What are your soft skills and hard skills?":q3,
    "What are you hoping to discover about yourself during your time in Frosh?":q4,
    "What improvements do you suggest for Frosh 2023?":q5,
    "If selected, how much time do you think you will need to devote to FROSH daily?":q6,
    "According to you, who should be a part of Frosh 2024 according to you and why?":q7,
    "According to you, who should not be a part of Frosh 2024 according to you and why?":q8,
    "TalentLink":talent_link
  });
  console.log("Form Submitted");
  saveSuccessfull=true;
  return saveSuccessfull;



};

const getElementValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};