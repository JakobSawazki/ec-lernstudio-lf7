# EC Lernstudio - Tasks und Übergabe

Stand: 3. Juli 2026<br>
Aktuelle Version: `1.4.1`<br>
Repository: <https://github.com/JakobSawazki/ec-lernstudio-lf7>  
Live-Seite: <https://jakobsawazki.github.io/ec-lernstudio-lf7/>

## Statuslegende

- `Offen`: noch nicht begonnen
- `In Arbeit`: fachlich oder technisch vorbereitet, aber noch nicht final
- `Erledigt`: umgesetzt, getestet und veröffentlicht

## Erledigt

| Status | Version | Datum | Aufgabe | Ergebnis |
| --- | --- | --- | --- | --- |
| Erledigt | 1.1.0 | 24.06.2026 | Menschlicheres Hero-Bild | E-Commerce-Beratungssituation als eigenes Bild eingebunden |
| Erledigt | 1.1.0 | 24.06.2026 | Glossar-Reiter | Ausbildungsweites Glossar mit Detailseite und Mini-Quiz umgesetzt |
| Erledigt | 1.2.0 | 24.06.2026 | LF2-Kategorie | LF2 neben LF7 als Lernfeld-Kategorie ergänzt |
| Erledigt | 1.2.0 | 24.06.2026 | LF2 2.4 Impressum | Modul, Aufgaben und eigenes Arbeitsblatt veröffentlicht |
| Erledigt | 1.3.0 | 02.07.2026 | LF2 2.2 Webshop-Layout | Modul, Aufgaben und eigenes Arbeitsblatt veröffentlicht |
| Erledigt | 1.3.0 | 02.07.2026 | Modulkarten klickbar machen | Gesamte Modulkarte öffnet das Modul, Buttontext entfernt |
| Erledigt | 1.3.0 | 02.07.2026 | Umlaute im Impressums-PDF | PDF mit eingebetteter Schrift neu erzeugt |
| Erledigt | 1.4.0 | 02.07.2026 | Logo oben links | Eigenes SVG-Logo für EC Lernstudio erstellt und eingebunden |
| Erledigt | 1.4.0 | 02.07.2026 | Header vereinfachen | Untertitel auf `Datenverarbeitung` reduziert |
| Erledigt | 1.4.0 | 02.07.2026 | Footer bereinigen | Nur noch `© 2026 · Designed by Sawazki Electronics` |
| Erledigt | 1.4.0 | 02.07.2026 | Black/Light Mode | Black Mode als Standard, Light Mode per Header-Toggle |
| Erledigt | 1.4.1 | 03.07.2026 | Theme-Toggle einreihen | Schalter in Desktop-Navigation verschoben und SE-Stil angepasst |

## In Arbeit

| Status | Version | Datum | Aufgabe | Nächster Schritt |
| --- | --- | --- | --- | --- |
| In Arbeit | 1.4.x | 02.07.2026 | Externe Lehrbuchausschnitte verlinken | EduCloud/OneDrive-Ordner befüllen, Rechte schulisch klären und dann als externe Ressource verlinken |
| In Arbeit | 1.4.x | 02.07.2026 | Grafiken für eigene Arbeitsblätter | Eigene Illustrationen in `assets/` sammeln oder erzeugen lassen und anschließend in neue PDF-Materialien übernehmen |

## Offen

| Status | Priorität | Aufgabe | Hinweis |
| --- | --- | --- | --- |
| Offen | Hoch | LF2 2.3 Seiten des Webshops | Nächstes sinnvolles DV-Modul nach Layout und Impressum |
| Offen | Hoch | LF2 2.5 Haftung für Webseiteninhalte | Rechtlich nah am Impressum, gut als Transfermodul |
| Offen | Mittel | LF2 2.6 bis 2.11 Produktdetailseite | Als zusammenhängender Produktseiten-Lernpfad denkbar |
| Offen | Mittel | LF2 2.12 Preisgestaltung und Preisdarstellung | Mit kleinen Rechen-/Prüfaufgaben verbinden |
| Offen | Mittel | LF2 2.16 ERP- und Warenwirtschaftssysteme | DV-nah, später gut mit Datenflussdiagramm |
| Offen | Niedrig | Lehrerbereich für eigene Aufgaben | Erst sinnvoll, wenn mehr Module stabil sind |
| Offen | Niedrig | Druckansicht für Arbeitsphasen | Optional für Unterricht ohne Geräte |

## Material- und Rechte-Regeln

- Private Quellen liegen einheitlich unter `G:\Meine Ablage\Lehramt\Lernfelder\EC\assets`.
- `assets/` ist per `.gitignore` ausgeschlossen und wird nicht veröffentlicht.
- Lehrbuch-PDFs nicht direkt in `website/` kopieren und nicht über GitHub Pages ausliefern.
- Eigene Arbeitsblätter, Grafiken und Aufgaben dürfen in `website/assets/materials/` veröffentlicht werden.
- Schulinterne EduCloud-/OneDrive-Links können technisch verlinkt werden, wenn die Schule bzw. Lizenz dies für die Lerngruppe erlaubt.
- Externe Materiallinks sollten als `target="_blank"` mit Hinweis auf schulische Anmeldung/Zugriffsschutz eingebunden werden.

## EduCloud-Notiz

Geprüfter Link am 2. Juli 2026:

<https://educloud.ks-nagold.de/s/WGAKGsT5E8ziaBT>

Der Link ist erreichbar, zeigte beim Abruf aber einen Ordner `EC` ohne sichtbare Dateiliste. Vor einer Verlinkung im Lernstudio sollte der Ordner mit den vorgesehenen Dateien befüllt und aus Schülersicht getestet werden.

## Einstieg für weitere Agenten

1. `README.md`, `TASKS.md`, `AGENTS.md`, `docs/UEBERGABE.md` und `docs/QUELLEN.md` lesen.
2. `git status -sb` prüfen.
3. Private Quellen nur aus `assets/` verwenden und nicht veröffentlichen.
4. Neue Inhalte in `website/content.js` ergänzen.
5. Eigene PDFs unter `website/assets/materials/` ablegen.
6. Nach Änderungen mindestens ausführen:

```powershell
& 'C:\Users\PC\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check website\content.js
& 'C:\Users\PC\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check website\app.js
& 'C:\Users\PC\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check website\service-worker.js
git diff --check
```

7. README, Changelog, Übergabe und diese Taskliste aktualisieren.
8. Nach erfolgreichem Push GitHub Actions und Live-Seite prüfen.
