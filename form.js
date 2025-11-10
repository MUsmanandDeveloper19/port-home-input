  // ✅ Initialize EmailJS
  (function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // <-- yahan apna EmailJS public key dalna hai
  })();

    // ✅ Send Function
  document.getElementById("sendBtn").addEventListener("click", function() {
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    if (!params.name || !params.email || !params.message) {
      alert("Please fill in all required fields.");
      return;
    }

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
      .then(function(response) {
        alert("✅ Your message has been sent successfully!");
        document.querySelectorAll('.subscribe-input').forEach(i => i.value = "");
      }, function(error) {
        alert("❌ Failed to send. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });