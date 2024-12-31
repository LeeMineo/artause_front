//모달

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn"); // 데스크톱 로그인 버튼
    const mobileLoginBtn = document.getElementById("mobileloginBtn"); // 모바일 로그인 버튼
    const loginModal = document.getElementById("loginModal"); // 로그인 모달
    const closeModalBtn = document.getElementById("closeModalBtn"); // 모달 닫기 버튼
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay"); // 모바일 메뉴 오버레이
  
    // 모달 열기 - 데스크톱 로그인 버튼
    if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "flex"; // 모달 표시
      });
    }
  
    // 모달 열기 - 모바일 로그인 버튼
    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "flex"; // 모달 표시
        mobileMenuOverlay.classList.remove("active"); // 모바일 메뉴 닫기
      });
    }
  
    // 모달 닫기 버튼
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        loginModal.style.display = "none"; // 모달 숨기기
      });
    }
  
    // 모달 바깥 클릭 시 닫기
    window.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.style.display = "none"; // 모달 숨기기
      }
    });
  });
  
  

// 햄버거 메뉴 동작
  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    const mobileMenuContent = document.querySelector(".mobile-menu-content");
    const closeBtn = document.getElementById("mobileMenuCloseBtn");
  
  // 햄버거 버튼 클릭 시 메뉴 열기
  hamburgerBtn.addEventListener("click", () => {
    mobileMenuOverlay.classList.add("active"); // 오버레이 활성화
    setTimeout(() => {
      mobileMenuContent.classList.add("active"); // 메뉴 활성화
    }, 10); // DOM 업데이트 이후 실행 (애니메이션 자연스럽게)
  });
  
    // 닫기 버튼 클릭 시 메뉴 닫기
    closeBtn.addEventListener("click", () => {
      mobileMenuContent.classList.remove("active"); // 메뉴 비활성화
      setTimeout(() => {
        mobileMenuOverlay.classList.remove("active"); // 오버레이 비활성화
      }, 300); // 슬라이드 애니메이션 이후
    });
  
    // 오버레이 클릭 시 메뉴 닫기
    mobileMenuOverlay.addEventListener("click", (e) => {
      if (e.target === mobileMenuOverlay) {
        mobileMenuContent.classList.remove("active");
        setTimeout(() => {
          mobileMenuOverlay.classList.remove("active");
        }, 300);
      }
    });
  });
  