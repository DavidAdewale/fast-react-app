import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className =
    'inline-block rounded-full bg-yellow-400 py-3 px-4 font-semibold uppercase  tracking-wide text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 s:py-4';
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};

export default Button;
