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
      'Oefen hardop vertellen wat je doet in één zin en vraag of de ander het samenvat.',
      'Bereid je boodschap in drie kernpunten voor en vraag feedback op je uitleg.',
      'Gebruik voorbeelden of visuals om je verhaal te ondersteunen en vraag door naar reacties.',
      'Pas toon en voorbeelden aan per persoon en noteer wat wel/niet werkte voor volgende keren.',
      'Blijf modellen of tools delen met anderen en coach iemand anders bij een presentatie.'
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
      'Plan elke meeting een kort rondje: wat doet iedereen en wat heb je nodig?',
      'Leg afspraken vast in een gedeelde to-do en check elkaars voortgang.',
      'Gebruik een kort dagstartje: wat ging goed/gisteren, wat ga je vandaag doen?',
      'Vraag actief wie hulp nodig heeft en bedenk samen alternatieven.',
      'Coach iemand nieuw in het team op samenwerken en reflecteer samen na afloop.'
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
      'Schrijf het probleem in één zin op en noteer wat je al weet of mist.',
      'Bedenk minstens twee oplossingen en kies de meest haalbare.',
      'Test klein, leer van de uitkomst en noteer wat je de volgende keer anders doet.',
      'Vraag feedback op je analyse en betrek een ander perspectief.',
      'Maak een stappenplan of template en leer iemand anders ermee werken.'
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
      'Noteer drie willekeurige oplossingen zonder ze te beoordelen.',
      'Kies je beste idee en maak een snelle schets of mini-prototype.',
      'Vraag feedback op twee varianten en kies de beste elementen.',
      'Plan een kort experiment per week en bespreek wat je leerde.',
      'Organiseer een mini-brainstorm voor een ander en deel jouw aanpak.'
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
      'Schrijf één kans op en zet vandaag een kleine eerste stap.',
      'Vraag iemand om mee te kijken en spreek een duidelijke deadline af.',
      'Maak een kort plan (wie/wat/wanneer) en houd je voortgang bij.',
      'Check tussendoor effect en pas je plan aan waar nodig.',
      'Coach iemand anders in het zetten van de eerste stap en evalueer samen.'
    ]
  }
];

const stemPositions = [15, 35, 55, 75, 90];

function createCard(skill) {
  const template = document.getElementById('skill-card-template');
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.skillId = skill.id;
  node.querySelector('.card-title').textContent = skill.name;

  const slider = node.querySelector('.level-slider');
  slider.value = 3;
  slider.addEventListener('input', () => updateSkill(skill.id, Number(slider.value)));

  return node;
}

function levelLabel(level) {
  return `Niveau ${level}/5`;
}

function updateSkill(id, level) {
  const skill = skills.find((s) => s.id === id);
  if (!skill) return;
  skill.level = level;
  renderCards();
  renderGarden();
}

function renderCards() {
  const container = document.getElementById('skill-cards');
  container.innerHTML = '';

  skills.forEach((skill) => {
    const card = createCard(skill);
    const level = skill.level ?? 3;

    card.querySelector('.level-chip').textContent = levelLabel(level);
    card.querySelector('.level-slider').value = level;
    card.querySelector('.level-description').textContent = skill.descriptions[level - 1];

    const next = level === 5
      ? 'Je zit op het hoogste niveau. Blijf je aanpak delen en coach een klasgenoot.'
      : `Om niveau ${level + 1} te halen: ${skill.actions[level]}`;
    card.querySelector('.next-step').textContent = next;

    container.appendChild(card);
  });
}

function renderGarden() {
  const garden = document.getElementById('garden');
  garden.innerHTML = '';

  skills.forEach((skill, index) => {
    const level = skill.level ?? 3;
    const stem = document.createElement('div');
    stem.className = 'stem';
    stem.style.left = `${stemPositions[index]}%`;

    const stemLine = document.createElement('div');
    stemLine.className = 'stem-line';
    stemLine.style.height = `${50 + level * 35}px`;

    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.background = skill.color;
    petal.style.width = `${24 + level * 8}px`;
    petal.style.height = `${24 + level * 8}px`;

    const levelNumber = document.createElement('div');
    levelNumber.className = 'level-number';
    levelNumber.textContent = level;

    const label = document.createElement('div');
    label.className = 'stem-label';
    label.textContent = skill.name;

    stem.appendChild(label);
    stem.appendChild(levelNumber);
    stem.appendChild(petal);
    stem.appendChild(stemLine);

    garden.appendChild(stem);
  });
}

function init() {
  skills.forEach((skill) => { skill.level = 3; });
  renderCards();
  renderGarden();
}

document.addEventListener('DOMContentLoaded', init);
