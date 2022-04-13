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
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
},
{
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  ruby: 'Ruby on rails',
  css: 'Css',
  Js: 'JavaScript',
  html: 'Html',
},
];
// const pro = portfolio[0];
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
  btn.classList = 'recent-btn btn-anime';
  btn.innerHTML = 'See Project';
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