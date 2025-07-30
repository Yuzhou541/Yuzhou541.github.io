document.addEventListener('DOMContentLoaded', () => {
  const covers = [
    'cover_1.jpg',
    'cover_2.png',
    'cover_3.jpg',
    'cover_4.jpg',
    'cover_5.jpg',
    'cover_6.png',
    'cover_7.png',
    'cover_8.jpg',
    'cover_9.jpg',
    'cover_10.jpg',
    'cover_11.jpg',
    'cover_12.jpg',
    'cover_13.jpg',
    'cover_14.jpg',
    'cover_15.jpg',
    'cover_16.png',
    'cover_17.jpg',
    'cover_18.jpg',
    'cover_19.jpg',
    'cover_20.jpg',
    'cover_21.jpg',
    'cover_22.jpg',
    'cover_23.jpg',
    'cover_24.jpg',
    'cover_25.jpg',
    'cover_26.jpg',
    'cover_27.jpg',
    'cover_28.jpg',
    'cover_29.jpg',
    'cover_30.jpg',
    'cover_31.jpg',
    'cover_32.jpg',
    'cover_33.jpg',
    'cover_34.jpg',
    'cover_35.jpg',
    'cover_36.jpg',
    'cover_37.jpg'
  ];
  const chosen = covers[Math.floor(Math.random() * covers.length)];
  const coverEl = document.getElementById('cover');
  coverEl.style.backgroundImage = `url('./assets/images/${chosen}')`;
  coverEl.style.backgroundRepeat = 'no-repeat';
  coverEl.style.backgroundPosition = 'center center';
  coverEl.style.backgroundSize = 'cover';
  coverEl.classList.add('visible');
});
