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

    // 모든 대분류를 닫고 ♡로 변경
    allCategories.forEach((cat) => {
        cat.style.display = "none";
    });

    allTitles.forEach((title) => {
        title.innerHTML = "♡ " + title.innerHTML.slice(2); // 기존 ♥를 ♡로 변경
    });

    let selectedCategory = document.getElementById(category + "-sub");
    let selectedTitle = document.getElementById(category + "-title");

    // 현재 클릭한 대분류만 열기/닫기
    if (selectedCategory.style.display === "none" || selectedCategory.style.display === "") {
        selectedCategory.style.display = "block";
        selectedTitle.innerHTML = "♥ " + selectedTitle.innerHTML.slice(2);
    } else {
        selectedCategory.style.display = "none";
        selectedTitle.innerHTML = "♡ " + selectedTitle.innerHTML.slice(2);
    }
}

// 소분류 선택 시 ♥ 강조
function selectSubcategory(subcategory, parentCategory) {
    let subcategories = document.querySelectorAll(`#${parentCategory}-sub span, #dnd-categories span`);

    // 모든 소분류를 ♡로 변경
    subcategories.forEach((sub) => {
        sub.innerHTML = "♡ " + sub.innerHTML.slice(2);
    });

    // 선택된 소분류만 ♥ 강조
    let selectedSub = document.getElementById(`${parentCategory}-${subcategory}`);
    selectedSub.innerHTML = "♥ " + selectedSub.innerHTML.slice(2);
}