// import emailjs from 'emailjs-com';

// Ensure emailjs is loaded
if (typeof emailjs === "undefined") {
    console.error("EmailJS is not loaded. Please check the script URL.");
} else {
    console.log("EmailJS loaded successfully!");
    // Initialize EmailJS with your user ID
    emailjs.init("1wR_ZT1aMrRv-cFfw"); // Replace with your EmailJS User ID

    // Add event listener for form submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById('name').value.trim();
        const mail_id = document.getElementById('email').value.trim();

        // Validate input fields
        if (name === "" || mail_id === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_t8oin5g", "template_6f7xlso", {
            name: name,      // Will match {{name}} in the template
            mail_id: mail_id // Will match {{mail_id}} in the template
        }).then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent successfully!");
                // Clear form fields
                document.getElementById('contactForm').reset();
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Failed to send email. Please try again.");
            }
        );
    });
}
