// menu toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('block');
    menu.style.maxHeight = menu.scrollHeight + "px";
  } else {
    menu.style.maxHeight = "0";
    setTimeout(() => {
      menu.classList.remove('block');
      menu.classList.add('hidden');
    }, 300); 
  }
});



//  Swiper JS 
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// video about
const videoBtn = document.getElementById('videoBtn');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const closeVideo = document.getElementById('closeVideo');

videoBtn.addEventListener('click', () => {
  videoFrame.src = "https://www.youtube.com/embed/W_tIumKa8VY";
  videoModal.classList.remove('hidden');
});

closeVideo.addEventListener('click', () => {
  videoModal.classList.add('hidden');
  videoFrame.src = "";
});

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    videoModal.classList.add('hidden');
    videoFrame.src = "";
  }
});

// Toggle content About

function toggleContent() {
    const moreText = document.getElementById("moreText");
    const toggleText = document.getElementById("toggleText");
    const toggleIcon = document.getElementById("toggleIcon");

    if (moreText.classList.contains("max-h-0")) {
      moreText.classList.remove("max-h-0");
      moreText.classList.add("max-h-96");
      toggleText.textContent = "قراءة أقل";
      
    } else {
      moreText.classList.remove("max-h-96");
      moreText.classList.add("max-h-0");
      toggleText.textContent = "قراءة المزيد";
     
    }
  }



  





// Scroll to Top Button
  const scrollBtn = document.getElementById('scrollToTopBtn');

  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('hidden');
    } else {
      scrollBtn.classList.add('hidden');
    }
  });


  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });