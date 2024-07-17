document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        const row = this.closest('tr');
        if (this.checked) {
          row.classList.add('completed');
        } else {
          row.classList.remove('completed');
        }
      });
    });
  });