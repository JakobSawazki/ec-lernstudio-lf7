# AGENTS.md

## Projekt

Dieses Repository enthält das öffentliche EC Lernstudio für Lernfeld 7 im
E-Commerce. Die produktive Web-App liegt vollständig in `website/`.

## Technische Leitlinien

- statische Anwendung ohne Framework und Build-Schritt
- keine externen Laufzeitabhängigkeiten
- keine Tracker, Cookies oder Cloud-Datenbank
- Lernstand ausschließlich lokal im Browser und als JSON-Datei
- GitHub Pages veröffentlicht exakt `website/`
- deutsche Oberfläche und deutsche Zahlenformate
- responsive und tastaturbedienbar bleiben

## Wichtige Dateien

- `website/content.js`: Module, Fragen, Lösungen, Abzeichen und Glossar
- `website/app.js`: Navigation, Quiz, Labor, Lernstand, Export und Import
- `website/styles.css`: Gestaltung und responsive Regeln
- `website/index.html`: Grundstruktur und Dialoge
- `website/service-worker.js`: Offline-Cache
- `docs/QUELLEN.md`: private Referenzen und Veröffentlichungsgrenzen

## Inhaltsregeln

- Aufgaben fachlich prüfen und nachvollziehbar erklären.
- Neue Fragen benötigen eindeutige IDs und ein gültiges Modul.
- Bei Rechenaufgaben Einheit, Rundung und Toleranz bewusst festlegen.
- Keine personenbezogenen Daten veröffentlichen.
- Keine Buchseiten, OneNote-Seiten oder Musterlösungen kopieren.
- Geschützte Quellen nur zum Abgleich verwenden; Texte eigenständig formulieren.
- Rechtliche Aussagen zu Datenschutz, KI oder Werbung nur nach aktueller
  Quellenprüfung konkretisieren.

## Prüfung vor einem Commit

```powershell
node --check website/content.js
node --check website/app.js
node --check website/service-worker.js
git diff --check
```

Zusätzlich Onboarding, ein vollständiges Quiz, Fehlertraining,
Kennzahlen-Labor, Export/Import, Desktop und Mobilansicht im Browser prüfen.
