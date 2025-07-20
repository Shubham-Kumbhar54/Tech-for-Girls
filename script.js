let shareCounter = 0;

document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const college = document.getElementById("college").value;
  const screenshot = document.getElementById("screenshot").files[0];
  const messageBox = document.getElementById("message");

  if (!name || !phone || !email || !college) {
    messageBox.textContent = "Please fill all required fields.";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "Registration Successful!";
  messageBox.style.color = "green";

  // Clear form
  document.getElementById("regForm").reset();
});

document.getElementById("whatsappBtn").addEventListener("click", function() {
  const message = encodeURIComponent("Hey! Join the Tech for Girls program now: https://yourwebsite.com");
  const url = `https://wa.me/?text=${message}`;
  window.open(url, "_blank");

  shareCounter++;
  document.getElementById("shareCount").textContent = `Shares: ${shareCounter}`;
});
