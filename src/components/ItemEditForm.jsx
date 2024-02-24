
import PropTypes from 'prop-types';
import { useState } from 'react';


const ItemEditForm = ({school,handleDeleteSchool,handleEditSchool}) => {
  
  const [schoolEdited,setSchoolEdited] = useState(school)

  function handleEdit(e){
    
    const {name, value} = e.target

    setSchoolEdited((prevSchoolEdited) => ({ ...prevSchoolEdited, [name] : value}))

      console.log("Edited School ",schoolEdited)

  }
    
    return (
       
        <div key={school.id}>
          
          <div className="duration row">
            <div className="input-wrapper">
              <label htmlFor={`from-${school.id}`} >from</label>
              <input id={`from-${school.id}`} type="text" name="from" defaultValue={school.from} onChange= {handleEdit}/>
            </div>       

          <div className="input-wrapper">
              <label htmlFor={`to-${school.id}`}>to</label>
              <input id={`to-${school.id}`} type="text" name="to" defaultValue={school.to} onChange={handleEdit}/>
          </div>
          </div>

          <div className="input-wrapper">
            
            <label htmlFor={`certificate-${school.id}`} >certificate</label>
            <input id={`certificate-${school.id}`} type="text" name="certificate" defaultValue={school.certificate} onChange={handleEdit}/>
          </div>       
            <div className="input-wrapper">
              
            <label htmlFor={`school-${school.id}`}>school</label>
            <input id={`school-${school.id}`} type="text" name="school" defaultValue={school.school} onChange={handleEdit}/>
            </div>   

          <button id={`edit-${school.id}`} type="button" onClick= {() => handleEditSchool(schoolEdited) } >
            Edit
            </button> &nbsp;
          <button id={`delete-${school.id}`} type="button" onClick={() => handleDeleteSchool(school.id)}>
            Delete
          </button>        
                <br></br>
                <br></br>
        </div>
    );
};


ItemEditForm.propTypes = {
    school: PropTypes.object,
    handleDeleteSchool: PropTypes.func,
    handleEditSchool: PropTypes.func
};


export default ItemEditForm;
