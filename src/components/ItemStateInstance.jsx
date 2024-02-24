import PropTypes from 'prop-types';
import ItemEditForm from './ItemEditForm';


const ItemStateInstance = ({itemType,schools , handleEdit, handleDelete}) => {

    const ItemForms = schools.map((schoolObj) => <ItemEditForm key={schoolObj.id} itemType={itemType} school={schoolObj} handleEditSchool= {handleEdit} handleDeleteItem={handleDelete}/>)

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
