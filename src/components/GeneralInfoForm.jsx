import React from 'react'
import PropTypes from 'prop-types'

function GeneralInfoForm({handleChange, person}) {
  return (
   
      <div className="person-info">
        <h1>Personal Information</h1>
        <hr />
        {/* Full name nputs */}
        <div className="fullname-input row">
          <div className='input-wrapper name'>
            <label htmlFor='firstname'>First Name</label>
            <input type="text" id="firstname" placeholder='Enter first name' name='firstName' onChange={handleChange} value={person.firstName} />
          </div>
          <div className='input-wrapper name'>
            <label htmlFor='lastname'>Last Name</label>
            <input type="text" id="lastname" placeholder='Enter last name' name="lastName" onChange={handleChange} value={person.lastName} />
          </div>
        </div>

        {/* Mobile,Email and Website Input */}
        <div className='input-wrapper '>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" placeholder='Enter your Email Address' name='email' onChange={handleChange} value={person.email}/>
        </div>
        <div className='input-wrapper '>
            <label htmlFor='phone_number'>Phone Number</label>
            <input type="tel" id="phone_number" placeholder='Enter your Phone Number' name='phoneNumber' onChange={handleChange} value={person.phoneNumber}/>
        </div>
        <div className='input-wrapper '>
            <label htmlFor='website'>Website</label>
            <input type="url" id="website" placeholder='Enter your website url' name='website' onChange={handleChange} value={person.website} />
        </div>
        <div className='input-wrapper '>
            <label htmlFor='description'>Describe yourself</label>
            <textarea name="description" id="description"  placeholder='I am a....' maxLength={400} onChange={handleChange} value={person.description}></textarea>
        </div>

      </div>
  )
}

GeneralInfoForm.propTypes = {
    handleChange:PropTypes.func.isRequired,
    person:PropTypes.object.isRequired
}

export default GeneralInfoForm
