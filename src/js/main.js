window.onload = () => {
    //add script tag with youtube api to the html page
    let tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    // modal window with iframe

    const modalWindow = document.querySelector('.modal');
    const buttonsModal = document.querySelectorAll('.button-play')
    const iFrame = document.getElementById('video') //iframe

    //set eventListener to the all view buttons through the loop. It is only for demonstration

    buttonsModal.forEach((item, i) => {
        item.addEventListener('click', () => {
            modalWindow.classList.add('active')
        })
    })
    //create the Player object

    let player;

    function onYouTubePlayerAPIReady() {
        // create the global player from the specific iframe (#video)
        player = new YT.Player('video', {
            events: {
                // call this function when player is ready to use
                'onReady': onPlayerReady
            }
        });
    }



    //create the “player ready” callback 

    function onPlayerReady() {
        player.pauseVideo();
    }

    //close modal window

    modalWindow.addEventListener('click', () => {
        console.log("close modal")
        console.log(player)
        if (player) onPlayerReady()
        modalWindow.classList.remove('active')
    })

    //collaps sidebar

    const asideContainer = document.querySelector('.aside')
    const collapsButton = document.querySelector('.aside__collaps')

    collapsButton.addEventListener('click', () => {
        asideContainer.classList.add('box-init')
    })

    //gamburger 

    const headerMobile = document.querySelector('.header__mobile')

    const gamburger = document.querySelector('.bars__container').addEventListener('click', function () {
        this.classList.toggle("change");
        headerMobile.classList.toggle('active')
    })
}

