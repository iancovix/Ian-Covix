// script.js
const apiKey = '1db8025b8ee346adbed02e22b12d66b9';

(async function news() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );

    const data = await response.json();

    const print = data.articles.map((item) => `
      <h3 class="heading">${item.author || 'Unknown author'}</h3>
      <p class="newsp">${item.description || 'No description available'}</p>
    `);

    const div = document.getElementById('newsDiv');
    div.innerHTML = print.join(' ');
  } catch (error) {
    console.error('Failed fetching news', error);
  }
})();

const btn = document.querySelector('.moreNews');
btn.addEventListener('click', () => alert('Fetch Complete'));