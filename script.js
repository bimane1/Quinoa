// معاينة صورة مرفوعة
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// زر إرسال الاتصال
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    this.reset();
  });
}

// زر إضافة إلى السلة
document.querySelectorAll(".btn-add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "Added!";
    button.style.backgroundColor = "green";
    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.style.backgroundColor = "#4a8c3e";
    }, 1500);
  });
});
