document.addEventListener('DOMContentLoaded', () => {
  // 첫 번째 슬라이드 (menuSlide) 초기화
  const menuSwiper = new Swiper(".menuSlide", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopedSlides: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 두 번째 슬라이드 (gongReci-swiper) 초기화
  const gongReciSwiper = new Swiper('.gongReci-swiper', {
    loop: true,
    speed: 800,
    effect: 'fade', // <-- 이 부분을 추가
    fadeEffect: {
        crossFade: true // <-- 교차 효과를 위해 이 옵션도 추가
    }
  });

  // 모든 토글 버튼 클릭 시 해당 슬라이드로 이동
  const allToggles = document.querySelectorAll('.toggle-btn');
  allToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(btn.dataset.slide);
      if (!isNaN(index)) {
        gongReciSwiper.slideToLoop(index);
      }
    });
  });

  // 슬라이드 전환 시 활성 토글 업데이트
  gongReciSwiper.on('slideChange', () => {
    const realIndex = gongReciSwiper.realIndex;
    allToggles.forEach(btn => {
      const btnIndex = parseInt(btn.dataset.slide);
      btn.classList.toggle('active', btnIndex === realIndex);
    });
  });

  // 초기 활성화 상태 설정
  allToggles.forEach(btn => {
    if (parseInt(btn.dataset.slide) === gongReciSwiper.realIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const openSwiper = new Swiper(".openSlide", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopedSlides: 7,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});