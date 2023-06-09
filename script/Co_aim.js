// Text animation
const animatedText = document.querySelector('.animated-text');
animatedText.innerHTML = animatedText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const letters = document.querySelectorAll('.letter');
for (let i = 0; i < letters.length; i++) {
  letters[i].style.animationDelay = `${i * 0.1}s`;
}
