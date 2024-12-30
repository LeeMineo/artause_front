// 상단 텝
function openTab(event, tabName) {
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => (content.style.display = 'none'));
  
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach((link) => link.classList.remove('active'));
  
    document.getElementById(tabName).style.display = 'block';
    if (event) {
      event.currentTarget.classList.add('active');
    }
  }
  
  //처음 화면은 무조건 예약내역 화면이 보이도록
  window.addEventListener('DOMContentLoaded', () => {
    const defaultTab = document.querySelector('.tab-link');
    const defaultContent = document.getElementById('예약내역');
  
    if (defaultTab && defaultContent) {
      defaultTab.classList.add('active'); 
      defaultContent.style.display = 'block'; 
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
  