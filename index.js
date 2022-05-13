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
  /// / modal /////
  const modalXl = document.createElement('div');
  modalXl.classList = 'mobile-pop modal-dialog';
  const modalContent = document.createElement('div');
  modalContent.classList = 'mobile-pop-content modal-content border-0';
  const closeBtn = document.createElement('button');
  closeBtn.classList = 'closeBtn';
  closeBtn.setAttribute('data-bs-dismiss', 'modal');
  closeBtn.type = 'button';
  closeBtn.innerText = '&times;';
  const popupImg = document.createElement('div');
  popupImg.classList = 'popupImg';
  const popUpHeader = document.createElement('header');
  popUpHeader.classList = 'mobile-pop-header';
  const modalRow = document.createElement('div');
  modalRow.classList = 'row';
  const deskPopDiv = document.createElement('div');
  deskPopDiv.classList = 'col-6 desk-pop-div';
  const headerH3 = document.createElement('h3');
  headerH3.classList = 'header-popUp';
  headerH3.innerHTML = pro.popUpHeader;
  const col6 = document.createElement('div');
  col6.classList = 'col-6';
  const deskpopUp = document.createElement('ul');
  deskpopUp.classList = 'deskpop-up';
  const popLI = document.createElement('li');
  popLI.classList = 'popLI';
  const pop1 = document.createElement('button');
  pop1.classList = 'deskpopBtn pop1 btn-anime';
  pop1.innerText = 'See Live';
  const popL2 = document.createElement('li');
  popL2.classList = 'popL2';
  const pop2 = document.createElement('button');
  pop2.classList = 'deskpopBtn pop2 btn-anime';
  pop2.innerText = 'See Source';
  const mobilePopList = document.createElement('ul');
  mobilePopList.classList = 'mobile-pop-list';
  const liMobilePop = document.createElement('li');
  liMobilePop.classList = 'mobile-pop-link';
  liMobilePop.innerHTML = pro.ruby;
  const li2MobilePop = document.createElement('li');
  li2MobilePop.classList = 'mobile-pop-link';
  li2MobilePop.innerHTML = pro.css;
  const li3MobilePop = document.createElement('li');
  li3MobilePop.classList = 'mobile-pop-link';
  li3MobilePop.innerHTML = pro.Js;
  const li4MobilePop = document.createElement('li');
  li4MobilePop.classList = 'desk-pop-link';
  li4MobilePop.innerHTML = pro.codeKit;
  const li5MobilePop = document.createElement('li');
  li5MobilePop.classList = 'desk-pop-link';
  li5MobilePop.innerHTML = pro.github;
  const li6MobilePop = document.createElement('li');
  li6MobilePop.classList = 'desk-pop-link';
  li6MobilePop.innerHTML = pro.Js;
  const li7MobilePop = document.createElement('li');
  li7MobilePop.classList = 'desk-pop-link';
  li7MobilePop.innerHTML = pro.Bs;
  const li8MobilePop = document.createElement('li');
  li8MobilePop.classList = 'desk-pop-link';
  li8MobilePop.innerHTML = pro.Terminal;
  const li9MobilePop = document.createElement('li');
  li9MobilePop.classList = 'desk-pop-link';
  li9MobilePop.innerHTML = pro.codepen;
  const mobilePopP = document.createElement('p');
  mobilePopP.innerHTML = pro.pTag;
  const popUPBtnUl = document.createElement('ul');
  popUPBtnUl.classList = 'pop-up';
  const popUPBtnli = document.createElement('li');
  popUPBtnli.classList = 'pop-up-btnli';
  const popUpBtnLiBtn = document.createElement('button');
  popUpBtnLiBtn.classList = '"popBtn pop1 btn-anime';
  popUpBtnLiBtn.innerHTML = 'See Live';
  const popUPBtnli2 = document.createElement('li');
  popUPBtnli2.classList = 'pop-up-btnLI';
  const popUpBtnBtn2 = document.createElement('button');
  popUpBtnBtn2.classList = 'popBtn pop2 btn-anime';
  popUpBtnBtn2.innerHTML = 'See Source';
  // const modal = document.querySelector('.modal');
  // modal.append(modalXl);
  // modalXl.append(modalContent);
  // modalContent.append(closeBtn);
  // modalContent.append(popupImg);
  // modalContent.append(popUpHeader);
  // popUpHeader.append(modalRow);
  // modalRow.append(deskPopDiv);
  // deskPopDiv.append(headerH3);
  // modalRow.append(col6);
  // col6.append(deskpopUp);
  // deskpopUp.append(popLI);
  // popLI.append(pop1);
  // deskpopUp.append(popL2);
  // popL2.append(pop2);
  // modalContent.append(mobilePopList);
  // mobilePopList.append(liMobilePop);
  // mobilePopList.append(li2MobilePop);
  // mobilePopList.append(li3MobilePop);
  // mobilePopList.append(li4MobilePop);
  // mobilePopList.append(li5MobilePop);
  // mobilePopList.append(li6MobilePop);
  // mobilePopList.append(li7MobilePop);
  // mobilePopList.append(li8MobilePop);
  // mobilePopList.append(li9MobilePop);
  // modalContent.append(mobilePopP);
  // modalContent.append(popUPBtnUl);
  // popUPBtnUl.append(popUPBtnli);
  // popUPBtnli.append(popUpBtnLiBtn);
  // popUPBtnUl.append(popUPBtnli2);
  // popUPBtnli2.append(popUpBtnBtn2);
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
