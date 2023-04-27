import './amount.scss';
import PropTypes from 'prop-types';

function Amount({ selectedCurrency, convertedAmount }) {
  return (
    <div className="amount">
      <h2 className="amount-title">{convertedAmount}</h2>
      <h3 className="amount-subtitle">{selectedCurrency}</h3>
    </div>
  );
}

Amount.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  convertedAmount: PropTypes.string.isRequired,
};
// == Export
export default Amount;
