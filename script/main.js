document.addEventListener("DOMContentLoaded", function () {
    let categoryContainer = document.querySelector(".category-container");
    let categories = document.querySelectorAll(".category-item, #dnd-categories li");

    // ✅ 카테고리가 하나라도 있으면 보이게 함
    if (categories.length > 0) {
        categoryContainer.style.display = "block";
    } else {
        categoryContainer.style.display = "none";
    }
});
