// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
// 1b
p1.innerText = jokeJS1.setup;
// 1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// 2a
const jokeJS2 = axios.get(`https://github.com/15Dkatz/official_joke_api`)
    .then(data => {
        console.log(`Question 2 Was Successful`);
        p3.innerText = data.setup;
        p4.innerText = data.punchline;
    })
    // Catching error for a failed request
    .catch(err => {
        console.log(`rejected`);
        console.log(err);
    });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 3b
async function jokeFunc() {
    try {
        // 3a
        const jokeJS3 = await axios.get(`https://github.com/15Dkatz/official_joke_api`);

        // 3c
        p5.innerText = jokeJS3.setup;
        p6.innerText = jokeJS3.punchline;
        // 3d
    } catch (err) {
        console.log(`rejected`);
    }
}
jokeFunc();
// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
const baseEndPoint = `https://www.tvmaze.com/api`;
const id = `38963`;
const season = `1`;
const number = `8`;

// 4b
const episodeSearchURL = `shows/${season}/episodebynumber?season=${second}&number${number}`;
// 4c
const fullEndPoint = baseEndPoint + episodeSearchURL;

// 4d
async function tvMazeFunc() {
    // 4f
    try {
        const mando = await axios.get(fullEndPoint);
        // 4e
        p7.innerText = mando.fullEndPoint;
        // 4f
    } catch (err) {
        console.log(`rejected`);
    }
}
tvMazeFunc();