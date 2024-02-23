import Item from './ItemView'
import PropTypes from 'prop-types'

function ItemListView({title,items}) {

    console.log(items)
 const ItemsView = items.length < 1 ?  `${title} no available` : items.map((itemObj) => <Item key={itemObj.id} item={itemObj} />) 

  return (
    <section className='education'>
        <h1>{title}</h1>
            {ItemsView}
        <hr />
    </section>
  )
}

ItemListView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default ItemListView
