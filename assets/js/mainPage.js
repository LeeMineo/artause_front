//mainPage - Section1 이미지 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    const totalSlides = images.length;
    const totalSlidesElement = document.getElementById('totalSlides');
    const currentSlideElement = document.getElementById('currentSlide');
  
    let currentSlide = 0;
  
    // 총 이미지 개수 표시
    totalSlidesElement.textContent = totalSlides;
  
    // 슬라이드 전환 함수
    const changeSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides; // 현재 슬라이드 업데이트
      const carouselImages = document.querySelector('.carousel-images');
      carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`; // 슬라이드 이동
      currentSlideElement.textContent = currentSlide + 1; // 현재 슬라이드 번호 업데이트
    };
  
    // 5초마다 자동 전환
    setInterval(changeSlide, 5000);
  });
  
  
  //mainPage - Section2 데이터들 불러오기
  document.addEventListener('DOMContentLoaded', async () => {
    // JSON 파일 로드
    const response = await fetch('../assets/js/data/dummyData.json');
    const data = await response.json();

    // 카드 컨테이너 선택
    const container = document.getElementById('card-container');

    // 데이터를 기반으로 카드 생성
    data.forEach(item => {
        const cardHTML = `
        <div class="card" data-detail-url="${item.detailPage}">
            <div class="card-image">
                <img src="${item.images[0]}" alt="${item.title}"> <!-- 첫 번째 이미지를 표시 -->
            </div>
            <div class="card-content">
                <div class="card-tags">
                    ${item.category.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-info">
                    <div class="card-info-left">
                        <div class="card-title">${item.title}</div>
                        <div class="card-location">
                            <img src="../assets/images/list_locate.svg" alt="Location Icon">
                            ${item.location}
                        </div>
                    </div>
                    <div class="card-info-right">
                        <div class="rating">
                            <img src="../assets/images/list_star.svg" alt="Star Icon">
                            ${item.rating}
                            <span class="review-count">(${item.reviewCount})</span>
                        </div>
                        <div class="price">${item.price.toLocaleString()} <span class="price-unit">원/시간</span></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += cardHTML;
    });

    // 각 카드에 클릭 이벤트 추가
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const detailUrl = card.getAttribute('data-detail-url');
            if (detailUrl) {
                window.location.href = detailUrl; // 디테일 페이지로 이동
            }
        });
    });
});
