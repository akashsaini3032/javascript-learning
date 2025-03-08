const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.0 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 87.0 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 99.0 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010 },
};

document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;

    if (!isNaN(amount) && amount > 0) {
        const rate = exchangeRates[currencyFrom][currencyTo];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${currencyFrom} = ${convertedAmount} ${currencyTo}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
    }
});