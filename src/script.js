// Add any JavaScript code you want here
// You can use this file to handle interactivity or dynamic content on your website
// For example, you can add event listeners or fetch data from an API

//Example: Add a click event listener to the project elements

const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('click', () => {
    console.log('Project clicked:', project.textContent);
    // Add your custom logic here
  });
});
