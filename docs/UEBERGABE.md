# Übergabe: EC Lernstudio

Stand: 11. Juli 2026
Version: `1.35.0`

## Auftrag und Ergebnis

Ziel ist eine grafisch hochwertige Lernplattform nach dem Muster der
vorhandenen BM- und Python-Portale. Die Plattform deckt die in
Datenverarbeitung relevanten E-Commerce-Lernfelder schrittweise ab.

Aktuell sind `LF2`, `LF6` und `LF7` als Lernfeld-Kategorien eingebunden. Lernstände
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

LF6:

- 6.0 Servicekanäle im Überblick (eigener Überblicksbaustein)
- 6.13 Kommunikation per E-Mail
- 6.14 Kommunikation über Social Media
- 6.15 Kommunikation über weitere Vertriebswege

Damit sind alle DV-relevanten LF6-Kapitel umgesetzt.

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
Aufgaben, alle sieben LF7-Module und alle vier LF6-Module ebenfalls.
Das ergibt aktuell zweiundzwanzig Module und 168 Aufgaben. Die Module
2.12, 2.16, Webanalyse, SEO, SEA und alle LF6-Module enthalten auch
Rechenaufgaben vom Typ `number` außerhalb des Kennzahlen-Moduls. Damit sind alle LF2- und
LF6-Kapitel mit vorhandener Quellen-PDF umgesetzt; für LF7 werden weitere
Buchkapitel nach und nach bereitgestellt.

## Besondere Funktionen

- Lernfeld-Umschalter `LF2`/`LF6`/`LF7` im Header
- Kennzahlen-Labor mit Plausibilitätsprüfung
- Praxischeck mit zufälligen Fragen aus dem aktiven Lernfeld
- Fehlertraining
- Kompetenzcheck mit Ich-kann-Aussagen, Aufgabenfortschritt und lokaler
  Selbsteinschätzung je Modul
- lokaler Lehrerbereich für eigene Multiple-Choice-Aufgaben mit Training,
  JSON-Export und JSON-Import von Aufgabensätzen
- Projektthemen-Pool LF7/LF8 als Lehrermaterial-Karte im Lehrerbereich und
  eigenes PDF-Material `lf7-lf8-projektthemen-pool.pdf` (17 Einzel- und
  Partnerprojekte mit Ablauf, Bewertung und Modul-Verweisen); technisch
  über die Liste `teacherMaterials` in `content.js` gesteuert
- XP und sechsundzwanzig Abzeichen
- Lernserie
- ausbildungsweites E-Commerce-Glossar mit Suche, Kategorien, Detailseiten und Mini-Quiz
- lokaler Offline-Cache
- anonymes Login-Kürzel im Schema `vor.nac`, z. B. `jak.saw`
- versionierter Datei-Export und -Import mit Desktop-Vorschlag in unterstützten Browsern
- LF2-Projektauftrag `E-Commerce-Homepage mit Marketing-Optimierung` als
  Startseiten-Callout und eigenes PDF-Material
- LF7-Abschlussprojekt `360°-Online-Marketing-Strategie` als
  Startseiten-Callout und eigenes PDF-Material
  `lf7-abschlussprojekt-marketing-strategie.pdf` (fiktive Agentur, acht
  Bausteine mit Modul-Verweisen, Branchenwahl, Zeitplan, Bewertung 50/30/20)
- Lerncoach-Auftrag zur LF7-Klassenarbeit als Karte im LF7-Kompetenzcheck
  und eigenes PDF-Material `lf7-ka-ki-lerncoach.pdf` (kopierfertiger
  KI-Prompt, Spielregeln, Themen-Check aller sieben LF7-Module); technisch
  über das optionale Feld `examPrep` eines Lernfelds in `content.js`
  gesteuert
- DV-Lehrplan-Kompass als Startseiten-Karte und eigenes PDF-Material
- LF7-SEO/SEA-Transferfall als eigenes PDF-Material für Suchintention,
  Landingpage-Briefing, Anzeigenplanung und KPI-Vergleich
- LF7-Webanalyse-Arbeitsblatt als eigenes PDF-Material
- LF6-Bereich mit Praxisauftrag-Callout „Der Service-Tag“ und eigenen
  Arbeitsblättern `lf6-servicekanaele-arbeitsblatt.pdf`,
  `lf6-email-arbeitsblatt.pdf`, `lf6-social-media-arbeitsblatt.pdf` und
  `lf6-vertriebswege-arbeitsblatt.pdf`
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
- fotorealistische LF6-Kapitelbilder:
  `website/assets/module-icons/lf6-6-0-servicekanaele.png`,
  `website/assets/module-icons/lf6-6-13-email.png`,
  `website/assets/module-icons/lf6-6-14-social-media.png` und
  `website/assets/module-icons/lf6-6-15-vertriebswege.png`
- kompaktere Hero-Schrift, damit das Titelbild weniger verdeckt wird
- Druckansicht für Modul-Arbeitsphasen mit ausgeblendeter Navigation und
  lesbarer Schwarz-Weiß-Struktur
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
  `website/assets/materials/lf7-seo-sea-transferfall.pdf` und
  `website/assets/materials/lf7-webanalyse-arbeitsblatt.pdf`,
  `website/assets/materials/lf6-servicekanaele-arbeitsblatt.pdf`,
  `website/assets/materials/lf6-email-arbeitsblatt.pdf`,
  `website/assets/materials/lf6-social-media-arbeitsblatt.pdf`,
  `website/assets/materials/lf6-vertriebswege-arbeitsblatt.pdf`,
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
- `competencies`
- `customTasks`
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

Separater Aufgabensatz-Export im Lehrerbereich:

- Kennzeichen: `ec-lernstudio-custom-tasks`
- Version: `1`
- enthält nur `customTasks`, keinen Schülerfortschritt
- der Import akzeptiert zusätzlich vollständige Lernstand-Dateien und liest
  daraus vorhandene `customTasks`

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

Die Quellen-PDF `assets/LF6/6.13 Kommunikation per E-Mail.pdf` wurde am
10. Juli 2026 nur zur fachlichen Orientierung gelesen und nicht
veröffentlicht; Modul, Aufgaben und Arbeitsblatt zu 6.13 sind eigenständig
formuliert. Rechtsanker im Modul: §§ 37a, 125a HGB (Geschäftsangaben auch in
E-Mails), DSGVO-Bußgeldrahmen Art. 83 (bis 20 Mio. Euro bzw. 4 % des
Jahresumsatzes) und § 1 De-Mail-Gesetz mit dem Hinweis, dass sich De-Mail in
der Praxis kaum durchgesetzt hat.

Die Quellen-PDF `assets/LF6/6.14 Kommunikation über Social Media.pdf` wurde
am 10. Juli 2026 ebenso nur zur fachlichen Orientierung gelesen; Modul,
Aufgaben und Arbeitsblatt zu 6.14 sind eigenständig formuliert
(Rechtsthemen: Urheberrecht, Recht am eigenen Bild, Haftung für Links und
Likes, Influencer-Kennzeichnung, Impressumspflicht, Wettbewerbsrecht –
bewusst verhaltensorientiert statt paragraphenlastig dargestellt).

Die Quellen-PDF `assets/LF6/6.15 Kommunikation über weitere
Vertriebswege.pdf` wurde am 10. Juli 2026 ebenfalls nur zur fachlichen
Orientierung gelesen; Modul, Aufgaben und Arbeitsblatt zu 6.15
(Videokonferenz, Chat, Sprachsteuerung, Hotline, FAQ) sind eigenständig
formuliert.

Die Quellen-PDF `assets/LF7/7.5 Targeting.pdf` wurde am 10. Juli 2026 zur
fachlichen Nachschärfung des bestehenden Targeting-Moduls gelesen (v1.23.0).
Die vertieften Erklärtexte (Datenarten, Targeting-Arten, Frequency Capping,
Re-Targeting, Consent-Management, cookielose Verfahren) sind eigenständig
formuliert; der zugehörige `7.5 OneNote-Aufschrieb.pdf` dient laut
Auftraggeber nur als Inspiration.

Inzwischen liegen alle LF7-Buchkapitel in `assets/LF7` (7.7, 7.8, 7.9,
7.19, 7.20 samt OneNote-Aufschrieben). `7.7 Suchmaschinen.pdf` wurde am
10. Juli 2026 zur Nachschärfung des Suchmaschinen-Moduls gelesen
(v1.24.0); die Erklärtexte (Historie, Crawler/Index/Algorithmus,
SERP-Aufbau, Suchmaschinen-Arten, Suchverhalten) sind eigenständig
formuliert. `7.8 Suchmaschinenoptimierung.pdf` wurde am 10. Juli 2026
zur Nachschärfung des SEO-Moduls gelesen (v1.25.0); die Erklärtexte
(Rankingfaktoren und Yandex-Leck, Google-Updates, OnPage mit
Keywordstrategie/Technik/Content, OffPage mit Backlinks, KPI, Inhouse
oder Agentur) sind eigenständig formuliert.
`7.9 Suchmaschinenwerbung.pdf` wurde am 10. Juli 2026 zur Nachschärfung
des SEA-Moduls gelesen (v1.26.0); die Erklärtexte (Google-Ads-Geschichte,
Keyword-Auktion und Qualitätsfaktor, Performance Marketing mit CPC und
Conversion-Tracking, Anzeigengestaltung und SEM-Synergie) sind
eigenständig formuliert.
`7.19 Auswertung der Onlinemarketing-Maßnahmen.pdf` wurde am
10. Juli 2026 zur Nachschärfung des Kennzahlen-Moduls gelesen
(v1.27.0); die Erklärtexte (Werbeerfolgskontrolle, Web Analytics mit
GA4-Berichtsbereichen und etracker/Matomo, Vier-Schritte-Vorgehen,
Kennzahlen-Formeln und Interpretation) sind eigenständig formuliert;
die A/B-Test-Vertiefung bleibt im eigenen Webanalyse-Modul.
`7.20 KI - Von der Entstehung bis zur praktischen Anwendung.pdf` wurde
am 10. Juli 2026 zur Nachschärfung des KI-Moduls gelesen (v1.28.0);
die Erklärtexte (KI-Geschichte, schwache/starke KI, Lernarten,
neuronale Netze, Sprachmodelle, KI im Marketing) sind eigenständig
formuliert. Der Projektauftrag greift die Reflexionsideen der
OneNote-Aufschriebe 7.20a (Pro-/Contra-Tafel) und 7.20b („KI & Ich“)
auf – die dortige Musterlösung wird nicht veröffentlicht; das von
Jakob genannte Einführungsvideo ist als externe Ressource verlinkt.
Damit ist der LF7-Buchabgleich abgeschlossen: Alle Module mit
vorliegendem Buchkapitel (7.5, 7.7, 7.8, 7.9, 7.19, 7.20) sind am
Lehrbuch nachgeschärft.

Der eigene OneNote-Aufschrieb `assets/LF7/KA/OneNote-Aufschrieb Vorbereitung
KA LF7.pdf` (Auftrag „KI-gestützte Lernkontrolle zur Übungsklausur LF7“ mit
Beispiel-Prompt) wurde am 11. Juli 2026 gesichtet und als eigenständig
formulierter Lerncoach-Auftrag `lf7-ka-ki-lerncoach.pdf` aufbereitet; ergänzt
wurden Spielregeln (KI-Antworten fachlich gegenprüfen, keine persönlichen
Daten hochladen) und ein Themen-Check mit Modul-Verweisen. Die Übungsklausur
selbst liegt nicht vor und wird nicht benötigt, da die Lernenden ihre eigene
bearbeitete Klausur verwenden.

Am 11. Juli 2026 wurden die neu bereitgestellten Projektunterlagen in
`assets/LF7/Projektarbeit/` gesichtet (`OneNote-Aufschrieb Projektarbeit.pdf`,
`OneNote-Aufschrieb Projektaufgabe.pdf` sowie die Planungs-Dokumente
`Aufteilung_Themen_ Rahmenlehrplan_CK.docx` und `DV_1.bis 3. Jahr_2020.docx`).
Das darin beschriebene Abschlussprojekt `360°-Online-Marketing-Strategie`
(fiktive Agentur, 2-3 Personen, 4-5 Wochen, acht Projektabschnitte,
Bewertung 50/30/20, verbindliche Branchenwahl) wurde als eigenständig
formulierter Projektauftrag `lf7-abschlussprojekt-marketing-strategie.pdf`
aufbereitet; die Namenslisten und Musterzuweisungen aus den Quellen werden
nicht veröffentlicht. Die alternative Projektliste mit 17 Einzelthemen aus
`OneNote-Aufschrieb Projektarbeit.pdf` wurde am 11. Juli 2026 (v1.35.0)
als eigenständig formulierter Themenpool `lf7-lf8-projektthemen-pool.pdf`
aufbereitet und im Lehrerbereich verlinkt; kommerzielle Tool-Nennungen der
Quelle wurden überwiegend durch neutrale Werkzeug-Kategorien ersetzt, die
Beispiel-Zuweisungstabelle mit Namen bleibt unveröffentlicht. Die ebenfalls
dort liegende `Projekte EC.pptx` (Jahresübersicht möglicher
Projektkompetenzen über alle Lernfelder) wurde gesichtet; sie bestätigt die
LF7-Projektwahl und bleibt private Planungsquelle ohne eigenen
Veröffentlichungsbedarf.

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
- Lernfeld-Umschalter `LF2`/`LF6`/`LF7`
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
