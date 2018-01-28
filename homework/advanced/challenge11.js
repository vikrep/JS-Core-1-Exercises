/*Challenge 9: Bank

Create an object called bank. It should have an accounts property that is an array of 
two objects with the properties name and balance.

Give you bank object the following functions:

- Total // sum of both accounts balances
- Largest // the value of highest balance
- Average // the average balance over all of your accounts

If you can think of any other functions that it would be useful for your bank to have 
then add them and test your answers on the console.
e.g you can add interest to all of your accounts.



*/
var bank = {
    account: [
    { name: "joe" , balance: 100 },
    { name: "bill", balance: 350 }
    ],
    total: function(){
        return this.account[0].balance + this.account[1].balance;
    },
    largest: function(){
        return Math.max(this.account[0].balance , this.account[1].balance);
    },
    average: function(){
        return (this.account[0].balance + this.account[1].balance) / 2;
    }
    
    }
    
    console.log(bank.largest());