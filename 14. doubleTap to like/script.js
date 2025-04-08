// Select all image containers
const imageContainers = document.querySelectorAll('#img');

// Loop through each container and add functionality
imageContainers.forEach((container) => {
    const heart = container.querySelector('#heart');

    // Add double-click event listener to each container
    container.addEventListener('dblclick', () => {
        // Show the heart
        heart.classList.remove('hidden');
        heart.style.animation="grow 0.5s ease-in-out forwards";

        // Hide the heart after 1 second
        setTimeout(() => {
            heart.classList.add('hidden');
        }, 1000);
    });
});
