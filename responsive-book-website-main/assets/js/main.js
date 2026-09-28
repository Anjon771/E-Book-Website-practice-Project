/*=============== BOOK CATALOG DATA ===============*/
const BOOKS_CATALOG = [
  {
    id: '1',
    title: 'The Art of Stillness',
    author: 'Pico Iyer',
    genre: 'Philosophy',
    price: 11.99,
    oldPrice: 19.99,
    img: 'assets/img/book-1.png',
    pages: '192 pages · Hardcover & ePub',
    synopsis: 'An intimate exploration of why going nowhere—sitting still and cultivating quiet reflection—is our most urgent necessity in an accelerated world.'
  },
  {
    id: '2',
    title: 'Design as Art',
    author: 'Bruno Munari',
    genre: 'Design',
    price: 13.50,
    oldPrice: 22.00,
    img: 'assets/img/book-2.png',
    pages: '224 pages · Illustrated Edition',
    synopsis: 'One of the twentieth century’s most influential manifestos on visual form, everyday objects, typography, and the role of the modern designer.'
  },
  {
    id: '3',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    genre: 'Creativity',
    price: 14.99,
    oldPrice: 24.99,
    img: 'assets/img/book-3.png',
    pages: '432 pages · Clothbound & ePub',
    synopsis: 'A luminous meditation on where creativity comes from, how to tune in to source inspiration, and how to bring meaningful work into the world.'
  },
  {
    id: '4',
    title: 'Ways of Seeing',
    author: 'John Berger',
    genre: 'Criticism',
    price: 10.99,
    oldPrice: 18.50,
    img: 'assets/img/book-4.png',
    pages: '176 pages · Critical Monograph',
    synopsis: 'A landmark work of visual culture examining how we look at paintings, photography, and advertising—and how perspective shapes power.'
  },
  {
    id: '5',
    title: 'Invisible Cities',
    author: 'Italo Calvino',
    genre: 'Fiction',
    price: 11.49,
    oldPrice: 19.00,
    img: 'assets/img/book-5.png',
    pages: '165 pages · Literary Classic',
    synopsis: 'Through imaginary conversations between Marco Polo and Kublai Khan, Calvino conjures fifty-five miraculous cities of memory, desire, and time.'
  },
  {
    id: '6',
    title: 'In Praise of Shadows',
    author: 'Jun’ichirō Tanizaki',
    genre: 'Aesthetics',
    price: 9.99,
    oldPrice: 16.99,
    img: 'assets/img/book-6.png',
    pages: '96 pages · Pocket Monograph',
    synopsis: 'A poetic essay on Japanese architecture, lacquerware, paper, and the quiet beauty found in dim light and patina.'
  },
  {
    id: '7',
    title: 'Thinking in Systems',
    author: 'Donella H. Meadows',
    genre: 'Science',
    price: 12.99,
    oldPrice: 21.50,
    img: 'assets/img/book-7.png',
    pages: '240 pages · Technical Primer',
    synopsis: 'A concise and crucial book that brings systems thinking out of the realm of computers and equations and into tangible human problem-solving.'
  },
  {
    id: '8',
    title: 'The Poetics of Space',
    author: 'Gaston Bachelard',
    genre: 'Architecture',
    price: 13.99,
    oldPrice: 22.99,
    img: 'assets/img/book-8.png',
    pages: '288 pages · Architectural Philosophy',
    synopsis: 'A lyrical phenomenological journey through houses, attics, drawers, shells, and corners—revealing how intimate spaces shape our imagination.'
  },
  {
    id: '9',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    genre: 'Classics',
    price: 8.99,
    oldPrice: 15.99,
    img: 'assets/img/book-9.png',
    pages: '254 pages · Annotated Translation',
    synopsis: 'Private Stoic reflections written on campaign, offering timeless clarity on resilience, duty, and composure amidst uncertainty.'
  },
  {
    id: '10',
    title: 'The Timeless Way',
    author: 'Christopher Alexander',
    genre: 'Urbanism',
    price: 15.49,
    oldPrice: 26.00,
    img: 'assets/img/book-10.png',
    pages: '552 pages · Archival Hardcover',
    synopsis: 'The foundational theory of pattern languages in architecture and software, exploring the nameless quality that makes places feel alive.'
  }
]

/*=============== TOAST HELPER ===============*/
const toastContainer = document.getElementById('toast-container')
const showToast = (message) => {
  if (!toastContainer) return
  const toast = document.createElement('div')
  toast.className = 'toast'
  toast.innerHTML = `<i class="ri-checkbox-circle-line"></i><span>${message}</span>`
  toastContainer.appendChild(toast)
  setTimeout(() => {
    toast.remove()
  }, 2600)
}

/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content'),
      searchInput = document.getElementById('search-input'),
      searchResults = document.getElementById('search-results'),
      searchForm = document.getElementById('search-form')

const renderSearchResults = (query = '') => {
  if (!searchResults) return
  const q = query.trim().toLowerCase()
  const matches = q
    ? BOOKS_CATALOG.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genre.toLowerCase().includes(q)
      )
    : BOOKS_CATALOG.slice(0, 4)

  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="search__result-item"><span>No books matching "${query}"</span></div>`
    return
  }

  searchResults.innerHTML = matches.map(book => `
    <div class="search__result-item">
      <div class="search__result-left">
        <img src="${book.img}" alt="${book.title}" class="search__result-img" referrerpolicy="no-referrer">
        <div>
          <span class="search__result-meta">${book.genre} · ${book.author}</span>
          <h4 class="search__result-title">${book.title}</h4>
          <span class="search__result-price">$${book.price.toFixed(2)}</span>
        </div>
      </div>
      <button type="button" class="button add-to-cart-btn" data-book-id="${book.id}" style="padding: 0.55rem 1rem; font-size: 0.8rem;">Add</button>
    </div>
  `).join('')
}

if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
        renderSearchResults(searchInput ? searchInput.value : '')
        if (searchInput) setTimeout(() => searchInput.focus(), 100)
    })
}

if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value)
  })
}

if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (searchInput) renderSearchResults(searchInput.value)
  })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content'),
      loginForm = document.getElementById('login-form'),
      loginSignupLink = document.getElementById('login-signup-link'),
      forgotPassLink = document.getElementById('forgot-pass-link')

if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginContent.classList.remove('show-login')
    showToast('Signed in to your Reader Account')
    loginForm.reset()
  })
}

if (loginSignupLink) {
  loginSignupLink.addEventListener('click', () => {
    loginContent.classList.remove('show-login')
  })
}

if (forgotPassLink) {
  forgotPassLink.addEventListener('click', (e) => {
    e.preventDefault()
    showToast('Password reset link sent to your email')
  })
}

/*=============== SHOPPING CART & QUICK VIEW ===============*/
let cart = [
  { ...BOOKS_CATALOG[0], qty: 1 },
  { ...BOOKS_CATALOG[2], qty: 1 }
]

const cartButton = document.getElementById('cart-button'),
      cartClose = document.getElementById('cart-close'),
      cartOverlay = document.getElementById('cart-overlay'),
      cartItemsEl = document.getElementById('cart-items'),
      cartCountEl = document.getElementById('cart-count'),
      cartTotalEl = document.getElementById('cart-total'),
      cartCheckoutBtn = document.getElementById('cart-checkout'),
      quickviewModal = document.getElementById('quickview-modal'),
      quickviewContent = document.getElementById('quickview-content')

const renderCart = () => {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  if (cartCountEl) cartCountEl.textContent = String(totalQty)
  if (cartTotalEl) cartTotalEl.textContent = `$${totalPrice.toFixed(2)}`

  if (!cartItemsEl) return
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div class="cart-empty">Your reading bag is currently empty.</div>`
    return
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.title}" class="cart-item__img" referrerpolicy="no-referrer">
      <div class="cart-item__info">
        <h4 class="cart-item__title">${item.title}</h4>
        <span class="cart-item__price">$${(item.price * item.qty).toFixed(2)}</span>
        <div class="cart-item__controls">
          <button type="button" class="cart-item__qty-btn" data-cart-action="dec" data-book-id="${item.id}">-</button>
          <span class="cart-item__qty">${item.qty}</span>
          <button type="button" class="cart-item__qty-btn" data-cart-action="inc" data-book-id="${item.id}">+</button>
        </div>
      </div>
    </div>
  `).join('')
}

const addToCart = (bookId) => {
  const book = BOOKS_CATALOG.find(b => b.id === String(bookId))
  if (!book) return
  const existing = cart.find(item => item.id === book.id)
  if (existing) {
    existing.qty += 1
  } else {
    cart.push({ ...book, qty: 1 })
  }
  renderCart()
  showToast(`Added "${book.title}" to your bag`)
}

const openQuickView = (bookId) => {
  const book = BOOKS_CATALOG.find(b => b.id === String(bookId))
  if (!book || !quickviewModal || !quickviewContent) return
  quickviewContent.innerHTML = `
    <button type="button" class="quickview__close" id="quickview-close" aria-label="Close preview">
      <i class="ri-close-line"></i>
    </button>
    <img src="${book.img}" alt="${book.title}" class="quickview__img" referrerpolicy="no-referrer">
    <div>
      <span class="section__kicker">${book.genre} · ${book.author}</span>
      <h3 class="login__title">${book.title}</h3>
      <p class="quickview__synopsis">${book.synopsis}</p>
      <p class="quickview__specs">${book.pages}</p>
      <div class="featured__prices" style="justify-content: flex-start; margin-bottom: 1rem;">
        <span class="featured__discount">$${book.price.toFixed(2)}</span>
        <span class="featured__price">$${book.oldPrice.toFixed(2)}</span>
      </div>
      <button type="button" class="button add-to-cart-btn" data-book-id="${book.id}">Add To Reading Bag</button>
    </div>
  `
  quickviewModal.classList.add('show-quickview')
}

if (cartButton && cartOverlay) {
  cartButton.addEventListener('click', () => cartOverlay.classList.add('show-cart'))
}
if (cartClose && cartOverlay) {
  cartClose.addEventListener('click', () => cartOverlay.classList.remove('show-cart'))
}
if (cartOverlay) {
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) cartOverlay.classList.remove('show-cart')
  })
}
if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Add a book to your bag before checkout')
      return
    }
    cart = []
    renderCart()
    cartOverlay.classList.remove('show-cart')
    showToast('Order #1048 confirmed! Digital editions ready.')
  })
}
if (quickviewModal) {
  quickviewModal.addEventListener('click', (e) => {
    if (e.target === quickviewModal || e.target.closest('#quickview-close')) {
      quickviewModal.classList.remove('show-quickview')
    }
  })
}

document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-to-cart-btn')
  if (addBtn) {
    e.preventDefault()
    addToCart(addBtn.dataset.bookId)
    if (quickviewModal) quickviewModal.classList.remove('show-quickview')
    return
  }

  const viewBtn = e.target.closest('.action-view-btn')
  if (viewBtn) {
    e.preventDefault()
    openQuickView(viewBtn.dataset.bookId)
    return
  }

  const wishBtn = e.target.closest('.action-wish-btn')
  if (wishBtn) {
    e.preventDefault()
    wishBtn.classList.toggle('is-active')
    const book = BOOKS_CATALOG.find(b => b.id === wishBtn.dataset.bookId)
    const active = wishBtn.classList.contains('is-active')
    showToast(active ? `Saved "${book ? book.title : 'Book'}" to wishlist` : 'Removed from wishlist')
    return
  }

  const searchActionBtn = e.target.closest('.action-search-btn')
  if (searchActionBtn) {
    e.preventDefault()
    const book = BOOKS_CATALOG.find(b => b.id === searchActionBtn.dataset.bookId)
    if (searchContent && searchInput && book) {
      searchContent.classList.add('show-search')
      searchInput.value = book.genre
      renderSearchResults(book.genre)
    }
    return
  }

  const newCard = e.target.closest('.new__card')
  if (newCard && newCard.dataset.bookId) {
    e.preventDefault()
    openQuickView(newCard.dataset.bookId)
    return
  }

  const homeArticle = e.target.closest('.home__article')
  if (homeArticle && homeArticle.dataset.bookId) {
    openQuickView(homeArticle.dataset.bookId)
    return
  }

  const qtyBtn = e.target.closest('.cart-item__qty-btn')
  if (qtyBtn) {
    const id = qtyBtn.dataset.bookId
    const action = qtyBtn.dataset.cartAction
    const item = cart.find(i => i.id === id)
    if (item) {
      if (action === 'inc') item.qty += 1
      if (action === 'dec') item.qty -= 1
      if (item.qty <= 0) cart = cart.filter(i => i.id !== id)
      renderCart()
    }
  }
})

const joinForm = document.getElementById('join-form')
if (joinForm) {
  joinForm.addEventListener('submit', (e) => {
    e.preventDefault()
    showToast('Subscribed to the Weekly Literary Dispatch!')
    joinForm.reset()
  })
}

renderCart()

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(sectionsClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }                                                    
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__data, .featured__container, .new__container,
           .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})
