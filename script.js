const form = document.querySelector("form");

const message = document.createElement("p");
message.style.color = "#64b365f3";
message.style.marginTop = "10px";
message.style.fontWeight = "bold";

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    message.textContent = "Form has been submitted to Rijan";
    
    if (!form.contains(message)) {
        form.appendChild(message);
    }
});



//projects
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const video = card.querySelector('video');
    const img = card.querySelector('img.placeholder');

    if (img && video) {
        video.pause();
        card.addEventListener('mouseenter', () => {
            img.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            video.style.display = 'none';
            img.style.display = 'block';
        });
    } else if (video) {
        // Video only (Project 1)
        video.pause();
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});
