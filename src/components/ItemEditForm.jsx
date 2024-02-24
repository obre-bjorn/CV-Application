
import PropTypes from 'prop-types';
import { useState } from 'react';


const ItemEditForm = ({itemType,school,handleDeleteSchool,handleEditSchool}) => {
  
  const [schoolEdited,setSchoolEdited] = useState(school)
  const [xpEdited,setXpEdited] = useState(school)


  let itemEdited = itemType === "school" ? schoolEdited : xpEdited 

  
  function handleEdit(e){
    
    const {name, value} = e.target


    if(itemType === "school"){
      
        setSchoolEdited((prevSchoolEdited) => ({ ...prevSchoolEdited, [name] : value}))
    
        
    }else{

      setXpEdited((prevSchoolEdited) => ({ ...prevSchoolEdited, [name] : value}))
  
        }
      
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
            <input id={`certificate-${school.id}`} type="text" name={itemType === 'school' ? "certificate" : "position"} defaultValue={itemType === 'school' ? school.certificate: school.position} onChange={handleEdit} />
          </div>       
            <div className="input-wrapper">
              
            <label htmlFor={`school-${school.id}`}>school</label>
            <input id={`school-${school.id}`} type="text" name={itemType === 'school' ? "school" : "company"} defaultValue={itemType === 'school' ? school.school: school.company} onChange={handleEdit}/>
            </div>   

          <button id={`edit-${school.id}`} type="button" onClick= {() => handleEditSchool(itemEdited,itemType)} >
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
    itemType: PropTypes.string,
    school: PropTypes.object,
    handleDeleteSchool: PropTypes.func,
    handleEditSchool: PropTypes.func
};


export default ItemEditForm;
