function findZodiac() {
    const zodiacImages = {
        "Aquarius": "content/images/Aquarius.png",
        "Pisces": "content/images/Pisces.png",
        "Aries": "content/images/Aries.png",
        "Taurus": "content/images/Taurus.png",
        "Gemini": "content/images/Gemini.png",
        "Cancer": "content/images/Cancer.png",
        "Leo": "content/images/Leo.png",
        "Virgo": "content/images/Virgo.png",
        "Libra": "content/images/Libra.png",
        "Scorpio": "content/images/Scorpio.png",
        "Sagittarius": "content/images/Sagittarius.png",
        "Capricorn": "content/images/Capricorn.png"
    };

    const dob = new Date(document.getElementById('dob').value);
    const day = dob.getDate();
    const month = dob.getMonth() + 1; // getMonth() returns 0-11
    let zodiac = '';

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiac = 'Aquarius';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiac = 'Pisces';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = 'Aries';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = 'Gemini';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = 'Leo';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = 'Virgo';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = 'Libra';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = 'Scorpio';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = 'Sagittarius';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = 'Capricorn';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "Your zodiac sign is: " + zodiac;
    resultDiv.classList.add('show');

    const imageContainer = document.querySelector('.image-container');
    const zodiacImage = document.getElementById('zodiacImage');
    zodiacImage.src = zodiacImages[zodiac];
    imageContainer.classList.add('show');
    zodiacImage.classList.add('show');
}
