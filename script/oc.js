// 초기 로딩 시 현재 경로 기반으로 열기
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname; // 예: /oc/adeline/info.html 또는 /oc.html
  const parts = path.split("/").filter(p => p); // ['oc', 'adeline', 'info']

  if (parts.length >= 3) {
    const category = parts[1]; // adeline
    const sub = parts[2].replace('.html', '');
    toggleCategory(category);
    highlightSubcategory(sub, category);
  } else if (parts.length === 1 && parts[0] === 'oc.html') {
    toggleCategory('oc');
    highlightSubcategory('home', 'oc');
  }
});
  
  function toggleCategory(category) {
  // 모든 카테고리의 selected 클래스 제거
  document.querySelectorAll('.category-item').forEach(item => {
    item.classList.remove('selected');
  });

  // 선택한 카테고리에 selected 클래스 추가
  const selectedCategory = document.getElementById(`${category}-title`).closest('.category-item');
  if (selectedCategory) {
    selectedCategory.classList.add('selected');
  }

  // 해당 카테고리의 서브카테고리 표시
  document.querySelectorAll('.subcategory').forEach(sub => {
    sub.style.display = 'none';
  });
  const currentSub = document.getElementById(`${category}-sub`);
  if (currentSub) {
    currentSub.style.display = 'block';
  }
}

  function highlightSubcategory(sub, category) {
    // 모든 소분류 초기화
    document.querySelectorAll('.subcategory span').forEach(span => {
      span.classList.remove('selected');
      const heart = span.querySelector('.littleheart');
      if (heart) heart.textContent = '♡';
    });

    // 해당 소분류 선택
    const selected = document.getElementById(`${category}-${sub}`);
    if (selected) {
      selected.classList.add('selected');
      const heart = selected.querySelector('.littleheart');
      if (heart) heart.textContent = '♥';
    }
  }
  
    // 해당 대분류 열기
    const subList = document.getElementById(`${category}-sub`);
    const titleSpan = document.getElementById(`${category}-title`);
    const item = titleSpan?.closest('.category-item');
    const heart = titleSpan?.querySelector('.littleheart');
  
  
    if (subList) subList.style.display = 'block';
    if (item) item.classList.add('selected');
    if (heart) heart.textContent = '♥';
  
  function selectSubcategory(sub, category) {
    window.location.href = `/oc/${category}/${sub}.html`;
  }