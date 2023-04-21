// Отримання елементів DOM
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.querySelector('.modal');

// Додавання event listener до кнопки "Відкрити"
openModal.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Додавання event listener до кнопки "Закрити"
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Закриття модального вікна по кліку за його межі
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
