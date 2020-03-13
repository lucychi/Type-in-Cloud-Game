const axios = require('axios');
const bodyParser = require('body-parser');
// require("babel-core/register");
// require("babel-polyfill");


const leadButton = document.getElementById('leadButt');
leadButton.addEventListener('click', () => {
    fetch('http://localhost:3000/leaderboard/top10', { method: 'GET'})
    .then(res => {
        console.log(res);
    })
});

playerlist = [
    {
        firstName: 'Jun',
        lastName: 'Zhen',
        email: 'zhenj3@uw.edu',
        score: 94
    },
    {
        firstName: 'Lucy',
        lastName: 'Chi',
        email: 'lchi@uw.edu',
        score: 15
    },
    {
        firstName: 'Pratit',
        lastName: 'Vithalani',
        email: 'pvithalani@uw.edu',
        score: 30
    },
    {
        firstName: 'Jeremy',
        lastName: 'Tanjund',
        email: 'jTanjund3@uw.edu',
        score: 90
    },
    {
        firstName: 'Donghee',
        lastName: 'Lee',
        email: 'dlee@uw.edu',
        score: 88
    },
    {
        firstName: 'Anwar',
        lastName: 'BAMF',
        email: 'abamf@uw.edu',
        score: 94
    },
    {
        firstName: 'Robert',
        lastName: 'Dimpsey',
        email: 'dimpsey@uw.edu',
        score: 45
    }
];

const logButton = document.getElementById('logButt');
logButton.addEventListener('click', () => {
    axios.post('http://localhost:3000/log/player', playerlist)
    .then(res => {
        return res.data;
    })
    .then(resText => {
        console.log(resText.firstName);
        console.log(resText.lastName);
    });
});