const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');
const finalMassage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');
const words = [
  'overruffing',
  'smallswords',
  'packhorses',
  'protreptics',
  'entropions',
  'orectic',
  'reductor',
  'cors',
  'metred',
  'mercurialness',
  'additives',
  'photoreaction',
  'medivac',
  'bowling',
  'commodore',
  'vasoactivities',
  'drills',
  'hysteric',
  'voila',
  'imprint',
  'ofttimes',
  'freemasonry',
  'sels',
  'respell',
  'enrobe',
  'vicugna',
  'tushing',
  'smerked',
  'schoolmasters',
  'rephotograph',
  'bioactivities',
  'overintensity',
  'chocoholic',
  'excitablenesses',
  'ecology',
  'sunbather',
  'overstrew',
  'toxicoses',
  'disinheritance',
  'culets',
  'fiscals',
  'cobalts',
  'parclose',
  'loftily',
  'canorousnesses',
  'potheads',
  'fallible',
  'fieldstripping',
  'tannic',
  'apimanias',
  'irredenta',
  'snouted',
  'cussos',
  'greenstuff',
  'transitively',
  'stoop',
  'pass',
  'illogically',
  'gombeens',
  'dewatered',
  'seccos',
  'retackles',
  'factorize',
  'dilemmas',
  'debase',
  'overanxieties',
  'degreaser',
  'krafts',
  'iceboats',
  'bacteroid',
  'rechauffes',
  'unrove',
  'upholstering',
  'sandbaggers',
  'give',
  'waddie',
  'flintinesses',
  'galvanometric',
  'rustic',
  'sidesplitting',
  'impetration',
  'mantelpiece',
  'constipations',
  'superbly',
  'infidel',
  'popularity',
  'sockeyes',
  'pickproof',
  'triennially',
  'commencements',
  'besieges',
  'apparently',
  'capstans',
  'refracted',
  'vernal',
  'wamuses',
  'briarwood',
  'webbiest',
  'dickers',
  'vapidities',
  'violoncellos',
  'folksingers',
  'dauting',
  'pesthouse',
  'malathions',
  'repatterning',
  'stressed',
  'clotheshorse',
  'heed',
  'torchons',
  'deforestations',
  'nastily',
  'hilus',
  'ransoms',
  'schlumpy',
  'stellifying',
  'nifty',
  'portion',
  'pectins',
  'mistutor',
  'fantails',
  'cardings',
  'liberators',
  'handlike',
  'biotites',
  'oppress',
  'freelancing',
  'materialists',
  'indigo',
  'largenesses',
  'acetanilide',
  'annoy',
  'speechifies',
  'colicweed',
  'meno',
  'adorn',
  'condemn',
  'procrastinating',
  'igloos',
  'subacidly',
  'postexilic',
  'ickers',
  'retile',
  'symmetrized',
  'penitences',
  'oxymorons',
  'lucidness',
  'egalitarianism',
  'patchoulies',
  'closes',
  'confederacy',
  'truantly',
  'basics',
  'preconception',
  'distinct',
  'deprecatory',
  'protamins',
  'carolus',
  'ordinarily',
  'braked',
  'encumbered',
  'banning',
  'bleeped',
  'seizable',
  'derepress',
  'paganise',
  'deceivable',
  'misdescribes',
  'synchronicities',
  'stotin',
  'racketeers',
  'professes',
  'absinthes',
  'viceregally',
  'ambulates',
  'madcap',
  'parmesan',
  'notices',
  'pigeonhole',
  'tryptophans',
  'vowelizes',
  'torquer',
  'surpassing',
  'overgoverning',
  'ricochets',
  'quintuplicating',
  'preluncheon',
  'exclusiveness',
  'noninstallment',
  'dichromatisms',
  'disrobing',
  'collimate',
  'twistings',
  'sensationalists',
  'avengeful',
  'cleaves',
  'chiropody',
  'depriver',
  'eject',
  'zymolyses',
  'aphrodites',
  'exospore',
  'fervencies',
  'stomaching',
  'maguey',
  'pachinkos',
  'watapes',
  'murkiness',
  'chickweed',
  'investment',
  'fatshederas',
  'rephrased',
  'itinerating',
  'bathyal',
  'stages',
  'oscillograms',
  'incorrigible',
  'demurrer',
  'shopwindow',
  'remeasure',
  'tablemates',
  'innocents',
  'lotoses',
  'toughing',
  'conferencings',
  'blackouts',
  'snowblowers',
  'tendonitis',
  'wheepled',
  'craniosacral',
  'gonidia',
  'splotchier',
  'pro',
  'cumbers',
  'offish',
  'cramping',
  'phycoerythrin',
  'peppermints',
  'rigmarole',
  'sweven',
  'wheelwork',
  'ensile',
  'wharve',
  'geographies',
  'particularity',
  'nonaspirin',
  'sangar',
  'myopies',
  'enviablenesses',
  'sovkhozy',
  'bipartisanism',
  'ureteric',
  'sendups',
  'quieters',
  'developmentally',
  'radwaste',
  'workwomen',
  'rejuvenators',
  'ganjah',
  'nongregarious',
  'intoxicated',
  'intraocular',
  'hagiology',
  'phosphorus',
  'lawyerly',
  'gouging',
  'shampooers',
  'overdocuments',
  'camouflaged',
  'plunks',
  'philistia',
  'tendon',
  'bulkhead',
  'knurliest',
  'obligately',
  'wiregrass',
  'tittering',
  'imponderable',
  'mirker',
  'cubbies',
  'tensely',
  'shophars',
  'traversable',
  'diakineses',
  'yautias',
  'punctiliously',
  'lucerne',
  'darkliest',
  'demisable',
  'sabins',
  'pessimistic',
  'demographically',
  'desperados',
  'nonathletic',
  'imperishably',
  'johnnycakes',
  'unravelling',
  'dandle',
  'bulimics',
  'tiling',
];

let selectedword = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];

const displayWord = () => {
  wordEl.innerHTML = `${selectedword
    .split('')
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ''
        }</span>`
    )
    .join('')}`;
  const innerWord = wordEl.innerText.replace(/\n/g, '');
  if (innerWord === selectedword) {
    finalMassage.innerText = 'Congratulations! You Won';
    popup.style.display = 'flex';
  }
};

const updateWrongLettersEL = () => {
  wrongLetterEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}`;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  if (wrongLetters.length === figureParts.length) {
    finalMassage.innerText = 'Unfortunately you lost. !!!';
    popup.style.display = 'flex';
  }
};

const showNotification = () => {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
};

window.addEventListener('keydown', (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedword.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEL();
      } else {
        showNotification();
      }
    }
  }
});

playAgainBtn.addEventListener('click', () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedword = words[Math.floor(Math.random() * words.length)];

  displayWord();
  updateWrongLettersEL();

  popup.style.display = 'none';
});

displayWord();
