// import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from './cartSlice';
import { getUserName } from '../user/userSlice';
import EmptyCart from './EmptyCart';
import { formatCurrency } from '../../utilities/helpers';

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUserName);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map(item => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between py-3 text-lg font-semibold">
        <h2>Total</h2>
        <p>{formatCurrency(totalCartPrice)}</p>
      </div>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order Pizzas
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
        {/* <button>Clear cart</button> */}
      </div>
    </div>
  );
}

export default Cart;
