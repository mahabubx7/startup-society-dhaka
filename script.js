/* --- Variables --- */
const speakers = [
  {
    name: 'Yochi Benkler',
    intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore voluptate, quod quisquam dignissimos ipsa.',
    photo: './assets/speakers/istockphoto-1029242440-612x612.jpg',
  },
  {
    name: 'Kilnam Chon',
    intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore voluptate, quod quisquam dignissimos ipsa.',
    photo: './assets/speakers/istockphoto-1129638598-612x612.jpg',
  },
  {
    name: 'SohYeong Noh',
    intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore voluptate, quod quisquam dignissimos ipsa.',
    photo: './assets/speakers/istockphoto-1176848666-612x612.jpg',
  },
  {
    name: 'Julia Ledar',
    intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore voluptate, quod quisquam dignissimos ipsa.',
    photo: './assets/speakers/istockphoto-1178374176-612x612.jpg',
  },
  {
    name: 'Lila Tretikov',
    intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore voluptate, quod quisquam dignissimos ipsa.',
    photo: './assets/speakers/istockphoto-1216019260-612x612.jpg',
  },
  {
    name: 'Ryan Merkley',
    intro: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore voluptate, quod quisquam dignissimos ipsa.',
    photo: './assets/speakers/istockphoto-1296538657-612x612.jpg',
  },
];

/* --- JS codes --- */
function setupMobileMenu() {
  const menuOpener = document.getElementById('hamberger');
  const menuCloser = document.getElementById('cross');
  const mobileMenu = document.getElementById('mobileMenu');
  const links = mobileMenu.querySelectorAll('li a');

  menuOpener.addEventListener('click', () => mobileMenu.classList.remove('d-none'));
  menuCloser.addEventListener('click', () => mobileMenu.classList.add('d-none'));
  links.forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.add('d-none'));
  });
}

function dynamicSpeakersSection() {
  const featuredContainer = document.querySelector('#featured .container');

  const h2 = document.createElement('h2');
  h2.classList.add('section-heading', 'txt-dark');
  h2.innerText = 'featured speakers';

  const speakersContainer = document.createElement('div');
  speakersContainer.classList.add('speakers', 'grid');

  function render(index = speakers.length) {
    speakersContainer.querySelectorAll('.speaker-item').innerHTML = ''; // reset
    speakers.splice(0, index).forEach((speaker) => {
      const item = document.createElement('div');
      item.classList.add('speaker-item', 'flex', 'justify-space', 'items-center');
      item.innerHTML = `
      <div class="img">
        <img src="${speaker.photo}" alt="speaker" class="speaker-photo" />
      </div>
      <div class="speaker-info flex flex-col">
        <h4>${speaker.name}</h4>
        <p>${speaker.intro}</p>
      </div>
      `;

      speakersContainer.appendChild(item);
    });
  }

  function renderSpeakers() {
    if (window.innerWidth <= 768) {
      // mobile device
      render(2);
      const more = document.createElement('button');
      more.classList.add('btn', 'btn-more', 'txt-capitalize');
      more.innerText = 'more';
      speakersContainer.appendChild(more);
      more.addEventListener('click', () => {
        render();
        document.querySelector('.btn-more').remove();
      });
      speakersContainer.appendChild(more);
    } else {
      // web or others
      render();
    }

    featuredContainer.appendChild(h2); // heading inserted
    featuredContainer.appendChild(speakersContainer); // speakers inserted
  }

  // renderSpeakers(speakersContainer); // putting items on demand
  renderSpeakers();
}

/* --- Main Function --- */
function main() {
  setupMobileMenu(); // hooking ---> mobileMenu

  dynamicSpeakersSection(); // rendering speakers using DOM
}

/* --- Load main() --- */
main();
