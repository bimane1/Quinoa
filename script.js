

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
