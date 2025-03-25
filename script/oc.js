function toggleCategory(category) {
    // 모든 서브카테고리 닫기
    document.querySelectorAll('.subcategory').forEach(sub => {
      sub.style.display = 'none';
    });
  
    // 모든 대분류에서 'selected' 제거하고 하트 초기화
    document.querySelectorAll('.category-item').forEach(item => {
      item.classList.remove('selected');
      const heart = item.querySelector('.littleheart');
      if (하트) heart.textContent = '♡';
    });
  
    // 현재 선택된 대분류 열기
    const currentSub = document.getElementById(`${category}-sub`);
    const currentItem = document.querySelector(`#${category}-title`)?.closest('.category-item');
    const heartIcon = document.querySelector(`#${category}-title .littleheart`);
  
    if (currentSub) currentSub.style.display = 'block';
    if (currentItem) currentItem.classList.add('selected');
    if (heartIcon) heartIcon.textContent = '♥';
  }
  
  function selectSubcategory(sub, category) {
    // 페이지 이동
    window.location.href = `/oc/${category}/${sub}.html`;
  }