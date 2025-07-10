const numPeopleInput = document.getElementById('num-people');
const totalPriceElement = document.getElementById('total-price');
const perPersonPrice = 7560; // Replace with the actual price

numPeopleInput.addEventListener('input', calculateTotalPrice);

function calculateTotalPrice() {
  const numPeople = parseInt(numPeopleInput.value);
  const totalPrice = numPeople * perPersonPrice;
  totalPriceElement.textContent = `Total Price: Rs. ${totalPrice.toLocaleString('en-IN')}`;
}