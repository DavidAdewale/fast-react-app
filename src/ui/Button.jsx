import PropTypes from 'prop-types';

function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-400 py-3 px-4 font-semibold uppercase  tracking-wide text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Button;
