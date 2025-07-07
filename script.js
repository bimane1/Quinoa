// معاينة صورة القسم "Identify Your Quinoa Plant"
document.addEventListener('DOMContentLoaded', function () {
  const imageInput = document.getElementById('imageInput');
  const previewImage = document.getElementById('previewImage');

  if (imageInput && previewImage) {
    imageInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImage.src = e.target.result;
          previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        previewImage.style.display = 'none';
      }
    });
  }

  // نموذج التواصل (contact form)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.elements[0].value.trim();
      const email = this.elements[1].value.trim();
      const message = this.elements[2].value.trim();

      if (name && email && message) {
        alert('✅ Thank you! Your message has been sent.');
        this.reset();
      } else {
        alert('⚠️ Please fill in all fields.');
      }
    });
  }

  // زر "Add to Cart"
  const cartButtons = document.querySelectorAll('.btn-add-to-cart');
  cartButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const originalText = this.textContent;
      this.textContent = '✔ Added!';
      this.style.backgroundColor = '#2ecc71';
      setTimeout(() => {
        this.textContent = originalText;
        this.style.backgroundColor = '';
      }, 2000);
    });
  });
});
