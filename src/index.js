// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let change = {};
    let half = currency / 50;
    let quarters = currency % 50;
    let dimes = quarters % 25;
    let nickels = dimes % 10;
    let pennies = nickels % 5;
    const checkAndSet = (change, prop, value = 0) => {
        if (Math.floor(value)) {
            change[prop] = Math.floor(value);
        }
    }
    if (currency >= 10000) {
        change = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    } else if (currency > 0) {
        checkAndSet(change, 'H', half);
        checkAndSet(change, 'Q', quarters/25);
        checkAndSet(change, 'D', dimes / 10);
        checkAndSet(change, 'N', nickels / 5);
        checkAndSet(change, 'P', pennies);        
    }

    return change;
}
