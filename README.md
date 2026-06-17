# EC Lernstudio · Lernfeld 7

Interaktive Lernplattform für Schülerinnen und Schüler im E-Commerce. Die
erste Ausbaustufe behandelt die in Datenverarbeitung vorgesehenen Inhalte aus
Lernfeld 7 „Online-Marketing-Maßnahmen umsetzen und bewerten“.

**Version:** `1.0.0`  
**Dokumentationsstand:** 10. Juni 2026  
**Repository:** <https://github.com/JakobSawazki/ec-lernstudio-lf7>  
**Online:** <https://jakobsawazki.github.io/ec-lernstudio-lf7/>

## Ziel der Homepage

Das EC Lernstudio soll die fachlichen Grundlagen aus dem Unterricht in kurze,
grafisch hochwertige und interaktive Lernschritte übersetzen. Lernende sollen:

1. zentrale Fachbegriffe verstehen,
2. typische Online-Marketing-Situationen beurteilen,
3. Kennzahlen selbst berechnen und interpretieren,
4. Fehler gezielt wiederholen,
5. den eigenen Fortschritt sehen und als Datei sichern können.

Die Anwendung ist ein Lern- und Übungsangebot. Sie ist kein
manipulationssicheres Prüfungssystem und ersetzt weder Unterricht noch
Lehrkraft.

## Fachlicher Umfang

Für LF7 werden in Datenverarbeitung derzeit folgende Abschnitte behandelt:

| Abschnitt | Thema | Portalmodul |
| --- | --- | --- |
| 7.5 | Targeting | Targeting |
| 7.7 | Suchmaschinen | Suchmaschinen |
| 7.8 | Suchmaschinenoptimierung | SEO |
| 7.9 | Suchmaschinenwerbung | SEA |
| 7.19 | Auswertung der Onlinemarketing-Maßnahmen | Kennzahlen und Kampagnenauswertung |
| 7.20 | KI – Von der Entstehung bis zur praktischen Anwendung | KI im Online-Marketing |

Die Abstimmung mit BE nennt insbesondere `7.5/7/8/9/19` als verbindliche
DV-Inhalte. Abschnitt `7.20` ist als zusätzlicher, ausdrücklich gewünschter
KI-Baustein enthalten.

## Funktionsumfang

- sechs Lernmodule mit jeweils vier kompakten Erklärbausteinen
- 36 automatisch prüfbare Multiple-Choice- und Rechenaufgaben
- interaktives Kennzahlen-Labor für CTR, CPC, Conversion Rate, CPO und ROAS
- gemischter LF7-Praxischeck mit zwölf zufälligen Aufgaben
- automatische Fehlerliste mit gezieltem Wiederholungstraining
- XP, Level, Lernserie und acht Abzeichen
- Glossar mit 15 zentralen Fachbegriffen
- responsives Design für Computer, Tablet und Smartphone
- lokale Speicherung ohne eigenes Benutzerkonto
- versionierter JSON-Export und -Import des Lernstands
- installierbare Web-App mit lokalem Offline-Cache

## Lernstand und Datenschutz

Der Lernstand liegt unter dem Browser-Schlüssel `ec-lernstudio-lf7-v1`.
Gespeichert werden:

- Anzeigename oder Kürzel
- richtig gelöste Aufgaben
- offene Fehler
- Abzeichen
- Lernserie und letzter Lerntag
- Anzahl abgeschlossener Praxischecks
- Anzahl und letzte Eingaben im Kennzahlen-Labor
- zuletzt geöffnetes Modul

Es gibt kein Backend, kein Tracking und keine zentrale Schülerdatenbank. Der
Browserstand kann bei Profilbereinigung, Gastkonten oder einem Gerätewechsel
verloren gehen. Über das Profil oben rechts lässt sich deshalb der vollständige
Stand als JSON-Datei speichern und später wieder laden.

In Browsern mit File System Access API öffnet sich ein Speicherdialog mit dem
Desktop als Vorschlag. Andere Browser speichern die Datei üblicherweise im
Download-Ordner. Ein USB-Stick kann im Dialog manuell ausgewählt werden.

Der Import akzeptiert höchstens 2 MB, prüft Format und Versionsnummer und
verwirft unbekannte Aufgaben- oder Abzeichen-IDs. XP werden aus gültigen
Lösungen neu berechnet.

## Quellen und Rechte

Private Referenzen:

- OneNote-Abschnitt `EC/LF7` der Kaufmännischen Schule Nagold
- BiBox Westermann, Buch-ID `3943`, Einstieg um Seite `240`
- vom Auftraggeber festgelegte DV-Auswahl für LF7

Die privaten Quellen dienen der fachlichen Orientierung. Originalseiten,
Screenshots, Buchtexte, Musterlösungen und personenbezogene Inhalte werden
nicht öffentlich ausgeliefert. Erklärungen und Aufgaben im Portal sind
eigenständig formuliert.

Die OneNote-Übersicht wurde am 10. Juni 2026 geöffnet und bestätigte die
Abschnitte 7.5, 7.7, 7.8, 7.9, 7.19 und 7.20. Die BiBox erfordert ein
persönliches Westermann-Login und ist nicht Bestandteil des Repositories.
Details stehen in [`docs/QUELLEN.md`](docs/QUELLEN.md).

Das Titelbild `website/assets/lf7-marketing-lab.png` wurde am 10. Juni 2026
mit dem integrierten OpenAI-Bildgenerator eigens für dieses Projekt erzeugt.
Es enthält keine Markenoberflächen oder lesbaren Fremdtexte.

## Technische Architektur

Das Projekt ist eine statische Single-Page-Anwendung ohne Framework und ohne
Build-Schritt. GitHub Pages veröffentlicht den Ordner `website/`.

| Datei | Verantwortung |
| --- | --- |
| `website/index.html` | App-Shell, Navigation, Onboarding und Profildialog |
| `website/styles.css` | Gestaltung und responsive Breakpoints |
| `website/content.js` | Module, Erklärtexte, Aufgaben, Abzeichen und Glossar |
| `website/app.js` | Navigation, Quiz, Labor, Lernstand, Export und Import |
| `website/service-worker.js` | lokaler Offline-Cache |
| `website/assets/` | projektbezogene Bildmedien |
| `.github/workflows/deploy-pages.yml` | Prüfung und GitHub-Pages-Deployment |
| `docs/` | Quellen, Übergabe und Deployment |

## Verzeichnisstruktur

```text
EC/
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
|-- .gitignore
|-- AGENTS.md
|-- CHANGELOG.md
|-- README.md
|-- docs/
|   |-- DEPLOYMENT.md
|   |-- QUELLEN.md
|   `-- UEBERGABE.md
`-- website/
    |-- .nojekyll
    |-- app.js
    |-- content.js
    |-- icon.svg
    |-- index.html
    |-- manifest.webmanifest
    |-- service-worker.js
    |-- styles.css
    `-- assets/
        `-- lf7-marketing-lab.png
```

## Lokal starten

Die Website benötigt keinen Build-Schritt:

```powershell
python -m http.server 4173 --directory website
```

Danach: <http://localhost:4173>

Das direkte Öffnen von `index.html` ist nicht empfohlen, weil Service Worker
und einige Browserfunktionen einen HTTP-Kontext benötigen.

## Qualitätssicherung

Vor einer Veröffentlichung sind mindestens folgende Prüfungen erforderlich:

```powershell
node --check website/content.js
node --check website/app.js
node --check website/service-worker.js
git diff --check
```

Zusätzlich manuell oder automatisiert prüfen:

- Onboarding mit Name und Gastmodus
- Navigation in alle sechs Module
- Multiple-Choice- und Zahlenaufgabe
- deutsche Zahleneingabe mit Komma und Punkt
- Fehlerliste und Entfernen nach richtiger Lösung
- XP und Abzeichen
- Kennzahlen-Labor einschließlich unplausibler Eingaben
- Export und Import einer Lernstand-Datei
- Desktopansicht bei etwa 1440 Pixel Breite
- Mobilansicht bei etwa 390 Pixel Breite
- keine JavaScript- oder Konsolenfehler

## Veröffentlichung

Jeder Push nach `main` startet den Workflow
`.github/workflows/deploy-pages.yml`. Er prüft JavaScript-Syntax und
Pflichtdateien und veröffentlicht danach exakt den Ordner `website/` über
GitHub Pages.

Details und Rollback-Hinweise stehen in
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Versionierung

Das Projekt verwendet semantische Versionsnummern:

- Patch: Fehlerkorrekturen ohne neue Funktion
- Minor: rückwärtskompatible neue Inhalte oder Funktionen
- Major: grundlegende, nicht kompatible Änderung

Aktueller Stand: `1.0.0`

## Offene Weiterentwicklung

Priorisiert:

1. Aufgaben und Begriffe nach dem vollständigen BiBox-Abgleich fachlich
   nachschärfen.
2. Weitere Transferfälle mit zusammenhängenden Kampagnendaten ergänzen.
3. Einen Kompetenzcheck mit Ich-kann-Aussagen entwickeln.

Optional:

- Lehrerbereich für eigene Aufgabensätze
- lokale Druckansicht für Arbeitsphasen
- weitere Lernfelder des E-Commerce als neue Portalbereiche
- datenschutzkonforme Synchronisation über ein separates Backend

## Einstieg für einen weiteren Agenten

1. `README.md`, `AGENTS.md` und `docs/UEBERGABE.md` vollständig lesen.
2. `git status -sb` und `git log --oneline -5` prüfen.
3. Private OneNote- und BiBox-Quellen nur als Referenz nutzen.
4. Geschützte Texte niemals wörtlich in das öffentliche Repository kopieren.
5. Inhalte möglichst in `website/content.js` pflegen.
6. Nach Änderungen Syntax, Quiz, Labor, Export/Import und responsive Ansichten
   prüfen.
7. `CHANGELOG.md` und Dokumentationsstand aktualisieren.
8. Änderungen nach erfolgreicher Prüfung nach `main` pushen und GitHub Pages
   kontrollieren.

Empfohlener Startprompt:

> Arbeite im Projekt EC Lernstudio LF7. Lies README.md, AGENTS.md und
> docs/UEBERGABE.md. Prüfe danach Git-Status, Website und Live-Version.
> Bearbeite die offenen LF7-Aufgaben in der vorhandenen statischen Architektur,
> teste Desktop und Mobilansicht und veröffentliche den geprüften Stand wieder
> über GitHub Pages.
