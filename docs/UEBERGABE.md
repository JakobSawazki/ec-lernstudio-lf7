# Übergabe: EC Lernstudio LF7

Stand: 10. Juni 2026  
Version: `1.0.0`

## Auftrag und Ergebnis

Ziel war eine grafisch hochwertige Lernplattform nach dem Muster der
vorhandenen BM- und Python-Portale. Die Plattform sollte die festgelegten
DV-Inhalte aus Lernfeld 7 abdecken und Lernstände lokal sowie als Datei
speichern und laden können.

Die erste produktive Fassung ist als statische Single-Page-Anwendung
umgesetzt. Sie benötigt kein Framework und keinen Build-Schritt.

## Ablage und Veröffentlichung

- Arbeitsordner: `G:\Meine Ablage\Lehramt\Lernfelder\EC`
- Repository: `https://github.com/JakobSawazki/ec-lernstudio-lf7`
- GitHub Pages: `https://jakobsawazki.github.io/ec-lernstudio-lf7/`
- produktive Dateien: `website/`

## Umgesetzte Inhalte

- 7.5 Targeting
- 7.7 Suchmaschinen
- 7.8 Suchmaschinenoptimierung
- 7.9 Suchmaschinenwerbung
- 7.19 Auswertung der Onlinemarketing-Maßnahmen
- 7.20 KI – Entstehung und praktische Anwendung

Je Modul existieren vier Erklärungskarten, vier Merksätze und sechs Aufgaben.
Das ergibt insgesamt 36 Aufgaben.

## Besondere Funktionen

- Kennzahlen-Labor mit Plausibilitätsprüfung
- Praxischeck mit zwölf zufälligen Fragen
- Fehlertraining
- XP und acht Abzeichen
- Lernserie
- Glossar
- lokaler Offline-Cache
- versionierter Datei-Export und -Import

## Zustandsmodell

Browser-Schlüssel: `ec-lernstudio-lf7-v1`

Felder:

- `name`
- `answered`
- `mistakes`
- `unlockedBadges`
- `streak`
- `lastStudyDate`
- `sprints`
- `labRuns`
- `labDraft`
- `lastModuleId`

XP werden nicht als vertrauenswürdiger Wert gespeichert, sondern aus gültigen
richtig gelösten Aufgaben neu berechnet. Jede gültige Aufgabe zählt 25 XP.

Exportformat:

- Kennzeichen: `ec-lernstudio-lf7-progress`
- Version: `1`
- Dateiendung: `.json`
- Importgrenze: 2 MB

## Inhalte pflegen

Fachliche Änderungen möglichst ausschließlich in `website/content.js`
vornehmen.

Neue Frage:

1. eindeutige ID vergeben,
2. vorhandene Modul-ID verwenden,
3. Typ `choice` oder `number` festlegen,
4. Lösung und verständliche Erklärung angeben,
5. bei Zahlen Toleranz und Einheit prüfen.

Bei neuen Modulen müssen Darstellung, Abzeichenbedingungen und Gesamttexte in
`website/app.js` kontrolliert werden.

## Quellenstatus

Die OneNote-Übersicht war zugänglich und bestätigte die Themenauswahl. Die
BiBox ist kontogebunden und darf nur nach persönlicher Anmeldung zum Abgleich
gelesen werden. Geschützte Texte werden nicht übernommen.

Der nächste fachliche Schritt ist ein vollständiger Abgleich der eigenständig
formulierten Inhalte mit den BiBox-Unterkapiteln.

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
- Module
- Zahlen- und Auswahlaufgabe
- Fehlertraining
- Kennzahlen-Labor
- Export und Import
- Desktop und Mobil
- Browserkonsole

## Nicht versehentlich ändern

- Exportkennzeichen oder Versionsnummer ohne Migrationsplan
- bestehende Aufgaben-IDs, wenn Lernstände kompatibel bleiben sollen
- Browser-Schlüssel ohne Datenmigration
- `website/` als Deployment-Pfad
- private Quellen in öffentliche Dateien

## Sinnvolle nächste Schritte

1. BiBox-Abgleich abschließen.
2. Zwei bis drei zusammenhängende Kampagnenfälle mit mehreren KPIs ergänzen.
3. Kompetenzraster mit Ich-kann-Aussagen erstellen.
4. Optional weitere E-Commerce-Lernfelder in derselben Plattform ergänzen.
