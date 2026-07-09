# EC Lernstudio · E-Commerce-Lernfelder

Interaktive Lernplattform für Schülerinnen und Schüler im E-Commerce. Die
Plattform behandelt schrittweise die in Datenverarbeitung vorgesehenen Inhalte
aus ausgewählten Lernfeldern. Aktuell sind `LF2` und `LF7` eingebunden.

**Version:** `1.17.0`
**Dokumentationsstand:** 9. Juli 2026
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

Für Datenverarbeitung werden derzeit die Lernfelder `LF2` und `LF7` als
umschaltbare Bereiche geführt.

Für LF2 sind zunächst folgende Kapitel eingebunden:

| Abschnitt | Thema | Portalmodul |
| --- | --- | --- |
| 2.2 | Das Layout der Internetseiten eines Webshops | Webshop-Layout |
| 2.3 | Die Seiten des Webshops zur Darstellung des Sortiments | Webshop-Seiten |
| 2.4 | Das Impressum | Das Impressum |
| 2.5 | Die Haftung für die Inhalte der Webseite | Haftung für Webseiteninhalte |
| 2.6 | Produktdetailseite: Informationsmöglichkeiten über Waren | Produktdetailseite |
| 2.7 | Produktdetailseite: Informationen für Kunden | Kundeninformationen |
| 2.8 | Die Produktbeschreibung auf der Produktdetailseite | Produktbeschreibung |
| 2.9 | Die Auswahl des Artikels auf der Produktdetailseite | Artikelauswahl |
| 2.10 | Visualisierungen auf der Produktdetailseite | Visualisierungen |
| 2.12 | Preisgestaltung und -darstellung in Webshops | Preisgestaltung |
| 2.16 | ERP- und Warenwirtschaftssysteme | ERP und Warenwirtschaft |

Damit sind alle in der DV-Auswahl vorgesehenen LF2-Kapitel mit vorhandener
Quellen-PDF als Module umgesetzt.

Für LF7 werden in Datenverarbeitung derzeit folgende Abschnitte behandelt:

| Abschnitt | Thema | Portalmodul |
| --- | --- | --- |
| 7.5 | Targeting | Targeting |
| 7.7 | Suchmaschinen | Suchmaschinen |
| 7.8 | Suchmaschinenoptimierung | SEO |
| 7.9 | Suchmaschinenwerbung | SEA |
| 7.19 | Auswertung der Onlinemarketing-Maßnahmen | Kennzahlen und Kampagnenauswertung |
| 7.19+ | Webanalyse: Messen, Testen, Datenschutz | Webanalyse |
| 7.20 | KI – Von der Entstehung bis zur praktischen Anwendung | KI im Online-Marketing |

Die Abstimmung mit BE nennt insbesondere `7.5/7/8/9/19` als verbindliche
DV-Inhalte. Abschnitt `7.20` ist als zusätzlicher, ausdrücklich gewünschter
KI-Baustein enthalten.

## Funktionsumfang

- Lernfeld-Umschalter für `LF2` und `LF7`
- achtzehn Lernmodule mit jeweils vier kompakten Erklärbausteinen
- 124 automatisch prüfbare Multiple-Choice- und Rechenaufgaben
- abrufbare LF2-Arbeitsblätter `2.2 Webshop-Layout`, `2.3 Webshop-Seiten`,
  `2.4 Das Impressum`, `2.5 Haftung für Webseiteninhalte` und
  `2.6 Produktdetailseite`, `2.7 Informationen für Kunden`,
  `2.8 Produktbeschreibung`, `2.9 Artikelauswahl`, `2.10 Visualisierungen`,
  `2.12 Preisgestaltung` sowie `2.16 ERP und Warenwirtschaft` als
  eigenständig formulierte PDFs
- LF2-Projektbrief `E-Commerce-Homepage mit Marketing-Optimierung` als
  sichtbarer Startseiten-Callout und eigenes PDF-Material
- DV-Lehrplan-Kompass als eigener Startseiten-Zugriff mit privater
  Quellenablage unter `assets/Lehrplan/`
- interaktives Kennzahlen-Labor für CTR, CPC, Conversion Rate, CPO und ROAS
- LF7-Webanalyse-Modul mit Messkonzept, UTM-Parametern, A/B-Test und
  Consent-/Datenschutz-Check
- lernfeldbezogener Praxischeck mit zufälligen Aufgaben
- automatische Fehlerliste mit gezieltem Wiederholungstraining
- XP, Level, Lernserie und einundzwanzig Abzeichen
- ausbildungsweites E-Commerce-Glossar mit Suche, Kategorien, Detailseiten und Mini-Quiz
- fotorealistisches EC-Lernstudio-Homepage-Icon mit transparentem Außenbereich,
  dezenter Hover-Animation und reduziertem Header `Datenverarbeitung`
- fotorealistische Kapitelbilder für die LF2-Module 2.2 bis 2.16
- Dark Mode als Standard und Light Mode per Toggle im Header
- responsives Design für Computer, Tablet und Smartphone
- lokale Speicherung ohne eigenes Benutzerkonto
- versionierter JSON-Export und -Import des Lernstands
- installierbare Web-App mit lokalem Offline-Cache

## Lernstand und Datenschutz

Der Lernstand liegt unter dem Browser-Schlüssel `ec-lernstudio-lf7-v1`.
Gespeichert werden:

- anonymes Login-Kürzel, z. B. `jak.saw`
- aktives Lernfeld
- richtig gelöste Aufgaben
- gelöste Glossar-Checks
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

Bei der Eingabe kann auch Vor- und Nachname verwendet werden; gespeichert wird
daraus nur das gekürzte Login im Schema `vor.nac`, zum Beispiel `jak.saw`.
Der Startdialog lässt sich mit `Esc` ohne Login schließen.

In Browsern mit File System Access API öffnet sich ein Speicherdialog mit dem
Desktop als Vorschlag. Andere Browser speichern die Datei üblicherweise im
Download-Ordner. Ein USB-Stick kann im Dialog manuell ausgewählt werden.

Der Import akzeptiert höchstens 2 MB, prüft Format und Versionsnummer und
verwirft unbekannte Aufgaben-, Glossar- oder Abzeichen-IDs. XP werden aus
gültigen Aufgabenlösungen und Glossar-Checks neu berechnet.

## Quellen und Rechte

Private Referenzen:

- OneNote-Abschnitt `EC/LF7` der Kaufmännischen Schule Nagold
- BiBox Westermann, Buch-ID `3943`, Einstieg um Seite `240`
- vom Auftraggeber festgelegte DV-Auswahl für LF2 und LF7
- lokal bereitgestellter KMK-Rahmenlehrplan unter `assets/Rahmenlehrplan.pdf`
- lokale LF2-Lehrwerksdateien unter `assets/LF2/`

Die privaten Quellen dienen der fachlichen Orientierung. Originalseiten,
Screenshots, Buchtexte, Musterlösungen und personenbezogene Inhalte werden
nicht öffentlich ausgeliefert. Erklärungen und Aufgaben im Portal sind
eigenständig formuliert.

Die OneNote-Übersicht wurde am 10. Juni 2026 geöffnet und bestätigte die
Abschnitte 7.5, 7.7, 7.8, 7.9, 7.19 und 7.20. Die BiBox erfordert ein
persönliches Westermann-Login und ist nicht Bestandteil des Repositories.
Die zentrale lokale Quellenablage ist `assets/` und per `.gitignore`
ausgeschlossen. Ein eventuell vorhandener lokaler Ordner `LF2/` gilt nur noch
als ältere Zwischenablage und wird ebenfalls ignoriert.
Die lokalen Lehrwerksdateien zu LF2 2.2 bis 2.16 werden wegen
Veröffentlichungs- und Nutzungsrechten nicht öffentlich ausgeliefert.
Stattdessen enthält die Website eigenständig formulierte Arbeitsblätter unter
`website/assets/materials/lf2-2-2-webshop-layout-arbeitsblatt.pdf`,
`website/assets/materials/lf2-2-3-webshop-seiten-arbeitsblatt.pdf`,
`website/assets/materials/lf2-2-4-impressum-arbeitsblatt.pdf`,
`website/assets/materials/lf2-2-5-haftung-arbeitsblatt.pdf` und
`website/assets/materials/lf2-2-6-produktdetailseite-arbeitsblatt.pdf` sowie
`website/assets/materials/lf2-2-7-kundeninformationen-arbeitsblatt.pdf` und
`website/assets/materials/lf2-2-8-produktbeschreibung-arbeitsblatt.pdf`,
`website/assets/materials/lf2-2-9-artikelauswahl-arbeitsblatt.pdf`,
`website/assets/materials/lf2-2-10-visualisierungen-arbeitsblatt.pdf`,
`website/assets/materials/lf2-2-12-preisgestaltung-arbeitsblatt.pdf` und
`website/assets/materials/lf2-2-16-warenwirtschaft-arbeitsblatt.pdf`,
`website/assets/materials/lf7-webanalyse-arbeitsblatt.pdf`,
`website/assets/materials/lf2-projektidee-ecommerce-homepage.pdf` sowie
`website/assets/materials/dv-lehrplan-kompass.pdf`.
Details stehen in [`docs/QUELLEN.md`](docs/QUELLEN.md).

Das aktuelle Titelbild `website/assets/ecommerce-consultation-hero.png` wurde
am 24. Juni 2026 mit dem integrierten OpenAI-Bildgenerator eigens für dieses
Projekt erzeugt. Es zeigt eine E-Commerce-Beratungssituation ohne Logos,
Markenoberflächen oder lesbare Fremdtexte. Das frühere Titelbild
`website/assets/lf7-marketing-lab.png` bleibt als Projektasset erhalten.
Das Homepage-Icon `website/assets/ec-lernstudio-logo.png` wurde am 8. Juli
2026 als fotorealistisches PNG für Header, Favicon und Web-App-Manifest
eingebunden. Die LF2-Kapitelbilder liegen unter
`website/assets/module-icons/`.

Die privaten Lehrplan- und DV-Unterlagen sind zusätzlich strukturiert unter
`assets/Lehrplan/` abgelegt. Dieser Ordner bleibt lokal und wird nicht über
GitHub Pages veröffentlicht.

Der Arbeitsstand wird lokal unter `D:\Google Drive\Lehramt\Lernfelder\EC`
geführt und zusätzlich über Google Drive synchronisiert. GitHub wird bewusst
bei geprüften, klar benannten Versionsständen aktualisiert; ein Push nach
`main` ist zugleich die Online-Aktualisierung über GitHub Pages.

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
| `website/assets/materials/` | veröffentlichte, eigenständig erstellte Unterrichtsmaterialien |
| `assets/` | zentrale lokale private Quellenablage, per `.gitignore` ausgeschlossen |
| `assets/Lehrplan/` | private Lehrplan- und DV-Unterlagen, nicht veröffentlicht |
| `TASKS.md` | laufende Aufgaben-, Ideen- und Übergabedatei |
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
|-- TASKS.md
|-- docs/
|   |-- DEPLOYMENT.md
|   |-- QUELLEN.md
|   `-- UEBERGABE.md
`-- website/
    |-- .nojekyll
    |-- app.js
    |-- content.js
    |-- icon.png
    |-- index.html
    |-- manifest.webmanifest
    |-- service-worker.js
    |-- styles.css
    `-- assets/
        |-- module-icons/
        |   |-- lf2-2-2-layout.png
        |   |-- lf2-2-3-sortiment.png
        |   |-- lf2-2-4-impressum.png
        |   |-- lf2-2-5-haftung.png
        |   |-- lf2-2-6-produktdetailseite.png
        |   |-- lf2-2-7-kundeninformationen.png
        |   |-- lf2-2-8-produktbeschreibung.png
        |   |-- lf2-2-9-artikelauswahl.png
        |   |-- lf2-2-10-visualisierungen.png
        |   |-- lf2-2-12-preisgestaltung.png
        |   `-- lf2-2-16-warenwirtschaft.png
        |-- materials/
        |   |-- lf2-2-2-webshop-layout-arbeitsblatt.pdf
        |   |-- lf2-2-3-webshop-seiten-arbeitsblatt.pdf
        |   |-- lf2-2-4-impressum-arbeitsblatt.pdf
        |   |-- lf2-2-5-haftung-arbeitsblatt.pdf
        |   |-- lf2-2-6-produktdetailseite-arbeitsblatt.pdf
        |   |-- lf2-2-7-kundeninformationen-arbeitsblatt.pdf
        |   |-- lf2-2-8-produktbeschreibung-arbeitsblatt.pdf
        |   |-- lf2-2-9-artikelauswahl-arbeitsblatt.pdf
        |   |-- lf2-2-10-visualisierungen-arbeitsblatt.pdf
        |   |-- lf2-2-12-preisgestaltung-arbeitsblatt.pdf
        |   |-- lf2-2-16-warenwirtschaft-arbeitsblatt.pdf
        |   |-- lf7-webanalyse-arbeitsblatt.pdf
        |   |-- lf2-projektidee-ecommerce-homepage.pdf
        |   `-- dv-lehrplan-kompass.pdf
        |-- ec-lernstudio-logo.png
        |-- ecommerce-consultation-hero.png
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
- Lernfeld-Umschalter `LF2`/`LF7`
- Dark/Light Mode im Header
- Navigation in alle achtzehn Module
- LF2- und LF7-Arbeitsblätter öffnen
- Multiple-Choice- und Zahlenaufgabe
- deutsche Zahleneingabe mit Komma und Punkt
- Fehlerliste und Entfernen nach richtiger Lösung
- XP und Abzeichen
- Glossar-Suche, Kategorie-Filter, Detailseite und Mini-Quiz
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

Aktueller Stand: `1.17.0`

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

1. `README.md`, `TASKS.md`, `AGENTS.md` und `docs/UEBERGABE.md` vollständig lesen.
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

> Arbeite im Projekt EC Lernstudio. Lies README.md, AGENTS.md und
> docs/UEBERGABE.md. Prüfe danach Git-Status, Website und Live-Version.
> Bearbeite die offenen LF2/LF7-Aufgaben in der vorhandenen statischen Architektur,
> teste Desktop und Mobilansicht und veröffentliche den geprüften Stand wieder
> über GitHub Pages.
