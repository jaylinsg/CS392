function checkAge() {
  const input = document.getElementById('age-input').value.trim();
  const age = Number(input);
  const main = document.getElementById('main-content');
  const errorMsg = document.getElementById('error-message');
  const errorDiv = document.getElementById('error-content');

  // reset views
  main.style.visibility = 'hidden';
  errorDiv.style.visibility = 'hidden';

  // validations
  if (input === '' || isNaN(age)) {
    errorMsg.textContent = 'Please enter a number.';
  } else if (!Number.isInteger(age)) {
    errorMsg.textContent = 'Age must be an integer.';
  } else if (age < 0) {
    errorMsg.textContent = 'Age cannot be negative.';
  } else if (age < 18) {
    errorMsg.textContent = 'You must be at least 18.';
  } else if (age > 120) {
    errorMsg.textContent = 'Please enter a realistic age.';
  } else {
    // valid: show main content
    main.style.visibility = 'visible';
    return;
  }

  // if we reach here, there was an error
  errorDiv.style.visibility = 'visible';
}
