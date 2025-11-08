document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const menu = document.querySelector(".menu");

  logo.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    const open = menu.classList.contains("active");
    menu.setAttribute("aria-hidden", !open);
  });

  // (선택) 외부 클릭 시 닫기
  document.addEventListener("click", (e) => {
    if (!logo.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
      menu.setAttribute("aria-hidden", "true");
    }
  });
});