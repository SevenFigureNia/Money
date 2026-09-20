// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

// Create Three accounts
const sean = {
    name:"Sean",
    balance: 0 ,

    credit(amount){
        this.balance += amount;
    },

    description(){
        return `Owner ${this.name} has a balance of $${this.balance}.`;
    }
};

const brad = {
    name:"Brad",
    balance: 0 ,

    credit(amount){
        this.balance += amount;
    },

    description(){
        return `Owner ${this.name} has a balance of $${this.balance}.`;
    }
};

const georges = {
    name:"Georges",
    balance: 0 ,

    credit(amount){
        this.balance += amount;
    },

    description(){
        return `Owner ${this.name} has a balance of $${this.balance}.`;
    }
};

// stored the accounts in an array
const accounts = [sean, brad , georges];

// Credit %1000 to each
accounts.forEach(account => {
    account.credit(1000);
});

// Show each account
accounts.forEach (account => {
    console.log(account.description());
});

