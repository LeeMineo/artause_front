
  //listPage 데이터들 불러오기
  document.addEventListener('DOMContentLoaded', async () => {
    // JSON 파일 로드
    //const response = await fetch('../assets/js/data/dummyData.json');
    const response = await fetch('/assets/js/data/dummyData.json');
    const data = await response.json();
  
    // 카드 컨테이너 선택
    const container = document.getElementById('main-card-container'); // main- 추가
  
    // 데이터를 기반으로 카드 생성
    data.forEach(item => {
      const cardHTML = `
        <div class="main-card" data-detail-url="${item.detailPage}"> <!-- main- 추가 -->
            <div class="main-card-image"> <!-- main- 추가 -->
                <img src="${item.images[0]}" alt="${item.title}"> <!-- 첫 번째 이미지를 표시 -->
            </div>
            <div class="main-card-content"> <!-- main- 추가 -->
                <div class="main-card-tags"> <!-- main- 추가 -->
                    ${item.category.map(tag => `<span class="main-tag">${tag}</span>`).join('')} <!-- main- 추가 -->
                </div>
                <div class="main-card-info"> <!-- main- 추가 -->
                    <div class="main-card-info-left"> <!-- main- 추가 -->
                        <div class="main-card-title">${item.title}</div> <!-- main- 추가 -->
                        <div class="main-card-location"> <!-- main- 추가 -->
                            <img src="/assets/images/list_locate.svg" alt="Location Icon">
                            ${item.location}
                        </div>
                    </div>
                    <div class="main-card-info-right"> <!-- main- 추가 -->
                        <div class="main-rating"> <!-- main- 추가 -->
                            <img src="/assets/images/list_star.svg" alt="Star Icon">
                            ${item.rating}
                            <span class="main-review-count">(${item.reviewCount})</span> <!-- main- 추가 -->
                        </div>
                        <div class="main-price">${item.price.toLocaleString()} <span class="main-price-unit">원/시간</span></div> <!-- main- 추가 -->
                    </div>
                </div>
            </div>
        </div>
      `;
      container.innerHTML += cardHTML;
    });
  
    // 각 카드에 클릭 이벤트 추가
    document.querySelectorAll('.main-card').forEach(card => { // main- 추가
      card.addEventListener('click', () => {
        const detailUrl = card.getAttribute('data-detail-url');
        if (detailUrl) {
          window.location.href = detailUrl; // 디테일 페이지로 이동
        }
      });
    });
  });
  
