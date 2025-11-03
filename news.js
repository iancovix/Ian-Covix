
 // the fetch api for news
(async function news() {
     const apiKey = '1db8025b8ee346adbed02e22b12d66b9';
     try {
         const req = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,{
             method:'GET',
             headers:{'Accept':'application/json'}
         });
         const res = await req.json();
         const print = res.articles.map((item)=> {
             return`
             <h3>${item.author}</h3> <p>${item.description}</p>`
         });
         console.log(print)
         const div = document.getElementById('newsDiv');
         div.innerHTML = print.join(' ');
         
     } catch (error) {
         console.error('failed fetching news', error)
     }
 })();
 const btn = document.querySelector('.moreNews');
 btn.addEventListener('click',()=> alert('Fetch Complete'));
 /*
function  generateMoreNews(){
    const apiKey = '1db8025b8ee346adbed02e22b12d66b9';
try {
    const req = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    });
    const res = await req.json();
    const print = res.articles.map((item) => {
        return `
             <h3>${item.author}</h3> <p>${item.description}</p>`
    });
    console.log(print)
    const div = document.getElementById('newsDiv');
    div.innerHTML = print.join(' ');
    console.log(print)
    
} catch (error) {
    console.error('failed fetching news', error)
}
}*/