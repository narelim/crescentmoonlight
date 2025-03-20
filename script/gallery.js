document.addEventListener("DOMContentLoaded", function () {
    filterImages("all"); // 페이지 로드 시 모든 이미지 표시
});

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

// 이미지 클릭 시 큰 화면으로 보기 (Lightbox 기능)
function openLightbox(imgSrc) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imgSrc;
}

// Lightbox 닫기
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}