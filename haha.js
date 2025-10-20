const giftBox = document.querySelector('.gift-box');
const lid = document.querySelector('.gift-lid');
const heart = document.querySelector('.heart');

giftBox.addEventListener('click', () => {
  // Mở nắp hộp
  lid.style.transform = 'rotateX(100deg) translateY(-60px)';
  lid.style.transition = 'transform 0.6s ease';

  // Hiện trái tim
  setTimeout(() => {
    heart.classList.add('show-heart');
  }, 500);

  // Lắc nhẹ hộp
  giftBox.style.transform = 'scale(1.1)';
  setTimeout(() => {
    giftBox.style.transform = 'scale(1)';
  }, 300);
});