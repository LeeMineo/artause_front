// 상단 텝
function openTab(event, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach((content) => (content.style.display = 'none'));

  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach((link) => link.classList.remove('active'));

  document.getElementById(tabName).style.display = 'block';
  if (event) {
    event.currentTarget.classList.add('active');
  } else {
    // URL에서 직접 설정한 경우 탭 링크도 활성화
    const activeLink = document.querySelector(`.tab-link[onclick*="${tabName}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}

// DOMContentLoaded 이벤트에서 URL 쿼리 파라미터 확인 및 기본 탭 설정
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const tabFromUrl = params.get('tab'); // URL 쿼리 파라미터에서 'tab' 값 가져오기
  const defaultTabName = tabFromUrl || '예약내역'; // 'tab' 값이 없으면 기본값 설정

  const defaultContent = document.getElementById(defaultTabName);
  if (defaultContent) {
    openTab(null, defaultTabName); // 기본 탭 열기
  } else {
    console.error(`탭 이름 "${defaultTabName}"에 해당하는 컨텐츠를 찾을 수 없습니다.`);
  }
});


//공연 정보-기획의도 및 작품 줄거리 글자수 세기
  document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("description");
    const charCount = document.getElementById("charCount");
  
    textarea.addEventListener("input", () => {
      const currentLength = textarea.value.length;
      charCount.textContent = `${currentLength}/500`;

    // 500글자 초과 시 제한
        if (currentLength > 500) {
            textarea.value = textarea.value.substring(0, 500); // 500자로 자름
            charCount.textContent = "500/500"; // 고정
        }
    });
  });

//공연 정보-주요 크리에이티브 팀 소개 글자수 세기
  document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("teamDescription");
    const charCount = document.getElementById("teamCharCount");
  
    textarea.addEventListener("input", () => {
      const currentLength = textarea.value.length;
      charCount.textContent = `${currentLength}/500`;

    // 500글자 초과 시 제한
        if (currentLength > 500) {
            textarea.value = textarea.value.substring(0, 500); // 500자로 자름
            charCount.textContent = "500/500"; // 고정
        }
    });
  });
  

  

//파일 업로드 하는 칸들-파일 업로드 하면 파일명 뜨게 하는 거
  document.addEventListener("DOMContentLoaded", () => {
    const fileInputs = [
      { inputId: "planFile", displayId: "planFileName" },
      { inputId: "posterFile", displayId: "posterFileName" },
      { inputId: "businessLicense", displayId: "businessLicenseFileName" },
      { inputId: "promotionFile", displayId: "promotionFileName" },
    ];
  
    fileInputs.forEach(({ inputId, displayId }) => {
      const input = document.getElementById(inputId);
      const display = document.getElementById(displayId);
  
      input.addEventListener("change", () => {
        if (input.files.length > 0) {
          display.textContent = input.files[0].name; // 선택된 파일명 표시
        } else {
          display.textContent = ""; // 기본값으로 초기화
        }
      });
    });
  });
  

//첨부파일 및 추가 정보 - 기타 요청사항 글자수 세기
  document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("etc");
    const charCount = document.getElementById("etcCharCount");
  
    textarea.addEventListener("input", () => {
      const currentLength = textarea.value.length;
      charCount.textContent = `${currentLength}/500`; 
  
      // 500글자 초과 시 제한
      if (currentLength > 500) {
        textarea.value = textarea.value.substring(0, 500); // 500자로 자름
        charCount.textContent = "500/500"; // 고정
      }
    });
  });
  


//모달

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // 모달 열기
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
  });

  // 모달 닫기
  closeModalBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  // 모달 바깥 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
});
