Fancybox.bind("[data-fancybox]", {});

const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTop.classList.add('active');
  } else {
    scrollToTop.classList.remove('active');
  }
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

let tabs = document.querySelectorAll('.tabs');
let contents = document.querySelectorAll('.contents');

for (let x = 0; x < tabs.length; x++) {
  for (let i = 0; i < tabs[x].children.length; i++) {
    tabs[x].children[i].addEventListener('click', function (e) {
      e.preventDefault();
      for (let j = 0; j < tabs[x].children.length; j++) {
        tabs[x].children[j].classList.remove('active');
        contents[x].children[j].classList.remove('active');
      }
      tabs[x].children[i].classList.add('active');
      contents[x].children[i].classList.add('active');
    });
  }
}

const expertsSlider = new Swiper('.experts__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,


  navigation: {
    nextEl: '.experts .slider-arrow.next',
    prevEl: '.experts .slider-arrow.prev',
  },

});

const teachersSlider = new Swiper('.teachers__slider', {
  loop: false,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: 'row',
  },

  pagination: {
    el: '.teachers .slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="slider-bullet ' + className + '">' + (index + 1) + '</span>';
    },
  },

  navigation: {
    nextEl: '.teachers .slider-arrow.next',
    prevEl: '.teachers .slider-arrow.prev',
  },

});

if (document.querySelector('#showAllBtn')) {
  document.addEventListener('DOMContentLoaded', () => {
    const showAllBtn = document.getElementById('showAllBtn');
    const hiddenItems = document.querySelectorAll('.faq__item--hidden');

    showAllBtn.addEventListener('click', () => {
      hiddenItems.forEach(item => item.classList.remove('faq__item--hidden'));
      showAllBtn.style.display = 'none'; 
    });
  });
}

const reviewsPageSlider = new Swiper('.reviews-page__slider', {
  loop: false,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: 'row',
  },

  pagination: {
    el: '.reviews-page__slider .slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="slider-bullet ' + className + '">' + (index + 1) + '</span>';
    },
  },

  navigation: {
    nextEl: '.reviews-page__slider .slider-arrow.next',
    prevEl: '.reviews-page__slider .slider-arrow.prev',
  },

});

if (document.querySelector('#openTest')) {
  const openTest = document.querySelector('#openTest');
  const testStart = document.querySelector('.test__start');
  const testing = document.querySelector('.testing');
  const testingEnd = document.querySelector('.testing-end');

  openTest.addEventListener('click', () => {
    testStart.style.display = 'none';
    testing.style.display = 'block';
  });

  const nowSpan = document.querySelector('.testing__counter .testing__now');
  const allSpan = document.querySelector('.testing__counter .testing__all');

  const totalSlides = document.querySelectorAll('.testing__slide').length;

  allSpan.textContent = totalSlides;

  const testingSlider = new Swiper('.testing__slider', {
    loop: false,
    slidesPerView: 1,
    effect: 'cube',
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.testing__pagination',
      clickable: false,
      renderBullet: function (index, className) {
        return '<span class="testing__bullet ' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  function updateCounter() {
    nowSpan.textContent = testingSlider.activeIndex + 1;
  }

  updateCounter();

  testingSlider.on('slideChange', () => {
    updateCounter();
  });

  document.querySelectorAll('.testing__slide').forEach((slide) => {
    slide.querySelector('.testing__action').addEventListener('click', function (e) {
      if (e.target.classList.contains('testing__choose')) {
        const currentIndex = testingSlider.activeIndex;
        const totalSlides = testingSlider.slides.length;

        const bullets = document.querySelectorAll('.testing__pagination .testing__bullet');
        bullets.forEach((bullet, i) => {
          if (i === currentIndex) {
            if (e.target.classList.contains('yes')) {
              bullet.style.backgroundColor = '#c8e6c9';
            } else if (e.target.classList.contains('no')) {
              bullet.style.backgroundColor = '#ffcdd2';
            }
          }
        });

        if (currentIndex === totalSlides - 1) {
          document.querySelector('.testing').style.display = 'none';
          document.querySelector('.testing-end').style.display = 'block';
        } else {
          testingSlider.slideNext();
        }
      }
    });
  });
}

const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.reviews__slider .slider-arrow.next',
    prevEl: '.reviews__slider .slider-arrow.prev',
  },
  on: {
    slideChange: function () {
      updateProgress(this);
    }
  }
});

if (document.getElementById('progressBar')) {
  function updateProgress(swiperInstance) {
    const activeIndex = swiperInstance.activeIndex;
    const slidesPerView = swiperInstance.params.slidesPerView;
    const totalSlides = swiperInstance.slides.length;

    const maxIndex = totalSlides - slidesPerView;
    const currentPosition = activeIndex + 1;
    const maxPosition = maxIndex + 1;

    const progress = (currentPosition / maxPosition) * 100;

    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentSlide').textContent = currentPosition;
    document.getElementById('totalSlides').textContent = maxPosition;
  }

  updateProgress(reviewsSlider);
}

var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.second-button');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      const modalWindow = document.getElementById(modalId);
      if (modalWindow) {
        const modal = modalWindow.closest('.modal');
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove('active');
    if (!document.querySelector('.modal.active')) {
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.modal__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  document.querySelectorAll('.modal__bg').forEach(bg => {
    bg.addEventListener('click', () => {
      const modal = bg.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
});