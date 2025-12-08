const STORAGE_KEY = 'groeituin-state-v1';

const skills = [
  {
    id: 'communiceren',
    name: 'Communiceren',
    color: '#5ac8fa',
    descriptions: [
      'Ik vertel globaal wat we bouwen, maar mijn uitleg mist nog voorbeelden uit onze opdracht.',
      'Ik kan kort uitleggen wat we onderzoeken en vat vragen van docent of opdrachtgever samen.',
      'Ik pitch duidelijk wat we testen, inclusief resultaat en volgende stap.',
      'Ik stem toon en visuals af op de opdrachtgever en check actief of hij of zij ons begrijpt.',
      'Ik presenteer complexe keuzes helder en vertaal feedback naar concrete aanpassingen voor het team.'
    ],
    actions: [
      [
        'Vertel in drie zinnen wat de opdracht is en laat een teamlid herhalen wat hij of zij begreep.',
        'Maak een schets of foto van jullie idee en vraag de opdrachtgever één verduidelijkende vraag.'
      ],
      [
        'Bereid een één-minuut-update voor de stand-up en noteer één vraag voor docent of opdrachtgever.',
        'Gebruik een simpele slide of tekening om je onderzoeksvraag uit te leggen.'
      ],
      [
        'Test een elevator pitch bij een klasgenoot en vraag wat nog onduidelijk is.',
        'Koppel bij je experiment terug wat je meet en wat jullie volgende test wordt.'
      ],
      [
        'Pas je verhaal aan voor opdrachtgever (impact) en docent (leren) en check of beiden het snappen.',
        'Gebruik voorbeelden of visuals uit het prototype om gemaakte keuzes te laten zien.'
      ],
      [
        'Leid een demo met de opdrachtgever en noteer expliciet welke wensen je verwerkt.',
        'Schrijf een korte hand-out voor je team zodat iedereen dezelfde boodschap vertelt.'
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
      'Ik werk aan mijn deel maar vergeet af te stemmen over de opdracht of planning.',
      'Ik maak basisafspraken en deel wat ik doe in de stand-up.',
      'Ik verdeel werk, bewaak afspraken en zorg dat iedereen zijn taken snapt.',
      'Ik zie knelpunten, organiseer hulp en houd het team gefocust op de opdracht.',
      'Ik coach anderen, zorg voor een veilige werksfeer en verbeter samen onze werkwijze.'
    ],
    actions: [
      [
        'Plan een stand-up van vijf minuten: wat doet iedereen vandaag voor de opdracht?',
        'Vraag een teamlid hoe jouw werkstuk zijn of haar deel raakt en stem af.'
      ],
      [
        'Maak samen een takenbord (to-do/in-progress/done) en zet jullie namen erbij.',
        'Plan een feedbackmoment met het team en noteer de besluiten.'
      ],
      [
        'Check of taken passen bij ieders rol en maak een realistische dagplanning.',
        'Organiseer een korte demo van ieders tussenresultaat voor de docent.'
      ],
      [
        'Spot een risico (materiaal, tijd, test) en regel wie het oppakt.',
        'Hou een mini-retro: wat ging goed en wat verbeteren we in de volgende sprint?'
      ],
      [
        'Begeleid een nieuw teamlid bij de opdracht en vraag om reflectie na afloop.',
        'Introduceer een teamritueel (check-in of review) en evalueer de impact.'
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
      'Ik zie dat iets niet werkt in ons ontwerp maar weet nog niet waar te beginnen.',
      'Ik onderzoek de oorzaak en probeer één oplossingsrichting uit.',
      'Ik vergelijk meerdere oplossingen en test welke het beste past bij onze criteria.',
      'Ik herken patronen, voorkom herhaling en betrek anderen bij de keuze.',
      'Ik ontwerp een aanpak die we kunnen hergebruiken in andere projecten en leg die uit.'
    ],
    actions: [
      [
        'Formuleer de probleemvraag en lijst wat je al weet of moet meten.',
        'Maak foto’s of metingen van het defect en noteer drie veronderstellingen.'
      ],
      [
        'Bedenk twee oplossingen en kies welke je eerst prototype.',
        'Vraag een vakexpert of docent om mee te kijken en leg jullie idee vast.'
      ],
      [
        'Test twee varianten (A/B) en vergelijk met de gestelde eisen.',
        'Maak een tabel met criteria (kosten, tijd, werking) en scoor elke optie.'
      ],
      [
        'Plan een root-cause-analyse met het team en leg vast wat jullie anders gaan doen.',
        'Betrek gebruiker of opdrachtgever in de test en verwerk hun feedback.'
      ],
      [
        'Maak een stappenplan of checklist die anderen kunnen volgen bij dit type probleem.',
        'Presenteer je aanpak in een korte video of poster en deel die met andere teams.'
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
      'Ik heb ideeën, maar deel ze nog niet in het projectteam.',
      'Ik deel een eerste idee en probeer het snel uit, ook als het ruw is.',
      'Ik werk meerdere concepten uit en kies de beste die past bij de opdrachtgever.',
      'Ik combineer ideeën van anderen, experimenteer snel en leer van mislukken.',
      'Ik inspireer anderen met nieuwe vormen en ontwerp samen verder.'
    ],
    actions: [
      [
        'Schets drie ruwe ideeën voor het prototype zonder te oordelen.',
        'Maak een moodboard met voorbeelden uit vergelijkbare technasiumprojecten.'
      ],
      [
        'Bouw een papieren of LEGO-proof-of-concept en laat het team reageren.',
        'Vraag de opdrachtgever één verbeterpunt op je schets en pas het aan.'
      ],
      [
        'Ontwerp twee concepten en toets ze aan de eisen van de opdrachtgever.',
        'Organiseer een snelle brainstorm (6-3-5) en kies het beste idee.'
      ],
      [
        'Plan een mini-experiment van dertig minuten en noteer wat je leert.',
        'Combineer twee ideeën tot een hybride prototype en test het.'
      ],
      [
        'Host een inspiratie-sessie voor andere teams en documenteer jullie werkvorm.',
        'Maak een showcase met foto’s of video’s en beschrijf hoe feedback is verwerkt.'
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
      'Ik wacht tot iemand anders de eerste stap zet richting opdrachtgever of test.',
      'Ik zie kansen en durf een kleine stap te zetten, maar zoek nog steun.',
      'Ik regel wat nodig is, stem af met betrokkenen en rond taken zelfstandig af.',
      'Ik onderbouw keuzes met tijd, geld of impact en stuur bij als resultaten anders zijn.',
      'Ik spot nieuwe mogelijkheden en help anderen initiatief te nemen.'
    ],
    actions: [
      [
        'Noteer één kans (expert bellen, materiaal regelen) en plan vandaag een eerste stap.',
        'Vraag de docent om mee te denken en plan een moment om terug te koppelen.'
      ],
      [
        'Maak een lijstje van benodigdheden en regel minimaal één resource.',
        'Plan een afspraak met opdrachtgever of gebruikers en bevestig het tijdstip.'
      ],
      [
        'Schrijf een kort actieplan (wie/wat/wanneer) en deel het in de stand-up.',
        'Zorg voor een checkmoment en registreer of je op schema ligt.'
      ],
      [
        'Evalueer een experiment op impact en pas je plan aan met het team.',
        'Vraag twee mensen feedback op je aanpak en verwerk de inzichten.'
      ],
      [
        'Coach een teamgenoot bij het zetten van de eerste stap richting stakeholder.',
        'Documenteer de opbrengst (foto of verslag) en deel die met de klas.'
      ]
    ]
  },
  {
    id: 'planning',
    name: 'Plannen',
    color: '#f97316',
    descriptions: [
      'Ik werk zonder duidelijk plan en word vaak verrast door tijd of materialen.',
      'Ik maak een grove planning maar vergeet nog mijlpalen of buffer.',
      'Ik verdeel het project in stappen met deadlines en hou de voortgang bij.',
      'Ik plan iteraties, stel bij na reviews en houd rekening met risico’s.',
      'Ik maak realistische planningen voor het team en help anderen prioriteren.'
    ],
    actions: [
      [
        'Zet alle taken voor deze week in een lijst en schat per taak de tijd.',
        'Check materiaal en noteer wat je vooraf moet regelen.'
      ],
      [
        'Maak een simpele tijdlijn met drie mijlpalen: onderzoek, prototype, test.',
        'Plan per dag één haalbaar doel en bespreek het in de stand-up.'
      ],
      [
        'Zet taken in een bord met deadlines en wijs eigenaren toe.',
        'Plan een bufferdag voor testen en noteer wie erbij nodig is.'
      ],
      [
        'Evalueer halverwege de sprint wat gehaald is en schuif laag-prio taken.',
        'Identificeer het grootste risico en plan expliciet tijd om dat te tackelen.'
      ],
      [
        'Maak een planning voor het hele team en vraag om akkoord van docent of opdrachtgever.',
        'Leer een teamgenoot hoe je een sprint plant en review samen de resultaten.'
      ]
    ]
  },
  {
    id: 'doorzetten',
    name: 'Doorzetten',
    color: '#ef4444',
    descriptions: [
      'Ik geef snel op als iets niet lukt in het ontwerp of experiment.',
      'Ik probeer opnieuw met hulp, maar raak nog gefrustreerd bij tegenslag.',
      'Ik breek problemen op in kleine stappen en werk door tot het werkt.',
      'Ik blijf testen en aanpassen, ook als meerdere pogingen mislukken.',
      'Ik laat zien dat volhouden resultaat oplevert en motiveer anderen om door te gaan.'
    ],
    actions: [
      [
        'Noteer wat exact misgaat en probeer het nog één keer met een kleine aanpassing.',
        'Vraag een klasgenoot om mee te kijken en probeer samen een nieuwe poging.'
      ],
      [
        'Plan twintig minuten om alleen op dit probleem te focussen en houd bij wat je probeert.',
        'Leg aan de docent uit waar je vastloopt en welke stap je nu gaat nemen.'
      ],
      [
        'Breek de taak in drie kleine tests en voer ze één voor één uit.',
        'Gebruik een logboek om elke poging en het resultaat te noteren.'
      ],
      [
        'Plan een fix-sessie met het team en spreek af hoeveel pogingen je doet.',
        'Verander één variabele per test en houd foto’s of metingen bij.'
      ],
      [
        'Schrijf op hoe je tegenslag overwon en deel het met de klas of opdrachtgever.',
        'Coach een teamgenoot die vastloopt en laat samen het eindresultaat zien.'
      ]
    ]
  }
];

const stemPositions = [8, 22, 36, 50, 64, 78, 92];
const skillState = {};

function baseState() {
  return {
    level: 1,
    chosenAction: null,
    actionDone: false,
    evidenceName: '',
    evidenceData: '',
    evidenceType: '',
    validation: ''
  };
}

function fillBaseState() {
function initState() {
  skills.forEach((skill) => {
    skillState[skill.id] = baseState();
  });
}

function persistState() {
  try {
    const payload = {
      version: '1.1',
      generatedAt: new Date().toISOString(),
      skills: skillState
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn('Kon lokale opslag niet bijwerken', e);
  }
}

function restoreState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (!parsed.skills) return;
    skills.forEach((skill) => {
      skillState[skill.id] = { ...baseState(), ...parsed.skills[skill.id] };
    });
  } catch (e) {
    console.warn('Kon lokale opslag niet laden', e);
  }
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
  state.evidenceData = '';
  state.evidenceType = '';
   state.evidenceData = '';
   state.evidenceType = '';
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
  persistState();
  renderAll();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Kon bestand niet lezen'));
    reader.readAsDataURL(file);
  });
}

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
      persistState();
      renderCards();
    });
  });

  const checkbox = node.querySelector('.action-done');
  checkbox.checked = state.actionDone;
  checkbox.addEventListener('change', () => {
    state.actionDone = checkbox.checked;
    state.validation = '';
    persistState();
    renderCards();
  });

  const evidenceInput = node.querySelector('.evidence-input');
  evidenceInput.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      state.evidenceName = '';
      state.evidenceData = '';
      state.evidenceType = '';
      persistState();
      renderCards();
      return;
    }

    try {
      const dataUrl = await readFileAsDataUrl(file);
      state.evidenceName = file.name;
      state.evidenceData = dataUrl;
      state.evidenceType = file.type;
      state.validation = '';
      persistState();
      renderCards();
    } catch (err) {
      console.error(err);
      state.validation = 'Uploaden is mislukt. Probeer het opnieuw of kies een kleiner bestand.';
      renderCards();
    }
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

function buildExportPayload() {
  return {
    version: '1.1',
    generatedAt: new Date().toISOString(),
    skills: skillState
  };
}

function downloadExport() {
  const payload = buildExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'groeituin-voortgang.json';
  link.click();
  URL.revokeObjectURL(url);
}

function handleImport(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data.skills) throw new Error('Geen skills gevonden');
      skills.forEach((skill) => {
        skillState[skill.id] = { ...baseState(), ...data.skills[skill.id] };
      });
      persistState();
      renderAll();
      hideStartOverlay();
    } catch (err) {
      alert('Bestand kon niet worden geïmporteerd. Controleer of het een geldig exportbestand is.');
      console.error(err);
    }
  };
  reader.readAsText(file);
}

function showStartOverlay() {
  const overlay = document.getElementById('start-overlay');
  if (overlay) overlay.classList.remove('hidden');
}

function hideStartOverlay() {
  const overlay = document.getElementById('start-overlay');
  if (overlay) overlay.classList.add('hidden');
}

function startNewProgress() {
  fillBaseState();
  persistState();
  renderAll();
  hideStartOverlay();
}

function buildEmailBody() {
  const lines = ['Beste docent,', '', 'Hierbij mijn voortgang en bewijs uit de Groeituin:'];
  skills.forEach((skill) => {
    const state = skillState[skill.id];
    const actionText =
      state.chosenAction !== null ? skill.actions[state.level - 1][state.chosenAction] : 'Geen actie gekozen';
    lines.push(
      `- ${skill.name}: niveau ${state.level} (actie: ${actionText}; bewijs: ${state.evidenceName || 'niet toegevoegd'})`
    );
  });
  lines.push('', 'Het exportbestand bevat het bewijs (als data-URL). Voeg het bestand toe aan deze mail als bijlage.');
  return lines.join('\n');
}

function shareUpdate() {
  downloadExport();
  const subject = encodeURIComponent('Technasium voortgang - Groeituin');
  const body = encodeURIComponent(buildEmailBody());
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function init() {
  fillBaseState();
  const hasSavedState = Boolean(localStorage.getItem(STORAGE_KEY));
  if (hasSavedState) {
    restoreState();
    hideStartOverlay();
  } else {
    showStartOverlay();
  }
  initState();
  restoreState();
  renderAll();

  const exportButton = document.getElementById('export-button');
  const importInput = document.getElementById('import-input');
  const shareButton = document.getElementById('share-button');
  const newButton = document.getElementById('new-button');
  const startNewButton = document.getElementById('start-new-button');
  const startImportButton = document.getElementById('start-import-button');

  if (exportButton) exportButton.addEventListener('click', downloadExport);
  if (importInput)
    importInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      handleImport(file);
      e.target.value = '';
    });
  if (shareButton) shareButton.addEventListener('click', shareUpdate);
  if (newButton)
    newButton.addEventListener('click', () => {
      const confirmReset = window.confirm('Start nieuw met alle vaardigheden op niveau 1? Huidige voortgang wordt overschreven.');
      if (confirmReset) startNewProgress();
    });
  if (startNewButton) startNewButton.addEventListener('click', startNewProgress);
  if (startImportButton)
    startImportButton.addEventListener('click', () => {
      importInput?.click();
    });
function init() {
  initState();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
