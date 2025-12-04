
let lastNumber = null;
function shakeMagic8Ball() {
    const question = prompt("Ask a yes or no question:");

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please Ask A Question';
        document.getElementById('response-text').classList = 'lead text-danger fw-bold';
        document.getElementById('response-img').src = 'loripsum.jpg';
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
            image = "images/8ball_yes_definitely.png";
            color = "text-success";
            break;
        case 1:
            answer = "Ask again later.";
            image = "images/8ball_ask_again_later.png";
            color = "text-warning";
            break;
        case 2:
            answer = "Don't count on it.";
            image = "images/8ball_dont_count_on_it.png";
            color = "text-danger";
            break;
        case 3:
            answer = "It is certain.";
            image = "images/8ball_it_is_certain.png";
            color = "text-success";
            break;
        case 4:
            answer = "My sources say no.";
            image = "images/8ball_my_sources_say_no.png";
            color = "text-danger";
            break;
        case 5:
            answer = "Outlook good.";
            image = "images/8ball_outlook_good.png";
            color = "text-success";
            break;
        case 6:
            answer = "Reply hazy, try again.";
            image = "images/8ball_reply_hazy_try_again.png";
            color = "text-warning";
            break;
        case 7:
            answer = "Very doubtful.";
            image = "images/8ball_very_doubtful.png";
            color = "text-danger";
            break;
        case 8:
            answer = "Signs point to yes.";
            image = "images/8ball_signs_point_to_yes.png";
            color = "text-success";
            break;
    }
    document.getElementById('response-text').innerText = answer;
    document.getElementById('response-text').classList = `display-4 text-center text-bold-outline ${color}`;
    document.getElementById('response-img').src = image;
    document.getElementById('magic-button').classList.remove('button-below-image');
}