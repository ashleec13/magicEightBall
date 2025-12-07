
// USED THE BUILT IN AI
let lastNumber = null;
let lastMouseX = 0;
let lastMouseY = 0;
let lastMouseTime = 0;
let shakeThreshold = 9;
let shakeTimeout;

// Track mouse movement for shake detection
document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();
    const deltaX = Math.abs(e.clientX - lastMouseX);
    const deltaY = Math.abs(e.clientY - lastMouseY);
    const deltaTime = currentTime - lastMouseTime;
    
    // Calculate velocity
    if (deltaTime > 0) {
        const velocity = (deltaX + deltaY) / deltaTime;
        
        // Detect shake: fast movement
        if (velocity > shakeThreshold) {
            // Clear previous shake timeout
            clearTimeout(shakeTimeout);
            
            // Set a timeout to prevent multiple triggers in quick succession
            shakeTimeout = setTimeout(() => {
                shakeMagic8Ball();
            }, 100);
        }
    }
    
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    lastMouseTime = currentTime;
});

// USED THE BUILT IN AI
function shakeMagic8Ball() {
    const question = prompt("Ask a yes or no question for the witch:");

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please Ask A Question';
        document.getElementById('response-text').classList = 'lead text-danger fw-bold';
        document.getElementById('response-img').src = 'images/loripsum.jpg';
        document.getElementById('magic-button').classList.add('button-below-image');
        return;
    }

    if (!question.trim()) {
        alert('Please ask a valid question.');
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 9);
    } while (randomNumber === lastNumber);
    lastNumber = randomNumber;
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes, definitely.";
            image = "images/caldronResponse 2/caldronResponse-1.png";
            color = "text-success";
            break;
        case 1:
            answer = "Ask again later.";
            image = "images/caldronResponse 2/caldronResponse-2.png";
            color = "text-warning";
            break;
        case 2:
            answer = "Don't count on it.";
            image = "images/caldronResponse 2/caldronResponse-3.png";
            color = "text-danger";
            break;
        case 3:
            answer = "It is certain.";
            image = "images/caldronResponse 2/caldronResponse-4.png";
            color = "text-success";
            break;
        case 4:
            answer = "My sources say no.";
            image = "images/caldronResponse 2/caldronResponse-5.png";
            color = "text-danger";
            break;
        case 5:
            answer = "Outlook good.";
            image = "images/caldronResponse 2/caldronResponse-6.png";
            color = "text-success";
            break;
        case 6:
            answer = "Reply hazy, try again.";
            image = "images/caldronResponse 2/caldronResponse-7.png";
            color = "text-warning";
            break;
        case 7:
            answer = "Very doubtful.";
            image = "images/caldronResponse 2/caldronResponse-8.png";
            color = "text-danger";
            break;
        case 8:
            answer = "Signs point to yes.";
            image = "images/caldronResponse 2/caldronResponse-9.png";
            color = "text-success";
            break;
    }
    document.getElementById('response-text').innerText = answer;
    document.getElementById('response-text').classList = `display-4 text-center text-bold-outline ${color}`;
    document.getElementById('response-img').src = image;
    document.getElementById('magic-button').classList.remove('button-below-image');
}