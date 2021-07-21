  // // Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
  // // Some songs may be faulty due to broken links. Please replace another link so that it can be played

  // const $ = document.querySelector.bind(document);
  // const $$ = document.querySelectorAll.bind(document);

  // const PlAYER_STORAGE_KEY = "F8_PLAYER";

  // const player = $(".player");
  // const cd = $(".cd");
  // const heading = $("header h2");
  // const cdThumb = $(".cd-thumb");
  // const audio = $("#audio");
  // const playBtn = $(".btn-toggle-play");
  // const progress = $("#progress");
  // const prevBtn = $(".btn-prev");
  // const nextBtn = $(".btn-next");
  // const randomBtn = $(".btn-random");
  // const repeatBtn = $(".btn-repeat");
  // const playlist = $(".playlist");

  // const app = {
  //   currentIndex: 0,
  //   isPlaying: false,
  //   isRandom: false,
  //   isRepeat: false,
  //   config: {},
  //   // (1/2) Uncomment the line below to use localStorage
  //   // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  //   songs: [
  //     {
  //       name: "Click Pow Get Down",
  //       singer: "Raftaar x Fortnite",
  //       path: "https://mp3.vlcmusic.com/download.php?track_id=34737&format=320",
  //       image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
  //     },
  //     {
  //       name: "Tu Phir Se Aana",
  //       singer: "Raftaar x Salim Merchant x Karma",
  //       path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
  //       image:
  //         "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
  //     },
  //     {
  //       name: "Naachne Ka Shaunq",
  //       singer: "Raftaar x Brobha V",
  //       path:
  //         "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
  //       image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
  //     },
  //     {
  //       name: "Mantoiyat",
  //       singer: "Raftaar x Nawazuddin Siddiqui",
  //       path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
  //       image:
  //         "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
  //     },
  //     {
  //       name: "Aage Chal",
  //       singer: "Raftaar",
  //       path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
  //       image:
  //         "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
  //     },
  //     {
  //       name: "Damn",
  //       singer: "Raftaar x kr$na",
  //       path:
  //         "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
  //       image:
  //         "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
  //     },
  //     {
  //       name: "Feeling You",
  //       singer: "Raftaar x Harjas",
  //       path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
  //       image:
  //         "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
  //     }
  //   ],
  //   setConfig: function (key, value) {
  //     this.config[key] = value;
  //     // (2/2) Uncomment the line below to use localStorage
  //     // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  //   },
  //   render: function () {
  //     const htmls = this.songs.map((song, index) => {
  //       return `
  //                         <div class="song ${
  //                           index === this.currentIndex ? "active" : ""
  //                         }" data-index="${index}">
  //                             <div class="thumb"
  //                                 style="background-image: url('${song.image}')">
  //                             </div>
  //                             <div class="body">
  //                                 <h3 class="title">${song.name}</h3>
  //                                 <p class="author">${song.singer}</p>
  //                             </div>
  //                             <div class="option">
  //                                 <i class="fas fa-ellipsis-h"></i>
  //                             </div>
  //                         </div>
  //                     `;
  //     });
  //     playlist.innerHTML = htmls.join("");
  //   },
  //   defineProperties: function () {
  //     Object.defineProperty(this, "currentSong", {
  //       get: function () {
  //         return this.songs[this.currentIndex];
  //       }
  //     });
  //   },
  //   handleEvents: function () {
  //     const _this = this;
  //     const cdWidth = cd.offsetWidth;

  //     // Xử lý CD quay / dừng
  //     // Handle CD spins / stops
  //     const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
  //       duration: 10000, // 10 seconds
  //       iterations: Infinity
  //     });
  //     cdThumbAnimate.pause();

  //     // Xử lý phóng to / thu nhỏ CD
  //     // Handles CD enlargement / reduction
  //     document.onscroll = function () {
  //       const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //       const newCdWidth = cdWidth - scrollTop;

  //       cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
  //       cd.style.opacity = newCdWidth / cdWidth;
  //     };

  //     // Xử lý khi click play
  //     // Handle when click play
  //     playBtn.onclick = function () {
  //       if (_this.isPlaying) {
  //         audio.pause();
  //       } else {
  //         audio.play();
  //       }
  //     };

  //     // Khi song được play
  //     // When the song is played
  //     audio.onplay = function () {
  //       _this.isPlaying = true;
  //       player.classList.add("playing");
  //       cdThumbAnimate.play();
  //     };

  //     // Khi song bị pause
  //     // When the song is pause
  //     audio.onpause = function () {
  //       _this.isPlaying = false;
  //       player.classList.remove("playing");
  //       cdThumbAnimate.pause();
  //     };

  //     // Khi tiến độ bài hát thay đổi
  //     // When the song progress changes
  //     audio.ontimeupdate = function () {
  //       if (audio.duration) {
  //         const progressPercent = Math.floor(
  //           (audio.currentTime / audio.duration) * 100
  //         );
  //         progress.value = progressPercent;
  //       }
  //     };

  //     // Xử lý khi tua song
  //     // Handling when seek
  //     progress.onchange = function (e) {
  //       const seekTime = (audio.duration / 100) * e.target.value;
  //       audio.currentTime = seekTime;
  //     };

  //     // Khi next song
  //     // When next song
  //     nextBtn.onclick = function () {
  //       if (_this.isRandom) {
  //         _this.playRandomSong();
  //       } else {
  //         _this.nextSong();
  //       }
  //       audio.play();
  //       _this.render();
  //       _this.scrollToActiveSong();
  //     };

  //     // Khi prev song
  //     // When prev song
  //     prevBtn.onclick = function () {
  //       if (_this.isRandom) {
  //         _this.playRandomSong();
  //       } else {
  //         _this.prevSong();
  //       }
  //       audio.play();
  //       _this.render();
  //       _this.scrollToActiveSong();
  //     };

  //     // Xử lý bật / tắt random song
  //     // Handling on / off random song
  //     randomBtn.onclick = function (e) {
  //       _this.isRandom = !_this.isRandom;
  //       _this.setConfig("isRandom", _this.isRandom);
  //       randomBtn.classList.toggle("active", _this.isRandom);
  //     };

  //     // Xử lý lặp lại một song
  //     // Single-parallel repeat processing
  //     repeatBtn.onclick = function (e) {
  //       _this.isRepeat = !_this.isRepeat;
  //       _this.setConfig("isRepeat", _this.isRepeat);
  //       repeatBtn.classList.toggle("active", _this.isRepeat);
  //     };

  //     // Xử lý next song khi audio ended
  //     // Handle next song when audio ended
  //     audio.onended = function () {
  //       if (_this.isRepeat) {
  //         audio.play();
  //       } else {
  //         nextBtn.click();
  //       }
  //     };

  //     // Lắng nghe hành vi click vào playlist
  //     // Listen to playlist clicks
  //     playlist.onclick = function (e) {
  //       const songNode = e.target.closest(".song:not(.active)");

  //       if (songNode || e.target.closest(".option")) {
  //         // Xử lý khi click vào song
  //         // Handle when clicking on the song
  //         if (songNode) {
  //           _this.currentIndex = Number(songNode.dataset.index);
  //           _this.loadCurrentSong();
  //           _this.render();
  //           audio.play();
  //         }

  //         // Xử lý khi click vào song option
  //         // Handle when clicking on the song option
  //         if (e.target.closest(".option")) {
  //         }
  //       }
  //     };
  //   },
  //   scrollToActiveSong: function () {
  //     setTimeout(() => {
  //       $(".song.active").scrollIntoView({
  //         behavior: "smooth",
  //         block: "nearest"
  //       });
  //     }, 300);
  //   },
  //   loadCurrentSong: function () {
  //     heading.textContent = this.currentSong.name;
  //     cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
  //     audio.src = this.currentSong.path;
  //   },
  //   loadConfig: function () {
  //     this.isRandom = this.config.isRandom;
  //     this.isRepeat = this.config.isRepeat;
  //   },
  //   nextSong: function () {
  //     this.currentIndex++;
  //     if (this.currentIndex >= this.songs.length) {
  //       this.currentIndex = 0;
  //     }
  //     this.loadCurrentSong();
  //   },
  //   prevSong: function () {
  //     this.currentIndex--;
  //     if (this.currentIndex < 0) {
  //       this.currentIndex = this.songs.length - 1;
  //     }
  //     this.loadCurrentSong();
  //   },
  //   playRandomSong: function () {
  //     let newIndex;
  //     do {
  //       newIndex = Math.floor(Math.random() * this.songs.length);
  //     } while (newIndex === this.currentIndex);

  //     this.currentIndex = newIndex;
  //     this.loadCurrentSong();
  //   },
  //   start: function () {
  //     // Gán cấu hình từ config vào ứng dụng
  //     // Assign configuration from config to application
  //     this.loadConfig();

  //     // Định nghĩa các thuộc tính cho object
  //     // Defines properties for the object
  //     this.defineProperties();

  //     // Lắng nghe / xử lý các sự kiện (DOM events)
  //     // Listening / handling events (DOM events)
  //     this.handleEvents();

  //     // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
  //     // Load the first song information into the UI when running the app
  //     this.loadCurrentSong();

  //     // Render playlist
  //     this.render();

  //     // Hiển thị trạng thái ban đầu của button repeat & random
  //     // Display the initial state of the repeat & random button
  //     randomBtn.classList.toggle("active", this.isRandom);
  //     repeatBtn.classList.toggle("active", this.isRepeat);
  //   }
  // };

  // app.start();


  // đặt 2 biến cho querySelector
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const player = $('.player')
  const cd = $('.cd')
  const heading = $('header h2')
  const cdThumb = $('.cd-thumb')
  const audio = $('#audio')
  const playBtn = $('.btn-toggle-play')
  const progress = $('#progress')
  const btnNext = $('.btn-next')
  const btnPrev = $('.btn-prev')
  const btnRepet = $('.btn-repeat')
  const btnRandom = $('.btn-random')




  // đặt biến app là 1 object và sử lý các thao tác trong object
  const app = {
    currentIndex : 0, // đặt cho index đầu tiên của list song là 0
    isPlaying : false,
    isLoop:false,
    isRandom : false,
    songs: [
      {
        name: "Phi Điểu và Ve Sầu",
        singer: "Ngậm Nhiên",
        path: "./assets/music/song3.mp3",
        img: "./assets/img/song3.jpg"
      },

      {
        name: "Can't take my eyes off you",
        singer: "Joseph Vincent",
        path: "./assets/music/song1.mp3",
        img: "./assets/img/song1.jpg"
      },
    
      {
        name: "Always remember us this way",
        singer: "Lady Gaga",
        path: "./assets/music/song2.mp3",
        img: "./assets/img/song2.jpg"
      },
    
      {
        name: "Hoa nở không màu",
        singer: "Hoài Lâm",
        path: "./assets/music/song4.mp3",
        img: "./assets/img/song4.jpg"
      },
      {
        name: "Havana",
        singer: "Camila cabelo",
        path: "./assets/music/song5.mp3",
        img: "./assets/img/song5.jpg"
      },
      {
        name: "Ddu Ddu Ddu Ddu",
        singer: "BlackPink",
        path: "./assets/music/song6.mp3",
        img: "./assets/img/song6.jpg"
      },
      {
        name: "How you like that",
        singer: "BlackPink",
        path: "./assets/music/song7.mp3",
        img: "./assets/img/song7.jpg"
      }
    ],
    // hàm render ra danh sách bài hát
    render: function() {
      const htmls = this.songs.map((song, index) => {
        return `
          <div class="song ${index === this.currentIndex ? 'active' : ''}">
            <div class="thumb" style="background-image: url('${song.img}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
        `
      })
      // join thành chuỗi rồi đẩy vào html
      $('.playlist').innerHTML = htmls.join('');
    },
    // định nghĩa một property trả về bài hát đầu tiên
    defineProperties: function() {
      Object.defineProperty(this,'currentSong',{
        get: function(){
          return this.songs[this.currentIndex]
        }
      })
    },
    // sử lý các sự kiện
    handleEvents: function(){
      const _this = this
      // Xử lý phóng || to thu nhỏ CD
      const cdWidth = cd.offsetWidth // gán số width của .cd vào biến cdWidth
      document.onscroll = function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop // gán vào biến scrollTop bằng 1 trong 2 phương thức
        const newCdWidth = cdWidth - scrollTop  

        cd.style.width = newCdWidth > 0 ?  newCdWidth + 'px' : 0 // nếu newCdWidth < 0 thì cdWidth bằng 0(giải quyết vấn đề khi scroll quá nhanh, đĩa cd ko thu lại kịp)
        cd.style.opacity = newCdWidth / cdWidth
      }

      // Xử lý CD quay | dừng

      const cdThumbAnimate = cdThumb.animate([
        {transform: 'rotate(360deg)'}
      ],{
        duration: 10000, // 10sec
        iterations:Infinity
      })
      cdThumbAnimate.pause()

      // Xử lý khi click play
      playBtn.onclick = function(){
        if(_this.isPlaying){
          audio.pause()
        }
        else{
          audio.play()        
        }
      
      }

      // khi song được play
      audio.onplay = function(){
        _this.isPlaying = true
        player.classList.add('playing') 
        cdThumbAnimate.play() 
      }
      // khi song bị pause play
      audio.onpause= function(){
        _this.isPlaying = false
        player.classList.remove('playing')  
        cdThumbAnimate.pause() 
      }

      // khi tua bài 
      audio.ontimeupdate = function(){
        if(audio.duration){
        const progressPercent =  Math.floor(audio.currentTime / audio.duration * 100)
        progress.value = progressPercent
      }
      }
      progress.onchange =  function(e) {
        const seekTime = audio.duration / 100 * e.target.value
        audio.currentTime = seekTime
      }
      // bắt sự kiện next bài
      btnNext.onclick = function() {
        if(_this.isRandom){
          _this.playRandomSong()
        }
        else{
          _this.nextSong()
        }
        
        audio.play()
        _this.render()
      }
      // bắt sự kiện prev bài
      btnPrev.onclick = function() {
        if(_this.isRandom){
          _this.playRandomSong()
        }
        else{
          _this.prevSong()
        }
        audio.play()
        _this.render()
      }
      // bắt sự kiện random bài
      btnRandom.onclick = function() {
        _this.isRandom = !_this.isRandom
        btnRandom.classList.toggle('active',_this.isRandom)
      }
      // bắt sự kiện loop bài
      btnRepet.onclick = function() {
        _this.isLoop = !_this.isLoop  // set isLoop = ngược lại của chính nó,khi nó true,click thì thành false và ngược lại
        btnRepet.classList.toggle('active',_this.isLoop)
        
      }
      audio.onended = function () {
        if(_this.isLoop){
          audio.play()
        }
        else{
          btnNext.click()
        }
      }
      
      
    },
    // hiển thị bài hát hiện tại
    loadCurrentSong: function () {


      heading.textContent = this.currentSong.name
      cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
      audio.src = this.currentSong.path
    
    },
    //  next song
    nextSong: function() {
      this.currentIndex++
      if(this.currentIndex >= this.songs.length){
        this.currentIndex = 0
      }
      this.loadCurrentSong()
    },
    //  prev song
    prevSong: function() {
      this.currentIndex--
      if(this.currentIndex < 0){
        this.currentIndex = this.songs.length - 1
      }
      this.loadCurrentSong()
    },
  
    // khi random song
    playRandomSong: function() {
      let newRadomIndex;
      do {
        newRadomIndex = Math.floor(Math.random() * this.songs.length);
      } while (newRadomIndex === this.currentIndex);

      this.currentIndex = newRadomIndex;
      this.loadCurrentSong();
    },
   
  
    start: function() {
      // Định nghĩa các thuộc tính cho object
      this.defineProperties()
      // Lắng nghe, sử lý sự kiện
      this.handleEvents()
      //Tải thông tin bài hát đầu  tiên vào ui khi chạy ứng dụng
      this.loadCurrentSong()

      // Render playlist
      this.render()
    }
  }
  app.start()