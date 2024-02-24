import PropTypes from 'prop-types';
import ItemEditForm from './ItemEditForm';


const ItemStateInstance = ({itemType,schools , handleEdit}) => {

    const ItemForms = schools.map((schoolObj) => <ItemEditForm key={schoolObj.id} itemType={itemType} school={schoolObj} handleEditSchool= {handleEdit}/>)

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
