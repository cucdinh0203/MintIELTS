const popup = document.getElementById('popupBox');
  const words = document.querySelectorAll('strong.word');
  const closeBtn = popup.querySelector('.close-btn');

  words.forEach(word => {
    word.addEventListener('click', (e) => {
      const wordText = word.textContent;
      const meaningEN = word.getAttribute('data-meaning-en');
      const meaningVI = word.getAttribute('data-meaning-vi');

      // Update popup content
      popup.innerHTML = `
        <h4>${wordText}</h4>
        <button class="close-btn">&times;</button>
        <ul>
          <li>EN: ${meaningEN}</li>
          <li>VI: ${meaningVI}</li>
        </ul>
      `;
      popup.classList.add('show');

      // Position popup near word
      const rect = e.target.getBoundingClientRect();
      popup.style.top = (rect.bottom + window.scrollY + 8) + 'px';
      popup.style.left = (rect.left + window.scrollX) + 'px';

      // Re-attach close button listener
      popup.querySelector('.close-btn').addEventListener('click', () => {
        popup.classList.remove('show');
      });
    });
  });

  // Hide popup when click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('strong.word') && !e.target.closest('.popup')) {
      popup.classList.remove('show');
    }
  });
