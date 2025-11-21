document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menuBtn");
  const dropCont = document.querySelector(".dropCont");

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 이벤트 전파 막기
    dropCont.classList.toggle("active");
  });

  // 바깥 클릭 시 닫기
  document.addEventListener("click", () => {
    dropCont.classList.remove("active");
  });
});

const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
let current = 0;
let interval;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function startSlider() {
  interval = setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, 1000); // 1초마다 슬라이드
}

function stopSlider() {
  clearInterval(interval);
}

// 초기 상태
showSlide(current);
startSlider();

// 마우스 올리면 멈춤, 나가면 재시작
carousel.addEventListener("mouseenter", stopSlider);
carousel.addEventListener("mouseleave", startSlider);

/* AOS.init(); */
