// Project Section Scrolling Animation Script

gsap.registerPlugin(ScrollTrigger);

// Use matchMedia to only run the horizontal scroll on larger screens
ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
        const horizontalScrollContent = gsap.utils.toArray('.projects-container .project');

        gsap.to(horizontalScrollContent, {
            xPercent: -100 * (horizontalScrollContent.length - 1),
            scrollTrigger: {
                trigger: ".projects-container",
                pin: true,
                pinSpacing: true,
                scrub: 1,
                end: () => "+=" + (horizontalScrollContent.length * window.innerWidth),
                invalidateOnRefresh: true,
            }
        });
    }
});

// gsap.utils.toArray(".project-content").forEach((el) => {
//   gsap.from(el, {
//     opacity: 0,
//     x: -120,
//     scale: 0.95,
//     duration: 1,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: el,
//       containerAnimation: scrollTween, // 🔥 NOW this works
//       start: `left 75`,
//       toggleActions: "play none none reverse",
//     }
//   });
// });

// Image Carousel Script

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


// Contact me script

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
 
  if (name.value.length < 3) {
    e.preventDefault();
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    e.preventDefault();
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    e.preventDefault();
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    e.preventDefault();
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Close mobile menu when a link is clicked
const menuLinks = document.querySelectorAll('nav a');
const menuToggle = document.getElementById('menu-toggle');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle) menuToggle.checked = false;
    });
});

submitBtn.addEventListener('submit', validate);
