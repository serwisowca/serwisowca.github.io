/* Hamburger menu script */

    const menu = document.querySelector('.hamburger')
    const mobile_menu = document.querySelector('.mobile-nav')

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    });

    document.querySelectorAll(".mobile-nav a").forEach(n => n. 
        addEventListener("click", () => {
            menu.classList.remove("is-active");
            mobile_menu.classList.remove("is-active");
    }))

    const offer = document.querySelector('.offer')
    const offer1 = document.querySelector('.offer-1')
    const offer2 = document.querySelector('.offer-2')
    const dropbox = document.querySelector('.drop-info')
    const dropbox1 = document.querySelector('.drop-info-1')
    const dropbox2 = document.querySelector('.drop-info-2')
    const end = document.querySelector('.end')
    const end1 = document.querySelector('.end-1')
    const end2 = document.querySelector('.end-2')

    offer.addEventListener('click', function() {
        dropbox.classList.toggle('active')
    });

    offer1.addEventListener('click', function() {
        dropbox1.classList.toggle('active')
    });

    offer2.addEventListener('click', function() {
        dropbox2.classList.toggle('active')
    });

    end.addEventListener('click', function() {
        dropbox.classList.remove('active')
    })
    
    end1.addEventListener('click', function() {
        dropbox1.classList.remove('active')
    })
    
    end2.addEventListener('click', function() {
        dropbox2.classList.remove('active')
    })
    