import { useState } from 'react'
import html2pdf from 'html2pdf.js'

function App() {

  return (
    <>
<button onClick= {() => html2pdf(document.querySelector('.container'),{ margin: 10, filename: 'your_document.pdf', pagebreak: { mode: 'css', } })}>Print</button>
    <div className="container">
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
    </>
  )
}

export default App
