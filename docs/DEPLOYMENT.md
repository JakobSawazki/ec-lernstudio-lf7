# Deployment

## Ziel

GitHub Pages veröffentlicht den Ordner `website/` unter:

<https://jakobsawazki.github.io/ec-lernstudio-lf7/>

## Automatischer Ablauf

1. Änderungen nach `main` pushen.
2. `.github/workflows/deploy-pages.yml` startet.
3. JavaScript-Syntax und Pflichtdateien werden geprüft.
4. `website/` wird als Pages-Artefakt hochgeladen.
5. GitHub Pages veröffentlicht die neue Fassung.

## Voraussetzungen

- GitHub Pages verwendet als Quelle **GitHub Actions**.
- Workflow-Berechtigungen erlauben Pages und OIDC.
- Es befinden sich keine privaten Unterrichtsmaterialien im Repository.

## Lokale Freigabeprüfung

```powershell
node --check website/content.js
node --check website/app.js
node --check website/service-worker.js
git diff --check
python -m http.server 4173 --directory website
```

Dann <http://localhost:4173> in Desktop- und Mobilansicht prüfen.

## Rollback

Bei einem produktiven Fehler:

1. letzten funktionierenden Commit oder Tag bestimmen,
2. Korrektur als neuen Commit erstellen,
3. nach `main` pushen,
4. Workflow und Live-Seite erneut prüfen.

Keine privaten Dateien oder Zugangsdaten in Workflow-Artefakte aufnehmen.
