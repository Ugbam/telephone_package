# Telephone_package


This project implements a **Telephone class** that demonstrates the **Observer Design Pattern** using **JavaScript**. The telephone class can **add**, **remove**, and **dial phone numbers** while **notifying observers** whenever a phone number is dialed.


## Project Overview

The application includes the following components:

1. **Telephone Class**: Manages phone numbers and notifies observers.
2. **Observers**: Two observers react to phone dial events.
3. **Observer Pattern**: Implements the classic observer pattern.



## Features

- Add and remove phone numbers.
- Dial a phone number if it's already added.
- Notify observers when a number is dialed.
- Two observers:
  - One prints the dialed number.
  - Another prints a custom message.


## How to Run the Project

1. Clone the repository:
    git clone https://github.com/Ugbam/telephone_package.git

2. Navigate to the project directory:
    cd telephone_package

3. Open the `index.html` file in a web browser.

4. Open the **browser console** (F12) to see the observers' output.


## Code Structure

### Classes

- **Telephone**: Handles phone numbers and observers.
- **Observer (Interface)**: Defines the observer interface.
- **PrintNumberObserver**: Logs the dialed phone number.
- **DialNotificationObserver**: Logs a custom message when dialing.

### Key Methods

- `addPhoneNumber(number)`: Adds a phone number.
- `removePhoneNumber(number)`: Removes a phone number.
- `dialPhoneNumber(number)`: Dials a number and notifies observers.
- `addObserver(observer)`: Adds an observer.
- `removeObserver(observer)`: Removes an observer.

---

## Sample Output

```plaintext
Phone number 2347086596432 added.
Phone number 08024585672 added.
Dialing 08024585672...
Phone number dialed: 08024585672
Now Dialing 08024585672
Cannot dial 0000000000000: Number not found.
Phone number 2347086596432 removed.
Cannot dial 2347086596432: Number not found.
```


## How It Works

1. Add phone numbers.
2. Register observers.
3. Dial a valid phone number.
4. Both observers are notified.


