const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the page from refreshing

    const button = contactForm.querySelector('button');
    const originalText = button.textContent;

    // UI Feedback: Show the user something is happening
    button.textContent = "Sending...";
    button.disabled = true;

    // Simulate a network "Fetch" call
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert("Thank you! We will call you soon.");
        contactForm.reset();
    } catch (error) {
        console.error("Submission failed", error);
    } finally {
        button.textContent = originalText;
        button.disabled = false;
    }
});