import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold uppercase  tracking-wide text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm';

  const styles = {
    primary: base + ' py-3 px-4 sm:px-6 s:py-4',
    small: base + ' px-4 py-2 md:px-5 md:px-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full  border-2 border-stone-300 font-semibold uppercase  tracking-wide text-stone-400 hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:text-stone-800 disabled:cursor-not-allowed py-2.5 px-4 sm:px-6 s:py-3.5',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
