import './button.scss';
import PropTypes from 'prop-types';

function Button({ isOpen, manageClick }) {
  let cssClass = 'custom-button';

  if (isOpen) {
    cssClass += ' custom-button--open';
  }

  return (
    <button
      type="button"
      className={cssClass}
      onClick={manageClick}
    >
      =
    </button>
  );
}

Button.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};

// == Export
export default Button;
