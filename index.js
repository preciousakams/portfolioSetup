/* eslint-disable no-alert */
const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-menu');
bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  bars.classList.remove('active');
  navMenu.classList.remove('active');
}));
const portfolio = [{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
];
const portfolioCard = (pro) => {
  const flexitem = document.createElement('div');
  flexitem.classList = 'flex-item';
  const projectimage = document.createElement('div');
  projectimage.classList = 'project-image-div';
  const projectdiv = document.createElement('div');
  projectdiv.classList = 'project-div';
  const stories = document.createElement('h4');
  stories.classList = 'stories';
  stories.innerHTML = pro.name;
  const desc = document.createElement('h4');
  desc.classList = 'stories';
  desc.innerHTML = pro.description;
  const flexitemUl = document.createElement('ul');
  flexitemUl.classList = 'flex-item-ul';
  const li = document.createElement('li');
  li.classList = 'li';
  li.innerHTML = pro.ruby;
  const li2 = document.createElement('li');
  li2.classList = 'li';
  li2.innerHTML = pro.css;
  const li3 = document.createElement('li');
  li3.classList = 'li';
  li3.innerHTML = pro.js;
  const li4 = document.createElement('li');
  li4.classList = 'li';
  li4.innerHTML = pro.html;
  const btndiv = document.createElement('div');
  btndiv.classList = 'btn-div';
  const btn = document.createElement('button');
  btn.classList = 'recent-btn btn-anime desk-recent';
  btn.innerHTML = 'See Project';
  btn.setAttribute('data-bs-toggle', 'modal');
  btn.setAttribute('type', 'button');
  btn.setAttribute('data-bs-target', '#myModal');
  const flexwrapper = document.querySelector('.flex-wrapper');
  flexwrapper.append(flexitem);
  flexitem.append(projectimage);
  flexitem.append(projectdiv);
  projectdiv.append(stories);
  projectdiv.append(desc);
  projectdiv.append(flexitemUl);
  flexitemUl.append(li);
  flexitemUl.append(li2);
  flexitemUl.append(li3);
  flexitemUl.append(li4);
  projectdiv.append(btndiv);
  btndiv.append(btn);
};
portfolio.forEach((pro) => portfolioCard(pro));

function validate() {
  const contactForm = document.getElementById('contactForm');
  const email = document.getElementById('email').value;
  const text = document.getElementById('text');
  const pattern = /^[a-z]+@[a-z_]+.[a-z]/;
  if (email.match(pattern)) {
    contactForm.classList.add('valid');
    contactForm.classList.remove('invalid');
    text.innerHTML = 'Your email is valid';
    text.style.color = '#00ff00';
  } else {
    contactForm.classList.remove('valid');
    contactForm.classList.add('invalid');
    text.innerHTML = 'Your email is invalid';
    text.style.color = '#ff0000';
  }
  if (email === '') {
    contactForm.classList.remove('valid');
    contactForm.classList.remove('invalid');
    text.innerHTML = '';
  }
}
validate();
document.getElementById('contactForm').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const pattern = /^[a-z]+@[a-z_]+.[a-z]/;
  if (!email.match(pattern)) {
    event.preventDefault();
    alert('Please enter valid user details');
  }
});