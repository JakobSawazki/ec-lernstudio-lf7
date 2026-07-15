# Feedback-Kanal: Einrichtung und Betrieb

Stand: 15. Juli 2026

Das EC Lernstudio hat ein Register **Feedback**, über das Schülerinnen und
Schüler anonym Rückmeldungen senden können. Die Website selbst kann nichts
speichern (statisches GitHub Pages). Deshalb nimmt ein kleiner, kostenloser
**Cloudflare Worker** die Nachrichten entgegen und legt daraus automatisch
**GitHub-Issues** in einem privaten Repository an – nur dort ist das Feedback
sichtbar.

Das Register ist erst sichtbar, wenn in `website/content.js` unter
`feedback.endpoint` eine Worker-URL eingetragen ist. Solange das Feld leer
ist, bleibt der Feedback-Reiter komplett ausgeblendet.

## Ablauf einer Rückmeldung

1. Schüler füllt das anonyme Formular aus (Kategorie, optionaler Bezug, Text).
2. Die Website schickt die Daten per POST an den Cloudflare Worker.
3. Der Worker prüft die Eingaben (Länge, Honeypot gegen Bots) und erstellt
   über die GitHub-API ein Issue im privaten Feedback-Repository.
4. Die Lehrkraft liest die Issues auf github.com oder in der GitHub-App;
   erledigtes Feedback wird als Issue geschlossen.

## Einmalige Einrichtung (ca. 15 Minuten)

### Schritt 1: Privates Feedback-Repository anlegen

1. Auf <https://github.com/new> ein neues Repository anlegen,
   z. B. `ec-lernstudio-feedback`.
2. Sichtbarkeit: **Private** (wichtig – sonst wäre das Feedback öffentlich).
3. Optional: unter *Issues → Labels* ein Label `feedback` anlegen
   (wird sonst beim ersten Issue automatisch erstellt).

### Schritt 2: GitHub-Token erzeugen

1. GitHub → Settings → Developer settings →
   **Fine-grained personal access tokens** → *Generate new token*.
2. Name: `ec-lernstudio-feedback-worker`, Ablauf: z. B. 1 Jahr
   (Erinnerung setzen: danach neuen Token erzeugen und im Worker ersetzen).
3. **Repository access:** *Only select repositories* →
   nur `ec-lernstudio-feedback` auswählen.
4. **Permissions → Repository permissions:**
   *Issues: Read and write* (Metadata: Read wird automatisch gesetzt).
   Keine weiteren Rechte vergeben.
5. Token erzeugen und den Wert sicher zwischenspeichern
   (er wird nur einmal angezeigt).

### Schritt 3: Cloudflare Worker anlegen

1. Kostenloses Konto auf <https://dash.cloudflare.com/sign-up> anlegen.
2. Im Dashboard: **Workers & Pages → Create → Worker**,
   Name z. B. `ec-lernstudio-feedback`, dann *Deploy*.
3. *Edit code*: den kompletten Inhalt von
   [`docs/feedback-worker.js`](feedback-worker.js) einfügen und **Deploy**.
4. Worker → **Settings → Variables and Secrets**:
   - `GITHUB_TOKEN` als **Secret**: der Token aus Schritt 2
   - `GITHUB_REPO` als Text: `JakobSawazki/ec-lernstudio-feedback`
5. Die Worker-URL notieren, z. B.
   `https://ec-lernstudio-feedback.<name>.workers.dev`.

### Schritt 4: Website scharf schalten

1. In `website/content.js` die Worker-URL eintragen:

   ```js
   feedback: {
     endpoint: "https://ec-lernstudio-feedback.<name>.workers.dev",
     ...
   }
   ```

2. In `website/service-worker.js` den `CACHE_NAME` um eins erhöhen.
3. Committen und pushen – ab dann ist der Feedback-Reiter für alle sichtbar.

### Schritt 5: Benachrichtigungen (optional)

Im Feedback-Repository oben auf **Watch → All activity** stellen –
dann kommt bei jedem neuen Feedback eine E-Mail bzw. eine Meldung in der
GitHub-App.

## Test nach der Einrichtung

1. Website öffnen, Feedback-Reiter → Testnachricht senden.
2. Prüfen, dass im privaten Repository ein neues Issue mit Label `feedback`
   erscheint.
3. Formular erneut absenden: Innerhalb von 60 Sekunden blockt die Website
   mit einem Hinweis (einfacher Spam-Schutz).

## Eingebaute Schutzmechanismen

- **Anonym:** Es werden nur Kategorie, optionaler Bezug und der Text
  übertragen – kein Name, kein Login-Kürzel, kein Lernstand.
- **Honeypot:** Ein unsichtbares Formularfeld fängt einfache Bots ab.
- **Längenbegrenzung:** Nachrichten sind auf 1200 Zeichen begrenzt,
  der Bezug auf 120 Zeichen (Client und Worker prüfen beides).
- **Cooldown:** Der Browser erlaubt nur eine Nachricht pro Minute.
- **CORS:** Der Worker akzeptiert nur Anfragen von der GitHub-Pages-Domain
  (und localhost für Tests).
- **Kein öffentliches Feedback:** Die Rückmeldungen erscheinen nirgendwo auf
  der Website, sondern nur als Issues im privaten Repository.

## Datenschutz-Hinweis

Die Feedback-Texte sind anonym. Technisch laufen die Anfragen über
Cloudflare (USA-Bezug, IP-Adressen werden zur Zustellung verarbeitet) und
GitHub. Es werden keine personenbezogenen Daten abgefragt; die Schülerinnen
und Schüler werden im Formular ausdrücklich gebeten, keine Namen zu nennen.
Für den schulischen Einsatz empfiehlt sich ein kurzer Hinweis an die
Lerngruppe, dass der Kanal anonym ist und wofür er gedacht ist.

## Wartung

- Läuft der GitHub-Token ab, sendet das Formular eine Fehlermeldung an die
  Nutzer („später noch einmal versuchen“). Dann in GitHub einen neuen Token
  erzeugen und im Worker als Secret `GITHUB_TOKEN` ersetzen.
- Der Cloudflare-Gratisplan erlaubt 100.000 Anfragen pro Tag – mehr als
  ausreichend.
