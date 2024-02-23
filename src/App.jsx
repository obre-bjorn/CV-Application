import { useState } from 'react'
import html2pdf from 'html2pdf.js'

import GeneralInfoForm from './components/GeneralInfoForm';
import GeneralInfo from './components/GeneralInfo';
import ItemListView from './components/ItemListView';

let schoolIndex = 0
let xpIndex = 0


function App() {
    const [schools,setSchools] = useState([])
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

    
    console.log(e.target.elements)
    console.log(formData);
    console.log('School Index', schoolIndex)
    
    e.target.reset()

 }

 function handleXpSubmit(){

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
      <GeneralInfoForm handleChange={handleChange} person={personInfo} />

      {/* Education Form */}
        <div className="education-info">
          <h1>Education</h1>
          <hr />

          <div className="school">

            <form action="" onSubmit={handleSchoolSubmit}>

              <div className="duration row">
                <div className='input-wrapper '>
                    <label htmlFor='education-from'>From</label>
                    <input id="education-from" type="month"/>
                </div>
                <div className='input-wrapper '>
                    <label htmlFor='education-to'>To</label>
                    <input id="education-to" type="month"/>
                </div>
              </div>
              <div className='input-wrapper '>
                    <label htmlFor='certificate'>Certificate</label>
                    <input id="certificate" type="text"/>
              </div>

              <div className='input-wrapper'>
                    <label htmlFor='school name'>School</label>
                    <input id="school" type="text"/>
              </div>
            
            <button type="submit" >Add School</button>

            </form>

          </div>
        </div>

        {/* Experience Form */}
        <div className="experience-info">
            <h1>Professional Experience</h1>
            <hr />

            <div className="work">

            <form action="">

              <div className="duration row">
                <div className='input-wrapper '>
                    <label htmlFor='work-from'>From</label>
                    <input id="work-from" type="month"/>
                </div>
                <div className='input-wrapper '>
                    <label htmlFor='work-to'>To</label>
                    <input id="work-to" type="month"/>
                </div>
              </div>
              <div className='input-wrapper '>
                    <label htmlFor='position'>Position</label>
                    <input id="position" type="text"/>
              </div>

              <div className='input-wrapper'>
                    <label htmlFor='company'>Company</label>
                    <input id="coompany" type="text"/>
              </div>


            </form>

          </div>
        </div>
        
    </div>
    {/* CV  Section */}

    <div className="cv">
    
    {/* Personal Information Section */}
    <button onClick= {() => html2pdf(document.querySelector('.cv'),{ margin: 10, filename: 'your_document.pdf', pagebreak: { mode: 'css', } })}>Print</button>

        <GeneralInfo person={personInfo}/>
          <hr />


        <ItemListView title="Education" items={schools} />

        <section className="experience">
          <h1>Experience</h1>
            <div className="company-info">
              <p>From - To</p>
              <p>IT Support Intern</p>
              <p>Radio Africa Group</p>
            </div>
            <hr />
        </section>
        <section className="experience">
          <h1>Experience</h1>
            <div className="company-info">
              <p>From - To</p>
              <p>IT Support Intern</p>
              <p>Radio Africa Group</p>
            </div>
            <hr />
        </section>
        <section className="experience">
          <h1>Experience</h1>
            <div className="company-info">
              <p>From - To</p>
              <p>IT Support Intern</p>
              <p>Radio Africa Group</p>
            </div>
            <hr />
        </section>
        <section className="experience">
          <h1>Experience</h1>
            <div className="company-info">
              <p>From - To</p>
              <p>IT Support Intern</p>
              <p>Radio Africa Group</p>
            </div>
            <hr />
        </section>
        <section className="experience">
          <h1>Experience</h1>
            <div className="company-info">
              <p>From - To</p>
              <p>IT Support Intern</p>
              <p>Radio Africa Group</p>
            </div>
            <hr />
        </section>
        <section className="experience">
          <h1>Experience</h1>
            <div className="company-info">
              <p>From - To</p>
              <p>IT Support Intern</p>
              <p>Radio Africa Group</p>
            </div>
            <hr />
        </section>

    </div>
      
      </main>
    </div>
    </>
  )
}

export default App
