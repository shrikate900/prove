const boxes = document.querySelectorAll('.option-box');
const total = document.getElementById('total');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;

    const price = box.dataset.price;
    total.textContent = `$${price}.00 USD`;
  });
});
