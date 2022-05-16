// Music Player
/** 
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Play random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
*/
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const volumeAdjust = $('#volumeAdjust')
const volumeIcon = $('.btn-volume')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    volumeValue: 0,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Pastlives',
            singer: 'Sapientdream',
            path: './assets/music/song1-pastlives.mp3',
            image: './assets/img/song1.jpg'
        },
        {
            name: 'Somebody that used to know',
            singer: 'Gotye ft. Kimbra',
            path: './assets/music/song2-somebodythatusedtoknow.mp3',
            image: './assets/img/song2.jpg'
        },
        {
            name: 'Heartbreak Anniversary',
            singer: 'Giveon',
            path: './assets/music/song3-heartbreakanniversary.mp3',
            image: './assets/img/song3.jpg'
        },
        {
            name: 'Dusk till dawn',
            singer: 'ZAYN & Sia',
            path: './assets/music/song4-dusktilldawn.mp3',
            image: './assets/img/song4.jpg'
        },
        {
            name: 'Before you go',
            singer: 'Lewis Capaldi',
            path: './assets/music/song5-beforeyougo.mp3',
            image: './assets/img/song5.jpg'
        },
        {
            name: 'Someone you loved',
            singer: 'Lewis Capaldi',
            path: './assets/music/song6-someoneyouloved.mp3',
            image: './assets/img/song6.jpg'
        },
        {
            name: 'Arcade',
            singer: 'Ducan Laurence',
            path: './assets/music/song7-arcade.mp3',
            image: './assets/img/song7.jpg'
        },
        {
            name: 'Until I found you',
            singer: 'Stephen Sanchez',
            path: './assets/music/song8-untilifoundyou.mp3',
            image: './assets/img/song8.jpg'
        }
    ],
    setConfig(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>   
                </div>
            </div>`
        })

        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents() {
        const _this = this //this = app
        const cdWidth = cd.offsetWidth

        //Xu ly CD quay / dung
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        //Xu ly phong to/ thu nho CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        //Xu ly click play audio
        playBtn.onclick = function() {
            if(_this.isPlaying) {   
                audio.pause()
            }else {
                audio.play()
            }
        }
        //Khi songs duoc play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        //Khi songs bi pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //Khi tien do bai hat thay doi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime/audio.duration * 100)
                progress.value = progressPercent
            }
        }
        //Xu ly khi tua song
        progress.oninput = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        //Xu ly tang/giam volume
        volumeAdjust.oninput = function(e) {
            _this.volumeValue = e.target.value
            audio.volume = _this.volumeValue / 100
            _this.handleVolumeIcon()
        }

        //Xu ly khi next song
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        //Xu ly khi prev song
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()

        }
    
        //Xu ly random song
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom',_this.isRandom)
            this.classList.toggle('active', _this.isRandom)
        }

        //Xu ly repeat song
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat',_this.isRepeat)
            repeatBtn.classList.toggle('active',_this.isRepeat)
        }
        
        //Xu ly next song khi audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
            }
        }

        //Xu ly play audio khi click vao playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.option')) {
                //xu ly khi click vao song
                if (songNode) {
                   _this.currentIndex = Number(songNode.dataset.index)
                   _this.loadCurrentSong()
                   _this.render()
                   audio.play()
                }

                //xu ly khi click vao song option
                if(e.target.closest('.option')) {
                    
                }
            }
        }
    },
    handleVolumeIcon() {
        const volume = this.volumeValue
        if(volume == 0) {
            volumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>'
        } else if(volume > 40) {
            volumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>'
        } else {
            volumeIcon.innerHTML = '<i class="fas fa-volume-down"></i>'
        }
    },
    scrollToActiveSong() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            })
        }, 300)
    },
    loadCurrentSong() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    loadConfig() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start() {
        // Gan cau hinh tu config vao ung dung
        this.loadConfig()

        //Dinh nghia cac thuoc tinh cho object
        this.defineProperties()

        //Lang nghe / xu ly cac su kien DOM 
        this.handleEvents()

        // Tai thong tin bai hat dau tien vao UI khi chay app
        this.loadCurrentSong()

        // Render playlist
        this.render()

        // Hien thi trang thai ban dau cua button repeat && random
        repeatBtn.classList.toggle('active', app.isRepeat)
        randomBtn.classList.toggle('active', app.isRandom)
    }
}

app.start()
