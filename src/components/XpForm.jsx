import PropTypes from 'prop-types'

function XpForm({title, handleSubmit}) {
  return (
    <div className="experience-info">
            <h1>{title}</h1>
            <hr />

            <div className="work">

            <form action="" onSubmit={handleSubmit}>

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
                    <input id="company" type="text"/>
              </div>

              <button type="submit">Add Experience</button>
            </form>

          </div>
        </div>
  )
}

XpForm.propTypes = {
    title: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default XpForm
