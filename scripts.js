// Add event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the button, modal, and close button elements
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');

  // Add event listener to open the modal when the button is clicked
  openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Add event listener to close the modal when the close button is clicked
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Add event listener to close the modal when clicking outside the white box
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
