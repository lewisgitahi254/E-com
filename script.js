// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // 1. Handle Color Buttons Click
  const colorButtons = document.querySelectorAll('.color-buttons button');
  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert(`You selected color: ${button.textContent}`);
      // You can add filtering logic here
    });
  });

  // 2. Email Subscribe Validation
  const emailInput = document.querySelector('footer input[type="email"]');
  const submitButton = document.querySelector('footer button');

  submitButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thanks for subscribing, ${email}!`);
      emailInput.value = '';
    }
  });

  // 3. Toggle Active Category Button
  const categoryButtons = document.querySelectorAll('.filter-buttons button');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // You can add category filtering here
    });
  });

});
