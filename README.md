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

In de app begin je meteen met alle vaardigheden op niveau 1, zodat je direct kunt reflecteren. Heb je eerder een exportbestand opgeslagen, dan kun je dat op elk moment importeren. Pas per vaardigheid het niveau aan met de schuifregelaar; de bloem groeit automatisch mee en de kaarten laten zien wat het niveau betekent en welke volgende stap je kunt zetten.

### Opslaan, importeren en delen met docent
- **Start nieuw**: gebruik de knop "Nieuw bestand" in de toolbar om alle vaardigheden te resetten naar niveau 1.
- **Exporteer voortgang**: klik op de knop bovenin de "Bloem van groei"-sectie. Er wordt een `groeituin-voortgang.json` met
  je niveaus, gekozen acties en bewijs (als data-URL) gedownload.
- **Importeer voortgang**: klik op "Importeer voortgang" en kies een eerder gedownload JSON-bestand. Je niveaus en bewijs
  worden hersteld.
- **Stuur update naar docent**: downloadt automatisch je exportbestand en opent een e-mail met een tekstsamenvatting. Voeg het
  gedownloade JSON-bestand toe als bijlage zodat het bewijs meegestuurd wordt.
