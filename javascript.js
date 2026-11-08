// Floating hearts animation
const heartLayer = document.getElementById("ambient-hearts");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function makeFloatingHeart() {
    if (!heartLayer || reducedMotion) return;

    const heart = document.createElement("span");

    heart.className = "ambient-heart";
    heart.textContent = Math.random() > 0.45 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 19) + "px";

    const duration = 8 + Math.random() * 8;

    heart.style.animationDuration = duration + "s";

    heartLayer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

if (!reducedMotion) {
    for (let i = 0; i < 12; i++) {
        setTimeout(makeFloatingHeart, i * 450);
    }

    setInterval(makeFloatingHeart, 950);
}

// Reasons why I love you
const reasonReveal = document.getElementById("reason-reveal");

document.querySelectorAll(".reason-card").forEach(card => {

    card.addEventListener("click", () => {

        reasonReveal.textContent = card.dataset.message;

        card.querySelector(".reason-icon").textContent = "♥";

    });

});

// Surprise love message
const surpriseButton = document.getElementById("surprise-btn");

const surpriseMessage = document.getElementById("surprise-message");

surpriseButton.addEventListener("click", () => {

    surpriseMessage.textContent =
        "I love you, Patience. Today, tomorrow, and forever. ❤️";

    if (!reducedMotion) {
        for (let i = 0; i < 42; i++) {
            setTimeout(() => {
                popHearts(
                    window.innerWidth / 2,
                    window.innerHeight * 0.68,
                    1
                );
            }, i * 24);
        }
    }

});

// Heart explosion
function popHearts(x, y, count) {

    for (let i = 0; i < count; i++) {

        const heart = document.createElement("span");

        heart.className = "burst-heart";
        heart.textContent = "♥";

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        heart.style.setProperty(
            "--dx",
            (Math.random() - 0.5) * 300 + "px"
        );

        heart.style.setProperty(
            "--dy",
            (-70 - Math.random() * 230) + "px"
        );

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1900);
    }
}