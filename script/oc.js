function showCharacter(character) {
    let characterInfo = document.getElementById("character-info");

    let characterData = {
        adeline: "<h3>Adeline Ross</h3><p>🍷 우아한 분위기의 캐릭터</p>",
        vanessa: "<h3>Vanessa White</h3><p>🦋 부드럽고 자유로운 캐릭터</p>",
        kalina: "<h3>Kalina Heloise</h3><p>🎙 예술적인 감성을 지닌 캐릭터</p>"
    };

    characterInfo.innerHTML = characterData[character] || "<p>캐릭터 정보가 없습니다.</p>";
}