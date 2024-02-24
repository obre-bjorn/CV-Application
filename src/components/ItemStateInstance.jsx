import PropTypes from 'prop-types';
import ItemEditForm from './ItemEditForm';


const ItemStateInstance = ({schools , handleEdit}) => {
    console.log("Instance Component: ", schools)
    const ItemForms = schools.map((schoolObj) => <ItemEditForm key={schoolObj.id}  school={schoolObj} handleEditSchool= {handleEdit}/>)

    return (
        <>
            {ItemForms}
        </>
    )
};


ItemStateInstance.propTypes = {
    schools: PropTypes.array
};


export default ItemStateInstance;
