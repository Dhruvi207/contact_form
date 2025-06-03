document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  const successMessage=document.getElementById("successMessage");
  successMessage.textContent="";
  successMessage.style.display="none";

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate Name
  const namePattern=/^[a-zA-Z\s]+$/;
  if (name === "") 
  {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }
  else if(!namePattern.test(name))
  {
    document.getElementById("nameError").textContent="Name can only contain letters and spaces.";
    isValid=false;
  }


  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    const successMessage=document.getElementById("successMessage");
    successMessage.textContent="Form submitted successfully!";
    successMessage.style.display="block";
    document.getElementById("contactForm").reset(); 

    // Hide the message after 5 seconds
    setTimeout(()=>{
      successMessage.style.display="none";
  
      },5000);
    }
});



       
     