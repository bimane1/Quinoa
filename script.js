// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message! We will get back to you soon.');

        contactForm.reset();
    });
}

// Active section highlight in navigation
let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function () {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            highlightNavOnScroll(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

function highlightNavOnScroll(scrollPos) {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPos >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add to Cart Functionality
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;

        console.log(`Added to cart: ${productName} - ${productPrice}`);

        this.classList.add('added');
        this.textContent = 'Added!';

        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.classList.remove('added');
        }, 2000);
    });
});
