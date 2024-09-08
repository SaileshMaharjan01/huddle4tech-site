document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementById('menu-button')
  var mobileMenu = document.getElementById('mobile-menu')

  menuButton.addEventListener('click', function () {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden')
      mobileMenu.classList.remove('translate-y-[-100%]')
      mobileMenu.classList.add('translate-y-0')
    } else {
      mobileMenu.classList.add('translate-y-[-100%]')
      mobileMenu.classList.remove('translate-y-0')
      setTimeout(function () {
        mobileMenu.classList.add('hidden')
      }, 300) // Matches the transition duration
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0
  const navbar = document.querySelector('nav')

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      // Downscroll
      navbar.style.transform = 'translateY(-100%)'
    } else {
      // Upscroll
      navbar.style.transform = 'translateY(0)'
    }

    lastScrollTop = scrollTop
  })
})
