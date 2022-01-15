import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name StudentInfo with the name for the new component.
function StudentInfo(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Student Info');

  const[newName, setNewName]= useState();
  const[newParentEmail, setNewParentEmail]= useState();
  const[newEmail, setNewEmail]= useState();
  const[newPhone, setNewPhone]= useState();
  const[newSchool, setNewSchool]= useState();
  const[newGrade, setNewGrade]= useState();

      const changeName= ()=>{
        console.log('in new name');
        setNewName(event.target.value);
    }

    const changeParentEmail= ()=>{
      console.log('in new email');
      setNewParentEmail(event.target.value);
    }

    const changeEmail= ()=>{
      console.log('in new email');
      setNewEmail(event.target.value);
    }

    const changePhone= ()=>{
      console.log('in new phone');
      setNewPhone(event.target.value);
    }

    const changeSchool= ()=>{
      console.log('in new school');
      setNewSchool(event.target.value);
    }

    const changeGrade= ()=>{
      console.log('in new grade');
      setNewGrade(event.target.value);
    }


    const AddNewStudentInfo =()=>{
      //package up new info in object
      const newStudentInfo = {
        name: newName,
        parentEmail: newParentEmail,
        email: newEmail,
        phone: newPhone,
        school: newSchool,
        grade: newGrade,
      }
      dispatch( {type:'ADD_NEW_STUDENT_INFO', payload: newStudentInfo})

    }


  return (
    <div>
      <h2>{heading}</h2>

      <input type="text" placeholder="Parent/Guardian's Email" onChange={(event)=>changeParentEmail(event)}></input>
      <input type="text" placeholder="Student Email" onChange={(event)=>changeEmail(event)}></input>
      <input type="text" placeholder="Student Name" onChange={(event)=>changeName(event)}></input>
      <input type="text" placeholder="Student Phone Number" onChange={(event)=>changePhone(event)}></input>
      <input type="text" placeholder="Student School" onChange={(event)=>changeSchool(event)}></input>

      <label for="gradeLevel">Choose a Grade Level:</label>

        <select name="gradeLevel" onChange={(event)=>changeGrade(event)} title="Student's Current Grade Level">
          <option value="Pre-K">Pre-K</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          <option value="4th Grade">4th Grade</option>
          <option value="5th Grade">5th Grade</option>
          <option value="6th Grade">6th Grade</option>
          <option value="7th Grade">7th Grade</option>
          <option value="8th Grade">8th Grade</option>
          <option value="9th Grade">9th Grade</option>
          <option value="10th Grade">10th Grade</option>
          <option value="11th Grade">11th Grade</option>
          <option value="12th Grade">12th Grade</option>
        </select>

      <button onClick={AddNewStudentInfo}>Add A New Student Info</button>
    </div>
  );
}

export default StudentInfo;