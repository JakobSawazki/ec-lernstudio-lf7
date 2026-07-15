/**
 * EC Lernstudio – Feedback-Worker (Cloudflare Workers)
 *
 * Nimmt anonyme Feedback-Nachrichten vom Feedback-Register der Website
 * entgegen und legt daraus ein GitHub-Issue im (privaten) Feedback-Repository
 * an. Der GitHub-Token bleibt als Secret im Worker und taucht nie im
 * öffentlichen Website-Code auf.
 *
 * Benötigte Einstellungen im Worker (Settings → Variables and Secrets):
 *   GITHUB_TOKEN  (Secret)  – Fine-grained Token, nur Issues: Read and write
 *                             auf das Feedback-Repository
 *   GITHUB_REPO   (Text)    – z. B. "JakobSawazki/ec-lernstudio-feedback"
 *
 * Anleitung: siehe docs/FEEDBACK.md
 */

const ALLOWED_ORIGINS = [
  "https://jakobsawazki.github.io",
  "http://localhost:8360"
];

const CATEGORY_LABELS = {
  verbesserung: "Verbesserungsvorschlag",
  fehler: "Fehler gefunden",
  lob: "Lob",
  sonstiges: "Sonstiges"
};

const MAX_MESSAGE_LENGTH = 1200;
const MAX_CONTEXT_LENGTH = 120;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ error: "Nur POST erlaubt." }, 405, cors);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: "Ungültige Anfrage." }, 400, cors);
    }

    // Honeypot: Bots füllen das unsichtbare Feld aus – still verwerfen.
    if (data.website) {
      return json({ ok: true }, 200, cors);
    }

    const category = CATEGORY_LABELS[data.category] ? data.category : "sonstiges";
    const message = String(data.message || "").trim();
    const context = String(data.context || "").trim().slice(0, MAX_CONTEXT_LENGTH);

    if (message.length < 5) {
      return json({ error: "Bitte etwas mehr Text." }, 400, cors);
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return json({ error: "Der Text ist zu lang." }, 400, cors);
    }

    const shortTitle = message.slice(0, 60).replace(/\s+/g, " ");
    const title = `[${CATEGORY_LABELS[category]}] ${shortTitle}${message.length > 60 ? "…" : ""}`;
    const body = [
      `**Kategorie:** ${CATEGORY_LABELS[category]}`,
      context ? `**Bezug:** ${context}` : null,
      "",
      "**Feedback:**",
      "",
      message,
      "",
      `_Eingegangen am ${new Date().toISOString()} über das EC Lernstudio._`
    ].filter((line) => line !== null).join("\n");

    const response = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
        "Accept": "application/vnd.github+json",
        "User-Agent": "ec-lernstudio-feedback-worker",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: JSON.stringify({ title, body, labels: ["feedback"] })
    });

    if (!response.ok) {
      return json({ error: "Das Feedback konnte nicht gespeichert werden." }, 502, cors);
    }
    return json({ ok: true }, 200, cors);
  }
};

function json(payload, status, cors) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json", ...cors }
  });
}
