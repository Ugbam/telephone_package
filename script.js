class Observer {
    update(phoneNumber) {
        throw new Error('Method update() must be implemented');
    }
}

class PrintNumberObserver extends Observer {
    update(phoneNumber) {
        console.log(`Phone number dialed: ${phoneNumber}`);
    }
}

class DialNotificationObserver extends Observer {
    update(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
}


class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        if (!this.phoneNumbers.has(number)) {
            this.phoneNumbers.add(number);
            console.log(`Phone number ${number} added.`);
        } else {
            console.log(`Phone number ${number} already exists.`);
        }
    }

    removePhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.phoneNumbers.delete(number);
            console.log(`Phone number ${number} removed.`);
        } else {
            console.log(`Phone number ${number} not found.`);
        }
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Cannot dial ${number}: Number not found.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }
}


const telephone = new Telephone();
telephone.addPhoneNumber("2347086596432");
telephone.addPhoneNumber("08024585672");

const printObserver = new PrintNumberObserver();
const dialObserver = new DialNotificationObserver();

telephone.addObserver(printObserver);
telephone.addObserver(dialObserver);

telephone.dialPhoneNumber("08024585672");

telephone.dialPhoneNumber("0000000000000");


telephone.removePhoneNumber("2347086596432");

telephone.dialPhoneNumber("2347086596432");