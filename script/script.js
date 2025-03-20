// OC와 DnD 카테고리 전환
function switchCategory(type) {
    let ocCategories = document.getElementById("oc-categories");
    let dndCategories = document.getElementById("dnd-categories");

    if (type === "oc") {
        ocCategories.style.display = "block";
        dndCategories.style.display = "none";
    } else if (type === "dnd") {
        ocCategories.style.display = "none";
        dndCategories.style.display = "block";
    }
}

// 대분류(캐릭터)를 클릭하면 해당 소분류만 열리고, 다른 대분류는 닫힘
function toggleCategory(category) {
    let allCategories = document.querySelectorAll(".subcategory");
    let allTitles = document.querySelectorAll(".category-item span");

    allCategories.forEach((cat) => {
        cat.style.display = "none";
    });

    allTitles.forEach((title) => {
        title.innerHTML = title.innerHTML.replace("📂", "📂"); // 아이콘 유지
    });

    let selectedCategory = document.getElementById(category + "-sub");
    let selectedTitle = document.getElementById(category + "-title");

    if (selectedCategory.style.display === "none" || selectedCategory.style.display === "") {
        selectedCategory.style.display = "block";
        selectedTitle.innerHTML = "📂 " + category.charAt(0).toUpperCase() + category.slice(1);
    } else {
        selectedCategory.style.display = "none";
    }
}

// 소분류 선택 시 ♥ 강조
function selectSubcategory(subcategory) {
    let subcategories = document.querySelectorAll(".subcategory span, #dnd-categories span");

    subcategories.forEach((sub) => {
        sub.innerHTML = "♡ " + sub.innerHTML.slice(2); // 모든 소분류를 ♡로 변경
    });

    let selectedSub = document.getElementById(subcategory);
    selectedSub.innerHTML = "♥ " + selectedSub.innerHTML.slice(2); // 선택된 소분류 ♥ 강조
}
