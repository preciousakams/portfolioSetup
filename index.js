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
  id: 1,
  name: 'A Learning Platform ',
  description: 'For Tech Enthusiasts',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  codeKit: 'Codekit',
  github: 'Github',
  Bs: 'Bootstrap',
  Terminal: 'Terminal',
  codepen: 'Codepen',
  pTag: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it 1960s with the releaLorem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  headerPopUp: 'Learning never stops',
  modalImg: 'https://res.cloudinary.com/wonderwoman/image/upload/v1652396800/myportfolio/kamzzyLearns_ybemiu.png',
  livelink: 'https://kamzzy.github.io/kamzzy-learns/',
  projectImg: 'https://res.cloudinary.com/wonderwoman/image/upload/v1652396800/myportfolio/kamzzyLearns_ybemiu.png',
  sourcelink: 'https://github.com/kamzzy/kamzzy-learns',
},
{
  id: 2,
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  codeKit: 'Codekit',
  github: 'Github',
  Bs: 'Bootstrap',
  Terminal: 'Terminal',
  codepen: 'Codepen',
  pTag: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it 1960s with the releaLorem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  headerPopUp: 'Keeping track of hundreds of components',
  modalImg: '',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  projectImg: '',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  id: 3,
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  codeKit: 'Codekit',
  github: 'Github',
  Bs: 'Bootstrap',
  Terminal: 'Terminal',
  codepen: 'Codepen',
  pTag: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it 1960s with the releaLorem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  headerPopUp: 'Keeping track of hundreds of components',
  modalImg: '',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  projectImg: '',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  id: 4,
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  codeKit: 'Codekit',
  github: 'Github',
  Bs: 'Bootstrap',
  Terminal: 'Terminal',
  codepen: 'Codepen',
  pTag: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it 1960s with the releaLorem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  headerPopUp: 'Keeping track of hundreds of components',
  modalImg: '',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  projectImg: '',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  id: 5,
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  codeKit: 'Codekit',
  github: 'Github',
  Bs: 'Bootstrap',
  Terminal: 'Terminal',
  codepen: 'Codepen',
  pTag: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it 1960s with the releaLorem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  headerPopUp: 'Keeping track of hundreds of components',
  modalImg: '',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  projectImg: '',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
{
  id: 6,
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
  codeKit: 'Codekit',
  github: 'Github',
  Bs: 'Bootstrap',
  Terminal: 'Terminal',
  codepen: 'Codepen',
  pTag: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text  ever since the 1500s, when an unknown printer took a galley of  type and scrambled it 1960s with the releaLorem Ipsum is simply  dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  headerPopUp: 'Keeping track of hundreds of components',
  modalImg: '',
  livelink: 'https://kamzzy.github.io/portfolioSetup/',
  projectImg: '',
  sourcelink: 'https://github.com/kamzzy/portfolioSetup',
},
];
const portfolioCard = (pro) => {
  const flexitem = document.createElement('div');
  flexitem.classList = 'flex-item';
  const projectimage = document.createElement('div');
  projectimage.classList = 'project-image-div';
  const projectimg = document.createElement('img');
  projectimg.classList = 'projectimg';
  projectimg.setAttribute('src', pro.projectImg);
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
  li3.innerHTML = pro.Js;
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
  projectimage.append(projectimg);
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
  /// //// modal ///////////
  const modalSection = document.createElement('div');
  modalSection.classList = 'mobile-pop-sec modal';
  modalSection.id = 'myModal';
  modalSection.innerHTML = `
   <div class="mobile-pop modal-dialog modal-xl">
   <div class="mobile-pop-content modal-content border-0">
     <button type="button" class="closeBtn" data-bs-dismiss="modal"> &times;</button>
     <div class="popupImg"><img src="${pro.modalImg}" alt=""> </div>
     <header class="mobile-pop-header">
       <div class="row">
         <div class="col-6 desk-pop-div">
           <h3>${pro.headerPopUp}</h3>
         </div>
         <div class="col-6">
           <ul class="deskpop-up">
             <li>
             <a href= ${pro.livelink}>
               <button type="button" class="deskpopBtn pop1 btn-anime">
                 See Live
               </button>
               </a>
             </li
             <li>
             <a href= ${pro.sourcelink}>
               <button type="button" class="deskpopBtn pop2 btn-anime">
                 See Source
               </button>
               </a>
             </li>
           </ul>
         </div>
       </div>
     </header>
     <ul class="mobile-pop-list">
       <li class="mobile-pop-link">${pro.ruby} </li>
       <li class="mobile-pop-link">${pro.css}</li>
       <li class="mobile-pop-link">${pro.Js}</li>
       <li class="desk-pop-link">${pro.codeKit}</li>
       <li class="desk-pop-link">${pro.github}</li>
       <li class="desk-pop-link">${pro.Js}</li>
       <li class="desk-pop-link">${pro.Bs}</li>
       <li class="desk-pop-link">${pro.Terminal}</li>
       <li class="desk-pop-link">${pro.codepen}</li>
     </ul>
     <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text
       ever since the 1500s, when an unknown printer took a galley of
       type and scrambled it 1960s with the releaLorem Ipsum is simply
       dummy text of the printing and typesetting industry. Lorem Ipsum
       has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it
       1960s with the relea
     </p>
     <ul class="pop-up">
       <li>
         <button type="button" class="popBtn pop1 btn-anime"> See Live </button>
       </li>
       <li>
         <button type="button" class="popBtn pop2 btn-anime">  See Source  </button>
       </li>
     </ul>
   </div>
 </div>
   `;
  const container = document.querySelector('.container');
  container.append(modalSection);
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
