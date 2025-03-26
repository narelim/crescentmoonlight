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
  
  // 대분류만 제어
  function toggleCategory(category) {
    // 모든 대분류 초기화
    document.querySelectorAll('.category-item').forEach(item => {
      item.classList.remove('selected');
      const heart = item.querySelector('.littleheart');
      if (heart) heart.textContent = '♡';
    });

    // 서브카테고리 모두 닫기
    document.querySelectorAll('.subcategory').forEach(sub => {
      sub.style.display = 'none';
    });

    // 선택한 대분류 열기
    const subList = document.getElementById(`${category}-sub`);
    const titleSpan = document.getElementById(`${category}-title`);
    const item = titleSpan?.closest('.category-item');
    const heart = titleSpan?.querySelector('.littleheart');

    if (subList) subList.style.display = 'block';
    if (item) item.classList.add('selected');
    if (heart) heart.textContent = '♥';
  }


  // 소분류만 제어
function highlightSubcategory(sub, category) {
  // 모든 소분류 초기화
  document.querySelectorAll('.subcategory span').forEach(span => {
    span.classList.remove('selected');
    const heart = span.querySelector('.littleheart');
    if (heart) heart.textContent = '♡';
  });

  // 선택한 소분류 적용
  const selected = document.getElementById(`${category}-${sub}`);
  if (selected) {
    selected.classList.add('selected');
    const heart = selected.querySelector('.littleheart');
    if (heart) heart.textContent = '♥';
  }
}
  
function selectSubcategory(sub, category) {
  if (category === 'oc' && sub === 'home') {
    window.location.href = '/oc.html'; // Main 홈은 별도 처리
  } else {
    window.location.href = `/oc/${category}/${sub}.html`;
  }
}