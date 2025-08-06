let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("totalSlides").textContent = totalSlides;

function showSlide(index) {
	slides.forEach((slide) => slide.classList.remove("active"));
	slides[index].classList.add("active");

	document.getElementById("currentSlide").textContent = index + 1;
	document.getElementById("progressBar").style.width =
		`${((index + 1) / totalSlides) * 100}%`;

	// Update navigation buttons
	document.getElementById("prevBtn").disabled = index === 0;
	document.getElementById("nextBtn").disabled = index === totalSlides - 1;
}

function changeSlide(direction) {
	const newIndex = currentSlideIndex + direction;
	if (newIndex >= 0 && newIndex < totalSlides) {
		currentSlideIndex = newIndex;
		showSlide(currentSlideIndex);
	}
}

function toggleDetails(element) {
	const details = element.querySelector(".details");
	if (details) {
		if (details.style.display === "none") {
			details.style.display = "block";
			element.style.background = "rgba(255, 255, 255, 0.15)";
		} else {
			details.style.display = "none";
			element.style.background = "rgba(255, 255, 255, 0.05)";
		}
	}
}

// Keyboard navigation
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft") {
		changeSlide(-1);
	} else if (event.key === "ArrowRight") {
		changeSlide(1);
	}
});

// Initialize
showSlide(0);

// Auto-resize code blocks
function adjustCodeBlocks() {
	const codeBlocks = document.querySelectorAll(".code-block");
	codeBlocks.forEach((block) => {
		block.style.fontSize = window.innerWidth < 768 ? "0.9em" : "1em";
	});
}

function toggleFullscreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}


window.addEventListener("resize", adjustCodeBlocks);
adjustCodeBlocks();
