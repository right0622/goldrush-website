document.addEventListener('DOMContentLoaded', function() {
  var thankYouButton = document.getElementById('thankYouButton');
  var thankYouMessage = document.getElementById('thankYouMessage');

  thankYouButton.addEventListener('click', function() {
      thankYouMessage.style.display = 'block';
      thankYouButton.remove();
  });
});
