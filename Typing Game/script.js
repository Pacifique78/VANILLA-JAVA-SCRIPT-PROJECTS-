const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'worldling',
  'ingathers',
  'vituperatory',
  'polymorphisms',
  'dichotomies',
  'queuer',
  'planeload',
  'corepressor',
  'timberline',
  'ladybirds',
  'reduplications',
  'acnes',
  'fawned',
  'juggled',
  'undecipherable',
  'glorified',
  'urase',
  'coinsurance',
  'sleepwalkers',
  'chanties',
  'indeterminism',
  'upsurge',
  'coliforms',
  'organdie',
  'ephemerality',
  'rid',
  'comfortless',
  'squeegees',
  'oppressing',
  'creolise',
  'cockcrows',
  'scorecard',
  'berets',
  'collagen',
  'reinvesting',
  'expostulations',
  'cubism',
  'wadis',
  'onos',
  'transposition',
  'tropicalizing',
  'bronchium',
  'qualifications',
  'gouge',
  'nosewheel',
  'ecclesiologists',
  'bray',
  'insidiousnesses',
  'hydrothermally',
  'dogface',
  'cephalization',
  'reaccented',
  'compressible',
  'leadmen',
  'amniotic',
  'sacques',
  'reductionisms',
  'deeper',
  'flatfooting',
  'conversaziones',
  'cubbish',
  'mismet',
  'relocation',
  'down',
  'runt',
  'seriffed',
  'deprivers',
  'rebbe',
  'recaps',
  'motherhoods',
  'bisontine',
  'hatefulnesses',
  'stogies',
  'riverside',
  'drumbles',
  'downthrows',
  'counterpickets',
  'chiliast',
  'pinnula',
  'nationalizers',
  'azotise',
  'mordancies',
  'outglaring',
  'divisively',
  'yummier',
  'zooxanthellae',
  'venturousness',
  'carryout',
  'bomb',
  'incitant',
  'subdialects',
  'headwaters',
  'depopulations',
  'burgout',
  'savorily',
  'bandmate',
  'timeserving',
  'shleps',
  'dehorned',
  'polyurias',
  'loudness',
  'supersoft',
  'purdas',
  'yutzes',
  'unliberated',
  'skivers',
  'matriculating',
  'vituperated',
  'derogated',
  'pucka',
  'hearse',
  'marchese',
  'postures',
  'aestheticizes',
  'katydid',
  'mizzenmasts',
  'bioclimatic',
  'cavorting',
  'concierge',
  'sickbays',
  'dismally',
  'redears',
  'unstrap',
  'nigritude',
  'tegg',
  'relativize',
  'reclaims',
  'interestingly',
  'terminals',
  'absorbents',
  'oceanographers',
  'armories',
  'pluvious',
  'immurements',
  'revolve',
  'reshoot',
  'bum',
  'alkalises',
  'puttie',
  'reprivatizes',
  'underboss',
  'osmolarity',
  'bicep',
  'showcase',
  'pandoors',
  'expressionless',
  'permafrosts',
  'cloudinesses',
  'revetment',
  'tendered',
  'pinup',
  'sacculi',
  'obscenely',
  'frivolously',
  'soapy',
  'pectorals',
  'mismanaged',
  'depreciating',
  'orphanage',
  'shuns',
  'specialism',
  'snouting',
  'punitive',
  'hammam',
  'solecism',
  'storekeepers',
  'suffice',
  'zooplankter',
  'decolored',
  'eductors',
  'ingulfs',
  'wauls',
  'psalteries',
  'retaliated',
  'insults',
  'unsticks',
  'appendixes',
  'viridian',
  'haphazardries',
  'interproximal',
  'smearcases',
  'eyne',
  'olfactometers',
  'fulmination',
  'massiveness',
  'clampdowns',
  'emeers',
  'foreword',
  'frapping',
  'irresponsibles',
  'giggliest',
  'marginalizing',
  'defecating',
  'mapmakings',
  'acculturation',
  'oceanaut',
  'pacify',
  'greenlighted',
  'goalmouth',
  'signa',
  'foofaraws',
  'mutons',
  'brilliants',
  'nonplay',
  'historicists',
  'sulphids',
  'invalidism',
  'fiddly',
  'reconveys',
  'sloganeer',
  'gammons',
  'unrefrigerated',
  'dits',
  'delouse',
  'cortisone',
  'harried',
  'pro',
  'agility',
  'poverties',
  'frise',
  'brasses',
  'mackintosh',
  'bushranging',
  'crucifiers',
  'refinishes',
  'obfuscate',
  'microsomal',
  'fortuning',
  'firerooms',
  'floristries',
  'sobas',
  'enchantments',
  'sportsmanlike',
  'tricklier',
  'embanks',
  'weariest',
  'prefecture',
  'sculped',
  'linage',
  'headmost',
  'henequens',
  'bacteremias',
  'repolarizes',
  'involucral',
  'stored',
  'awardable',
  'nodical',
  'wasp',
  'extrasensory',
  'republicanizes',
  'bruxisms',
  'morosity',
  'sputterers',
  'bluebottles',
  'terser',
  'villages',
  'faggots',
  'vallation',
  'winsomer',
  'lumber',
  'barflies',
  'beak',
  'phelonion',
  'articulating',
  'demits',
  'objectionable',
  'kakiemons',
  'graced',
  'infamously',
  'thickish',
  'littermate',
  'burins',
  'sard',
  'gellant',
  'malgre',
  'pleach',
  'tripinnately',
  'vitalizes',
  'causation',
  'oophorectomy',
  'tetanal',
  'alb',
  'ethicizes',
  'shamefacedness',
  'colins',
  'canons',
  'gangstas',
  'hornblende',
  'sumo',
  'gestapo',
  'athenaeum',
  'ironmaster',
  'riskers',
  'cosmologists',
  'resketched',
  'ohia',
  'repot',
  'subtilizations',
  'versines',
  'khaf',
];

let randomWord;

let score = 0;
let time = 10;

let difficult =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'easy';

difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'easy';

text.focus();

const gameOver = () => {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
  endgameEl.style.display = 'flex';
};

const updateTime = () => {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
};

const timeInterval = setInterval(updateTime, 1000);

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

const addWordToDOM = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

const updateScore = () => {
  score++;
  scoreEl.innerHTML = score;
};

addWordToDOM();

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    e.target.value = '';

    if (difficult === 'hard') {
      time += 3;
    } else if (difficult === 'medium') {
      time += 5;
    } else {
      time += 7;
    }

    updateTime();
  }
});

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
});

settingsForm.addEventListener('change', (e) => {
  difficult = e.target.value;
  localStorage.setItem('difficulty', difficult);
});
