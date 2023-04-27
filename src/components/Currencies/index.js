import './currencies.scss';
import PropTypes from 'prop-types';

function Currencies({
  currencies,
  manageCurrencyClick,
  selectedCurrency,
  manageSearchInput,
  value,
}) {
  return (
    <div className="currencies">
      <div>
        <input
          type="text"
          className="currencies-search"
          placeholder="Rechercher"
          value={value}
          onChange={(event) => {
            manageSearchInput(event.target.value);
          }}
        />
      </div>
      <ul className="currencies-list">
        {currencies.map(({ name }) => {
          let cssClass = 'currency';
          if (name === selectedCurrency) {
            cssClass += ' currency--selected';
          }
          return (
            <li
              className={cssClass}
              onClick={() => {
                manageCurrencyClick(name);
              }}
              key={name}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
  manageCurrencyClick: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  manageSearchInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

// == Export
export default Currencies;
