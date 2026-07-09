# Übergabe: EC Lernstudio

Stand: 9. Juli 2026
Version: `1.17.0`

## Auftrag und Ergebnis

Ziel ist eine grafisch hochwertige Lernplattform nach dem Muster der
vorhandenen BM- und Python-Portale. Die Plattform deckt die in
Datenverarbeitung relevanten E-Commerce-Lernfelder schrittweise ab.

Aktuell sind `LF2` und `LF7` als Lernfeld-Kategorien eingebunden. Lernstände
werden lokal gespeichert und können als Datei exportiert und importiert werden.
Die Anwendung ist eine statische Single-Page-Anwendung ohne Framework und ohne
Build-Schritt.

## Ablage und Veröffentlichung

- Arbeitsordner: `D:\Google Drive\Lehramt\Lernfelder\EC`
- Repository: `https://github.com/JakobSawazki/ec-lernstudio-lf7`
- GitHub Pages: `https://jakobsawazki.github.io/ec-lernstudio-lf7/`
- produktive Dateien: `website/`
- zentrale lokale Quellenablage: `assets/`, bewusst per `.gitignore` ausgeschlossen
- geordnete private Lehrplan-/DV-Ablage: `assets/Lehrplan/`
- `LF2/` ist nur noch eine ältere lokale Zwischenablage und ebenfalls ignoriert
- temporäre Renderdateien: `tmp/`, bewusst per `.gitignore` ausgeschlossen
- Entwicklungsrhythmus: lokal arbeiten, Änderungen in README/Changelog/TASKS
  und den Übergabedateien dokumentieren, GitHub erst bei geprüften klaren
  Versionsständen pushen
- ein Push nach `main` aktualisiert die GitHub-Pages-Seite und sollte daher
  bewusst als Online-Stellung verstanden werden

## Umgesetzte Inhalte

LF2:

- 2.2 Das Layout der Internetseiten eines Webshops
- 2.3 Die Seiten des Webshops zur Darstellung des Sortiments
- 2.4 Das Impressum
- 2.5 Die Haftung für die Inhalte der Webseite
- 2.6 Produktdetailseite: Informationsmöglichkeiten über Waren
- 2.7 Produktdetailseite: Informationen für Kunden
- 2.8 Die Produktbeschreibung auf der Produktdetailseite
- 2.9 Die Auswahl des Artikels auf der Produktdetailseite
- 2.10 Visualisierungen auf der Produktdetailseite
- 2.12 Preisgestaltung und -darstellung in Webshops
- 2.16 ERP- und Warenwirtschaftssysteme

LF7:

- 7.5 Targeting
- 7.7 Suchmaschinen
- 7.8 Suchmaschinenoptimierung
- 7.9 Suchmaschinenwerbung
- 7.19 Auswertung der Onlinemarketing-Maßnahmen
- 7.19+ Webanalyse: Messen, Testen, Datenschutz
- 7.20 KI - Entstehung und praktische Anwendung

Je Modul existieren vier Erklärungskarten, vier Merksätze und mindestens sechs
Aufgaben; die Module 2.5, 2.7, 2.8, 2.9, 2.10, 2.12 und 2.16 haben acht
Aufgaben, das Webanalyse-Modul ebenfalls. Das ergibt aktuell achtzehn Module
und 124 Aufgaben. Die Module 2.12, 2.16 und Webanalyse enthalten auch
Rechenaufgaben vom Typ `number` außerhalb des Kennzahlen-Moduls. Damit sind
alle LF2-Kapitel mit vorhandener Quellen-PDF umgesetzt.

## Besondere Funktionen

- Lernfeld-Umschalter `LF2`/`LF7` im Header
- Kennzahlen-Labor mit Plausibilitätsprüfung
- Praxischeck mit zufälligen Fragen aus dem aktiven Lernfeld
- Fehlertraining
- XP und einundzwanzig Abzeichen
- Lernserie
- ausbildungsweites E-Commerce-Glossar mit Suche, Kategorien, Detailseiten und Mini-Quiz
- lokaler Offline-Cache
- anonymes Login-Kürzel im Schema `vor.nac`, z. B. `jak.saw`
- versionierter Datei-Export und -Import mit Desktop-Vorschlag in unterstützten Browsern
- LF2-Projektauftrag `E-Commerce-Homepage mit Marketing-Optimierung` als
  Startseiten-Callout und eigenes PDF-Material
- DV-Lehrplan-Kompass als Startseiten-Karte und eigenes PDF-Material
- LF7-Webanalyse-Arbeitsblatt als eigenes PDF-Material
- menschlicheres Hero-Bild: `website/assets/ecommerce-consultation-hero.png`
- fotorealistisches EC-Lernstudio-Homepage-Icon mit transparentem Außenbereich
  und dezenter Hover-Animation: `website/assets/ec-lernstudio-logo.png`
- fotorealistische LF2-Kapitelbilder:
  `website/assets/module-icons/lf2-2-2-layout.png`,
  `website/assets/module-icons/lf2-2-3-sortiment.png`,
  `website/assets/module-icons/lf2-2-4-impressum.png`,
  `website/assets/module-icons/lf2-2-5-haftung.png`,
  `website/assets/module-icons/lf2-2-6-produktdetailseite.png` und
  `website/assets/module-icons/lf2-2-7-kundeninformationen.png` sowie
  `website/assets/module-icons/lf2-2-8-produktbeschreibung.png` und
  `website/assets/module-icons/lf2-2-9-artikelauswahl.png` und
  `website/assets/module-icons/lf2-2-10-visualisierungen.png` sowie
  `website/assets/module-icons/lf2-2-12-preisgestaltung.png` und
  `website/assets/module-icons/lf2-2-16-warenwirtschaft.png`
- kompaktere Hero-Schrift, damit das Titelbild weniger verdeckt wird
- Dark Mode als Standard und Light Mode per Toggle in der Desktop-Navigation
- bereinigter Footer: `© 2026 · Designed by Sawazki Electronics`
- LF2-Arbeitsblätter:
  `website/assets/materials/lf2-2-2-webshop-layout-arbeitsblatt.pdf`,
  `website/assets/materials/lf2-2-3-webshop-seiten-arbeitsblatt.pdf`,
  `website/assets/materials/lf2-2-4-impressum-arbeitsblatt.pdf`,
  `website/assets/materials/lf2-2-5-haftung-arbeitsblatt.pdf` und
  `website/assets/materials/lf2-2-6-produktdetailseite-arbeitsblatt.pdf` sowie
  `website/assets/materials/lf2-2-7-kundeninformationen-arbeitsblatt.pdf` und
  `website/assets/materials/lf2-2-8-produktbeschreibung-arbeitsblatt.pdf` und
  `website/assets/materials/lf2-2-9-artikelauswahl-arbeitsblatt.pdf` und
  `website/assets/materials/lf2-2-10-visualisierungen-arbeitsblatt.pdf`,
  `website/assets/materials/lf2-2-12-preisgestaltung-arbeitsblatt.pdf` und
  `website/assets/materials/lf2-2-16-warenwirtschaft-arbeitsblatt.pdf` sowie
  `website/assets/materials/lf7-webanalyse-arbeitsblatt.pdf`,
  `website/assets/materials/lf2-projektidee-ecommerce-homepage.pdf` und
  `website/assets/materials/dv-lehrplan-kompass.pdf`

## Zustandsmodell

Browser-Schlüssel: `ec-lernstudio-lf7-v1`

Felder:

- `name`
- `activeField`
- `answered`
- `glossaryAnswered`
- `mistakes`
- `unlockedBadges`
- `streak`
- `lastStudyDate`
- `sprints`
- `labRuns`
- `labDraft`
- `lastModuleId`

XP werden nicht als vertrauenswürdiger Wert gespeichert, sondern aus gültigen
richtig gelösten Aufgaben und Glossar-Checks neu berechnet. Jede gültige
Aufgabe zählt 25 XP, jeder erstmals richtig gelöste Glossar-Check 10 XP.

Exportformat:

- Kennzeichen: `ec-lernstudio-lf7-progress`
- Version: `1`
- Dateiendung: `.json`
- Importgrenze: 2 MB

## Inhalte Pflegen

Fachliche Änderungen möglichst in `website/content.js` vornehmen.

Neue Frage:

1. eindeutige ID vergeben,
2. vorhandene Modul-ID verwenden,
3. Typ `choice` oder `number` festlegen,
4. Lösung und verständliche Erklärung angeben,
5. bei Zahlen Toleranz und Einheit prüfen.

Neue Module:

1. Modulobjekt in `website/content.js` ergänzen,
2. `field: "LFx"` setzen,
3. mindestens sechs Aufgaben mit passender `module`-ID ergänzen,
4. optionale `resources` und `projectSteps` pflegen,
5. Abzeichenbedingungen prüfen.

Neue Lernfelder:

1. unter `learningFields` Metadaten ergänzen,
2. Header-Pill in `website/index.html` ergänzen,
3. Filterlogik und Texte lokal prüfen.

Neue Glossarbegriffe:

1. eindeutige ID vergeben,
2. `term`, `category`, `summary`, `detail` und `example` ausfüllen,
3. keine langen wörtlichen Übernahmen aus Lehrbüchern oder PDFs verwenden,
4. danach Glossar-Suche, Detailseite und Mini-Quiz testen.

## Quellenstatus

Die OneNote-Übersicht war zugänglich und bestätigte die LF7-Themenauswahl.
Die BiBox ist kontogebunden und darf nur nach persönlicher Anmeldung zum
Abgleich gelesen werden. Geschützte Texte werden nicht übernommen.
Das neue LF7-Webanalyse-Modul wurde eigenständig formuliert und nutzt
allgemeine Webanalyse-Grundlagen sowie die geprüfte Primärquelle `§ 25 TDDDG`
als Rechtsanker für Cookies und vergleichbare Tracking-Techniken.

Der lokal abgelegte KMK-Rahmenlehrplan `assets/Rahmenlehrplan.pdf` wurde zur
Ausweitung des Glossars auf die gesamte Ausbildung ausgewertet. Die Datei wird
nicht veröffentlicht. Am 9. Juli 2026 wurde zusätzlich der private Ordner
`assets/Lehrplan/` mit geordneten Kopien der Lehrplan- und DV-Unterlagen
angelegt. Der öffentliche `dv-lehrplan-kompass.pdf` fasst diese Orientierung
eigenständig zusammen und verweist auf den offiziellen KMK-Rahmenlehrplan,
ohne Original-PDFs auszuliefern.

Die lokal bereitgestellten Lehrbuchdateien zu LF2 sollen einheitlich unter
`assets/` liegen. Falls ältere Dateien noch unter `LF2/` vorhanden sind, gelten
sie nur als private Zwischenablage und werden ebenfalls nicht veröffentlicht.
Für die Website wurden stattdessen eigenständig formulierte Arbeitsblätter
erzeugt. Die PDF zu LF2 2.3 wurde am 8. Juli 2026 nur zur fachlichen
Orientierung visuell geprüft und nicht veröffentlicht. Rechtsstand im
Impressums-Arbeitsblatt: § 5 DDG und § 18 MStV, Stand 24.06.2026.
Die PDFs zu LF2 2.5, 2.6, 2.7 und 2.8 wurden am 8. Juli 2026 ebenfalls nur zur
fachlichen Orientierung gelesen und nicht veröffentlicht. Die PDFs zu LF2 2.9
und 2.10 wurden am 9. Juli 2026 nur zur fachlichen Orientierung gelesen und
nicht veröffentlicht. Rechtsstand im
Haftungs-Modul: Haftungsregeln der früheren §§ 7-10 TMG gelten heute über
Art. 4-8 DSA in Verbindung mit dem DDG, geprüft am 08.07.2026.
Zusätzlich wurden vom Auftraggeber bereitgestellte eigene OneNote-Notizen zu
2.5, 2.6 und 2.7 (Lernziele, Fallanalysen, Beispiel „Bürostuhl X1000“,
Sortimentsaufbau und Produktinformationen) eingearbeitet; Musterlösungen daraus
werden nicht veröffentlicht. Für 2.8, 2.9 und 2.10 lagen knappe
Aufgaben-/Projektideen in `ideas.txt` vor; die Portaltexte und Arbeitsblätter
wurden eigenständig formuliert. Die zu 2.10 notierte Idee eines kollaborativen
Dokuments oder Whiteboards ist noch nicht umgesetzt und bleibt als mögliche
spätere Unterrichtsfunktion offen. Die Quelle `assets/LF2/Projektidee LF2.pdf`
wurde am 9. Juli 2026 gesichtet und als eigenständig formulierter Projektbrief
für eine E-Commerce-Homepage aufbereitet.

Ein EduCloud-Link wurde am 2. Juli 2026 geprüft:
`https://educloud.ks-nagold.de/s/WGAKGsT5E8ziaBT`. Der Link war erreichbar,
zeigte aber keine sichtbaren Dateien im Ordner `EC`. Eine spätere Verlinkung
ist technisch möglich, sollte aber erst nach Befüllung und schulischer
Rechteklärung erfolgen.

Der nächste fachliche Schritt ist ein vollständiger Abgleich der eigenständig
formulierten Inhalte mit den BiBox-Unterkapiteln, ohne geschützte Texte zu
übernehmen.

## Technische Prüfung

Mindestens ausführen:

```powershell
node --check website/content.js
node --check website/app.js
node --check website/service-worker.js
git diff --check
```

Danach lokal über HTTP starten und im Browser prüfen:

- Onboarding
- Lernfeld-Umschalter `LF2`/`LF7`
- LF2- und LF7-Module
- LF2- und LF7-Arbeitsblätter öffnen
- Zahlen- und Auswahlaufgabe
- Fehlertraining
- Kennzahlen-Labor
- Glossar-Suche, Kategorie-Filter, Detailseite und Mini-Quiz
- Export und Import
- Desktop und Mobil
- Browserkonsole

## Nicht Versehentlich Ändern

- Exportkennzeichen oder Versionsnummer ohne Migrationsplan
- bestehende Aufgaben-IDs, wenn Lernstände kompatibel bleiben sollen
- bestehende Glossar-IDs, wenn gespeicherte Glossar-Checks kompatibel bleiben sollen
- bestehende Lernfeld-IDs, wenn `activeField` kompatibel bleiben soll
- Browser-Schlüssel ohne Datenmigration
- `website/` als Deployment-Pfad
- private Quellen in öffentliche Dateien

## Sinnvolle Nächste Schritte

1. `TASKS.md` prüfen und die nächste priorisierte Aufgabe auswählen.
2. BiBox-Abgleich abschließen.
3. Den Produktseiten-Lernpfad mit LF2 2.11 fortführen.
4. Kompetenzraster mit Ich-kann-Aussagen erstellen.
