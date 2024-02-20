import { useState } from 'react'
import html2pdf from 'html2pdf.js'

function App() {
    const [personInfo,setPersonInfo] = useState({firstName:'', lastName:'',email:'', phoneNumber:'',website:''})




  return (
    <>
    <div className="container">
    <main className='row'> 

    <div className='cv_generator-form'>
      <div className="person-info">
        <h1>Personal Information</h1>
        <hr />
        {/* Full name nputs */}
        <div className="fullname-input row">
          <div className='input-wrapper name'>
            <label htmlFor='firstname'>First Name</label>
            <input type="text" id="firstname" placeholder='Enter first name'/>
          </div>
          <div className='input-wrapper name'>
            <label htmlFor='lastname'>Last Name</label>
            <input type="text" id="lastname" placeholder='Enter last name'/>
          </div>
        </div>

        {/* Mobile Number Input */}
        <div className='input-wrapper '>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" placeholder='Enter your Email Address'/>
        </div>
        <div className='input-wrapper '>
            <label htmlFor='phone_number'>Phone Number</label>
            <input type="tel" id="phone_number" placeholder='Enter your Phone Number'/>
        </div>
        <div className='input-wrapper '>
            <label htmlFor='website'>Website</label>
            <input type="url" id="website" placeholder='Enter your website url'/>
        </div>
        <div className='input-wrapper '>
            <label htmlFor='description'>Describe yourself</label>
            <textarea name="" id="description"  placeholder='I am a....' maxLength={200}></textarea>
        </div>

      </div>

      <div className="education-info">
        <h1>Education</h1>
        <hr />

        <div className="school">

          <form action="">

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


          </form>

        </div>
      </div>
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

    <div className="cv">
    <button onClick= {() => html2pdf(document.querySelector('.container'),{ margin: 10, filename: 'your_document.pdf', pagebreak: { mode: 'css', } })}>Print</button>
        <section className='general-info'>
        <div className="my-info row">
          <div className="name">
            <h1><b>Bjorn</b></h1> 
            <h1><b>Obare</b></h1>
          </div>
          <div className="contacts">
            <h3><b>Email:</b> obre.bjorn@gmail.com</h3>
            <h3><b>Phone Number:</b> +254 792 093 576</h3>
            <h3><b>Website:</b> <a href="#">www.portfolio.com</a></h3>
          </div>
        </div>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellendus quo praesentium, nobis incidunt sed nam officia debitis! Molestias minus autem, ipsam dolorum ipsa aliquid quisquam iure repellat illum ipsum saepe? Odit quaerat temporibus, consequatur obcaecati nam ipsum amet quibusdam. Nobis laborum numquam blanditiis doloribus est dignissimos necessitatibus magnam inventore? </p>
        </section>
          <hr />

        <section className='education'>
          <h1>Education</h1>
          <div className="school-info">
            <p>From - To</p>
            <p>Bachelor of Information Technology</p>
            <p>Jomo Kenyatta University Of Agriculture</p>
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
