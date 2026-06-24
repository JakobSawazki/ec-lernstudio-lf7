# Übergabe: EC Lernstudio

Stand: 24. Juni 2026
Version: `1.2.0`

## Auftrag und Ergebnis

Ziel ist eine grafisch hochwertige Lernplattform nach dem Muster der
vorhandenen BM- und Python-Portale. Die Plattform deckt die in
Datenverarbeitung relevanten E-Commerce-Lernfelder schrittweise ab.

Aktuell sind `LF2` und `LF7` als Lernfeld-Kategorien eingebunden. Lernstände
werden lokal gespeichert und können als Datei exportiert und importiert werden.
Die Anwendung ist eine statische Single-Page-Anwendung ohne Framework und ohne
Build-Schritt.

## Ablage und Veröffentlichung

- Arbeitsordner: `G:\Meine Ablage\Lehramt\Lernfelder\EC`
- Repository: `https://github.com/JakobSawazki/ec-lernstudio-lf7`
- GitHub Pages: `https://jakobsawazki.github.io/ec-lernstudio-lf7/`
- produktive Dateien: `website/`
- lokale Quellenablage: `assets/`, bewusst per `.gitignore` ausgeschlossen
- temporäre Renderdateien: `tmp/`, bewusst per `.gitignore` ausgeschlossen

## Umgesetzte Inhalte

LF2:

- 2.4 Das Impressum

LF7:

- 7.5 Targeting
- 7.7 Suchmaschinen
- 7.8 Suchmaschinenoptimierung
- 7.9 Suchmaschinenwerbung
- 7.19 Auswertung der Onlinemarketing-Maßnahmen
- 7.20 KI - Entstehung und praktische Anwendung

Je Modul existieren vier Erklärungskarten, vier Merksätze und sechs Aufgaben.
Das ergibt aktuell sieben Module und 42 Aufgaben.

## Besondere Funktionen

- Lernfeld-Umschalter `LF2`/`LF7` im Header
- Kennzahlen-Labor mit Plausibilitätsprüfung
- Praxischeck mit zufälligen Fragen aus dem aktiven Lernfeld
- Fehlertraining
- XP und zehn Abzeichen
- Lernserie
- ausbildungsweites E-Commerce-Glossar mit Suche, Kategorien, Detailseiten und Mini-Quiz
- lokaler Offline-Cache
- versionierter Datei-Export und -Import
- menschlicheres Hero-Bild: `website/assets/ecommerce-consultation-hero.png`
- LF2-Arbeitsblatt: `website/assets/materials/lf2-2-4-impressum-arbeitsblatt.pdf`

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
3. sechs Aufgaben mit passender `module`-ID ergänzen,
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

Der lokal abgelegte KMK-Rahmenlehrplan `assets/Rahmenlehrplan.pdf` wurde zur
Ausweitung des Glossars auf die gesamte Ausbildung ausgewertet. Die Datei wird
nicht veröffentlicht.

Das lokale PDF `assets/LF2/2.4 Das Impressum.pdf` wirkt wie Lehrwerksmaterial
und wird nicht öffentlich ausgeliefert. Für die Website wurde stattdessen ein
eigenständig formuliertes Arbeitsblatt erzeugt. Rechtsstand im Arbeitsblatt:
§ 5 DDG und § 18 MStV, Stand 24.06.2026.

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
- LF2-Arbeitsblatt öffnen
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

1. Weitere LF2-Kapitel als Module ergänzen, zum Beispiel 2.2 bis 2.13 und 2.16.
2. BiBox-Abgleich abschließen.
3. Zwei bis drei zusammenhängende Webshop-Fälle mit Produktseite, Impressum und Warenwirtschaft ergänzen.
4. Kompetenzraster mit Ich-kann-Aussagen erstellen.
