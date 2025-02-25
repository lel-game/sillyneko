//----------------- If the enter button is pressed, it goes to the Main site
function goToMainWebsite() {
    window.location.href='https://sillyneko.nekoweb.org/html/main.html';
}
//-----------------


//----------------- Makes the enter button move upon pressing it + letting go
//                  So it looks cooler :3
function makeItGoDown() {
    document.getElementById('enterBox').style.transform = `translate(0.05vw, 0.2vw)`;
    document.getElementById('enterBox').style.background = `rgba(33, 33, 33, 0.9)`;
}

function makeItGoUp() {
    document.getElementById('enterBox').style.transform = `translate(0vw, 0vw)`;
    document.getElementById('enterBox').style.background = `rgba(37, 37, 37, 0.9)`;
}
//-----------------


//----------------- Gets the current Date and makes it available to call as: d = day | m = month | y = year
//					So I can make the splash say different things at different Dates
const date = new Date();

const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();
//-----------------


//----------------- Sentence Lists
const sentencesChristmas = [
    { text: '<b>Merry Christmas!</b>' },
    { text: '<b>HoHoHo! I sure Love Snow!</b>' },
    { text: '<b>Hope your Christmas is merry</b>ong~' }
];

const sentencesBirthday = [
    { text: '<b>Today is my Birthday!</b>' },
    { text: '<b>I am the Birthed!</b>' }
];

const sentencesJolly = [
    { text: '<b>Hope you\'re feeling Jolly!</b>', weight: 2.5 },
    { text: '<b>Such a Jolly season :3</b>', weight: 2.5 },
    { text: '<b>Hope you have Snow rn >w<</b>', weight: 2.5 },
    { text: '<b>Mmm warm coffee and a blanket in the snow is the best!</b>', weight: 2.5 }

];

const sentencesNormal = [
    { text: '<b>You are Valid!</b>' },
    { text: '<b>This splash text is cool!</b>' },
    { text: '<b>Go play Minecraft!</b>' },
    { text: '<b>Go play Terraria!</b>' },
    { text: '<b>Go play Outer Wilds!</b>' },
    { text: '<b>I love Nekoweb!</b>' },
    { text: '<b>Fun fact: Nuclear power is the Safest form of Electricity Generation to date!</b>', weight: 1.005 },
    { text: '<b>Programming is Awesome!</b>' },
    { text: "<b>My Fursona is Scott, he's a Protogen :3</b>", weight: 1.01 },
    { text: '<b>Furries are Awesome!</b>' },
    { text: '<b>I Love Murder Drones!</b>' },
    { text: '<b>Fun fact: This is the rarest splash text!</b>', weight: 0.025 },
    { text: '<b>Roblox is mainly bad, but sometimes there are some great games there!</b>' },
    { text: '<b>Go play Roblox Pressure!</b>' },
    { text: '<b>Go play Jet Lancer!</b>' },
    { text: '<b>This website is Super Coolio!</b>' },
    { text: '<b>You are like, really cool!</b>' },
    { text: '<b>Have a great Day!</b>' },
    { text: '<b>My BF is super short!</b>', weight: 0.6 },
    { text: '<b>Beep Boop!</b>' },
    { text: '<b>Go play Mouthwashing!</b>' },
    { text: '<b>Go play Vintage Story!</b>' },
    { text: '<b>If you didn\'t already, make a Website,<br>Go make one!</b>' },
    { text: '<b>Hydrate!</b>' },
    { text: '<b>This Website is a passion project!</b>' },
    { text: '<b>Say NO to Web3!</b>' },
    { text: '<b>Take back the Internet!</b>' },
    { text: '<b>Fun fact: Vintage Story is objectively better than Minecraft.</b>', weight: 0.3 },
    { text: '<b>Scott runs on Hopes, Coffee and Nuclear grade Thorium!</b>', weight: 0.8 },
    { text: `<b>Did you know?<br>Today is the ${d}.${m}.${y}</b>` },
    { text: '<b>I have another fursona, Mikey!<br>They are rather Bleached :O</b>', weight: 0.1 },
    { text: '<b>The early 2000\'s aesthetic is one of my favourites!</b>'},
    { text: '<b>Go play Helldivers 2</b>'},
    { text: '<b>Did you know?<br>You are extremely Awesome!</b>' },
];
//-----------------


//----------------- Determine Sentence List Based on Date
//                  So different dates can have different kind's of combinations with the sentence lists
let sentences;

if (m === 12 && d === 24) {
    sentences = sentencesChristmas;
} else if (m === 11 && d === 24) {
    sentences = sentencesBirthday;
} else if (m === 11 || m === 12) {
    sentences = sentencesNormal.concat(sentencesJolly);
} else {
    sentences = sentencesNormal;
}
//-----------------


//----------------- Random Weighted Sentence Selection
function getRandomSentence() {
    const ranges = [];
    let currentSum = 0;

    // Precompute cumulative ranges based on weight
    for (const sentence of sentences) {
        currentSum += sentence.weight || 1;
        ranges.push(currentSum);
    }

    const totalWeight = ranges[ranges.length - 1];
    const randomNum = Math.random() * totalWeight;

    // Binary search for efficiency
    for (let i = 0; i < ranges.length; i++) {
        if (randomNum < ranges[i]) {
            return sentences[i].text;
        }
    }

    // Whoops, code broke.
    return '<b>Whoopsie! Guess my Code doesn\'t work, ah well.</b>';
}


function displayRandomSentence() {
    document.getElementById('splash').innerHTML = getRandomSentence();
}

document.addEventListener('DOMContentLoaded', displayRandomSentence);
//-----------------
