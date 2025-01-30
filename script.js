// script.js

document.addEventListener("DOMContentLoaded", () => {
    const storiesContainer = document.querySelector(".stories-container");
    const addStoryButton = document.getElementById("add-story");
    const uploadModal = document.getElementById("upload-modal");
    const closeModal = document.querySelector(".close");
    const imageUpload = document.getElementById("image-upload");
    const storyViewer = document.getElementById("story-viewer");
    const closeViewer = document.querySelector(".close-viewer");
    const storyImage = document.getElementById("story-image");

    let stories = JSON.parse(localStorage.getItem("stories")) || [];

    // Load stories from localStorage
    function loadStories() {
        storiesContainer.innerHTML = '<div class="story" id="add-story"><div class="add-button">+</div></div>';
        stories.forEach((story, index) => {
            const storyElement = document.createElement("div");
            storyElement.className = "story";
            storyElement.innerHTML = `<img src="${story.image}" alt="Story ${index}">`;
            storyElement.addEventListener("click", () => viewStory(story.image));
            storiesContainer.insertBefore(storyElement, addStoryButton);
        });
    }

    // Open upload modal
    addStoryButton.addEventListener("click", () => {
        uploadModal.style.display = "flex";
    });

    // Close upload modal
    closeModal.addEventListener("click", () => {
        uploadModal.style.display = "none";
    });

    // Handle image upload
    imageUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageBase64 = event.target.result;
                const story = {
                    image: imageBase64,
                    timestamp: new Date().getTime(),
                };
                stories.push(story);
                localStorage.setItem("stories", JSON.stringify(stories));
                loadStories();
                uploadModal.style.display = "none";
            };
            reader.readAsDataURL(file);
        }
    });

    // View story
    function viewStory(image) {
        storyImage.src = image;
        storyViewer.style.display = "flex";
    }

    // Close story viewer
    closeViewer.addEventListener("click", () => {
        storyViewer.style.display = "none";
    });

    // Swipe functionality (left/right)
    let touchStartX = 0;
    let touchEndX = 0;

    storyViewer.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    storyViewer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            console.log("Swiped left");
        } else if (touchEndX > touchStartX) {
            // Swipe right
            console.log("Swiped right");
        }
    }

    // Remove stories older than 24 hours
    function cleanUpStories() {
        const now = new Date().getTime();
        stories = stories.filter((story) => now - story.timestamp < 24 * 60 * 60 * 1000);
        localStorage.setItem("stories", JSON.stringify(stories));
        loadStories();
    }

    // Initial load and cleanup
    loadStories();
    cleanUpStories();
});