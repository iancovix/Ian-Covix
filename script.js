
 
document.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector('body');
    let e = document.getElementById("main");
        t = document.getElementById("footer");
        n = document.getElementById("loader");
    setTimeout(() => {
        n.style.display = "none";
        e.style.display = "block";
        p.style.overFlow ='hidden';
        t.style.display = "block";
    }, 800);
});

const hamburger = document.querySelector(".hamburgermenu");
const topBar = document.querySelector('.top-bar');
  const  navElements = document.querySelector(".navlinks");
const b = document.body; 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navElements.classList.toggle("active");
   
    
});
 
if (navElements.classList.contains('active')) {
   b.style.overflow='hidden' 
    
} else {
    b.style.overflow =''
    
} 
let date = document.getElementById("clock");
function updateTime() {
    let e = new Date(),
        t = e.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric"
        }),
        n = e.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    date.textContent = `${t} ${n}`;
}
updateTime();
setInterval(updateTime, 1000);

    let slides = document.querySelectorAll(".slide");
    const observer = new IntersectionObserver((entries)=> {
        entries.forEach((entry)=> {
            if (entry.isIntersecting) {
                entry.target.classList.add('sho')
                
            } else {
                entry.target.classList.remove('sho')
                
            }
        })
    },{threshold: .6});
    slides.forEach((slide)=> {
    observer.observe(slide)
    })
    
      /*  let t = e.getBoundingClientRect();
        if (t.top < window.innerHeight) e.classList.add("sho");
        else if (t.bottom > window.innerHeight) e.classList.remove("sho");
    });*/

document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".hamburgermenu");
    e.classList.add("show");
    setTimeout(() => {
        e.classList.remove("show");
        e.style.zIndex = "100";
    }, 600);
});

const logo = document.querySelector(".home");
logo.addEventListener("click", () => {
    window.location.href = "http://iancovix.netlify.app";
});

const getintouch = document.querySelector(".get-btn");
getintouch.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=+256760467887", "_blank");
});

const links = document.querySelectorAll('.links');
links.forEach(link => {
    link.addEventListener('click', () => {
        navElements.classList.add('active');
        hamburger.classList.remove('active');
    });
});

/*const tooltip = document.querySelector('.tooltip');
tooltip.addEventListener('click', () => {
    navElements.classList.toggle('active');
    hamburger.classList.remove('active');
});*/

console.log('Portfolio updated on 5th Sep 2025');

// Exampling my self with the if else statements
/*let age = 8;
if (age < 10) console.log('too young');
else if (age > 20) console.log('how are you');
*/
/*function user(a, b) {
    let result = a / b;
    console.log(result);
}
user(10, 20);
*/
let name = document.getElementById('name');
let password = document.getElementById('password');

/*
this is an object const images = {
    id: "Car",
    image: "./logo.jpg",
    content: "I designed this with all my heart",
};
console.log(images.content);
*/
// form submitting
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    fetch('https://formcarry.com/s/NBrbREXTtEN', {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    
        .catch((error) => console.error(error));
        
     fetch('https://formspree.io/f/xrbygwbb',{
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
     fetch('https://formcarry.com/s/2N4gSnil9rf',{
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

   
   form.reset()

    const ok = responses.every(response => response.ok);
    
    if (ok) {
        
        
        alert('Message Sent Succrsfully');
    }
    else {
        alert('Please try again later')
    }
    
    
    
});
/*const obj = { name: 'ian', age: 23, country: 'Uganda' };
console.log(obj.country);

const array = [1, 2, 3, 4, 5];
const dbl = array.map(num => num + 3);
console.log(dbl);

array.forEach(elem => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
});

setTimeout(() => {
    for (let i = 0; i < 10; i++) console.log(i);
}, 1000);

const print = document.createElement('h1');
const body = document.body;

async function fetchData() {
    try {
        const data = [{ name: 'ian', age: 23 }];
        const headers = { 'Content-Type': 'application/json' };
        const body = JSON.stringify(data);
        const response = await fetch('', { method: 'POST', headers, body });
        const result = await response.json
        const fetchResult = result.map(item => {return`${item.name} : ${item.age}`;}).join('</br>');
        print.innerHTML += fetchResult;
        body += print;
        print.style.color ='white';
    } catch (e) {
        console.error(e);
    }
}
/*
const urls = [
    'https://formcarry.com/s/NBrbREXTtEN',
    'https://formspree.io/f/xrbygwbb'
];

async function sendData() {
    try {
        const request = await fetch(urls, {
            method: 'POST',
            body: new FormData(form)
        });
        const response = await request.json();
        const prom = Promise.all(urls.map(item => {
            let data= `<h1>${response.headline}`;
            let body = document.body;
            body.textContent = data;
        }));
        console.log(prom);
    } catch (error) {
        console.error(error);
    }
}
*/
/*this is a string method which looks for the position of a key in a string 
localStorage.setItem("username", "Ian");
console.log(localStorage.getItem("username"));

const tural = "@";
const rest = 'iancovix@gmail.com';
const result6 = rest.indexOf(tural);
console.log(result6);
*/
async function loadmessage() {
    try {
        const res = await fetch('https://formcarry.com/s/NBrbREXTtEN', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json'},
            body: JSON.stringify({ message: 'A new visitor has been detected' })
        });
                const response =
            await res.text();
        
        console.log(response);
        
       
        const res1 = await fetch('https://formspree.io/f/xrbygwbb', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'A new visitor has been detected' })
});
        
        const response1 = 
            await res1.text();
        
        console.log(response1);
    }
    catch(error) {
        console.error("Fetch failed:", error);
    }
    
}

document.addEventListener('DOMContentLoaded', () => loadmessage());

/*document.addEventListener('DOMContentLoaded', ()=> {
    window.location.href= 'https://google.com';
    alert('sorry');
})
const language = navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
}, error => {
    console.error(error);
});
console.log(`Your current browser is: ${language}`);
    fetch(url)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log(data.articles); // Access the news articles
            // Process and display the news data here
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
        const person  = {
            name: 'ian',
            age : 20
        };
        const keys = person.forEach(people => {
            console.log(people);
        })
       function af(){ alert('hello');
       }
       af();
       */
      
           const aboutWord = document.querySelector('.aboutwords')
      const viewer = new IntersectionObserver((ph)=> {
          ph.forEach((p)=> 
              
          {
              if (p.isIntersecting) {
                  p.target.classList.add('sho')
                  
              }
              else{
                  p.target.classList.remove('sho')
              }
          })
      },{threshold: .3})
          viewer.observe(aboutWord)
         
   //for theme toggling 
  /*const originalColor= window.getComputedStyle(body).backgroundColor;
  
  var themebtn = document.querySelector('.themebtn');*/
const  bright = document.querySelector('bright');
  const dark = document.querySelector(' dark');
  var themebtn = document.querySelector('.themebtn');
  themebtn.addEventListener('click',handleTheme);
  function handleTheme() {
     if (!body.classList.contains('dark-mode')) {
         body.classList.toggle('dark-mode');
             }
     else if(body.classList.contains('dark-mode')){
     body.classList.remove('dark-mode')}
  }
 /* the fetch api for news
 async function News() {
     const apiKey = '1db8025b8ee346adbed02e22b12d66b9';
     try {
         const req = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,{
             method:'GET',
             headers:{'Accept':'application/json'}
         });
         const res = req.json();
         const print = res.articles[0].map((item)=> {
             return`
             <h3>${item.title[0]}</h3> <p>${item.description[0]}</p>`
         })
         console.log(print)
     } catch (error) {
         console.error('failed fetching news', error)
     }
 }
 News();
 */
 const btnNews = document.querySelector('.btn-news').addEventListener('click',() => {
     window.location.href='https://iancovix.vercel.app/news.html';
 } )
 document.querySelectorAll('details').forEach((detail)=> {
     detail.addEventListener('toggle',()=> {
         const content = detail.querySelector('.content-project');
         if (detail.open) {
             
           content.style.height= content.scrollHeight + 'px';  
         } else {
           content.style.height= '0';
        void   content.offsetHeight;content.style.height= '0';
         }
     });
 });
 content.addEventListener('transitioned',()=> {
     content.style.height= 
     'auto'
 });

  function loadPage(){
    window.location.href='https://festocameragroup.com';
  }
  loadPage();
  /*
  this is a method for fetching data but its better to use fetch() new method
  const xhr = new XMLHttpRequest;
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1db8025b8ee346adbed02e22b12d66b9'
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type','application/json')
  xhr.onload= function () {
      if (xhr.status === 200) {
          console.log(xhr.responseText)
      }
      else{
          console.error(xhr.statusText)
      }
      // Tab to edit
  }
  xhr.send();
  */
  const xhr =new XMLHttpRequest;
  xhr.open(method, url,async)//on async u write either true or false;
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.onload= function () {
      if (xhr.status === 200) {
          console.log(xhr.responseText)
          
      }
      else{
          console.error(xhr.statusText)
      }
      // Tab to edit
  }
  
// this is for adding slide in styles.to the skill.boxes
/*const skilled = document.querySelectorAll('skilled');

const review = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add('view');
       
        }
        else{
            entry.target.classList.remove('view')
        }
    })
},{threshold: 0.5} );

skilled.forEach((div)=> {
   // review.observe(div)
   div.style.display= 'none'
})
*/
