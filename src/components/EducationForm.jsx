import PropTypes from 'prop-types'

function EducationForm({handleSubmit}) {
  return (
    <div className="education-info">
          <h1>Education</h1>
          <hr />

          <div className="school">

            <form action="" onSubmit={handleSubmit}>

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
                    <label htmlFor='school'>School</label>
                    <input id="school" type="text"/>
              </div>
            
            <button type="submit" >Add School</button>

            </form>

          </div>
        </div>

  )
}

EducationForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default EducationForm
