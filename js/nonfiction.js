const swiper = new Swiper(".proSwiper", {
  slidesPerView: "auto",   // Swiper가 슬라이드 width를 계산하지 않게 함
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  loop: 1,
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menuBtn');
  const dropCont = document.querySelector('.dropCont');

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 이벤트 전파 막기
    dropCont.classList.toggle('active');
  });

  // 바깥 클릭 시 닫기
  document.addEventListener('click', () => {
    dropCont.classList.remove('active');
  });
});

AOS.init();