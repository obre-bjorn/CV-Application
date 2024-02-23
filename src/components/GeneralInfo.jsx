
import PropTypes from 'prop-types'

function GeneralInfo({person}) {
  return (
    <section className='general-info'>
          <div className="my-info row">
            <div className="name">
              <h1><b>{person.firstName}</b></h1> 
              <h1><b>{person.lastName}</b></h1>
            </div>
            <div className="contacts">
              <h3><b>Email:</b>{person.email}</h3>
              <h3><b>Phone Number:</b>{person.phoneNumber}</h3>
              <h3><b>Website:</b> <a href="#">{person.website}</a></h3>
            </div>
          </div>
          <p className="description">{person.description} </p>
        </section>
  )
}

GeneralInfo.propTypes = {
    person: PropTypes.object.isRequired
}

export default GeneralInfo
