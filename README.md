# Age Validation System with Motivational Messages

An interactive system that validates the user's age and returns a personalized message based on their age range.

## 🌟 Key Features

- **Smart age validation**:
  - Only accepts whole numeric values
  - Valid range: 1-120 years
  - Specific error messages for each case

- **Personalization**:
  - Optional name for customized messages
  - 5 age categories with unique messages

- **User experience**:
  - Simple interface using native pop-up windows
  - Real-time validation
  - Loop until valid input is received

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - Vanilla JavaScript (ES6)

## 📂 Project Structure

```
/
├── readme.md                   # Project description
├── index.html                  # Main container
└── interactive_system.js       # Application logic
```

## 🚀 How to Run

1. Clone or download the repository
2. Open the `index.html` file in your web browser
3. Follow the instructions:
   - Enter your name (optional)
   - Input your age (number between 1 and 120)
4. Receive your personalized motivational message

## 🎨 Customization

To modify the messages, edit the `motivationalMessage` function:

```javascript
// Modification example
if (age < 13) {
    return `Hello${displayName}!\nNew personalized message here`;
}
```

## 📝 Possible Improvements

- Add a more elaborate graphical interface
- Implement data persistence
- Add more age categories
- Internationalization (multi-language support)

## ✉️ Contact

Developed by Adrian Villegas
