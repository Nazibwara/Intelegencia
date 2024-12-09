$(".slick-slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});


//    ==============COUNTER JS ===============

const targetNumbers = [120, 7, 1200];

// Function to animate the counters
function animateCounters() {
  const counters = document.querySelectorAll('.counterBox h4');

  counters.forEach((counter, index) => {
    let target = targetNumbers[index];
    let current = 0;
    let step = Math.ceil(target / 100); // Determines the step for increment
    let interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target; // Stop exactly at the target number
        clearInterval(interval);
      }
      // Update the counter text
      if (counter.textContent.includes('+')) {
        counter.innerHTML = current + '<sup>+</sup>';
      } else if (counter.textContent.includes('Offices')) {
        counter.textContent = current + ' Offices';
      } else {
        counter.textContent = current;
      }
    }, 50); // Speed of the counter animation
  });
}

// Use Intersection Observer to trigger animation on section visibility
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters(); // Trigger counter animation
      observer.disconnect(); // Stop observing after triggering
    }
  });
});

// Observe the section with counters
const section = document.querySelector('.d-flex');
observer.observe(section);
//    ==============COUNTER JS END===============




// ========header scroll class add
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ======MENU LINKS CODE=====

$('.burger').click(function () {
  $('.mobileNav').addClass('show')
  $('body').addClass('overflow-hidden')
  $('.slick-slider').addClass('overflow')
})

$('.crossIcon').click(function () {
  $('.mobileNav').removeClass('show')
  $('body').removeClass('overflow-hidden')
  $('.slick-slider').removeClass('overflow')
});

$('.mobileNav ul a ').click(function () {
  $('.mobileNav').removeClass('show')
  $('body').removeClass('overflow-hidden')
  $('.slick-slider').removeClass('overflow')
});

$('.searchArea').click(function () {
  $('.searchBox').addClass('show')
  $('body').addClass('overflow-hidden')
  $('.slick-slider').addClass('overflow')
})

$('.crossIcon').click(function () {
  $('.searchBox').removeClass('show')
  $('body').removeClass('overflow-hidden')
  $('.slick-slider').removeClass('overflow')
});
