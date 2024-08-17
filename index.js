document.addEventListener("DOMContentLoaded", () => {
  const accept = document.getElementById("accept");
  const decline = document.getElementById("reject");

  accept.addEventListener("click", () => {
    showToast("Message sent successfully");
  });

  decline.addEventListener("click", () => {
    showToast("Message declined");
  });

  function showToast(message, duration = 3000) {
    const toastContainer = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = message;
    toast.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    toastContainer.appendChild(toast);

    // Show the toast
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    // Hide the toast after the specified duration
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 500);
    }, duration);
  }
});
