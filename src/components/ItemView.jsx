import PropTypes from 'prop-types'

function Item({item, itemType}) {
  return (
    <div className="school-info">
        <p>From: {item.from} - To: {item.to}</p>
        <p>{itemType === 'school' ? item.certificate : item.position}</p>
        <p>{itemType === 'school' ? item.school : item.company}</p>
    </div>
  )
}

Item.propTypes = {
    itemType: PropTypes.string.isRequired,
    item:PropTypes.object.isRequired
}

export default Item
