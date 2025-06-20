/**
 * Interactive Motivational Messages System
 * Enhanced version that reuses the original messages
 */

// Object containing motivational messages organized by age group
const MOTIVATIONAL_MESSAGES = {
  children: {
    range: [1, 12],
    message: (name) => `Hello${name}!\nAt your young age, every day is an adventure. Never stop exploring and learning!`
  },
  teen: {
    range: [13, 17],
    message: (name) => `Hello${name}!\nYou're at a key stage to discover your passions. Take every opportunity and keep moving forward!`
  },
  young: {
    range: [18, 29],
    message: (name) => `Hello${name}!\nYouth is the best time to create your path. Don't fear challenges and chase your dreams!`
  },
  adult: {
    range: [30, 59],
    message: (name) => `Hello${name}!\nYour experience is valuable. Keep growing and show what you're capable of!`
  },
  senior: {
    range: [60, 120],
    message: (name) => `Hello${name}!\nYour wisdom inspires those around you. Age is just a number to keep learning!`
  }
};

/**
 * Validates if the input is a whole number within the allowed range
 */
function validateAge(enteredAge) {
  if (!enteredAge || !/^\d+$/.test(enteredAge)) {
    return { valid: false, message: "Please enter a positive whole number." };
  }
  
  const age = parseInt(enteredAge, 10);
  
  if (age < 1 || age > 120) {
    return { valid: false, message: "Age must be between 1 and 120 years." };
  }
  
  return { valid: true, age };
}

/**
 * Requests age from user until a valid value is entered
 */
function getValidAge() {
  let result;
  do {
    const input = prompt("Please enter your age (between 1 and 120):");
    result = validateAge(input);
    if (!result.valid) {
      alert(result.message);
    }
  } while (!result.valid);
  
  return result.age;
}

/**
 * Determines the age group and returns the corresponding message
 */
function getMotivationalMessage(name, age) {
  const displayName = name ? ` ${name}` : "";
  
  for (const group in MOTIVATIONAL_MESSAGES) {
    const [min, max] = MOTIVATIONAL_MESSAGES[group].range;
    if (age >= min && age <= max) {
      return MOTIVATIONAL_MESSAGES[group].message(displayName);
    }
  }
  
  // Default message (shouldn't occur due to previous validation)
  return `Hello${displayName}!\nThank you for sharing your age with us. Keep moving forward!`;
}

/**
 * Main function that orchestrates the program flow
 */
function startInteractiveSystem() {
  const userName = prompt("What's your name? (optional)");
  const userAge = getValidAge();
  const finalMessage = getMotivationalMessage(userName, userAge);
  
  alert(finalMessage);
}

// Start the program
startInteractiveSystem();
