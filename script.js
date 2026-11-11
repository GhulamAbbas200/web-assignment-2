const studentName = document.getElementById("studentName");
const studentEmail = document.getElementById("studentEmail");
const profileForm = document.getElementById("profileForm");

// Display saved information on index.html.
if (studentName && studentEmail) {
  studentName.textContent =
    localStorage.getItem("studentName") || "Not provided";

  studentEmail.textContent =
    localStorage.getItem("studentEmail") || "Not provided";
}

// Set up the form only when it exists on the current page.
if (profileForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  // Fill the form with previously saved information.
  nameInput.value = localStorage.getItem("studentName") || "";
  emailInput.value = localStorage.getItem("studentEmail") || "";

  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      message.textContent = "Please enter both your name and email.";
      return;
    }

    if (!emailInput.validity.valid) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    // Save the information so the profile page can access it.
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);

    // Open the profile page after successful validation.
    window.location.href = "index.html";
  });
}