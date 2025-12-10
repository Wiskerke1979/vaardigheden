# Vaardigheden Groeituin

Een eenvoudige webapp die leerlingen helpt reflecteren op hun vaardigheden. Ze scoren zichzelf op vijf niveaus en zien dit terug in een groeiende bloem. Per niveau staat uitgelegd wat het betekent en welke actie helpt om door te groeien.

De app richt zich op zes vaardigheden: **communiceren, samenwerken, probleem oplossen, creatief, ondernemend** en **plannen & doorzetten**. Bovenaan staat de bloemweergave over de hele breedte; daaronder staan de kaarten per vaardigheid.
De app richt zich op vijf vaardigheden: **communiceren, samenwerken, probleem oplossen, creatief** en **ondernemend**.

## Gebruik
Je kunt de app op twee manieren openen:

1. **Direct openen**
   - Dubbelklik op `index.html` of open het bestand in je browser.
   - Als je waarschuwingen krijgt over lokale bestanden, kies voor “toestaan”.

2. **Met een eenvoudige webserver** (handig als je slider- of kleurbestanden niet direct laadt)
   - Installeer Python 3 (meestal al aanwezig).
   - Start in de projectmap het commando: `python -m http.server 8000`.
   - Open daarna http://localhost:8000 in je browser.

## Functionaliteit in de app
- **Start nieuw**: kies op het startscherm of via de knop "Nieuw bestand" om met alle vaardigheden op niveau 1 te beginnen.
- **Niveau bepalen**: per vaardigheid kies je met de schuifregelaar je niveau. De bloem groeit automatisch mee en de kaart legt uit wat elk niveau betekent.
- **Groeiactie kiezen**: bij elk niveau kies je uit twee acties en vink je af dat je de actie hebt uitgevoerd. Om door te gaan naar een hoger niveau moet je ook bewijsmateriaal uploaden.
- **Bewijs uploaden**: voeg een bestand toe als bewijs. Het wordt in de export als data-URL opgeslagen.
- **Exporteer voortgang**: downloadt een `groeituin-voortgang.json` met je niveaus, gekozen acties en bewijs.
- **Importeer voortgang**: laad een eerder opgeslagen JSON-bestand om verder te werken.
- **Update naar docent**: de knop "Stuur update naar docent" downloadt automatisch je exportbestand en opent een e-mail met een samenvatting. Voeg het gedownloade JSON-bestand toe als bijlage zodat het bewijs wordt meegestuurd.

