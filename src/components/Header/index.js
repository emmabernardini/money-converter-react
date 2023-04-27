import './header.scss';
import PropTypes from 'prop-types';

function Header({ euroAmount }) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <h2 className="header-subtitle">{euroAmount} euro</h2>
    </header>
  );
}

Header.propTypes = {
  euroAmount: PropTypes.number.isRequired,
};

// == Export
export default Header;
