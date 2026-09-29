
const all = document.querySelectorAll('.p');

const p1 = document.querySelector('.p1');

function changeText() {
  p1.textContent = 'Loading this WEB-site . . .';
}

all.forEach(function(item) {
  item.addEventListener('click', changeText);
});


const g2 = document.querySelector('.g2');
const g1 = document.querySelector('.g1'); 
const g3 = document.querySelector('.g3');
const g4 = document.querySelector('.g4');

function First() {
  g2.innerHTML = 'Meet Cal.com, the event-juggling scheduler for<br> everyone. Focus on meeting, not making meetings.<br> Free for individuals.';
  g1.style.color = '#ddab9a';
      g3.style.color = 'white';
      g4.style.color = 'white';
}

function Second() {
  g2.innerHTML = 'Meet Cal.com — the ultimate scheduling tool that does the heavy lifting for you. Forget the back-and-forth emails and focus on what really matters: your meetings. Always free for individuals.';  
  g3.style.color = '#ddab9a';
    g4.style.color = 'white';
      g1.style.color = 'white';
}

function Third() {
  g2.innerHTML = 'Say hello to Cal.com, the hassle-free scheduler designed for<br> modern teams and creators. Stop managing your calendar and start owning your time. 100% free for individual users.';  
  g4.style.color = '#ddab9a';
    g3.style.color = 'white';
      g1.style.color = 'white';
}
g1.addEventListener('click', First);
g3.addEventListener('click', Second);
g4.addEventListener('click', Third);

const dates = document.querySelectorAll('.date p');

function changeText1(event) {
  event.target.style.boxShadow = '0 0 10px black';
  event.target.style.color = 'black';
}

dates.forEach(function(item) {
  item.addEventListener('click', changeText1);
});

const tabs = document.querySelectorAll('.business-tabs button');

tabs.forEach(function(button) {
  button.addEventListener('click', function() {

    tabs.forEach(function(btn) {
      btn.classList.remove('active');
    });

    this.classList.add('active');
  });
});


