# Vaardigheden Groeituin

Een eenvoudige webapp die leerlingen helpt reflecteren op hun vaardigheden. Ze scoren zichzelf op vijf niveaus en zien dit terug in een groeiende bloem. Per niveau staat uitgelegd wat het betekent en welke actie helpt om door te groeien.

De groeiacties zijn geschreven voor Technasium-opdrachten (contact met opdrachtgevers, prototyping, itereren) en behandelen de vaardigheden communiceren, samenwerken, probleem oplossen, creatief, ondernemend, plannen en doorzetten.

## Gebruik
Je kunt de app op twee manieren openen:

1. **Direct openen**
   - Dubbelklik op `index.html` of open het bestand in je browser.
   - Als je waarschuwingen krijgt over lokale bestanden, kies voor “toestaan”.

2. **Met een eenvoudige webserver** (handig als je slider- of kleurbestanden niet direct laadt)
   - Installeer Python 3 (meestal al aanwezig).
   - Start in de projectmap het commando: `python -m http.server 8000`.
   - Open daarna http://localhost:8000 in je browser.

In de app kies je op het startscherm of je een bestaand bestand importeert of met de standaardinstellingen op niveau 1 begint. Daarna pas je per vaardigheid het niveau aan met de schuifregelaar. De bloem groeit automatisch mee en de kaarten laten zien wat het niveau betekent en welke volgende stap je kunt zetten.

### Opslaan, importeren en delen met docent
- **Start nieuw**: kies op het startscherm voor "Start nieuw (niveau 1)" of gebruik de knop "Nieuw bestand" in de toolbar om alle vaardigheden te resetten.
In de app pas je per vaardigheid het niveau aan met de schuifregelaar. De bloem groeit automatisch mee en de kaarten laten zien wat het niveau betekent en welke volgende stap je kunt zetten.

### Opslaan, importeren en delen met docent
- **Start nieuw**: kies op het startscherm of via de knop "Nieuw bestand" om met alle vaardigheden op niveau 1 te beginnen.
- **Exporteer voortgang**: klik op de knop bovenin de "Bloem van groei"-sectie. Er wordt een `groeituin-voortgang.json` met
  je niveaus, gekozen acties en bewijs (als data-URL) gedownload.
- **Importeer voortgang**: klik op "Importeer voortgang" en kies een eerder gedownload JSON-bestand. Je niveaus en bewijs
  worden hersteld.
- **Stuur update naar docent**: downloadt automatisch je exportbestand en opent een e-mail met een tekstsamenvatting. Voeg het
  gedownloade JSON-bestand toe als bijlage zodat het bewijs meegestuurd wordt.
