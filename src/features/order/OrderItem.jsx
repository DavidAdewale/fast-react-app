import formatCurrency from '../../utilities/helpers';
import PropTypes from 'prop-types';

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.string,
  // isLoadingIngredients: PropTypes.bool,
  // ingredients: PropTypes.string,
};

export default OrderItem;
