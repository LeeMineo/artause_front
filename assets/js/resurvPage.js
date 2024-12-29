// 실시간으로 입력 데이터를 업데이트
document.getElementById("reserve-date").addEventListener("input", function () {
    document.getElementById("display-date").textContent = this.value;
  });
  
  document.getElementById("reserve-time").addEventListener("input", function () {
    document.getElementById("display-time").textContent = this.value;
  });
  
  document.getElementById("reserve-people").addEventListener("input", function () {
    document.getElementById("display-people").textContent = this.value;
  });
  


  document.getElementById("payButton").addEventListener("click", function () {

    // const section2Right = document.getElementById("section2-right");

    // section2Right.innerHTML = `
    //     <div class="profile">
    //     <div class="profile-image">
    //         <img src="https://via.placeholder.com/60" alt="프로필 이미지">
    //     </div>
    //     <div class="profile-info">
    //         <p class="profile-name">허지연</p>
    //         <p class="profile-email">dhjsfh@gmail.com</p>
    //     </div>
    //     </div>
    //     <hr />
    //     <button class="profile-edit-btn">프로필 수정하기</button>
    // `;


    // 모든 탭 선택
    const tabs = document.querySelectorAll(".section1-container .tab");

    // 모든 탭에서 active 클래스 제거
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  
    // "예약완료" 탭에 active 클래스 추가
    const completeTab = document.getElementById("tab-completed");
    completeTab.classList.add("active");
  
    // section3의 input, select, textarea 비활성화
    const elements = document.querySelectorAll(".section3 input, .section3 select, .section3 textarea");
    elements.forEach((element) => {
      element.style.backgroundColor = "#EDEDED";
      element.style.pointerEvents = "none";
      element.setAttribute("disabled", true);
    });
  
    // 결제 버튼 비활성화
    this.disabled = true;
  });
  

 