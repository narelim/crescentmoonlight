function filterImages(category) {
    let images = document.querySelectorAll(".gallery img");

    images.forEach((img) => {
        // 모든 이미지를 숨김
        img.style.display = "none";

        // "전체" 버튼 클릭 시 모든 이미지를 보이게 설정
        if (category === "all") {
            img.style.display = "block";
        } 
        // 선택한 카테고리와 이미지의 클래스가 일치하면 보이도록 설정
        else if (img.classList.contains(category)) {
            img.style.display = "block";
        }
    });
}
