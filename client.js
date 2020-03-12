const axios = require('axios');

const leadButton = document.getElementById('leadButt');
leadButton.addEventListener('click', () => {
    fetch('http://localhost:3000/leaderboard/top10', { method: 'GET'})
    .then(res => {
        return res.text();
    }).then(resText => {
        console.log(resText);
    })
})


const logButton = document.getElementById('logButt');
logButton.addEventListener('click', () => {
    axios.post('http://localhost:3000/log/player', {
        lastName: 'Zhen',
        firstName: 'Jun'
    })
    .then(res => {
        return res.text();
    })
    .then(resText => {
        console.log(resText);
    });
});
// axios.post('http://localhost:9000/addbook', {
//         email: email,
//         bookName: book.volumeInfo.title,
//         bookId: book.id,
//         bookUrl: book.volumeInfo.previewLink,
//         bookAuthor: book.volumeInfo.authors
//       })
//         .then(function (response) {
//           console.log(response); //debug?
//           window.confirm('Book added to your list!');
//         })
//         .catch(function (error) {
//           console.log(error); //debug?
//         });
// const logEvent = logButton.addEventListener('click', async event => {
//     event.preventDefault();
//     const player = {
//         lastName:"Zhen"
//     }

//     await logPlayer(player);
// });

// async function logPlayer(player) {
//     await axios.post('http://localhost:3000/log/player', player)
//     .then((res) => {
//         console.log(res);
//     });
// }