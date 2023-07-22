const btn = document.querySelector('#submit');
const sayHello = document.querySelector('.say-hello');
const sayBye = document.querySelector('.say-bye');
const form = document.getElementById('survey-form');
const hello = document.querySelector('.hello');

btn.addEventListener('click', e => {
  e.preventDefault();
  console.log('you click submit');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  form.reset();

  hello.style.display = 'block';
  sayHello.classList.add('hide');
  sayBye.classList.remove('hide');
});

window.addEventListener('click', e => {
  console.log(e.target);
  if(hello.style.display == 'block' && !e.target.matches('button')){
    hello.style.display = '';
    sayHello.classList.toggle('hide');
  sayBye.classList.toggle('hide');
  }
})

hello.style.display = 'block'
setTimeout(() => {
hello.style.display = '';
}, 3000);