import React from 'react';
import './app.scss';
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import currencies from '../../data/currencies';
import Button from '../Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      euroAmount: 1,
      selectedCurrency: 'United States Dollar',
      searchValue: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleButtonClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleCurrencyClick(name) {
    this.setState({
      selectedCurrency: name,
    });
  }

  handleInputChange(value) {
    this.setState({
      searchValue: value,
    });
  }

  render() {
    const {
      open,
      euroAmount,
      selectedCurrency,
      searchValue,
    } = this.state;

    const convertedAmount = (currencies.find((cur) => cur.name === selectedCurrency).rate * euroAmount).toFixed(2);
    const filteredCurrency = currencies.filter((cur) => cur.name.toUpperCase().includes(searchValue.toUpperCase()));

    return (
      <div className="app">
        <Header euroAmount={euroAmount} />
        <Button isOpen={open} manageClick={this.handleButtonClick} />
        {open && (
          <Currencies
            currencies={filteredCurrency}
            manageCurrencyClick={this.handleCurrencyClick}
            selectedCurrency={selectedCurrency}
            manageSearchInput={this.handleInputChange}
            value={searchValue}
          />
        )}
        <Amount selectedCurrency={selectedCurrency} convertedAmount={convertedAmount} />
      </div>
    );
  }
}

export default App;
