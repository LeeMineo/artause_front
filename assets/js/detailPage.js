//section1
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("../../assets/js/data/dummyData.json");
    const data = await response.json();

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const detailData = data.find((item) => item.id === Number(id));
    if (!detailData) {
      console.error("해당 ID에 대한 데이터를 찾을 수 없습니다.");
      return;
    }

    // 이미지 설정
    const mainImageElement = document.getElementById("main-image");
    const thumbnailsContainer = document.getElementById("thumbnails");
    const imageCounter = document.getElementById("image-counter");

    const { images } = detailData;

    if (images && images.length > 0) {
      // 첫 번째 이미지를 메인 이미지로 설정
      mainImageElement.src = images[0];
      imageCounter.textContent = `1 / ${images.length}`;

      // 최대 3개의 썸네일 추가
      images.slice(1, 3).forEach((image, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 2}`;
        thumbnail.addEventListener("click", () => {
          mainImageElement.src = image;
          imageCounter.textContent = `${index + 2} / ${images.length}`;
        });
        thumbnailsContainer.appendChild(thumbnail);
      });
    } else {
      mainImageElement.src = "/assets/images/default.jpg";
      imageCounter.textContent = `1 / 1`;
    }


    //section2
    // Section 2-1: 기본 정보 설정
    document.querySelector(".detail-basic-info .location").innerHTML = `
      <img src="/assets/images/list_locate.svg" alt="Location Icon">
      <span>${detailData.location}</span>
    `;
    document.querySelector(".detail-basic-info .title").textContent = detailData.title;
    document.querySelector(".detail-basic-info .rating").innerHTML = `
      <img src="/assets/images/list_star.svg" alt="Star Icon">
      ${detailData.rating} <span class="review-count">(${detailData.reviewCount})</span>
    `;
    document.querySelector(".detail-basic-info .categories").innerHTML = detailData.category
      .map((cat) => `<span class="tag">${cat}</span>`)
      .join("");

    // Section 2-2: 시설 정보 설정
    const facilitiesGrid = document.querySelector(".detail-facility-info .facilities-grid");
    const facilities = detailData.facilities;

    // 3개 이상이면 두 줄로 배치
    facilities.forEach((fac) => {
    const facilityHTML = `
        <div class="facility">
        <img src="/assets/images/nemo.svg" alt="Facility Icon">
        <span>${fac}</span>
        </div>
    `;
    facilitiesGrid.innerHTML += facilityHTML;
    });

    // CSS의 grid가 데이터 개수에 따라 자동으로 조정되도록 설정


    // Section 2-3: 호스트 정보 설정
    document.querySelector(".detail-host-info .host-name").innerHTML = `
      <h4>호스트:</h4>
      <span>${detailData.host}</span>
    `;
    document.querySelector(".detail-host-info .host-desc").textContent = detailData.hostInfo;

    // Section 2-4: 상세 정보 설정
    document.querySelector(".detail-detail-info p").textContent = detailData.details;
  } catch (error) {
    console.error("데이터 로드 중 오류 발생:", error);
  }
});



// Section 2-5: 예약 플로팅 박스
document.addEventListener("DOMContentLoaded", async () => {
    try {
        // JSON 데이터 가져오기
        const response = await fetch("../../assets/js/data/dummyData.json");
        const data = await response.json();

        // URL에서 ID 가져오기
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        // 해당 ID의 데이터 찾기
        const detailData = data.find((item) => item.id === Number(id));
        if (!detailData) {
            console.error("해당 데이터를 찾을 수 없습니다.");
            return;
        }

        // 가격 정보 설정
        const reservationBox = document.querySelector(".detail-reservation-box h3");
        reservationBox.innerHTML = `<span>${detailData.price}</span> 원/시간`;

        // 예약 폼 동작 설정
        const reservationForm = document.querySelector(".reservation-form");

        reservationForm.addEventListener("submit", (event) => {
            event.preventDefault(); // 기본 폼 제출 동작 막기

            const startDate = document.querySelector("#start-date").value;
            const endDate = document.querySelector("#end-date").value;
            const selectedTime = document.querySelector("#time-select").value;

            if (!startDate || !endDate || !selectedTime) {
                alert("모든 필드를 입력해주세요.");
                return;
            }

            alert(`대관 신청 완료\n시작 날짜: ${startDate}\n종료 날짜: ${endDate}\n시간: ${selectedTime}시간\n요금: ${selectedTime * parseInt(detailData.price.replace(",", ""))}원`);
            // 이후 서버로 데이터 전송 로직 추가
        });
    } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const startDateDisplay = document.getElementById("start-date-display");
    const endDateDisplay = document.getElementById("end-date-display");
  
    // 초기 날짜 설정
    startDateDisplay.textContent = "12.06 일";
    endDateDisplay.textContent = "12.06 일";
  
    // 날짜 변경 이벤트를 추가하고 싶다면 아래에 작성
    // 예: date picker를 클릭하여 변경할 수 있도록 연결
});


//대관 신청후 페이지 이동 
document.addEventListener("DOMContentLoaded", () => {
    const reservationButton = document.getElementById("reservationButton");
  
    reservationButton.addEventListener("click", () => {
      window.location.href = "/pages/venue/resurvPage.html"; // 페이지 이동
    });
  });
  