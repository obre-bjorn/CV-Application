import PropTypes from 'prop-types'

function Item({item}) {
  return (
    <div className="school-info">
        <p>From: {item.from} - To: {item.to}</p>
        <p>{item.certificate}</p>
        <p>{item.school}</p>
    </div>
  )
}

Item.propTypes = {
    item:PropTypes.object.isRequired
}

export default Item
