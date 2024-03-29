import { useState } from 'react'
import html2pdf from 'html2pdf.js'

import GeneralInfoForm from './components/GeneralInfoForm';
import GeneralInfo from './components/GeneralInfo';
import ItemListView from './components/ItemListView';
import EducationForm from './components/EducationForm';
import XpForm from './components/XpForm';
import ItemStateInstance from './components/ItemStateInstance';

let schoolIndex = 0
let xpIndex = 0


function App() {
    const [schools,setSchools] = useState([])
    const[xps,setXps] = useState([])
    const [personInfo,setPersonInfo] = useState({
      firstName:'', 
      lastName:'',
       email:'', 
      phoneNumber:'',
      website:'',
      description: ''
    });                                             


    
                                               

 function handleSchoolSubmit(e){
    const elements = e.target.elements

    const formData = {
      id: schoolIndex,
      from: elements['education-from'].value,
      to: elements['education-to'].value,
      certificate: elements['certificate'].value,
      school: elements['school'].value
    }

    schoolIndex++
    e.preventDefault()

    setSchools((prevSchools) => [...prevSchools,formData])
    
    e.target.reset()

 }

 function handleItemEdit(editedSchool,type){
  console.log('handleItemEdit (Edited School)', editedSchool)
  
  console.log('Before Update:', schools);

    if(type == "school"){
      
        setSchools((prevSchools) => {
          const updatedSchools = prevSchools.map((school) =>
            editedSchool.id === school.id  ? editedSchool : school
          );
      
          return updatedSchools; 
          
        })
    } else{
        setXps((prevSchools) => {
          const updatedSchools = prevSchools.map((school) =>
            editedSchool.id === school.id  ? editedSchool : school
          );
      
          return updatedSchools; 
          
        })
    }


  console.log('After Update:', schools);
}

function handleItemDelete( itemDeleted, type,){

  if(type == "school"){
      
        setSchools((prevSchools) => {
          const updatedSchools = prevSchools.filter((school) =>
            itemDeleted.id !== school.id  
          );
      
          return updatedSchools; 
          
        })
    } else{
        setXps((prevSchools) => {
          const updatedSchools = prevSchools.filter((school) =>
            itemDeleted.id != school.id  
          );
      
          return updatedSchools; 
          
        })
    }

}

  function handleXpSubmit(e){
    const elements = e.target.elements

    const formData = {
      id: xpIndex,
      from: elements['work-from'].value,
      to: elements['work-to'].value,
      position: elements['position'].value,
      company: elements['company'].value
    }

    xpIndex++
    e.preventDefault()

    setXps((prevXps) => [...prevXps,formData])
    
    e.target.reset()

 }

function handleChange(e){
  let value = e.target.value;
  let name = e.target.name;

  let newPerson = {...personInfo,[name]:value }


  setPersonInfo(newPerson)

}


  return (
    <>
    <div className="container">
    <main className='row'> 
    
      <div className='cv_generator-form'>

        {/* General Info Form */}
        <GeneralInfoForm handleChange={handleChange} person={personInfo} />

        {/* Education Form */}
        <EducationForm handleSubmit=
        {handleSchoolSubmit}/>

        { schools.length > 0 ? 
        <>
        {console.log(schools)}
          <h1>Edit Schools</h1>
          <ItemStateInstance itemType="school" schools={schools} handleEdit={handleItemEdit} handleDelete={handleItemDelete}/> 
        
          </> : null
        }
        {/* Experience Form */}
       <XpForm title="Professional Experience" handleSubmit={handleXpSubmit}/> 
        {
          xps.length > 0 ?
          <>
          <h1>Edit Experiences</h1>
          <ItemStateInstance itemType="experience" schools={xps} handleEdit={handleItemEdit} handleDelete={handleItemDelete}/>
          </>: 
          null
        }
    </div>






    {/* CV  Section */}

    <div className="cv">
    
        {/* Personal Information Section */}
        <button onClick= {() => html2pdf(document.querySelector('.cv'),{ margin: 10, filename: 'your_document.pdf', pagebreak: { mode: 'css', } })}>Print</button>

        <GeneralInfo person={personInfo}/>
        <hr />
        <ItemListView title="Education" items={schools} type="school"/>
        <ItemListView title="Experience" items={xps} type="xp"/>
        

    </div>
      
      </main>
    </div>
    </>
  )
}

export default App
