function toggleCategory(category) {
    const allSubcategories = document.querySelectorAll('.subcategory');
    const allHearts = document.querySelectorAll('.category-item .littleheart');
  
    // 모두 닫고, 모든 하트를 비우기
    allSubcategories.forEach(ul => ul.classList.remove('open'));
    allHearts.forEach(heart => heart.textContent = '♡');
  
    const currentSub = document.getElementById(`${category}-sub`);
    const currentHeart = document.querySelector(`#${category}-title .littleheart`);
  
    if (currentSub) {
      const isOpen = currentSub.classList.contains('open');
  
      if (!isOpen) {
        currentSub.classList.add('open');
        if (currentHeart) currentHeart.textContent = '♥'; // 하트 색칠
      }
    }
  }