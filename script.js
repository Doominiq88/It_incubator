  import people from './array.js';

  // creat team block 

  const team = document.querySelector('.team__items');
  const teamFoto = document.querySelectorAll('.team__foto');

  people.forEach((element) => {
      const teamFoto = document.createElement('div');
      teamFoto.classList.add('team__foto');
      team.append(teamFoto);

      const teamDrop = document.createElement('div');
      teamDrop.classList.add('team__drop');
      teamFoto.append(teamDrop);

      const dropName = document.createElement('p');
      dropName.classList.add('drop-name');
      teamDrop.append(dropName);



      const teamImg = document.createElement('img');
      teamImg.classList.add('team__img');

      teamFoto.append(teamImg);

  });

  const teamImg = document.querySelectorAll('.team__img');
  const dropName = document.querySelectorAll('.drop-name');
  //   console.log(dropName);

  const arrayOfSrc = people.map(person => person.image);

  teamImg.forEach((element, index) => element.setAttribute('src', arrayOfSrc[index]));

  const arrayOfName = people.map(person => person.name);
  dropName.forEach((element, index) => {
      element.innerHTML = arrayOfName[index];
  });
  console.log(arrayOfName)








  //create pop-up Img

  const popUp = document.querySelector('.about__blocks__img');
  const popUpDiv = document.createElement('div');
  popUpDiv.classList.add('pop-up')
  popUp.append(popUpDiv);

  const buttonClose = document.createElement('button');
  buttonClose.classList.add('close-btn');
  popUpDiv.append(buttonClose);

  buttonClose.innerHTML = 'X';

  const site = document.querySelector('.site');
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('some-div');
  site.append(secondDiv);

  const workImages = document.querySelectorAll('.works__items img');
  const workItem = document.querySelector('.works__items');


  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-div');
  popUpDiv.append(buttonClose);

  const buttonCloseImg = document.createElement('button');
  buttonCloseImg.classList.add('img-close-btn');
  imgDiv.append(buttonCloseImg);

  buttonCloseImg.innerHTML = 'X';

  workImages.forEach((element) => {
      element.addEventListener('click', (event) => {
          let alt = event.target.getAttribute('alt')
          workItem.append(imgDiv);
          imgDiv.classList.add('display-on');
          secondDiv.classList.add('display-on');

          switch (alt) {
              case 'pic1':
                  imgDiv.classList.add('background-icecream');
                  break;
              case 'pic2':
                  imgDiv.classList.add('background-visit');
                  break;
              case 'pic3':
                  imgDiv.classList.add('background-bottle');
                  break;
              case 'pic4':
                  imgDiv.classList.add('background-book');
                  break;
              case 'pic5':
                  imgDiv.classList.add('background-euro');
                  break;
              case 'pic6':
                  imgDiv.classList.add('background-pack');
                  break;
          }
      });
  });

  popUp.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') return;
      popUpDiv.classList.add('display-on');
      popUpDiv.classList.add('background-chair');
      secondDiv.classList.add('display-on');

  });

  imgDiv.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') return;
      secondDiv.classList.add('display-on');

  })

  buttonClose.addEventListener('click', () => {
      popUpDiv.classList.remove('display-on');
      secondDiv.classList.remove('display-on');
      popUpDiv.classList.remove('background-chair');
      popUpDiv.classList.remove('background-chair');

  });

  buttonCloseImg.addEventListener('click', () => {
      imgDiv.classList.remove('display-on');
      secondDiv.classList.remove('display-on');
      imgDiv.classList.remove('background-icecream');
      imgDiv.classList.remove('background-visit');
      imgDiv.classList.remove('background-bottle');
      imgDiv.classList.remove('background-book');
      imgDiv.classList.remove('background-euro');
      imgDiv.classList.remove('background-pack');
  });

  // hover

  teamFoto.forEach((element) => {
      element.addEventListener('mouseover', () => {
          element.children[0].classList.add('drop_on');
          console.log(element.children[0]);
      });
  });

  teamFoto.forEach((element) => {
      element.addEventListener('mouseout', () => {
          element.children[0].classList.remove('drop_on');
      });
  });

  // team block