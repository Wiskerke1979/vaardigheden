const skills = [
  {
    id: 'communiceren',
    name: 'Communiceren',
    color: '#5ac8fa',
    descriptions: [
      'Ik deel mijn idee, maar ik zoek nog naar woorden en mis soms de kern.',
      'Ik leg kort uit wat ik bedoel en ik luister als iemand vragen heeft.',
      'Ik licht mijn boodschap duidelijk toe en controleer of anderen het begrijpen.',
      'Ik stem mijn taal en voorbeelden af op mijn publiek en check actief hoe het overkomt.',
      'Ik breng complexe ideeën helder en zorg dat iedereen mee is; anderen vragen mij om advies.'
    ],
    actions: [
      [
        'Vertel in één zin wat je doet en laat een klasgenoot het herhalen.',
        'Neem je uitleg op met je telefoon en luister terug waar je wilt verbeteren.'
      ],
      [
        'Maak drie kernpunten voor je verhaal en vraag feedback na afloop.',
        'Gebruik een eenvoudige tekening of infographic om je idee te ondersteunen.'
      ],
      [
        'Vraag twee vragen aan je publiek om te checken of ze je begrijpen.',
        'Gebruik voorbeelden uit hun belevingswereld en noteer wat werkte.'
      ],
      [
        'Pas je toon aan per persoon en vraag hoe je boodschap overkomt.',
        'Laat iemand anders je uitleg geven en bespreek samen het verschil.'
      ],
      [
        'Coach een klasgenoot bij een presentatie en deel jouw tips.',
        'Maak een korte gids met voorbeelden zodat anderen je aanpak kunnen volgen.'
      ]
    ]
  },
  {
    id: 'samenwerken',
    name: 'Samenwerken',
    color: '#ff7ab8',
    descriptions: [
      'Ik doe mijn eigen deel, maar vergeet soms af te stemmen met de groep.',
      'Ik bespreek taken en luister, maar ben nog zoekende in afspraken maken.',
      'Ik maak duidelijke afspraken, kom ze na en geef op tijd updates.',
      'Ik zie waar het vastloopt en help verdelen, motiveren en oplossen.',
      'Ik zorg voor een veilige sfeer, verdeel slim en help het team beter worden.'
    ],
    actions: [
      [
        'Plan een kort rondje: wat doet iedereen en wat heb je nodig?',
        'Vraag één teamlid hoe jij hem of haar kunt helpen deze week.'
      ],
      [
        'Leg afspraken vast in een gedeelde to-do en stuur een update.',
        'Maak samen een overzicht van wie wat doet en wanneer het af is.'
      ],
      [
        'Start de dag met wat ging goed/gisteren en wat ga je vandaag doen?',
        'Plan een korte check-in met je team en deel je voortgang.'
      ],
      [
        'Vraag actief wie hulp nodig heeft en bied een alternatief aan.',
        'Organiseer een mini-evaluatie om knelpunten te vinden en te verdelen.'
      ],
      [
        'Coach iemand nieuw in het team en bespreek samen hoe het ging.',
        'Introduceer een werkafspraak die jullie samenwerking beter maakt.'
      ]
    ]
  },
  {
    id: 'probleem',
    name: 'Probleem oplossen',
    color: '#f7b500',
    descriptions: [
      'Ik zie dat er iets misgaat maar weet nog niet goed waar ik moet beginnen.',
      'Ik verzamel info en probeer één oplossing, ook al is die nog niet perfect.',
      'Ik vergelijk meerdere opties, kies bewust en test wat het beste werkt.',
      'Ik ontdek patronen, voorkom herhaling en betrek anderen bij het kiezen.',
      'Ik ontwerp een aanpak die ook op andere problemen toepasbaar is en deel die.'
    ],
    actions: [
      [
        'Schrijf het probleem in één zin en zet erbij wat je al weet of mist.',
        'Maak een foto van de situatie en noteer drie vragen die je wilt beantwoorden.'
      ],
      [
        'Bedenk minstens twee oplossingen en kies de meest haalbare.',
        'Vraag een klasgenoot om mee te denken en noteer jullie topkeuze.'
      ],
      [
        'Test klein en schrijf op wat werkte en wat niet.',
        'Vergelijk twee opties naast elkaar en kies bewust de beste.'
      ],
      [
        'Vraag feedback op je analyse van het probleem.',
        'Betrek iemand met een ander perspectief en verwerk zijn of haar idee.'
      ],
      [
        'Maak een stappenplan of template en leer iemand anders ermee werken.',
        'Leg je aanpak uit in een korte video of poster en deel die met de klas.'
      ]
    ]
  },
  {
    id: 'creatief',
    name: 'Creatief',
    color: '#6dd93b',
    descriptions: [
      'Ik heb ideeën, maar ze blijven vaak in mijn hoofd.',
      'Ik deel één of twee ideeën en probeer ze uit, ook als ze nog ruw zijn.',
      'Ik bedenk meerdere invalshoeken en kies de meest verrassende die werkt.',
      'Ik combineer ideeën van anderen, experimenteer snel en leer van mislukken.',
      'Ik inspireer anderen met nieuwe vormen en bouw voort op wat zij aandragen.'
    ],
    actions: [
      [
        'Noteer drie willekeurige oplossingen zonder ze te beoordelen.',
        'Maak een mindmap met minstens vijf takken over je idee.'
      ],
      [
        'Kies je beste idee en maak een snelle schets of mini-prototype.',
        'Vraag een klasgenoot om één verbeteridee te geven en werk dat uit.'
      ],
      [
        'Maak twee varianten van je idee en kies de meest verrassende die werkt.',
        'Vraag feedback op beide varianten en combineer de beste elementen.'
      ],
      [
        'Plan een kort experiment en beschrijf wat je leert.',
        'Combineer twee ideeën van anderen tot één nieuw plan en test dat.'
      ],
      [
        'Organiseer een mini-brainstorm voor iemand anders en deel jouw aanpak.',
        'Maak een inspiratiebord (collage) en presenteer hoe jij daarop voortbouwt.'
      ]
    ]
  },
  {
    id: 'ondernemend',
    name: 'Ondernemend',
    color: '#9b7bff',
    descriptions: [
      'Ik wacht af tot iemand anders het initiatief neemt.',
      'Ik zet een eerste stap als ik een kans zie, maar vind het nog spannend.',
      'Ik pak kansen op, regel wat nodig is en rond taken zelfstandig af.',
      'Ik onderzoek wat het oplevert, betrek de juiste mensen en durf bij te sturen.',
      'Ik zie nieuwe mogelijkheden, start iets op en help anderen hetzelfde te doen.'
    ],
    actions: [
      [
        'Schrijf één kans op en zet vandaag een kleine eerste stap.',
        'Vraag een docent of klasgenoot om mee te denken over je idee.'
      ],
      [
        'Vraag iemand om mee te kijken en spreek een duidelijke deadline af.',
        'Maak een lijstje van wat je nodig hebt en regel één ding vandaag.'
      ],
      [
        'Maak een kort plan (wie/wat/wanneer) en houd je voortgang bij.',
        'Bepaal een meetmoment en check of je op schema ligt.'
      ],
      [
        'Check tussendoor het effect en pas je plan aan waar nodig.',
        'Vraag twee mensen om feedback op je aanpak en verwerk die.'
      ],
      [
        'Coach iemand anders in het zetten van de eerste stap en evalueer samen.',
        'Deel een kort verslag of video over jouw project en wat het opleverde.'
      ]
    ]
  }
];

const stemPositions = [15, 35, 55, 75, 90];
const skillState = {};

function initState() {
  skills.forEach((skill) => {
    skillState[skill.id] = {
      level: 1,
      chosenAction: null,
      actionDone: false,
      evidenceName: '',
      validation: ''
    };
  });
}

function levelLabel(level) {
  return `Niveau ${level}/5`;
}

function resetProgress(id) {
  const state = skillState[id];
  if (!state) return;
  state.chosenAction = null;
  state.actionDone = false;
  state.evidenceName = '';
  state.validation = '';
}

function handleLevelChange(id, targetLevel, sliderElement) {
  const state = skillState[id];
  if (!state) return;
  const currentLevel = state.level;

  const requirementsMet = state.chosenAction !== null && state.actionDone && state.evidenceName;

  if (targetLevel > currentLevel && !requirementsMet) {
    state.validation = 'Kies één actie, vink hem af en upload bewijs voordat je naar het volgende niveau gaat.';
    sliderElement.value = currentLevel;
    renderCards();
    return;
  }

  state.level = targetLevel;
  resetProgress(id);
  renderAll();
}

function createCard(skill) {
  const state = skillState[skill.id];
  const template = document.getElementById('skill-card-template');
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.skillId = skill.id;
  node.querySelector('.card-title').textContent = skill.name;

  const slider = node.querySelector('.level-slider');
  slider.value = state.level;
  slider.addEventListener('input', () => handleLevelChange(skill.id, Number(slider.value), slider));

  const actionRadios = node.querySelectorAll('input[type="radio"]');
  actionRadios.forEach((radio) => {
    radio.name = `action-choice-${skill.id}`;
    radio.addEventListener('change', (e) => {
      state.chosenAction = Number(e.target.value);
      state.validation = '';
      renderCards();
    });
  });

  const checkbox = node.querySelector('.action-done');
  checkbox.checked = state.actionDone;
  checkbox.addEventListener('change', () => {
    state.actionDone = checkbox.checked;
    state.validation = '';
    renderCards();
  });

  const evidenceInput = node.querySelector('.evidence-input');
  evidenceInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    state.evidenceName = file ? file.name : '';
    state.validation = '';
    renderCards();
  });

  return node;
}

function renderCards() {
  const container = document.getElementById('skill-cards');
  container.innerHTML = '';

  skills.forEach((skill) => {
    const card = createCard(skill);
    const state = skillState[skill.id];
    const level = state.level;

    card.querySelector('.level-chip').textContent = levelLabel(level);
    card.querySelector('.level-slider').value = level;
    card.querySelector('.level-description').textContent = skill.descriptions[level - 1];

    const nextStep = card.querySelector('.next-step');
    if (level === 5) {
      nextStep.textContent = 'Je zit op het hoogste niveau. Blijf je aanpak delen en coach een klasgenoot.';
    } else {
      nextStep.textContent = `Kies één van deze acties om naar niveau ${level + 1} te groeien.`;
    }

    const actionTexts = skill.actions[level - 1];
    const [choiceA, choiceB] = card.querySelectorAll('.choice-text');
    choiceA.textContent = actionTexts[0];
    choiceB.textContent = actionTexts[1];

    const actionRadios = card.querySelectorAll('input[type="radio"]');
    actionRadios.forEach((radio) => {
      radio.checked = Number(radio.value) === state.chosenAction;
    });

    const evidenceName = card.querySelector('.evidence-name');
    evidenceName.textContent = state.evidenceName ? `Toegevoegd: ${state.evidenceName}` : '';

    if (state.validation) {
      nextStep.textContent = state.validation;
      nextStep.classList.add('warning');
    } else {
      nextStep.classList.remove('warning');
    }

    container.appendChild(card);
  });
}

function renderGarden() {
  const garden = document.getElementById('garden');
  garden.innerHTML = '';

  skills.forEach((skill, index) => {
    const state = skillState[skill.id];
    const level = state.level;
    const stem = document.createElement('div');
    stem.className = 'stem';
    stem.style.left = `${stemPositions[index]}%`;

    const stemLine = document.createElement('div');
    stemLine.className = 'stem-line';
    stemLine.style.height = `${40 + level * 34}px`;

    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.width = `${46 + level * 8}px`;
    flower.style.height = `${46 + level * 8}px`;

    for (let i = 0; i < 6; i += 1) {
      const petal = document.createElement('span');
      petal.className = 'flower-petal';
      petal.style.background = skill.color;
      petal.style.transform = `rotate(${i * 60}deg) translateY(-50%)`;
      flower.appendChild(petal);
    }

    const center = document.createElement('div');
    center.className = 'flower-center';
    center.style.background = skill.color;
    flower.appendChild(center);

    const levelNumber = document.createElement('div');
    levelNumber.className = 'level-number';
    levelNumber.textContent = level;

    const label = document.createElement('div');
    label.className = 'stem-label';
    label.textContent = skill.name;

    stem.appendChild(label);
    stem.appendChild(levelNumber);
    stem.appendChild(flower);
    stem.appendChild(stemLine);

    garden.appendChild(stem);
  });
}

function renderAll() {
  renderCards();
  renderGarden();
}

function init() {
  initState();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
