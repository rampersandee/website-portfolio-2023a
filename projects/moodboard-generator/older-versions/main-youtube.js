// // GLOBALS
const emojiClick = document.querySelectorAll('button')

// CLICK
emojiClick.forEach(stanEmoji =>
    stanEmoji.addEventListener('click', () => {

        // CONDITIONALS
        let artistName = stanEmoji.innerText == '🐝' ? 'Beyoncé' :
            stanEmoji.innerText == '🐴' ? 'Megan Thee Stallion' :
                stanEmoji.innerText == '🧜‍♀️' ? 'Azealia Banks' :
                    stanEmoji.innerText == '🛥️' ? 'Rihanna' :
                        stanEmoji.innerText == '🦄' ? 'Nicki Minaj'
                            : ''
        console.log(artistName)

        // FETCH REQUEST 1
        // lastFM API key
        const lastfmUrl = `https://ws.audioscrobbler.com//2.0/?method=artist.getInfo&artist=${artistName}&api_key=4005c207aac54bb00accd00ee3e0b258&format=json`
        fetch(lastfmUrl)
            .then(res => res.json())
            .then(artistData => {
                console.log(artistData)

                // VARIABLES 1
                let stanResults = document.querySelector('#stan-results')
                let bioResults = document.querySelector('#bio-results')
                let ytResults = document.querySelector('#yt-results')
                // let albumResults = document.querySelector('#album-results').innerText

                //HTML RESULTS 1
                stanResults.innerHTML = '✨' + artistName + '✨'
                bioResults.innerText = artistData.artist.bio.content

                // FETCH REQUEST 2
                let youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDH188KNvO_ZOIKDuD_7jTPfG1O1h090C8&type=video&order=viewCount&order=relevance&q=${artistName}`
                fetch(youtubeUrl)
                    .then(res => res.json())
                    .then(videoData => {
                        console.log(videoData)

                        // VARIABLES 2
                        let randomResults = Math.floor(Math.random() * 5) + 1
                        console.log(videoData)
                        let ytVideo = videoData.items[randomResults].id.videoId
                        ytResults.src = `https://www.youtube.com/embed/${ytVideo}`

                    })
            })
    })
)