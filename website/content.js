window.EC_CONTENT = {
  version: "1.29.0",
  curriculum: {
    eyebrow: "Lehrplan-Kompass",
    title: "DV-Fahrplan im Blick.",
    text: "Ordnet LF2, LF7, Prüfungsbezüge und spätere Erweiterungen ein. Die Originalquellen bleiben privat, der Kompass ist eigenständig formuliert.",
    href: "assets/materials/dv-lehrplan-kompass.pdf",
    button: "Kompass öffnen"
  },
  learningFields: [
    {
      id: "LF2",
      label: "LF2",
      title: "Lernfeld 2",
      subtitle: "Sortimente im Onlinevertrieb gestalten und die Beschaffung unterstützen",
      short: "Webshop-Seiten, Produktdarstellung, Kundeninformationen, Produkttexte, Artikelauswahl, Visualisierung, Recht, Preisangaben und Warenwirtschaft.",
      heroTitle: "Webshops gestalten",
      heroEmphasis: "sichtbar, nutzbar, rechtssicher.",
      heroText: "Im ersten Ausbildungsjahr geht es darum, Sortiment, Produktseiten, Produkttexte, Artikelauswahl, Produktvisualisierungen, Preisangaben und technische Shop-Strukturen so aufzubauen, dass Kunden Orientierung finden und das Projekt sauber umgesetzt wird.",
      modulesTitle: "Vom Shop-Layout zur überzeugenden Produktdetailseite.",
      modulesText: "Die DV-Auswahl für LF2 umfasst Webshop-Layout, Webshop-Seiten zur Sortimentsdarstellung, Impressum, Haftung für Webseiteninhalte, Produktdetailseiten mit Informationsquellen, Kundeninformationen, Produktbeschreibungen, Artikelauswahl und Visualisierungen, die Preisgestaltung sowie ERP- und Warenwirtschaftssysteme. Weitere Kapitel können später als eigene Module ergänzt werden.",
      project: {
        eyebrow: "LF2-Projektidee",
        title: "E-Commerce-Homepage mit Marketing-Optimierung",
        text: "Plane, baue, dokumentiere und präsentiere eine eigene E-Commerce-Homepage. Der Projektbrief verbindet HTML/CSS, Produktpräsentation, Kundenführung, Visualisierung, Auffindbarkeit und Reflexion.",
        href: "assets/materials/lf2-projektidee-ecommerce-homepage.pdf",
        button: "Projektbrief öffnen",
        stats: [
          ["01", "Konzept"],
          ["02", "HTML/CSS"],
          ["03", "Optimierung"]
        ]
      }
    },
    {
      id: "LF6",
      label: "LF6",
      title: "Lernfeld 6",
      subtitle: "Servicekommunikation kundenorientiert gestalten",
      short: "Servicekanäle: E-Mail, Chat, Social Media, Videokonferenz, Newsletter und Selbstservice.",
      heroTitle: "Servicekommunikation",
      heroEmphasis: "schnell, klar, kundenorientiert.",
      heroText: "Guter Service entscheidet, ob aus Käufern Stammkunden werden. Lerne, den passenden Kanal zu wählen und auf E-Mail, Chat, Social Media, Videokonferenz und Newsletter professionell zu kommunizieren.",
      modulesTitle: "Vom Anliegen zum passenden Kanal.",
      modulesText: "Der LF6-Lernpfad ist vollständig: vom Überblick über die Servicekanäle (6.0) über die Kommunikation per E-Mail (6.13) und Social Media (6.14) bis zu Chat, Videokonferenz, Sprachsteuerung, Hotline und FAQ als weitere Vertriebswege (6.15).",
      project: {
        eyebrow: "LF6-Praxisauftrag",
        title: "Der Service-Tag: Ein Anliegen, fünf Kanäle",
        text: "Beantworte dieselbe Kundenanfrage einmal als E-Mail, als Chat-Antwort, als öffentliche Social-Media-Reaktion, im Videocall-Leitfaden und als FAQ-Eintrag. Das Arbeitsblatt führt dich durch alle fünf Formate.",
        href: "assets/materials/lf6-servicekanaele-arbeitsblatt.pdf",
        button: "Arbeitsblatt öffnen",
        stats: [
          ["01", "Kanalwahl"],
          ["02", "Tonfall"],
          ["03", "Lösung"]
        ]
      }
    },
    {
      id: "LF7",
      label: "LF7",
      title: "Lernfeld 7",
      subtitle: "Online-Marketing-Maßnahmen umsetzen und bewerten",
      short: "Targeting, Suchmaschinen, SEO, SEA, Kennzahlen, Webanalyse und KI.",
      heroTitle: "Online-Marketing",
      heroEmphasis: "verstehen, messen, entscheiden.",
      heroText: "Online-Handel ist mehr als Klicks: Verstehe Kunden, Sortiment, Kanäle und Kennzahlen und verwandle Daten in gute Entscheidungen.",
      modulesTitle: "Vom passenden Kontakt zur messbaren Wirkung.",
      modulesText: "Die Module folgen der DV-Auswahl für Lernfeld 7, ergänzt um eine Webanalyse-Vertiefung zu 7.19. Du kannst sie der Reihe nach bearbeiten oder gezielt in ein aktuelles Unterrichtsthema einsteigen."
    }
  ],
  modules: [
    {
      id: "lf2-layout",
      field: "LF2",
      code: "2.2",
      mark: "LAY",
      title: "Das Layout der Internetseiten eines Webshops",
      short: "Startseite, Produktseite, Navigation und Seitenbereiche so gestalten, dass Kunden schnell Orientierung finden.",
      color: "mint",
      image: "assets/module-icons/lf2-2-2-layout.png",
      mission: "Entwirf für dein Webshop-Projekt eine klare Seitenstruktur und setze sie mit HTML und CSS nachvollziehbar um.",
      lessons: [
        {
          title: "Layout ist Kundenführung",
          text: "Ein Webshop-Layout ordnet Informationen so, dass Besucher schnell verstehen, wo sie sind, was angeboten wird und welcher nächste Schritt sinnvoll ist."
        },
        {
          title: "Wichtige Seitenbereiche",
          text: "Typische Bereiche sind Header mit Logo und Suche, Navigation mit Kategorien, Hauptbereich mit Produkten oder Informationen und Footer mit rechtlichen Links und Servicehinweisen."
        },
        {
          title: "Vom Bildschirm zum Verhalten",
          text: "Farben, Abstände, Schriftgrößen, Produktbilder und Call-to-Action-Elemente beeinflussen, ob Kunden Vertrauen aufbauen und weiterklicken."
        },
        {
          title: "Technisch sauber umsetzen",
          text: "Ein gutes Unterrichtsprojekt nutzt semantisches HTML, eine gemeinsame CSS-Datei, responsive Breakpoints, Alternativtexte und gut lesbare Kontraste."
        }
      ],
      takeaways: [
        "Layout ist nicht Dekoration, sondern Orientierung für Kunden.",
        "Header, Navigation, Content-Bereich und Footer sollten in jedem Shop bewusst geplant werden.",
        "Produktseiten brauchen klare Bilder, verständliche Texte, Preise und sichtbare Handlungsaufforderungen.",
        "Responsive Design, Ladezeit und Barrierefreiheit gehören zur technischen Qualität."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.2 Webshop-Layout",
          description: "Analyseauftrag, HTML/CSS-Transfer, Projektcheck und Mini-Reflexion für dein Webshop-Projekt.",
          href: "assets/materials/lf2-2-2-webshop-layout-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Skizziere Header, Navigation, Inhaltsbereich und Footer deines Webshops.",
        "Analysiere zwei echte Webshops: Welche Elemente helfen dir sofort bei der Orientierung?",
        "Baue eine Startseite und mindestens eine Produktseite mit HTML und einer gemeinsamen CSS-Datei.",
        "Dokumentiere kurz, wo du KI eingesetzt hast und welche Entscheidungen du selbst getroffen hast."
      ]
    },
    {
      id: "lf2-webshop-seiten",
      field: "LF2",
      code: "2.3",
      mark: "WEB",
      title: "Die Seiten des Webshops zur Darstellung des Sortiments",
      short: "Startseite, Kategorienseite, Landing Page und Produktdetailseite gezielt unterscheiden und für Kundenführung einsetzen.",
      color: "blue",
      image: "assets/module-icons/lf2-2-3-sortiment.png",
      mission: "Plane für dein Webshop-Projekt, welche Seite welche Aufgabe übernimmt und wie Kunden vom Einstieg bis zur Produktentscheidung geführt werden.",
      lessons: [
        {
          title: "Jede Shopseite hat eine Aufgabe",
          text: "Ein Webshop besteht aus mehreren Seitentypen. Startseite, Produktkategorienseite, Landing Page und Produktdetailseite erfüllen unterschiedliche Aufgaben, sollen aber gemeinsam zur passenden Kaufentscheidung führen."
        },
        {
          title: "Startseite schafft Orientierung",
          text: "Die Startseite erklärt Sinn und Angebot des Shops, zeigt wichtige Sortimentseinstiege und macht zentrale Bereiche wie Suche, Navigation, Warenkorb, Konto, Service und Vertrauen schaffende Hinweise erreichbar."
        },
        {
          title: "Kategorienseiten grenzen Auswahl ein",
          text: "Produktkategorienseiten zeigen einen Überblick über eine Warengruppe. Kategorien, Unterkategorien, Warenwelten, Sortierung, Filter und Paginierung helfen Kunden, aus vielen Artikeln eine passende Auswahl zu bilden."
        },
        {
          title: "Landing Page und Produktdetailseite verkaufen gezielt",
          text: "Eine Landing Page passt zu einer Anzeige, Suche oder E-Mail und führt zu einer klaren Aktion. Die Produktdetailseite liefert danach die kaufentscheidenden Informationen wie Bilder, Beschreibung, Varianten, Bewertungen, Preis und Call-to-Action."
        }
      ],
      takeaways: [
        "Die Startseite soll den Shop schnell erkennbar machen und sinnvolle Wege ins Sortiment anbieten.",
        "Produktkategorienseiten brauchen verständliche Kategorien, Sortierung, Filter und bei großen Trefferlisten Paginierung.",
        "Landing Pages richten sich an ein konkretes Interesse und führen zu einer klaren Handlung.",
        "Produktdetailseiten bündeln die Informationen, die für Auswahl, Vertrauen und Kaufentscheidung wichtig sind."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.3 Webshop-Seiten",
          description: "Seitentypen unterscheiden, Produktkategorie planen, Landing Page skizzieren und Projektcheck durchführen.",
          href: "assets/materials/lf2-2-3-webshop-seiten-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Lege für dein Webshop-Projekt mindestens Startseite, Kategorienseite und Produktdetailseite als eigene HTML-Seiten an.",
        "Ordne dein Sortiment in verständliche Produktkategorien oder Warenwelten ein.",
        "Plane Filter- und Sortiermöglichkeiten, die zu deinen Produktdaten passen.",
        "Skizziere eine Landing Page für eine Anzeige, einen Newsletter oder eine Suchmaschinenkampagne."
      ]
    },
    {
      id: "lf2-impressum",
      field: "LF2",
      code: "2.4",
      mark: "IMP",
      title: "Das Impressum",
      short: "Anbieterkennzeichnung verstehen, Pflichtangaben prüfen und im eigenen Webshop sichtbar integrieren.",
      color: "orange",
      image: "assets/module-icons/lf2-2-4-impressum.png",
      mission: "Baue für dein Webshop-Projekt ein klares, auffindbares und plausibles Impressum.",
      lessons: [
        {
          title: "Warum ein Impressum wichtig ist",
          text: "Ein Impressum zeigt, wer für eine geschäftliche Webseite verantwortlich ist. Es schafft Transparenz, ermöglicht Kontakt und hilft Kunden, den Anbieter einzuordnen."
        },
        {
          title: "Aktueller Rechtsstand",
          text: "Viele ältere Materialien nennen noch § 5 TMG oder § 55 RStV. Für neue Impressen sind insbesondere § 5 DDG und bei journalistisch-redaktionellen Inhalten § 18 MStV relevant."
        },
        {
          title: "Typische Pflichtangaben",
          text: "Je nach Anbieter gehören Name oder Firma, ladungsfähige Anschrift, Kontakt, Vertretungsberechtigte, Registerangaben und Umsatzsteuer-ID in ein Impressum."
        },
        {
          title: "Projektintegration",
          text: "Das Impressum muss eindeutig benannt, leicht erkennbar, unmittelbar erreichbar und dauerhaft verfügbar sein. Im Webshop-Projekt eignet sich eine eigene Seite mit Link im Footer."
        }
      ],
      takeaways: [
        "Ein Webshop braucht eine klare Anbieterkennzeichnung.",
        "Impressum nicht verstecken: Link eindeutig als „Impressum“ benennen.",
        "Aktuelle Quellen prüfen: DDG statt TMG, MStV statt RStV.",
        "Für Unterrichtsprojekte fiktive Daten verwenden, keine privaten Echtdaten."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.4 Das Impressum",
          description: "Kurzüberblick, Checkliste, Aufgaben und Mustergerüst für dein Webshop-Projekt.",
          href: "assets/materials/lf2-2-4-impressum-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Lies das Arbeitsblatt und markiere die Angaben, die dein fiktiver Shop braucht.",
        "Untersuche zwei Webshops: Wo ist das Impressum verlinkt und welche Angaben findest du?",
        "Erstelle ein Impressum mit fiktiven Daten für dein eigenes Webshop-Projekt.",
        "Verlinke es in deinem Projekt gut sichtbar, zum Beispiel im Footer."
      ]
    },
    {
      id: "lf2-haftung",
      field: "LF2",
      code: "2.5",
      mark: "HAF",
      title: "Die Haftung für die Inhalte der Webseite",
      short: "Wer haftet für eigene und verlinkte Inhalte? Disclaimer, Urheberrecht und Creative Commons verstehen und im Projekt sauber anwenden.",
      color: "violet",
      image: "assets/module-icons/lf2-2-5-haftung.png",
      mission: "Mach deinen Webshop rechtlich wetterfest: Prüfe eigene Inhalte, kennzeichne externe Links und verwende nur Bilder und Texte, die du wirklich nutzen darfst.",
      lessons: [
        {
          title: "Eigene Inhalte: volle Verantwortung",
          text: "Für alles, was du selbst auf deiner Webseite veröffentlichst, haftest du grundsätzlich selbst – das betrifft Richtigkeit, Rechtmäßigkeit und Aktualität. Wer in einem Text eine Person beleidigt oder falsche Behauptungen aufstellt, kann dafür zivil- und sogar strafrechtlich verantwortlich gemacht werden. Auch Persönlichkeitsrechte zählen dazu: Fotos von Personen oder Kundendaten dürfen nicht ohne Zustimmung veröffentlicht werden."
        },
        {
          title: "Fremde Inhalte und der Disclaimer-Mythos",
          text: "Viele Webseiten nutzen einen Disclaimer (von englisch „to disclaim“ = etwas abstreiten), um sich von verlinkten Inhalten zu distanzieren. Der Haken: Ein pauschaler Disclaimer schließt die Haftung nicht zuverlässig aus. Wer einen Link setzt, empfiehlt die Zielseite ja gerade – sich gleichzeitig von ihr zu distanzieren, ist widersprüchlich. Wichtiger ist das richtige Verhalten: Zielseiten vor dem Verlinken prüfen, externe Links klar kennzeichnen und rechtswidrige Links sofort entfernen, sobald man davon erfährt. Ähnliches gilt für Kundenbewertungen und Kommentare: Grundsätzlich haftet der Verfasser – der Betreiber muss rechtswidrige Beiträge aber löschen, sobald er darauf hingewiesen wird."
        },
        {
          title: "Urheberrecht im Internet",
          text: "Das Urheberrechtsgesetz (UrhG) schützt Texte, Fotos, Musik und Videos – auch ohne Copyright-Vermerk. Der Grundsatz lautet: Nicht alles, was funktioniert, ist auch erlaubt! Wer fremde Werke nutzen will, braucht das Einverständnis des Urhebers. Ausnahmen sind die Privatkopie ohne Veröffentlichung und das Zitatrecht mit klarer Quellenangabe. Verstöße wie „Bilderklau“ können Abmahnung, Schadensersatz, Anwalts- und Gutachterkosten nach sich ziehen."
        },
        {
          title: "Creative Commons und aktueller Rechtsstand",
          text: "Creative-Commons-Lizenzen (CC) sind vorgefertigte Lizenzverträge, mit denen Urheber die Nutzung ihrer Werke freigeben – von CC BY (Namensnennung genügt) bis CC0 (fast völlig frei). Für dein Projekt sind sie eine faire Quelle für Bilder und Medien. Beachte beim Rechtsstand: Ältere Materialien nennen für die Haftung noch §§ 7 bis 10 TMG. Diese Regeln stehen heute im europäischen Digital Services Act (Art. 4 bis 8 DSA); das DDG hat das TMG abgelöst."
        }
      ],
      takeaways: [
        "Für eigene Inhalte haftet der Betreiber der Webseite immer selbst.",
        "Ein Disclaimer ersetzt keine Sorgfalt: Links vor dem Setzen prüfen, klar kennzeichnen und bei Kenntnis von Rechtsverstößen sofort entfernen.",
        "Werke sind auch ohne Copyright-Vermerk urheberrechtlich geschützt – für fremde Inhalte brauchst du das Einverständnis des Urhebers.",
        "Creative-Commons-Lizenzen zeigen dir genau, was du mit einem Werk tun darfst – die Bedingungen wie Namensnennung musst du einhalten."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.5 Haftung für Webseiteninhalte",
          description: "Fallanalyse zu eigenen und fremden Inhalten, Disclaimer-Check, Urheberrechts-Quiz und CC-Lizenz-Übung für dein Webshop-Projekt.",
          href: "assets/materials/lf2-2-5-haftung-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Prüfe alle Bilder und Texte deines Webshop-Projekts: Was hast du selbst erstellt, was stammt aus fremden Quellen?",
        "Ersetze unklare Fundstücke durch eigene Werke oder passend lizenzierte CC-Inhalte und notiere Quelle und Lizenz.",
        "Kennzeichne externe Links in deinem Projekt eindeutig und halte fest, wann du die Zielseite geprüft hast.",
        "Formuliere für deinen Shop einen kurzen, ehrlichen Hinweis zu verlinkten Inhalten – ohne leere Disclaimer-Floskeln.",
        "Ergänze neben dem Impressum einen kurzen Datenschutzhinweis: Welche Daten speichert dein Shop, wozu – und wo finden Kunden die vollständige Datenschutzerklärung?"
      ]
    },
    {
      id: "lf2-produktdetailseite",
      field: "LF2",
      code: "2.6",
      mark: "PDS",
      title: "Produktdetailseite: Informationsmöglichkeiten über Waren",
      short: "Warenwissen aus guten Quellen sammeln, überzeugende Produktdetailseiten bauen und Produktdaten professionell verwalten.",
      color: "cyan",
      image: "assets/module-icons/lf2-2-6-produktdetailseite.png",
      mission: "Werde zum Warenprofi: Sammle belastbares Wissen über dein Produkt, baue daraus eine Produktdetailseite, die informiert und verkauft – und halte deine Produktdaten sauber im Griff.",
      lessons: [
        {
          title: "Warenwissen ist Verkaufsargument",
          text: "Eine gute Produktdetailseite steht und fällt mit echtem Warenwissen. Die Ware darf keine „Black Box“ bleiben: Wer nur Name und Preis kennt, kann Kunden weder beraten noch überzeugen. Gutes Warenwissen liefert faire Argumente, orientiert sich am Preis-Leistungs-Verhältnis für den Kunden – und hilft ganz nebenbei, Retouren zu vermeiden."
        },
        {
          title: "Informationsquellen clever nutzen",
          text: "Warenwissen kommt aus vielen Quellen: eigene Warenprüfung im Wareneingang, Herstellerinformationen wie Kataloge und Gebrauchsanweisungen, Messen und Ausstellungen, Fachzeitschriften, Konkurrenzbeobachtung und Kundenrückmeldungen. Unabhängige Anlaufstellen wie Stiftung Warentest und Verbraucherzentralen liefern neutrale Testurteile, Preisdatenbanken und Verbraucherforen zeigen Marktpreise und echte Nutzererfahrungen."
        },
        {
          title: "Elemente einer überzeugenden Produktdetailseite",
          text: "Kunden entscheiden auf der Produktdetailseite. Dorthin gehören: prägnanter Produktname mit Kurzbeschreibung, hochwertige Bilder oder Videos, eine detaillierte Beschreibung, Preisangaben inklusive Umsatzsteuer und Versandkosten, Verfügbarkeit und Lieferzeit, technische Daten, Bewertungen, rechtliche Hinweise wie Garantie und Rückgaberecht, passende Cross-Selling- und Up-Selling-Empfehlungen – und ein klarer Call-to-Action wie „In den Warenkorb“."
        },
        {
          title: "Produktdaten professionell verwalten",
          text: "Bei vielen Artikeln wird händisches Pflegen von Produktdaten schnell fehleranfällig. Elektronische Kataloge bündeln Produktdaten in einer Datenbank, Katalogaustauschformate wie BMEcat oder einfaches CSV machen den Austausch mit Lieferanten leichter, und Produktinformationsmanagementsysteme (PIM) pflegen alle Daten zentral für Shop, Marktplatz und Werbung. Klassifikationsstandards wie eCl@ss ordnen Artikel einheitlich ein und machen sie vergleichbar."
        }
      ],
      takeaways: [
        "Die Ware darf keine Black Box sein: Ohne Warenwissen keine überzeugende Produktdetailseite.",
        "Mehrere Quellen kombinieren – Herstellerangaben sind nützlich, unabhängige Tests und Kundenfeedback machen das Bild ehrlich.",
        "Eine vollständige Produktdetailseite informiert (Beschreibung, Daten, Preis inkl. MwSt. und Versand) und verkauft (Bilder, Bewertungen, Cross-Selling, Call-to-Action).",
        "Produktdaten zentral und strukturiert pflegen: elektronische Kataloge, Austauschformate und PIM-Systeme sparen Aufwand und verhindern veraltete Angaben."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.6 Produktdetailseite",
          description: "Quellen-Recherche, Analyse echter Produktseiten, Bauplan für die eigene Produktdetailseite und Mini-Produktkatalog als CSV.",
          href: "assets/materials/lf2-2-6-produktdetailseite-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Analysiere eine Produktdetailseite eines großen Shops: Verständlichkeit, Bildqualität, Auffindbarkeit wichtiger Informationen und verkaufsfördernde Maßnahmen.",
        "Sammle für ein eigenes Produkt Informationen aus mindestens zwei Quellen (z. B. Herstellerseite, Testbericht, Preisvergleich) und notiere die Quellen.",
        "Baue eine vollständige Produktdetailseite als HTML/CSS-Entwurf oder Wireframe – mit allen Elementen inklusive Preisangabe mit MwSt. und Versandhinweis.",
        "Lege deine Produktdaten strukturiert an, zum Beispiel als kleine CSV-Tabelle mit Artikelnummer, Bezeichnung und Preis – und vergleiche dein Ergebnis mit echten Vorbildern."
      ]
    },
    {
      id: "lf2-kundeninformationen",
      field: "LF2",
      code: "2.7",
      mark: "INF",
      title: "Produktdetailseite: Informationen für Kunden",
      short: "Sortiment, Produktmerkmale, Herkunfts- und Qualitätsangaben so aufbereiten, dass Kunden sicher vergleichen und entscheiden können.",
      color: "pink",
      image: "assets/module-icons/lf2-2-7-kundeninformationen.png",
      mission: "Verwandle Warenwissen in klare Kundeninformationen: Beschreibe Artikel, Sorten, Merkmale, Herkunft, Zeichen und Handling so, dass deine Produktdetailseite Orientierung und Vertrauen schafft.",
      lessons: [
        {
          title: "Sortiment verständlich einordnen",
          text: "Kunden brauchen Orientierung: Eine Warengruppe bündelt ähnliche Artikel, ein Artikel beschreibt eine handelbare Produktlinie und Sorten zeigen konkrete Ausprägungen wie Größe, Farbe oder Material. Auch die Sortimentsbreite und Sortimentstiefe helfen, das Angebot zu erklären: Viele Warengruppen bedeuten Breite, viele Varianten innerhalb einer Warengruppe bedeuten Tiefe."
        },
        {
          title: "Produktmerkmale kundengerecht beschreiben",
          text: "Produktmerkmale sind Eigenschaften, mit denen Kunden vergleichen und entscheiden. Dazu gehören materielle Merkmale wie Material und Gewicht, gestalterische Merkmale wie Farbe und Form, funktionale Merkmale wie Einsatzbereich, Qualitätsmerkmale wie Haltbarkeit oder Zertifizierung, wirtschaftliche Merkmale wie Preis und Marke sowie Verpackungsmerkmale."
        },
        {
          title: "Herkunft, Marke und Zeichen einordnen",
          text: "Herstellungs- und Herkunftsangaben können Produktionsort, Fertigungsmethode, Hersteller, Zeitraum oder Charge erklären. Marken schaffen Wiedererkennung und Vertrauen. Testzeichen, Gütezeichen, Typenschilder und Schutzzeichen erfüllen unterschiedliche Aufgaben: Sie können Prüfung, Qualität, technische Identifikation oder rechtlichen Markenschutz sichtbar machen."
        },
        {
          title: "Kundeninformationen auf der Detailseite nutzbar machen",
          text: "Gute Produktdetailseiten übersetzen Produktwissen in konkrete Entscheidungshilfen: Maßangaben mit Zahlenwert und Einheit, Pflege-, Montage-, Lagerungs-, Sicherheits- und Entsorgungshinweise, klare Tabellen, verständliche Varianten und ehrliche Nutzenargumente. So sinkt Unsicherheit, und Kunden wissen besser, ob das Produkt wirklich passt."
        }
      ],
      takeaways: [
        "Warengruppe, Artikel und Sorte helfen, Produkte sauber zu ordnen und Varianten verständlich zu zeigen.",
        "Produktmerkmale werden erst wertvoll, wenn sie als Kundennutzen und Vergleichskriterium erklärt werden.",
        "Herkunfts-, Marken-, Test- und Güteangaben müssen korrekt eingeordnet werden – nicht jedes Symbol bedeutet dasselbe.",
        "Handling-Informationen wie Lagerung, Pflege, Montage, Sicherheit und Entsorgung gehören auf die Produktdetailseite, wenn sie für die Nutzung wichtig sind."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.7 Informationen für Kunden",
          description: "Sortimentsbegriffe, Produktmerkmale, Herkunfts- und Zeichenangaben sowie ein Bauplan für kundengerechte Produktinformationen.",
          href: "assets/materials/lf2-2-7-kundeninformationen-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Wähle ein Produkt aus deinem Webshop-Projekt und ordne es Warengruppe, Artikel und Sorte zu.",
        "Erstelle eine Merkmalstabelle mit Material, Maßeinheiten, Farbe/Form, Funktion, Qualität, Preis-/Serviceangaben und Verpackung.",
        "Prüfe, ob Herkunftsangaben, Marken, Testzeichen, Gütezeichen, Typenschild oder Schutzzeichen für dein Produkt relevant sind.",
        "Ergänze auf deiner Produktdetailseite klare Handling-Informationen, zum Beispiel zu Lagerung, Pflege, Montage, Sicherheit oder Entsorgung.",
        "Bereite kurz vor, wie du Sortimentsbreite, Sortimentstiefe sowie Kern- und Randsortiment deines Ausbildungsunternehmens erklären würdest."
      ]
    },
    {
      id: "lf2-produktbeschreibung",
      field: "LF2",
      code: "2.8",
      mark: "TXT",
      title: "Die Produktbeschreibung auf der Produktdetailseite",
      short: "Produkttexte so planen, strukturieren und formulieren, dass sie informieren, Vertrauen schaffen und in Suchmaschinen gefunden werden.",
      color: "orange",
      image: "assets/module-icons/lf2-2-8-produktbeschreibung.png",
      mission: "Schreibe Produktbeschreibungen wie ein guter Verkaufsberater: verständlich, zielgruppengerecht, nutzenorientiert, strukturiert und suchmaschinenfreundlich.",
      lessons: [
        {
          title: "Produktbeschreibung als Beratungstext verstehen",
          text: "Eine Produktbeschreibung ist mehr als ein kopierter Herstellertext. Sie erklärt, welches Problem ein Produkt löst, welche Eigenschaften wichtig sind und warum es zur Zielgruppe passt. Sie informiert sachlich, wirkt zugleich verkaufsfördernd und hilft Suchmaschinen, die Produktseite richtig einzuordnen."
        },
        {
          title: "Inhalte planen und sinnvoll strukturieren",
          text: "Gute Texte entstehen nicht zufällig. Vor dem Schreiben werden Zielgruppe, Informationsbedarf, Nutzenversprechen, besondere Eigenschaften und mögliche Zusatzinformationen festgelegt. Danach wird der Text in gut scanbare Bereiche gegliedert: Titel, Kurzbeschreibung, Bullet Points, Fließtext, Tabellen, Zwischenüberschriften oder aufklappbare Bereiche."
        },
        {
          title: "Kundengerecht und aktiv formulieren",
          text: "Produkttexte sollten kurze Sätze, klare Wörter und aktive Formulierungen nutzen. Fremdwörter, leere Floskeln, aggressive Kaufbefehle und unnötig lange Satzketten stören. Besser sind positive Nutzenformulierungen: Ein Merkmal wird direkt damit verbunden, was Kundinnen und Kunden davon haben."
        },
        {
          title: "SEO und Unique Content mitdenken",
          text: "Suchmaschinen bewerten nicht nur einzelne Keywords, sondern auch Relevanz, Aktualität, Struktur und Eigenständigkeit. Einzigartige Produkttexte mit passenden Schlüsselwörtern, aussagekräftigen Überschriften und sinnvollen Listen helfen Kunden und verbessern zugleich die Auffindbarkeit."
        }
      ],
      takeaways: [
        "Gute Produktbeschreibungen verbinden Information, Verkauf und Suchmaschinenrelevanz.",
        "Produkttexte müssen zur Zielgruppe passen und vor dem Schreiben geplant werden.",
        "Kurze, aktive und positive Formulierungen wirken verständlicher als Fachjargon, Floskeln oder Drucksprache.",
        "Unique Content, passende Keywords, Bullet Points und klare Zwischenüberschriften machen Produktseiten nutzbarer."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.8 Produktbeschreibung",
          description: "Planung, Struktur, Kommunikationsregeln, Bullet Points, SEO-Keywords und Schreibauftrag für eigene Produkttexte.",
          href: "assets/materials/lf2-2-8-produktbeschreibung-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Wähle ein Produkt aus deinem Webshop-Projekt und beschreibe Zielgruppe, Problem, wichtigsten Nutzen und Informationsbedarf.",
        "Formuliere einen präzisen Produkttitel, drei bis fünf Bullet Points und eine kurze Beschreibung mit maximal 70 Wörtern.",
        "Überarbeite deinen Text: Entferne Floskeln, unnötige Fachbegriffe, passive Formulierungen und aggressive Kaufaufforderungen.",
        "Ergänze drei passende Keywords oder Suchbegriffe und baue sie natürlich in Titel, Zwischenüberschrift oder Beschreibung ein.",
        "Entscheide, welche Informationen kurz sichtbar sein sollen und welche als Langbeschreibung, Tabelle oder aufklappbarer Abschnitt besser passen."
      ]
    },
    {
      id: "lf2-artikelauswahl",
      field: "LF2",
      code: "2.9",
      mark: "VAR",
      title: "Die Auswahl des Artikels auf der Produktdetailseite",
      short: "Varianten, Lieferbarkeit, Auswahlhilfen, Produktvergleiche, Cross-Selling und Buy-Box so gestalten, dass Kunden sicher den passenden Artikel wählen.",
      color: "blue",
      image: "assets/module-icons/lf2-2-9-artikelauswahl.png",
      mission: "Gestalte die Produktdetailseite so, dass Kunden den richtigen Artikel, die passende Variante und den nächsten Kaufschritt ohne Unsicherheit finden.",
      lessons: [
        {
          title: "Varianten klar auswählbar machen",
          text: "Viele Artikel werden in Varianten angeboten: Farbe, Größe, Modell, Material, Ausführung oder Menge. Die Produktdetailseite muss diese Varianten sichtbar, verständlich und leicht bedienbar machen. Nach der Auswahl sollten Bild, Preis, Lieferzeit und Verfügbarkeit zur gewählten Variante passen."
        },
        {
          title: "Verfügbarkeit und Lieferzeit konkret zeigen",
          text: "Kunden wollen wissen, ob ein Artikel lieferbar ist, wann er ankommt und ob Abholung oder kostenloser Versand möglich ist. Klare Angaben wie 'Lieferung in 2-3 Werktagen' helfen mehr als ungenaue Wörter wie 'voraussichtlich' oder 'ca.'. Künstlicher Kaufdruck sollte vermieden werden."
        },
        {
          title: "Auswahlhilfen und Produktvergleiche anbieten",
          text: "Unsichere Kunden brauchen Unterstützung: Größentabellen, Messhilfen, Infoblöcke, Symbole, Beratung, Chat oder Produktvergleiche. Ein guter Vergleich zeigt wesentliche Merkmale nebeneinander und macht Unterschiede schnell erfassbar, statt Kunden mit Daten zu überladen."
        },
        {
          title: "Buy-Box, Cross-Selling und Warenkorb verbinden",
          text: "Die Buy-Box bündelt Preis, Versandkosten, Varianten, Menge, Verfügbarkeit, Lieferzeit und den Call-to-Action. Ergänzende Produkte können als Cross-Selling angeboten werden. Nach dem Klick in den Warenkorb sollte klar bestätigt werden, was hinzugefügt wurde und wie Kunden weitergehen können."
        }
      ],
      takeaways: [
        "Artikelvarianten müssen so dargestellt werden, dass Kunden die passende Ausführung sicher wählen können.",
        "Verfügbarkeit, Lieferzeit, Versand und Abholung gehören klar und möglichst konkret in die Kaufzone.",
        "Auswahlhilfen, Beratung und Produktvergleiche senken Unsicherheit und können Retouren vermeiden.",
        "Buy-Box, Cross-Selling und Warenkorb-Layer führen von der Entscheidung zum nächsten Kaufschritt."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.9 Artikelauswahl",
          description: "Varianten, Lieferbarkeit, Auswahlhilfen, Produktvergleich, Cross-Selling, Buy-Box und Warenkorb-Layer für eigene Produktdetailseiten planen.",
          href: "assets/materials/lf2-2-9-artikelauswahl-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Wähle ein Produkt mit mindestens zwei Varianten, zum Beispiel Farbe, Größe, Menge, Material oder Modell.",
        "Plane, wie die Variantenauswahl auf deiner Produktdetailseite aussieht und welche Informationen sich nach der Auswahl ändern.",
        "Ergänze konkrete Angaben zu Verfügbarkeit, Lieferzeit, Versandkosten, Abholung oder kostenfreiem Versand.",
        "Entwickle eine Auswahlhilfe, etwa Größentabelle, Infoblock, Beratungshinweis oder Produktvergleich.",
        "Skizziere deine Buy-Box mit Preis, Menge, Varianten, Verfügbarkeit, Lieferzeit und klarem Call-to-Action sowie einem passenden Warenkorb-Layer."
      ]
    },
    {
      id: "lf2-visualisierungen",
      field: "LF2",
      code: "2.10",
      mark: "VIS",
      title: "Visualisierungen auf der Produktdetailseite",
      short: "Produktfotos, Zoom, 360-Ansichten, Videos, Dateiformate und Bildgrößen so wählen, dass Kunden Produkte realistisch beurteilen können.",
      color: "mint",
      image: "assets/module-icons/lf2-2-10-visualisierungen.png",
      mission: "Mach Produkte sichtbar: Plane Bilder und Videos so, dass Kunden Details, Varianten und Nutzung besser einschätzen können, ohne die Seite langsam oder unübersichtlich zu machen.",
      lessons: [
        {
          title: "Visualisierung ersetzt das Anfassen",
          text: "Im Online-Shop können Kunden Produkte nicht direkt sehen, anfassen oder ausprobieren. Gute Produktfotos, Details, Variantenbilder, Zoom, Vollbildansichten und 360-Ansichten helfen, Größe, Material, Farbe und Qualität realistischer einzuschätzen."
        },
        {
          title: "Produktfotos brauchen Konzept",
          text: "Ein einzelnes Foto reicht selten. Sinnvoll sind mehrere Perspektiven, Detailaufnahmen, Bilder aller wichtigen Farb- oder Modellvarianten und ein einheitlicher Stil. Thumbnails helfen bei der Auswahl, während Zoom oder Vollbildansicht wichtige Details sichtbar machen."
        },
        {
          title: "Bildqualität und Ladezeit austarieren",
          text: "Bildgröße, Auflösung, Dateigröße, Farbtiefe und Dateiformat beeinflussen Darstellung und Ladezeit. Komprimierung spart Speicherplatz und beschleunigt Seiten, darf aber keine störenden Qualitätsverluste oder Kompressionsartefakte erzeugen."
        },
        {
          title: "Produktvideos gezielt einsetzen",
          text: "Videos können Funktionen, Nutzung, Größenverhältnisse und Erklärungen besonders anschaulich zeigen. Sie sollten relevant, kurz, rechtlich sauber eingebunden und nicht aufdringlich sein. Automatischer Start mit Ton wirkt oft störend."
        }
      ],
      takeaways: [
        "Gute Visualisierung hilft Kunden, ein Produkt trotz Distanz realistisch einzuschätzen.",
        "Mehrere Perspektiven, Detailbilder, Variantenfotos und Zoom-Funktionen machen Produktmerkmale sichtbar.",
        "Dateiformat, Bildgröße und Komprimierung müssen zur Nutzung passen: scharf genug, aber nicht unnötig langsam.",
        "Produktvideos sind stark, wenn sie echten Zusatznutzen liefern und bewusst eingebunden werden."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.10 Visualisierungen",
          description: "Bildkonzept, Dateiformate, Komprimierung, Produktvideo-Planung und Visualisierungscheck für eigene Produktdetailseiten.",
          href: "assets/materials/lf2-2-10-visualisierungen-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Wähle ein Produkt aus deinem Webshop-Projekt und plane mindestens fünf passende Produktbilder: Gesamtansicht, Detail, Variante, Nutzung und Größenvergleich.",
        "Lege fest, welche Bilder als Thumbnails, Zoomansicht oder Vollbildansicht angeboten werden.",
        "Prüfe für deine Bilder Dateiformat, Bildgröße und Dateigröße. Reduziere die Datei nur so weit, dass Details noch sauber erkennbar bleiben.",
        "Entscheide, ob ein Produktvideo sinnvoll ist. Beschreibe Ziel, Inhalt, Länge, Einbindung und Rechtefrage.",
        "Ergänze deine Produktdetailseite um eine kurze Medienstrategie: Welche Visualisierung beantwortet welche Kundenfrage?"
      ]
    },
    {
      id: "lf2-preisgestaltung",
      field: "LF2",
      code: "2.12",
      mark: "PRE",
      title: "Preisgestaltung und -darstellung in Webshops",
      short: "Preise kalkulieren, Preispsychologie verstehen, Dynamic Pricing einordnen und Preisangaben rechtssicher nach PAngV darstellen.",
      color: "violet",
      image: "assets/module-icons/lf2-2-12-preisgestaltung.png",
      mission: "Werde zum Preisprofi: Kalkuliere deinen Verkaufspreis, nutze faire psychologische Effekte, verstehe dynamische Preise – und zeichne alle Preise in deinem Webshop-Projekt rechtssicher aus.",
      lessons: [
        {
          title: "Preise entstehen nicht zufällig",
          text: "Bei der Preisfestlegung wirken mehrere Einflussgrößen zusammen: die eigene Kostensituation (Bezugspreis plus Handlungskosten ergibt die Selbstkosten, mit Gewinnaufschlag entsteht die Preisuntergrenze), die Beschaffungskosten, unverbindliche Preisempfehlungen des Herstellers (UVP – der Händler ist daran nicht gebunden), die Konkurrenzsituation am Markt, das Verhalten der Kunden und gesetzliche Bestimmungen. Bei Grundnahrungsmitteln reagieren Kunden viel stärker auf Preisänderungen als bei Luxus- und Prestigeprodukten."
        },
        {
          title: "Psychologie der Preiswahrnehmung",
          text: "Kunden nehmen Preise nicht rein rechnerisch wahr. Händler nutzen deshalb den Preisrundungseffekt (7,99 € statt 8,00 €), Preisschwellen, die Tendenz zur Mitte (beim Angebot von drei Preisen wird oft der mittlere gewählt), den Schnäppcheneffekt bei Kombinationsangeboten, Eckpreisartikel (bekannte Warenkorb-Artikel, von denen Kunden auf das gesamte Preisniveau schließen) und künstliche Verknappung. Wichtig für dein Projekt: Diese Effekte kennen – und fair einsetzen."
        },
        {
          title: "Dynamische Preise, Preisdifferenzierung und Rabatte",
          text: "Beim Dynamic Pricing passt ein Algorithmus die Preise laufend an – je nach Tageszeit, Nachfrage, Standort oder verwendetem Gerät; große Shops ändern Preise mehrmals täglich. Preisdifferenzierung bedeutet, die gleiche Ware zu unterschiedlichen Preisen anzubieten: räumlich, personell, zeitlich oder mengenmäßig. Dazu kommen Rabatte (Mengen-, Treue-, Wiederverkäufer- und Personalrabatt, Skonto, Bonus) und Naturalrabatte: Bei der Draufgabe erhält der Kunde mehr Ware als bestellt, bei der Dreingabe zahlt er nur einen Teil der gewünschten Menge."
        },
        {
          title: "Preisangabenverordnung: klare Regeln",
          text: "Die Preisangabenverordnung (PAngV) schützt Verbraucher: Anzugeben ist immer der Endpreis inklusive Umsatzsteuer, Versandkosten müssen klar ausgewiesen werden (nicht nur in den AGB), bei Waren nach Gewicht oder Volumen zusätzlich der Grundpreis je Mengeneinheit. Preise müssen leicht erkennbar, deutlich lesbar und dem Angebot eindeutig zugeordnet sein. Seit 2022 gilt außerdem: Wer mit Streichpreisen wirbt, muss den niedrigsten Gesamtpreis der letzten 30 Tage angeben (§ 11 PAngV). Verstöße können ein Bußgeld bis zu 25.000 € kosten."
        }
      ],
      takeaways: [
        "Verkaufspreise entstehen aus Kosten, Konkurrenz, Kundenverhalten, Herstellerempfehlungen und gesetzlichen Regeln – die Selbstkosten markieren die langfristige Preisuntergrenze.",
        "Preispsychologie wirkt: gebrochene Preise, Preisschwellen, Tendenz zur Mitte und Eckpreisartikel beeinflussen die Kaufentscheidung.",
        "Dynamic Pricing und Preisdifferenzierung sind verbreitet – als Shopbetreiber bewusst einsetzen, als Kunde erkennen können.",
        "PAngV beachten: Endpreis inkl. USt, Versandkosten-Hinweis, Grundpreis je Mengeneinheit und bei Streichpreisen der 30-Tage-Bestpreis."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.12 Preisgestaltung",
          description: "Rechenwerkstatt zu Kalkulation, Umsatzvergleich und Grundpreisen, Preispsychologie-Zuordnung und PAngV-Check für dein Webshop-Projekt.",
          href: "assets/materials/lf2-2-12-preisgestaltung-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Kalkuliere für ein Produkt deines Webshop-Projekts den Verkaufspreis: Bezugspreis, Handlungskosten, Gewinnaufschlag und Umsatzsteuer nachvollziehbar notieren.",
        "Prüfe alle Preisangaben deines Projekts nach PAngV: Endpreis inkl. USt sichtbar, Versandkosten-Hinweis vorhanden, Grundpreis bei Mengenware angegeben.",
        "Gestalte die Preisdarstellung verkaufswirksam: Preis deutlich abheben, Ersparnis bei Aktionen ehrlich ausweisen (30-Tage-Bestpreis beachten).",
        "Untersuche einen echten Webshop zu zwei verschiedenen Zeitpunkten oder auf zwei Geräten: Findest du Hinweise auf Dynamic Pricing?",
        "Entscheide für dein Sortiment: Wo wären Mengenrabatt, zeitliche Aktionen oder ein Kombinationsangebot sinnvoll – und wo eher nicht?"
      ]
    },
    {
      id: "lf2-warenwirtschaft",
      field: "LF2",
      code: "2.16",
      mark: "ERP",
      title: "ERP- und Warenwirtschaftssysteme",
      short: "Waren- und Informationsflüsse verstehen, Artikelnummern und GTIN einsetzen und erkennen, wie Warenwirtschafts- und ERP-Systeme den Shop im Hintergrund steuern.",
      color: "cyan",
      image: "assets/module-icons/lf2-2-16-warenwirtschaft.png",
      mission: "Blicke hinter die Kulissen deines Webshops: Verfolge, wie Ware und Informationen durch das Unternehmen fließen – und wie Warenwirtschafts- und ERP-Systeme daraus einen reibungslosen Ablauf machen.",
      lessons: [
        {
          title: "Warenwirtschaft: Ware und Information fließen",
          text: "Die Warenwirtschaft umfasst alle Tätigkeiten rund um Beschaffung, Lagerung und Absatz der Ware. Dabei laufen zwei Ströme parallel: Im Warenfluss bewegt sich die Ware physisch durch das Unternehmen (prüfen, lagern, verpacken, versenden), im Informationsfluss wandern die Daten dazu (Lieferschein prüfen, Bestand buchen, Preis kalkulieren, Umsatz erfassen). Ziel ist, die richtige Ware zur rechten Zeit, in der richtigen Menge, zum richtigen Preis am richtigen Ort zu haben."
        },
        {
          title: "Der Zielkonflikt – und wie Systeme helfen",
          text: "Die Warenwirtschaft steckt in einem klassischen Zielkonflikt: Einerseits sollen Lagerbestände klein bleiben, weil Ware Kapital bindet und Lagerkosten verursacht. Andererseits sollen Kunden sofort beliefert werden können. Warenwirtschaftssysteme (WWS) steuern den Warendurchlauf lückenlos vom Wareneingang bis zum Warenausgang und liefern die Informationen und Kennzahlen, um diesen Konflikt zu entschärfen. Man unterscheidet geschlossene (alles per EDV), offene (nur teilweise per EDV) und integrierte Systeme, die auch Kunden, Lieferanten und Banken direkt einbinden."
        },
        {
          title: "Artikelnummern, GTIN und Codes",
          text: "Damit ein System jeden Verkauf artikelgenau erfassen kann, braucht jeder Artikel eine eindeutige Nummer: entweder eine hauseigene Artikelnummer oder die GTIN (Global Trade Item Number, früher EAN). Die 13-stellige GTIN besteht aus Länderkennzeichen, Unternehmensnummer, individueller Artikelnummer und Prüfziffer und begleitet den Artikel über alle Handelsstufen. Maschinenlesbar wird sie über Strichcodes; Matrixcodes (QR-Codes) sind zweidimensional und können deutlich mehr Informationen speichern."
        },
        {
          title: "ERP: das Nervensystem des Unternehmens",
          text: "ERP-Systeme (Enterprise Resource Planning) gehen über die Warenwirtschaft hinaus: Sie bilden die Geschäftsprozesse des ganzen Unternehmens ab – mit Modulen für Stammdaten, Warenwirtschaft, Verkauf, Finanzwesen, Controlling, Personal und Marketing. Alle Daten liegen in einer zentralen Datenbasis, Mehrfacherfassung entfällt. Nachteile sind Anpassungsaufwand (Customizing) und Herstellerabhängigkeit. Bekannte Anbieter sind SAP, Oracle und Microsoft Dynamics; der Trend geht zu Cloud- und webbasierten Systemen, die auch Lieferanten und Kunden einbinden (Supply Chain Management, CRM)."
        }
      ],
      takeaways: [
        "Warenwirtschaft heißt: Warenfluss und Informationsfluss gemeinsam denken – von der Beschaffung über die Lagerung bis zum Absatz.",
        "Der Zielkonflikt „niedrige Bestände gegen sofortige Lieferfähigkeit“ lässt sich nur mit guten Daten aus dem Warenwirtschaftssystem steuern.",
        "Eindeutige Artikelnummern oder die 13-stellige GTIN sind die Voraussetzung für artikelgenaue Erfassung – Strichcode und QR-Code machen sie maschinenlesbar.",
        "ERP-Systeme bündeln alle Geschäftsprozesse in einer zentralen Datenbasis; das spart Mehrfacherfassung, kostet aber Anpassungsaufwand."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF2 2.16 ERP und Warenwirtschaft",
          description: "Waren- oder Informationsfluss zuordnen, GTIN entschlüsseln, WWS-Arten vergleichen und den Datenfluss des eigenen Webshop-Projekts skizzieren.",
          href: "assets/materials/lf2-2-16-warenwirtschaft-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Skizziere als Flussdiagramm, was in deinem Webshop-Projekt nach einer Bestellung passiert: von der Auftragsprüfung über Lager und Versand bis zur Rechnung.",
        "Markiere in deinem Diagramm farblich, was Warenfluss und was Informationsfluss ist.",
        "Vergib für dein Sortiment eindeutige Artikelnummern nach einem selbst festgelegten Schema und dokumentiere das Schema kurz.",
        "Lege fest, welche Daten dein (gedachtes) Warenwirtschaftssystem an den Shop liefert: Bestand, Preis, Lieferzeit – und wo diese auf der Produktdetailseite erscheinen.",
        "Recherchiere ein echtes ERP- oder WWS-Produkt und notiere, welche Module es für einen kleinen Webshop bietet."
      ]
    },
    {
      id: "lf6-servicekanaele",
      field: "LF6",
      code: "6.0",
      mark: "SVC",
      title: "Servicekanäle im Überblick",
      short: "E-Mail, Chat, Social Media, Videokonferenz, Newsletter und FAQ: den passenden Kanal wählen und kundenorientiert kommunizieren.",
      color: "orange",
      image: "assets/module-icons/lf6-6-0-servicekanaele.png",
      mission: "Werde zur Service-Stimme deines Shops: Wähle für jedes Kundenanliegen den passenden Kanal und antworte so, dass aus einem Problem ein zufriedener Stammkunde wird.",
      lessons: [
        {
          title: "Service ist Teil des Produkts",
          text: "Im Onlinehandel entscheidet der Service oft stärker über Bewertungen und Wiederkäufe als das Produkt selbst. Kundenorientierte Servicekommunikation heißt: schnell reagieren, verständlich formulieren, freundlich bleiben und eine echte Lösung anbieten. Der erste Schritt ist die Kanalwahl – ein komplexes Beratungsanliegen braucht einen anderen Kanal als eine kurze Frage zur Lieferzeit."
        },
        {
          title: "Schriftlich: E-Mail, Anschreiben und Chat",
          text: "Die E-Mail ist der Standardkanal: dokumentierbar, durchdacht, aber mit Erwartung einer zügigen Antwort. Eine gute Service-E-Mail hat einen klaren Betreff, eine persönliche Anrede, die Lösung gleich am Anfang und konkrete nächste Schritte. Förmliche Anschreiben folgen den Regeln des Geschäftsbriefs. Der Live-Chat ist schneller und informeller – Chatbots können Standardfragen übernehmen, müssen komplexe oder emotionale Fälle aber erkennbar an Menschen übergeben."
        },
        {
          title: "Live und öffentlich: Videokonferenz und Social Media",
          text: "Videokonferenzen eignen sich für Beratung und Produktvorführungen: Technik vorher testen, ruhige Umgebung, Unterlagen bereithalten und Bildschirmfreigabe gezielt nutzen. Social Media ist ein Servicekanal mit Publikum: Auf öffentliche Kritik professionell und lösungsorientiert reagieren, niemals zurückgiften – und Details wie Bestellnummern in die Direktnachricht verlagern."
        },
        {
          title: "Proaktiv: Newsletter und Selbstservice",
          text: "Der Newsletter informiert Kunden aktiv über Neuigkeiten und Angebote – aber nur mit ausdrücklicher Einwilligung. Bewährt ist das Double-Opt-in-Verfahren mit Bestätigungslink, und jede Ausgabe braucht einen funktionierenden Abmeldelink. Gute FAQ- und Hilfeseiten sind der stillste Servicekanal: Kunden suchen ihre Frage oft zuerst über Suchmaschinen – wer dort gute Antworten anbietet, löst Probleme rund um die Uhr und entlastet das Serviceteam."
        }
      ],
      takeaways: [
        "Erst das Anliegen verstehen, dann den Kanal wählen: kurze Fragen in Chat oder FAQ, komplexe Beratung ins Gespräch, Verbindliches per E-Mail.",
        "Service-E-Mails brauchen klaren Betreff, persönliche Anrede, die Lösung zuerst und konkrete nächste Schritte.",
        "Social-Media-Service ist öffentlich: professionell reagieren, Lösung anbieten, Details in die Direktnachricht.",
        "Newsletter nur mit Einwilligung (Double-Opt-in) und Abmeldelink; gute FAQ-Seiten beantworten Fragen, bevor sie den Service erreichen."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF6 Servicekanäle",
          description: "Kanalwahl-Training, Service-E-Mail-Bauplan, Social-Media-Fall und der Praxisauftrag „Ein Anliegen, fünf Kanäle“.",
          href: "assets/materials/lf6-servicekanaele-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Lege für dein Webshop-Projekt fest, über welche Kanäle Kunden dich erreichen können, und begründe die Auswahl.",
        "Schreibe eine Muster-Service-E-Mail zu einer verspäteten Lieferung: Betreff, Anrede, Lösung zuerst, nächste Schritte, Grußformel.",
        "Formuliere eine öffentliche Antwort auf eine kritische Social-Media-Bewertung und den passenden Wechsel in die Direktnachricht.",
        "Plane einen Newsletter für deinen Shop: Zielgruppe, Inhalt, Einwilligung per Double-Opt-in und Abmeldemöglichkeit.",
        "Erstelle fünf FAQ-Einträge zu den häufigsten Fragen rund um dein Sortiment, Versand und Rückgabe."
      ]
    },
    {
      id: "lf6-email",
      field: "LF6",
      code: "6.13",
      mark: "EML",
      title: "Kommunikation per E-Mail",
      short: "Geschäftliche E-Mails professionell aufbauen: Empfänger, CC und BCC, Betreff, Textfeld, Abschluss mit Pflichtangaben – und Datenschutz mitdenken.",
      color: "blue",
      image: "assets/module-icons/lf6-6-13-email.png",
      mission: "Schreibe E-Mails, die dein Ausbildungsunternehmen würdig vertreten: vollständig aufgebaut, rechtlich sauber und so formuliert, dass der Empfänger sofort weiß, worum es geht.",
      lessons: [
        {
          title: "Die E-Mail als Visitenkarte des Unternehmens",
          text: "Jede geschäftliche E-Mail repräsentiert das Unternehmen – genau wie ein Geschäftsbrief auf Papier. Deshalb gelten dieselben Regeln: professionelle Gestaltung, korrekte Ausdrucksweise und die gesetzlichen Geschäftsangaben (§§ 37a, 125a HGB für Kaufleute, § 80 AktG, § 35a GmbHG). Beliebt ist die E-Mail, weil sie schnell ist, Kosten spart, jederzeit weltweit funktioniert und digital archiviert werden kann – das passt auch zu einer ökologischen Ausrichtung des Unternehmens."
        },
        {
          title: "Empfänger, Kopie und Betreff",
          text: "Die E-Mail-Adresse besteht aus einem individuellen Namen, dem @-Zeichen und der Domain des Providers oder Unternehmens – oft mit länderspezifischer Top-Level-Domain wie „.de“ für Deutschland, „.fr“ für Frankreich oder „.uk“ für Großbritannien. Soll eine Kopie an weitere Personen gehen, gibt es zwei Felder: Bei CC (Carbon Copy) sehen alle Empfänger, wer die Kopie erhält – bei BCC (Blind Carbon Copy) bleibt das verborgen. Der Betreff ist Pflicht: eine kurze, präzise Inhaltsangabe, die beim Weiterleiten oder Beantworten angepasst wird, wenn sich der Inhalt ändert. Im internationalen Verkehr besser auf Umlaute und Akzente verzichten."
        },
        {
          title: "Textfeld und Abschluss",
          text: "Das Textfeld beginnt wie ein Geschäftsbrief mit der Anrede und einem Komma, dann folgt nach einer Leerzeile der Brieftext – einzeilig, bei Bedarf mit Absätzen und Hervorhebungen gegliedert. Der Abschluss hat eine feste Reihenfolge: Gruß, Firmenname, Name der Bearbeiterin oder des Bearbeiters mit Zusatz (i. A. = im Auftrag, i. V. = in Vollmacht, ppa. = per Prokura), danach Kommunikationsdaten und die gesetzlich vorgeschriebenen Unternehmensangaben wie Rechtsform, Sitz, Registergericht und Handelsregisternummer. Praktisch: Eine elektronische Signatur fügt diesen Baustein automatisch in jede ausgehende E-Mail ein."
        },
        {
          title: "Datenschutz beim E-Mail-Kontakt",
          text: "E-Mail-Adressen und E-Mail-Inhalte sind personenbezogene Daten – der Datenschutz gilt also in vollem Umfang. Das bedeutet: Zugänge zu Rechner und E-Mail-Programm mit Passwörtern schützen, Inhalte bei Bedarf verschlüsseln, Virenscanner und Firewall aktuell halten und beim Weiterleiten oder Archivieren die Datenschutzregeln beachten. Verstöße können nach der DSGVO Bußgelder bis zu 20 Millionen Euro (oder 4 % des weltweiten Jahresumsatzes) kosten. Für rechtsverbindliche elektronische Kommunikation wurde De-Mail geschaffen (§ 1 De-Mail-Gesetz) – in der Praxis hat sich das Verfahren aber kaum durchgesetzt."
        }
      ],
      takeaways: [
        "Die geschäftliche E-Mail folgt denselben Regeln und Pflichtangaben wie der Geschäftsbrief – sie repräsentiert das Unternehmen.",
        "CC zeigt allen, wer mitliest – BCC nicht. Der Betreff ist Pflicht und fasst den Inhalt präzise zusammen.",
        "Der Abschluss folgt der Reihenfolge Gruß, Firmenname, Bearbeiter mit Zusatz (i. A., i. V., ppa.), Kommunikationsdaten und gesetzliche Angaben – am besten per Signatur.",
        "E-Mail-Adressen und -Inhalte sind personenbezogene Daten: Zugänge schützen, verschlüsseln, Datenschutzregeln beachten."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF6 Kommunikation per E-Mail",
          description: "E-Mail-Bauplan zum Beschriften, CC/BCC-Entscheidungstraining, eine Anfrage zum Selberschreiben und der Datenschutz-Check.",
          href: "assets/materials/lf6-email-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Lege für dein Webshop-Projekt eine einheitliche E-Mail-Signatur fest: Gruß, Firmenname, Bearbeiter, Kommunikationsdaten und gesetzliche Angaben.",
        "Schreibe eine vollständige Anfrage-E-Mail an einen (fiktiven) Großhändler zu 100 Team-Hoodies mit eurem Logo – mit Betreff, Anrede, Brieftext und Abschluss.",
        "Entscheide für drei Versand-Situationen begründet, ob CC, BCC oder keine Kopie das richtige Feld ist.",
        "Recherchiere fünf länderspezifische Top-Level-Domains (z. B. über iana.org) und notiere, zu welchem Land sie gehören.",
        "Erstelle eine Datenschutz-Checkliste für das E-Mail-Postfach eures Shops: Zugangsschutz, Verschlüsselung, Virenscanner, Weiterleitungsregeln."
      ]
    },
    {
      id: "lf6-social-media",
      field: "LF6",
      code: "6.14",
      mark: "SOC",
      title: "Kommunikation über Social Media",
      short: "Many-to-Many-Kommunikation verstehen, professionell und rechtssicher auftreten und den passenden Plattformtyp wählen.",
      color: "pink",
      image: "assets/module-icons/lf6-6-14-social-media.png",
      mission: "Werde zur Social-Media-Stimme deines Shops: Baue Vertrauen durch Offenheit auf, halte die Spielregeln von Recht und Netiquette ein und wähle für jede Botschaft die passende Plattform.",
      lessons: [
        {
          title: "Many-to-Many: Was Social Media besonders macht",
          text: "Soziale Medien ermöglichen Kommunikation in Echtzeit mit Tausenden – Many-to-Many statt One-to-One wie bei der E-Mail. Im Mittelpunkt steht der Kontakt zwischen Menschen; Ziel ist ein Mehrwert aus dieser Interaktion. Die Kehrseite der Reichweite: Informationen verbreiten sich in Sekunden „viral“ – gute wie schlechte. Auch Fake News können Image und Vertrauen nachhaltig beschädigen, selbst wenn das Unternehmen schnell reagiert. Deshalb gilt: Offenheit und Ehrlichkeit sind die Grundlage – wer Fehler macht, steht dazu. Das Eingestehen von Fehlern wird als Stärke gesehen und kann das Ansehen sogar verbessern."
        },
        {
          title: "Professionell auftreten: Account, Ansprache, Dialog",
          text: "Unternehmen nutzen keine privaten Profile, sondern eigene Seiten (Fanpages) – vorher die Hausregeln der Plattform prüfen: Nutzungsbedingungen, Namensvorgaben, mögliche Kosten und die Impressumspflicht auch für die Social-Media-Präsenz. Social Media fordert Kommunikation mit Menschen: Ansprechpartnerinnen und Ansprechpartner zeigen sich mit Namen und Bild. Kritik wird gewissenhaft bearbeitet – Lösung anbieten, Beanstandungen an die Fachabteilung weiterleiten und die Kundschaft über Rückmeldungen informieren. Als Reaktionszeit gilt: höchstens ein Tag. Beiträge kurz halten und regelmäßig, aber nicht aufdringlich posten – und nie vergessen: Die Kommunikation ist primär öffentlich."
        },
        {
          title: "Rechtliche Spielregeln",
          text: "Fremde Bilder, Videos und Texte sind fast immer urheberrechtlich geschützt – vor der Verwendung die Einwilligung der Urheberin oder des Urhebers einholen; bei eigenen Fotos gilt zusätzlich das Recht am eigenen Bild der abgebildeten Personen. Zitate brauchen eine Quellenangabe. Vorsicht beim Verlinken und Teilen: Wer auf Seiten mit rechtswidrigen Inhalten verweist oder solche Beiträge mit „Gefällt mir“ kommentiert, kann sich strafbar machen – rechtswidrige Inhalte auf der eigenen Präsenz müssen zügig gelöscht werden. Außerdem gelten Wettbewerbsvorschriften (keine herabsetzenden Konkurrenzvergleiche), und Influencerinnen und Influencer müssen kommerzielle Produktvorstellungen als solche kennzeichnen. Beim Datenschutz gilt: sparsam sammeln und über Auskunft, Änderung und Löschung informieren."
        },
        {
          title: "Plattformtypen, Netiquette und Emojis",
          text: "Social Media hat fünf Grundtypen: soziale Netzwerke (z. B. Facebook, Instagram, LinkedIn), Blogs (längere Artikel, z. B. mit WordPress), Videoplattformen (z. B. YouTube, TikTok), Bewertungsplattformen (z. B. yelp oder Google-Rezensionen) und Messenger (z. B. WhatsApp – eher private One-to-One-Kommunikation). Die Bedeutung einzelner Plattformen wandelt sich ständig – die Auswahl richtet sich nach der Zielgruppe. Eine Netiquette legt Verhaltensregeln für den respektvollen Umgang im eigenen Kanal fest. Emojis lockern die Kommunikation auf und drücken Gefühle aus, werden aber nicht von allen gleich verstanden – geschäftlich deshalb sparsam und unmissverständlich einsetzen."
        }
      ],
      takeaways: [
        "Social Media ist Many-to-Many-Kommunikation in Echtzeit: enorme Reichweite, aber auch virale Risiken bis hin zu Fake News.",
        "Vertrauen entsteht durch Offenheit: Fehler eingestehen, persönlich ansprechbar sein, Kritik lösungsorientiert und binnen eines Tages beantworten.",
        "Rechtlich zählen Urheberrecht, Recht am eigenen Bild, Haftung für Links und Likes, Influencer-Kennzeichnung, Impressumspflicht und Datenschutz.",
        "Fünf Plattformtypen – Netzwerke, Blogs, Video-, Bewertungsplattformen und Messenger – werden nach Zielgruppe gewählt; Netiquette und sparsame Emojis halten den Ton professionell."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF6 Kommunikation über Social Media",
          description: "Plattform-Steckbrief, Rechts-Check, ein Shitstorm-Fall zum Üben und der Praxisauftrag „Eure Unternehmensseite“.",
          href: "assets/materials/lf6-social-media-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Wähle für dein Webshop-Projekt zwei passende Social-Media-Plattformen und begründe die Wahl über deine Zielgruppe.",
        "Plane den Auftritt: Seitenname nach den Plattformregeln, Impressum, feste Ansprechpartner mit Bild und eine Netiquette mit fünf Regeln.",
        "Erstelle einen Redaktionsplan mit kurzen Beiträgen für zwei Wochen – inklusive Reaktionszeit-Regel für Kommentare.",
        "Prüfe drei geplante Beiträge auf Rechtsrisiken: Urheberrecht der Bilder, abgebildete Personen, Kennzeichnung von Werbung.",
        "Simuliere einen kritischen Kommentar und formuliere die öffentliche Antwort plus die Weiterleitung an die Fachabteilung."
      ]
    },
    {
      id: "lf6-vertriebswege",
      field: "LF6",
      code: "6.15",
      mark: "VTW",
      title: "Kommunikation über weitere Vertriebswege",
      short: "Videokonferenz, Chat, Sprachsteuerung, Hotline und FAQ als moderne Servicewege professionell und sicher einsetzen.",
      color: "mint",
      image: "assets/module-icons/lf6-6-15-vertriebswege.png",
      mission: "Baue das Servicenetz deines Shops aus: Setze Videokonferenz, Chat, Sprachsteuerung, Hotline und FAQ so ein, dass Kundinnen und Kunden jederzeit schnell und passend zum Anliegen Hilfe bekommen.",
      lessons: [
        {
          title: "Videokonferenz: Beratung von Angesicht zu Angesicht",
          text: "Die Videokonferenz verbindet mehrere Personen an verschiedenen Standorten über Ton und Bild – zeitlich und räumlich flexibel, ohne Reisekosten und dank Apps auch mobil. Im Einzelhandel lassen sich Reklamationen und Fragen „Face to Face“ klären: Wer das Gegenüber und das Problem tatsächlich sieht, kann schnell Abhilfe schaffen. Manche Programme bieten sogar simultane Übersetzung für fremdsprachige Kundschaft oder das Einspielen von Erklärvideos. Wichtig ist die Sicherheit: Videosysteme sollten eine integrierte Verschlüsselung nach gängigen Standards haben – zusätzlich Providermaßnahmen prüfen, Standardeinstellungen anpassen, ein sicheres Netzwerk verwenden, Schulungen anbieten und gemeinsame Regeln festlegen."
        },
        {
          title: "Chat zur Kundenbetreuung: Nähe auf Knopfdruck",
          text: "Ein Chat-Button auf der Homepage startet einen virtuellen Dialog – Voraussetzung ist, dass immer fachkundige Personen antworten können. Die Stärken: kostenlos für die Kundschaft, auf allen Endgeräten nutzbar, der Verlauf ist dokumentiert und nachlesbar, „Emotionen kochen nicht so hoch“, Bilder und Dateien wie Montageanleitungen sind schnell versendet, und eine Person kann mehrere Chats fast gleichzeitig betreuen. Textbausteine sparen Zeit und vermeiden Tippfehler, dürfen aber nicht roboterartig klingen. Bei Abwesenheit hilft der Offline-Modus mit Kontaktformular. Die Kehrseite: Personal muss unter Umständen rund um die Uhr und mehrsprachig verfügbar sein, und manche Kundengruppen scheuen die Texteingabe. Protokolle eignen sich zur Auswertung und können ins CRM-System übernommen werden."
        },
        {
          title: "Sprachsteuerung und Hotlines",
          text: "Bei der Sprachsteuerung wird die Spracheingabe in eine Cloud übertragen, dort zerlegt, analysiert und in Text umgewandelt – so lassen sich Suchanfragen und zunehmend auch Bestellungen im Webshop per Stimme erledigen. Grenzen: Die Erkennung arbeitet nicht immer korrekt, und nicht alle Systeme sind miteinander kompatibel. Hotlines bleiben der Klassiker für schnelle Fragen: Ein Sprachcomputer nimmt das Anliegen vor und leitet in die passende Fachabteilung weiter (spart Zeit und Personalkosten), eine 24-Stunden-Hotline ist rund um die Uhr besetzt, und ein externes Callcenter übernimmt die Betreuung als Dienstleister. Nachteile wie Wartezeiten, Erkennungsfehler des Sprachcomputers und Telefonkosten müssen gegen die kompetente persönliche Beratung abgewogen werden."
        },
        {
          title: "FAQ: Der stille Servicekanal",
          text: "Eine FAQ-Liste („frequently asked questions“ – die Abkürzung ist schon Plural) beantwortet häufige Fragen, bevor der Support kontaktiert werden muss: Kundinnen und Kunden helfen sich selbst, sparen Wartezeit, und das Serviceteam wird entlastet. Beim Erstellen werden echte Kundenfragen gesammelt, mit klaren Antworten versehen und übersichtlich dargestellt – etwa als Tabelle mit Schlagwörtern für die Stichwortsuche und alphabetischer Ordnung. Entscheidend ist die Pflege: FAQ stetig evaluieren und aktualisieren, einfach formulieren und die Kundschaft über Feedbackbögen aktiv einbinden – das stärkt sogar die Kundenbindung. Zu spezifische Fragen deckt die Liste allerdings nie vollständig ab."
        }
      ],
      takeaways: [
        "Videokonferenzen sparen Wege und lösen Reklamationen „Face to Face“ – aber nur mit Verschlüsselung, sicherem Netzwerk und klaren Regeln.",
        "Der Chat schafft dokumentierte Kundennähe mit Bildern, Textbausteinen und Mehrfachbetreuung – braucht aber ständig verfügbares, geschultes Personal.",
        "Sprachsteuerung wandelt Sprache über die Cloud in Text um; Hotlines mit Sprachcomputer, 24-Stunden-Service oder Callcenter bleiben der direkte Draht.",
        "FAQ-Listen sind Selbstservice: aus echten Kundenfragen erstellen, mit Schlagwörtern durchsuchbar machen und ständig aktuell halten."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF6 Weitere Vertriebswege",
          description: "Kanal-Vergleich, Videokonferenz-Leitfaden, FAQ-Werkstatt und der Praxisauftrag „Das Servicenetz eures Shops“.",
          href: "assets/materials/lf6-vertriebswege-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Vergleiche für dein Webshop-Projekt Chat, Hotline und Videokonferenz: je zwei Vorteile, zwei Nachteile und ein typisches Einsatzszenario.",
        "Erstelle einen Verhaltens-Leitfaden für Videokonferenzen mit Kundschaft: Vorbereitung, Technik-Check, Gesprächsführung, Nachbereitung.",
        "Formuliere fünf Chat-Textbausteine für häufige Anliegen – und prüfe sie darauf, dass sie nicht roboterartig klingen.",
        "Baue eine FAQ-Liste mit acht Einträgen aus echten Fragen zu Sortiment, Versand und Retoure – inklusive Schlagwörtern für die Suche.",
        "Diskutiere, ob Sprachsteuerung für deinen Shop sinnvoll wäre: Zielgruppe, Nutzen, Risiken und Datenschutz."
      ]
    },
    {
      id: "targeting",
      code: "7.5",
      mark: "TG",
      title: "Targeting",
      short: "Zielgruppen mit den passenden Targeting-Arten eingrenzen, Streuverluste reduzieren und Datenschutz mitdenken.",
      color: "cyan",
      mission: "Entscheide wie ein Mediaplaner: Welche Targeting-Arten und Zielgruppensignale passen zu einem Kampagnenziel – und wo ziehen Datenschutz und gesunder Menschenverstand die Grenze?",
      lessons: [
        {
          title: "Vom Gesamtmarkt zur Zielgruppe",
          text: "Targeting (von englisch „target“ = Ziel) bedeutet, Onlinewerbung genau an die Nutzergruppen auszuliefern, für die sie relevant ist. Dazu werden Nutzungs- und Kundendaten zu Profilen verdichtet: First Party Data erhebt der Shop selbst (z. B. bei Registrierung und Login), Second Party Data stammen aus Marktforschung, Third Party Data werden von Dritten erhoben und gehandelt – oft über Tracking-Technologien und Third-Party-Cookies. Je genauer die Zielgruppe beschrieben ist, desto feiner kann die Werbung ausgerichtet werden."
        },
        {
          title: "Die wichtigsten Targeting-Arten",
          text: "Soziodemografisches Targeting nutzt Merkmale wie Alter, Geschlecht oder Beruf – kann aber täuschen: Zwei Personen mit gleichen Daten können völlig verschiedene Interessen haben. Psychografisches Targeting ergänzt deshalb Interessen und Persönlichkeit, oft verdichtet zu „Personas“, also anschaulich beschriebenen Modell-Kundinnen und -Kunden. Kontext-Targeting platziert Werbung in thematisch passenden Umfeldern, semantisches Targeting versteht ganze Sinnzusammenhänge statt einzelner mehrdeutiger Wörter, Keyword-Targeting richtet sich nach Suchbegriffen – alle drei funktionieren ohne Cookies. Technisches Targeting passt Werbung an Endgerät, Browser und Bandbreite an."
        },
        {
          title: "Vom Standort bis zum Verhalten",
          text: "Geo-Targeting nutzt die IP-Adresse für standortbezogene Werbung – ideal für regionale Angebote. Proximity Targeting funkt per Beacon (Reichweite rund 50 Meter) Push-Angebote in unmittelbarer Nähe, Zeit-Targeting spielt Werbung passend zu Tageszeit und Anlass aus. Behavioral Targeting wertet Surf- und Klickverhalten aus – auf der eigenen Website (On-Site), über Werbenetzwerke (Network) oder als Vorhersage über „statistische Zwillinge“ (Predictive, Lookalikes). Re-Targeting spricht Personen erneut an, die den Shop kürzlich besucht oder den Warenkorb verlassen haben. Und damit Werbung nicht nervt, begrenzt Frequency Capping die Zahl der Einblendungen pro Person – gegen den „Banner-Burn-out“."
        },
        {
          title: "Chancen, Grenzen und die Zukunft",
          text: "Präzises Targeting erhöht die Relevanz, senkt Streuverluste und steigert die Wahrscheinlichkeit von Conversions – in der Praxis werden dafür mehrere Techniken kombiniert (integriertes Targeting). Die Kehrseite: höherer Datenaufwand und geringere Reichweite. Vor allem aber setzt der Datenschutz Grenzen: Cookie-basiertes Targeting braucht eine nachweisbare Einwilligung, die über Consent-Management-Plattformen eingeholt und verwaltet wird. Weil Third-Party-Cookies auslaufen, gewinnen cookielose Verfahren an Bedeutung – Kontext-, semantisches und Keyword-Targeting, Geo- und Zeit-Targeting sowie neue Ansätze mit anonymisierten Kohorten. Ziel bleibt nutzerfreundliche, datenschutzkonforme Werbung mit echtem Mehrwert."
        }
      ],
      takeaways: [
        "Targeting heißt: Werbung genau dort ausliefern, wo sie relevant ist – auf Basis von First-, Second- und Third-Party-Daten.",
        "Die Targeting-Art muss zu Produkt, Ziel und verfügbarem Signal passen – oft wirkt erst die Kombination mehrerer Techniken (integriertes Targeting).",
        "Frequency Capping verhindert den Banner-Burn-out, Re-Targeting holt Interessenten zurück – darf aber kein „Banner-Stalking“ werden.",
        "Ohne Einwilligung kein Cookie-Targeting: Consent-Management und cookielose Verfahren wie Kontext- und Geo-Targeting gewinnen an Bedeutung."
      ],
      projectSteps: [
        "Beschreibe für dein Webshop-Projekt eine Persona: Name, Alter, Beruf, Interessen, typischer Tagesablauf und was sie an deinem Sortiment reizt.",
        "Wähle für zwei Produkte je zwei passende Targeting-Arten aus und begründe die Wahl über Zielgruppe und verfügbares Signal.",
        "Lege eine Frequency-Capping-Regel für deine Kampagne fest (z. B. maximale Einblendungen pro Person und Tag) und begründe sie.",
        "Skizziere ein Re-Targeting-Konzept für Warenkorbabbrecher – inklusive der Regel, wann die Anzeigen wieder abgeschaltet werden.",
        "Prüfe deine geplanten Maßnahmen auf Datenschutz: Was braucht eine Einwilligung, und welche cookielosen Alternativen gäbe es?"
      ]
    },
    {
      id: "search",
      code: "7.7",
      mark: "SU",
      title: "Suchmaschinen",
      short: "Verstehen, wie Suchmaschinen entstanden sind, wie Crawler, Index und Algorithmus arbeiten und was auf der SERP passiert.",
      color: "blue",
      mission: "Erkläre den Weg von einer Webseite bis zum sichtbaren Suchergebnis – und erkenne, welche Suchanfragen für einen Webshop bares Geld wert sind.",
      lessons: [
        {
          title: "Vom Webkatalog zu Google",
          text: "Die Vorgänger der Suchmaschinen waren Webkataloge: Jede Website wurde von Hand geprüft und einsortiert – bei täglich neuen Seiten war das bald nicht mehr zu schaffen. 1990 entstand mit „Archie“ die erste Suchmaschine, die allerdings nur Dateien in FTP-Verzeichnissen durchsuchte. Nach der Freigabe des World Wide Web 1993 kam mit Lycos die erste Suchmaschine im heutigen Sinn; sie untersuchte bereits Worthäufigkeiten und die Nähe von Suchbegriffen. 1998 startete Google – mit übersichtlichem Design, hoher Geschwindigkeit und einem Algorithmus, der relevante Ergebnisse lieferte. Trotz Zusammenschlüssen der Konkurrenz (Microsoft übernahm für Bing die Algorithmen von Yahoo) ist Google bis heute Marktführer."
        },
        {
          title: "Crawler, Index und Algorithmus",
          text: "Eine Suchmaschine funktioniert wie eine Bibliothek: Statt einer Bibliothekarin helfen Webcrawler (auch Bots oder Spider genannt) – Programme, die das World Wide Web ununterbrochen nach neuen und geänderten Inhalten durchsuchen und sie auf Servern in Datenbankzentren ablegen. Daraus entsteht der Index, eine Art Katalog – der wichtigste Teil der Suchmaschine. Bei einer Suchanfrage wird nie das ganze Internet durchsucht, sondern nur dieser Index; deshalb kommen die Ergebnisse in Sekundenbruchteilen. Der Algorithmus legt anschließend das Ranking fest, also die Reihenfolge der Ergebnisse – nach vielen, teils geheimen Kriterien. Die erste Position ist das relevanteste Ergebnis und darum für Unternehmen besonders wertvoll."
        },
        {
          title: "Die Suchergebnisseite: bezahlt, organisch, Extras",
          text: "Die SERP (Search Engine Results Page) hat bei Google drei große Teilbereiche: Bezahlte Suchergebnisse stehen meist über den übrigen Treffern – ihre Reihenfolge bestimmen unter anderem Klickrate, Klickkosten und Qualitätsfaktor (mehr dazu in 7.9). Darunter folgen die organischen Suchergebnisse, die der Algorithmus in ein relevantes Ranking bringt – sie nehmen den meisten Platz ein. Dazu kommen Zusatzelemente: Das Knowledge Panel zeigt bei allgemeinen Suchanfragen Fakten zum Suchbegriff, das Google-Unternehmensprofil erscheint bei regionalen Suchen als Online-Branchenbuch mit Öffnungszeiten, Adresse und Telefonnummer – gerade für lokale Geschäfte enorm wichtig."
        },
        {
          title: "Suchmaschinen-Arten und Suchverhalten",
          text: "Neben den indexbasierten Klassikern (Google, Bing) gibt es Metasuchmaschinen (fragen mehrere Suchmaschinen ab und sortieren nach Mehrheitsfindung – langsamer), katalogbasierte Suchmaschinen, Spezialsuchmaschinen für ein Themenfeld (Produktsuche wie Google Shopping oder Amazon, Preissuchmaschinen, Videosuche) und Hybridformen mit eigenem kleinerem Index. Genauso wichtig ist das Suchverhalten der Nutzerinnen und Nutzer: Navigationsorientierte Anfragen suchen eine bekannte Seite, informationsorientierte wollen Wissen und Antworten, transaktionsorientierte enthalten eine Kauf- oder Handlungsabsicht – von ihnen profitieren Onlineshops am meisten. Herausforderungen bleiben: aktueller Index, Datenschutz, Mehrdeutigkeiten und Tippfehler sowie riesige Datenmengen bei kürzesten Antwortzeiten."
        }
      ],
      takeaways: [
        "Crawler entdecken, der Index speichert, der Algorithmus sortiert – durchsucht wird nie das Internet, sondern immer nur der Index.",
        "Die SERP hat drei Bereiche: bezahlte Treffer, organische Treffer und Extras wie Knowledge Panel oder Google-Unternehmensprofil.",
        "Suchmaschinen-Arten: indexbasiert, Meta-, katalogbasiert, Spezial- und Hybridformen – für Shops zählen besonders Produkt- und Preissuchmaschinen.",
        "Suchanfragen sind navigations-, informations- oder transaktionsorientiert – die Kaufabsicht steckt in den transaktionsorientierten."
      ],
      projectSteps: [
        "Sammle fünf Suchanfragen, über die Kundinnen und Kunden deinen Webshop finden sollen, und ordne jede dem passenden Suchverhalten zu.",
        "Analysiere die SERP zu einer Suchanfrage aus deinem Sortiment: Welche Elemente erscheinen (Anzeigen, organische Treffer, Shopping, Karten) – und in welcher Reihenfolge?",
        "Prüfe, welche Spezialsuchmaschinen für dein Sortiment relevant sind: Preisvergleich, Produktsuche, Videosuche.",
        "Entwirf ein Google-Unternehmensprofil für deinen (fiktiven) Shop: Name, Leistungen, Öffnungszeiten, Adresse und drei Foto-Ideen.",
        "Erkläre mit der Bibliotheks-Metapher in drei Sätzen, wie eine Suchmaschine von der Anfrage zum Ergebnis kommt."
      ]
    },
    {
      id: "seo",
      code: "7.8",
      mark: "SEO",
      title: "Suchmaschinenoptimierung",
      short: "Rankingfaktoren verstehen, OnPage und OffPage optimieren – und wissen, warum SEO Geduld, Content und gute Backlinks braucht.",
      color: "mint",
      mission: "Entwickle wie eine SEO-Beraterin einen Optimierungsplan für einen Webshop: von der Keywordstrategie über Content und Technik bis zu hochwertigen Backlinks.",
      lessons: [
        {
          title: "Kampf um die Rankingplätze",
          text: "Suchmaschinenoptimierung (Search Engine Optimization, SEO) ist eine Onlinemarketing-Maßnahme mit dem Ziel, die organischen Suchergebnisse zu festgelegten Suchbegriffen besser zu platzieren. Früher genügte ein Eintrag im Index, heute sind die obersten Positionen hart umkämpft. Ein wichtiger Grundsatz: Suchmaschinenbetreiber verraten ihren Suchalgorithmus nie vollständig – als Anfang 2023 durch ein Datenleck bei der Suchmaschine Yandex mehr als 18.000 Rankingfaktoren öffentlich wurden, blieb deren Gewichtung trotzdem geheim. SEO lebt deshalb von Experimenten, Beobachtungen und strategischem Denken. Offizielle Hilfe geben die Leitfäden der Suchmaschinen (etwa Google Search Central): technische Anforderungen, Spamrichtlinien und Best Practices. Wer dagegen verstößt, riskiert Abwertung bis zum Ausschluss aus dem Index – nachhaltige SEO braucht Geduld statt Abkürzungen."
        },
        {
          title: "Konkurrenz und Google-Updates",
          text: "Der SEO-Erfolg hängt nicht nur von den eigenen Bemühungen ab: Zu jedem Keyword gibt es nur einen Platz eins, die Konkurrenz optimiert mit. Außerdem entwickeln sich Suchmaschinen ständig weiter – vor allem über große Updates. Das Panda-Update (2011) belohnt Seiten mit relevantem, einzigartigem Content und straft dünne oder kopierte Inhalte (Duplicate Content) ab. Das Penguin-Update (2012) erfasst Spam und gekaufte Backlinks; seit Version 4.0 ist dieser Filter fest im Algorithmus verankert. Das Hummingbird-Update verbesserte die semantische Suche: Google versteht seither Beziehungen zwischen Wörtern und die Absicht hinter der Anfrage, statt nur einzelne Begriffe zu vergleichen. Und seit dem Mobile-First-Indexing (Roll-out ab 2018) nutzt der Googlebot die mobile Version einer Website für Indexierung und Ranking – ohne Responsive Design geht es nicht mehr."
        },
        {
          title: "OnPage: Keywords, Technik und Content",
          text: "Die OnPage-Optimierung umfasst alle Maßnahmen auf der eigenen Website, die von Dritten nicht beeinflussbar sind. Am Anfang steht die Keywordstrategie: Shorthead Keywords („Kommode“) haben hohes Suchvolumen, aber harten Wettbewerb; Longtail Keywords („Kommode weiß günstig“) sind spezifischer, haben weniger Konkurrenz und oft eine höhere Kaufwahrscheinlichkeit – eine gute Mischung macht es. Singular oder Plural und Groß- oder Kleinschreibung spielen kaum eine Rolle, saisonale und regionale Schwankungen lassen sich mit Google Trends prüfen. Die technische OnPage-Optimierung kümmert sich um Meta-Daten, Title-Elemente, Alt-Attribute von Bildern, interne Links und die Seitenstruktur. Dazu kommt Content Marketing: einzigartige Inhalte mit echtem Mehrwert statt Keyword-Stopferei – die alte Keyworddichte wurde dafür zu Formeln wie WDF*IDF weiterentwickelt, die Wörter im Themenzusammenhang gewichten."
        },
        {
          title: "OffPage: Backlinks und Erfolgsmessung",
          text: "Die OffPage-Optimierung arbeitet außerhalb der eigenen Website – vor allem am Aufbau von Backlinks, also Links fremder Seiten auf die eigene. Die Suchmaschine wertet sie als Empfehlung; dabei zählt Qualität und Themenrelevanz mehr als Menge. Vom Linkkauf ist dringend abzuraten: Suchmaschinen erkennen gekaufte oder zu schnell aufgebaute Links und strafen sie ab, im schlimmsten Fall als Spam. Gute Backlinks entstehen etwa über geteilte Infografiken, Gastbeiträge, Engagement in Communitys oder How-to-Videos. Ob die Arbeit wirkt, zeigen KPI wie Sichtbarkeit, Rankingposition, Seiten-Performance, Click-Through-Rate, Absprungrate und Verweildauer sowie die organischen Suchzugriffe im Zeitvergleich. Bleibt die Organisationsfrage: Inhouse-SEO bietet kurze Wege und Produktkenntnis, eine Agentur vielfältiges Expertenwissen – oft ist die Mischform der beste Weg."
        }
      ],
      takeaways: [
        "SEO zielt auf bessere organische Rankings zu festgelegten Keywords – der Algorithmus bleibt geheim (der Yandex-Leak 2023 zeigte über 18.000 Faktoren, aber nicht ihre Gewichtung).",
        "Google-Updates setzen die Regeln: Panda belohnt einzigartigen Content, Penguin bestraft gekaufte Links, Hummingbird versteht Bedeutungen, Mobile-First macht die mobile Version zur Hauptversion.",
        "OnPage heißt: Keywordstrategie aus Shorthead- und Longtail-Keywords, saubere Technik (Meta-Daten, Alt-Attribute, interne Links) und Content mit Mehrwert.",
        "OffPage heißt vor allem hochwertige, themenrelevante Backlinks – Linkkauf riskiert Abstrafung; den Erfolg zeigen KPI wie Sichtbarkeit und organische Zugriffe."
      ],
      projectSteps: [
        "Definiere eine Keywordstrategie für deinen Webshop: je fünf Shorthead- und Longtail-Keywords zu einer Produktgruppe – und begründe die Mischung.",
        "Prüfe zwei deiner Keywords mit Google Trends auf saisonale und regionale Schwankungen und leite ab, wann deine Optimierung starten muss.",
        "Auditiere eine Produktseite OnPage: Title, Meta-Beschreibung, Überschriften, Alt-Attribute und interne Links – notiere drei konkrete Verbesserungen.",
        "Plane drei realistische Backlink-Quellen (z. B. Gastbeitrag, Infografik, Community-Engagement) und begründe jeweils die Themenrelevanz – Linkkauf ist tabu.",
        "Entscheide für dein Projekt: Inhouse-SEO oder Agentur? Stelle je zwei Vor- und Nachteile gegenüber und triff eine begründete Wahl."
      ],
      resources: [
        {
          title: "Transferfall: SEO/SEA-Kampagne",
          description: "Suchintentionen sortieren, SEO-Landingpage briefen, SEA-Anzeige planen und Kampagnenkennzahlen vergleichen.",
          href: "assets/materials/lf7-seo-sea-transferfall.pdf",
          type: "PDF"
        }
      ]
    },
    {
      id: "sea",
      code: "7.9",
      mark: "SEA",
      title: "Suchmaschinenwerbung",
      short: "Anzeigenauktion und Qualitätsfaktor verstehen, Kampagnen per CPC und Budget steuern und die Synergie mit SEO nutzen.",
      color: "orange",
      mission: "Plane wie ein Kampagnenmanager eine Suchanzeige: vom Keyword über Gebot, Qualitätsfaktor und Anzeigentext bis zum Conversion-Tracking.",
      lessons: [
        {
          title: "Bezahlte Plätze auf der Suchergebnisseite",
          text: "Suchmaschinenwerbung (Search Engine Advertising, SEA) umfasst das Schalten bezahlter Suchanzeigen, die in der Regel über, neben oder unter den organischen Suchergebnissen stehen. Die bekanntesten Anbieter im deutschsprachigen Raum sind Google, Bing und Yahoo – Google ist mit großem Abstand Marktführer. Die wichtigste SEA-Plattform ist Google Ads: im Jahr 2000 gestartet (Google gab dafür das Versprechen einer werbefreien Plattform auf), über die Jahre um weitere Endgeräte und 2012 um YouTube im Google-Werbenetzwerk erweitert, seit 2018 mit neuer Oberfläche und neuem Namen – aus Google AdWords wurde Google Ads. Bei Produktsuchen erscheinen zusätzlich Shopping-Ergebnisse mit Produktbildern; seit 2017 können in der EU auch CSS-Partner solche Shopping-Anzeigen schalten."
        },
        {
          title: "Auktion und Qualitätsfaktor",
          text: "Im Hintergrund findet zu jedem Suchbegriff eine Art Auktion statt: Unternehmen wählen bei der Kampagnenerstellung Keywords passend zu ihrer Zielseite und geben dafür ein Gebot ab – in hart umkämpften Branchen liegen die Gebote deutlich höher. Doch das höchste Gebot steht nicht automatisch an erster Stelle: Google bezieht den Qualitätsfaktor ein, einen Schätzwert über die Leistung der Keywords in den bisherigen Kampagnen (Skala 1 bis 10). Er setzt sich unter anderem aus der Relevanz der Keywords, den bisherigen Klickraten, der Leistung des Ads-Kontos, der Qualität der Zielseite und der Verwendung von Anzeigenerweiterungen zusammen. Das Ziel: eine ideale Verknüpfung von Suchanfrage, Anzeigentext und Zielseite – das senkt die Absprungrate, und ein guter Qualitätsfaktor bedeutet geringere Klickkosten. Nicht alle Faktoren sind öffentlich."
        },
        {
          title: "Performance Marketing: CPC, Budget und Kennzahlen",
          text: "SEA ist stark performanceorientiert und wird deshalb auch Performance Marketing genannt: Abgerechnet wird im Cost-per-Click-Verfahren (CPC) – bezahlt wird nur, wenn tatsächlich jemand auf die Anzeige klickt. Wird die Anzeige nur gesehen, entsteht ein kostenloser Branding-Effekt, erkennbar an den Impressionen. Werbetreibende behalten volle Kostenkontrolle: Gebote sind frei wählbar, Budgets lassen sich pro Tag, Monat oder Kampagne festlegen; ausschließende Keywords verhindern unpassende Ausspielungen und sparen Klickkosten. Zum Basiswissen gehören die KPI Impressionen, Klicks, Klickrate, Cost-per-Click, Conversion, Conversionrate und Cost-per-Conversion. Das eigentliche Ziel ist aber nicht der Klick, sondern der Umsatz: Conversion-Tracking verfolgt nach, welche Kampagne und welches Keyword zu welcher Conversion geführt hat – während bei klassischer Bannerwerbung Klickraten von 0,1 bis 0,3 Prozent üblich sind, gilt bei Suchanzeigen erst eine Klickrate ab etwa 3 Prozent als Erfolg."
        },
        {
          title: "Anzeigen gestalten – und die Synergie mit SEO",
          text: "Für die Kampagnenplanung liefert der Keyword-Planer von Google Ads Suchvolumen, Prognosen und neue Keyword-Ideen. Bei der Gestaltung gilt: Keywords gehören in den Anzeigentext, ein Call-to-Action („Jetzt kaufen“, „Hier bestellen“) fordert zur gewünschten Handlung auf, und Anzeigenerweiterungen ergänzen Standorte, Preise, Versandinfos oder Telefonnummern – die Anzeige wird größer und präsenter auf der Suchergebnisseite. Display-Anzeigen im Werbenetzwerk lassen sich über Keywords, Themen, Placements, Interessen/Remarketing und demografische Merkmale steuern – alles kombinierbar. SEO und SEA zusammen heißen Search Engine Marketing (SEM), und die Synergie zahlt sich aus: Die Keyword-Recherche der SEA zeigt, welche Begriffe performen und sich für langfristige SEO lohnen. SEA wirkt schnell und flexibel, SEO mittel- bis langfristig und nachhaltig – am stärksten ist das Zusammenspiel."
        }
      ],
      takeaways: [
        "SEA heißt: bezahlte Suchanzeigen über, neben oder unter den organischen Treffern – bei Google über die Plattform Google Ads (bis 2018 AdWords).",
        "Im Hintergrund läuft eine Keyword-Auktion, aber das höchste Gebot gewinnt nicht automatisch: Der Qualitätsfaktor (Skala 1 bis 10) belohnt relevante Anzeigen und gute Zielseiten mit besseren Plätzen und geringeren Klickkosten.",
        "SEA ist Performance Marketing: bezahlt wird pro Klick (CPC) bei voller Budgetkontrolle – und Conversion-Tracking zeigt, welche Keywords Umsatz bringen statt nur Klicks.",
        "SEO und SEA zusammen sind SEM: SEA wirkt schnell und liefert Keyword-Daten, SEO wirkt nachhaltig – am stärksten sind beide im Zusammenspiel."
      ],
      projectSteps: [
        "Wähle für deinen Webshop ein Kampagnenziel und fünf Keywords passend zur Zielseite – prüfe Suchvolumen und Alternativen mit einem Keyword-Planer.",
        "Texte eine Suchanzeige mit Keyword im Titel und klarem Call-to-Action – plus eine zweite Variante, um die bessere Version zu ermitteln.",
        "Plane zwei Anzeigenerweiterungen (z. B. Standort, Preise, Telefonnummer) und begründe, welchen Mehrwert sie den Suchenden bieten.",
        "Lege ein Tagesbudget und ein maximales CPC-Gebot fest und rechne durch, wie viele Klicks dein Budget höchstens erlaubt.",
        "Definiere die Conversion deiner Kampagne und skizziere, wie du per Conversion-Tracking erkennst, welche Keywords Umsatz bringen."
      ],
      resources: [
        {
          title: "Transferfall: SEO/SEA-Kampagne",
          description: "Suchintentionen sortieren, SEO-Landingpage briefen, SEA-Anzeige planen und Kampagnenkennzahlen vergleichen.",
          href: "assets/materials/lf7-seo-sea-transferfall.pdf",
          type: "PDF"
        }
      ]
    },
    {
      id: "analytics",
      code: "7.19",
      mark: "KPI",
      title: "Marketing-Maßnahmen auswerten",
      short: "Werbeerfolgskontrolle in vier Schritten, Web-Analytics-Tools kennen und Kennzahlen korrekt berechnen und einordnen.",
      color: "violet",
      mission: "Werte eine Onlinemarketing-Kampagne wie im Betrieb aus: Ziel und KPI festlegen, Daten mit dem Analyse-Tool prüfen und eine begründete Handlungsempfehlung schreiben.",
      lessons: [
        {
          title: "Werbeerfolgskontrolle: messen statt raten",
          text: "Werbeerfolgskontrolle ist die nachhaltige Kontrolle und Optimierung einer Werbekampagne und ihres Erfolgs. Im klassischen Marketing ist das schwierig – das Internet dagegen macht fast alle Onlinemarketing-Maßnahmen direkt messbar: Tools wie Google Ads werten Kampagnen eigenständig aus, Berichte und Kennzahlen sind teils in Echtzeit einsehbar, sodass Unternehmen schnell auf Veränderungen reagieren können. Mit Web Analytics werden zusätzlich die Bewegungen der Besucherinnen und Besucher auf der eigenen Website gemessen – bekannte Programme sind Google Analytics, etracker und Matomo. Marktführer ist Google Analytics 4: kostenlos, eventbasiert (erfasst einzelne Interaktionen wie Seitenaufrufe oder Button-Klicks statt nur Sitzungen), mit maschinellem Lernen, Cross-Plattform-Tracking und sieben Berichtsbereichen von Echtzeit über Akquisition, Engagement und Monetarisierung bis Bindung, Nutzerattribute und Technologie."
        },
        {
          title: "In vier Schritten von Daten zu Erkenntnissen",
          text: "Eine ganzheitliche Auswertung folgt vier Schritten. Schritt 1: Ziel analysieren und KPIs bestimmen – die Kennzahl muss zum Ziel passen: Wer den Umsatz steigern will, misst Bestellungen; wer Bekanntheit aufbauen will, misst die Sichtbarkeit – Impressionen allein sagen über den Umsatz wenig. Schritt 2: quantitative Analyse mit den Tools – wie viele Besucher kamen, wie lange blieben sie, wie viele Conversions gab es, woher kamen die Nutzerinnen und Nutzer? Schritt 3: qualitative Analyse – Zahlen zeigen nur das Was, nicht das Warum; Nutzerbefragungen, Umfragen und Heatmaps ergründen Verhalten und Motivation. Schritt 4: Analyse der Konkurrenz – mit speziellen SEO-Tools und den Konkurrenzdaten aus Google Ads. So entsteht ein tiefes Verständnis für die eigenen Besucher und den Markt."
        },
        {
          title: "Die Basis-Kennzahlen: CTR, CPC und Conversion Rate",
          text: "Die Click-Through-Rate (CTR) misst Klicks im Verhältnis zu Impressionen: Klicks ÷ Impressionen × 100. Der Cost-per-Click (CPC) verteilt die Werbekosten auf die erzielten Klicks: Kosten ÷ Klicks. Die Conversion Rate setzt gewünschte Handlungen ins Verhältnis zu den Klicks oder Besuchen: Conversions ÷ Klicks × 100. Zusammen beschreiben sie den Weg vom Sehen über das Klicken bis zum Handeln – und zeigen, an welcher Stelle des Trichters eine Kampagne Besucher verliert."
        },
        {
          title: "CPO, ROAS und die richtige Interpretation",
          text: "Der Cost-per-Order (CPO) zeigt die Werbekosten je Bestellung: Kosten ÷ Bestellungen. Der Return on Advertising Spend (ROAS) setzt den zugeordneten Umsatz ins Verhältnis zu den Werbekosten: Umsatz ÷ Kosten. Doch keine Kennzahl spricht für sich allein: Eine Bewertung braucht zusätzlich Marge, Zeitraum, Datenqualität und Vergleichswerte – eine Kampagne mit hohem ROAS, aber kleinem Umsatz kann schlechter zum Ziel passen als eine mit solidem ROAS und großem Volumen. Und weil quantitative Zahlen nicht alles erklären, gehören qualitative Erkenntnisse und der Konkurrenzvergleich immer dazu."
        }
      ],
      takeaways: [
        "Werbeerfolgskontrolle heißt: Kampagnen nachhaltig kontrollieren und optimieren – online ist fast alles direkt messbar, Web-Analytics-Tools wie Google Analytics 4 oder etracker protokollieren die Besucherströme.",
        "Der Weg von Daten zu Erkenntnissen hat vier Schritte: Ziel und KPIs bestimmen, quantitative Analyse, qualitative Analyse (Befragungen, Heatmaps), Konkurrenzanalyse.",
        "Die KPI muss zum Ziel passen: Für ein Umsatzziel zählen Bestellungen mehr als Impressionen, für Bekanntheit zählt die Sichtbarkeit.",
        "Formeln: CTR = Klicks ÷ Impressionen × 100; CPC = Kosten ÷ Klicks; Conversion Rate = Conversions ÷ Klicks × 100; CPO = Kosten ÷ Bestellungen; ROAS = Umsatz ÷ Kosten."
      ],
      projectSteps: [
        "Lege für eine Kampagne deines Webshop-Projekts ein Ziel fest und bestimme die passende KPI – begründe, warum z. B. Bestellungen aussagekräftiger sind als Impressionen.",
        "Formuliere fünf quantitative Fragen, die dein Web-Analytics-Tool beantworten soll (Besucher, Verweildauer, Conversions, Herkunft).",
        "Plane eine qualitative Ergänzung: Entwirf drei Fragen für eine Nutzerbefragung oder beschreibe, was eine Heatmap deiner Startseite zeigen soll.",
        "Skizziere eine Konkurrenzanalyse: Wähle zwei Wettbewerber und lege fest, welche Sichtbarkeits- und Angebotsmerkmale du vergleichst.",
        "Rechne im Kennzahlen-Labor ein Kampagnenszenario durch und schreibe eine Handlungsempfehlung in drei Sätzen."
      ]
    },
    {
      id: "webanalyse",
      code: "7.19+",
      mark: "ANA",
      title: "Webanalyse: Messen, Testen, Datenschutz",
      short: "Besucherströme verstehen, A/B-Tests sauber durchführen und Tracking datenschutzkonform einsetzen – die Vertiefung zur Kampagnenauswertung.",
      color: "mint",
      mission: "Werde zur Datendetektivin oder zum Datendetektiv: Finde heraus, was Besucher auf deiner Seite wirklich tun, teste Verbesserungen fair – und respektiere dabei die Privatsphäre deiner Nutzer.",
      lessons: [
        {
          title: "Was Webanalyse beantwortet",
          text: "Webanalyse-Tools wie Google Analytics oder das selbst gehostete Matomo beantworten drei Grundfragen: Woher kommen die Besucher (Suchmaschine, Anzeige, Social Media, direkt)? Was tun sie auf der Seite (welche Seiten, wie lange, wo steigen sie aus)? Und führen sie die gewünschten Handlungen aus (Kauf, Anmeldung, Kontakt)? Ohne diese Antworten bleibt jede Optimierung ein Ratespiel."
        },
        {
          title: "Vom Ziel zum Messkonzept",
          text: "Gute Webanalyse beginnt nicht beim Tool, sondern beim Ziel: Erst festlegen, was Erfolg bedeutet, dann die passende Kennzahl wählen, dann messen. Wichtige Größen sind Sitzungen (Besuche), Nutzer, Seitenaufrufe, die Absprungrate (Besuche ohne weitere Interaktion) und Conversions. Kampagnenlinks werden mit UTM-Parametern markiert, damit erkennbar ist, welcher Kanal welche Besucher bringt."
        },
        {
          title: "A/B-Tests: Entscheiden mit Daten statt Bauchgefühl",
          text: "Beim A/B-Test sehen zufällig aufgeteilte Besuchergruppen zwei Varianten einer Seite – zum Beispiel unterschiedliche Buttontexte. Damit das Ergebnis aussagekräftig ist, gelten drei Regeln: nur ein Element pro Test ändern, die Besucher zufällig aufteilen und den Test lange genug laufen lassen. Wer nach zwanzig Besuchern abbricht oder Sieger kürt, misst Zufall statt Wirkung."
        },
        {
          title: "Datenschutz und Grenzen der Zahlen",
          text: "Tracking-Cookies und vergleichbare Techniken dürfen erst nach informierter Einwilligung gesetzt werden (§ 25 TDDDG, früher TTDSG, zusammen mit der DSGVO) – dafür gibt es Consent-Banner; unbedingt erforderliche Cookies wie der Warenkorb sind ausgenommen. Datensparsame Einstellungen wie IP-Kürzung und Pseudonymisierung gehören dazu. Und: Zahlen zeigen, was passiert, aber nicht warum – wer ablehnt, fehlt in den Daten, und Bot-Besuche können Statistiken verzerren."
        }
      ],
      takeaways: [
        "Webanalyse beantwortet: Woher kommen Besucher, was tun sie, und erreichen sie das Ziel?",
        "Erst Ziel und Kennzahl festlegen, dann messen – Sitzungen, Absprungrate und Conversions sind die Basisgrößen, UTM-Parameter machen Kanäle unterscheidbar.",
        "A/B-Tests brauchen Zufallsaufteilung, nur eine Änderung pro Test und ausreichend Daten – sonst gewinnt der Zufall.",
        "Tracking nur mit Einwilligung (§ 25 TDDDG + DSGVO), datensparsam konfigurieren – und Zahlen immer als Hinweis, nicht als ganze Wahrheit lesen."
      ],
      resources: [
        {
          title: "Arbeitsblatt: LF7 Webanalyse",
          description: "Kennzahlen-Rechenwerkstatt, A/B-Test-Planungsgerüst, Consent-Checkliste und Analyse-Auftrag für das eigene Webshop-Projekt.",
          href: "assets/materials/lf7-webanalyse-arbeitsblatt.pdf",
          type: "PDF"
        }
      ],
      projectSteps: [
        "Definiere für dein Webshop-Projekt drei Messziele und wähle zu jedem die passende Kennzahl (z. B. Anteil der Besucher, die die Produktseite erreichen).",
        "Plane einen A/B-Test für ein Element deiner Seite: Variante A und B, erwartete Wirkung, Messgröße und Mindestlaufzeit notieren.",
        "Skizziere ein Consent-Banner für deinen Shop: Welche Cookies sind unbedingt erforderlich, welche brauchen eine Einwilligung?",
        "Untersuche mit den Entwicklertools (F12, Reiter „Anwendung“/„Application“) eines echten Shops, welche Cookies vor und nach der Einwilligung gesetzt werden.",
        "Formuliere zwei Fragen, die deine Webanalyse-Zahlen nicht beantworten können – und wie du sie stattdessen klären würdest (z. B. Kundenbefragung)."
      ]
    },
    {
      id: "ai",
      code: "7.20",
      mark: "KI",
      title: "KI: Entstehung und Anwendung",
      short: "Von den 1950ern bis zu Sprachmodellen: verstehen, wie KI lernt – und sie im Marketing verantwortungsvoll einsetzen.",
      color: "pink",
      mission: "Beurteile wie eine Abteilungsleiterin: Wo kann KI die Onlinemarketing-Prozesse deines Betriebs verbessern – und wo bleiben menschliche Kontrolle und Verantwortung unverzichtbar?",
      lessons: [
        {
          title: "Von den 1950ern zum Deep-Learning-Boom",
          text: "Die Geschichte der Künstlichen Intelligenz (englisch Artificial Intelligence, AI) beginnt in den 1950er-Jahren mit der Idee, menschenähnliche Intelligenz nachzubilden. Frühe Systeme waren regelbasiert: Sie führten Aufgaben nach fest vom Menschen vorgegebenen Regeln aus. Später kamen Statistik und Wahrscheinlichkeitstheorie dazu – das maschinelle Lernen entstand: Computer lernen aus Daten, ohne explizit programmiert zu werden. In den 1990er-Jahren wurden Verfahren wie Entscheidungsbäume, Support Vector Machines und neuronale Netzwerke entwickelt. Den Durchbruch brachten die 2010er-Jahre: Große Datenmengen und leistungsfähige Computer lösten den Boom des Deep Learning aus – mit Fortschritten von der Sprach- und Bilderkennung bis zu den Sprachmodellen hinter heutigen Chat-Assistenten."
        },
        {
          title: "Schwache und starke KI, drei Arten des Lernens",
          text: "Es gibt zwei grundlegende Arten von KI: Schwache KI ist auf eine spezifische Aufgabe beschränkt und hat kein Bewusstsein – praktisch alle heutigen Systeme, von Chatbots bis Sprachassistenten, gehören dazu. Starke KI, die jede intellektuelle Aufgabe eines Menschen selbstständig erfüllen könnte, ist eine Hypothese und bis heute nicht realisiert. Beim maschinellen Lernen unterscheidet man drei Grundarten: Überwachtes Lernen trainiert mit Eingabedaten und bekannten Ergebnissen (Labels) – etwa die Vorhersage eines Hauspreises aus Größe und Lage. Unüberwachtes Lernen sucht ohne Labels nach Mustern, zum Beispiel beim Clustering ähnlicher Kundengruppen. Bestärkendes Lernen lernt über Belohnung und Strafe durch Interaktion – wie ein Programm, das ein Spiel spielt und seinen Punktestand maximiert."
        },
        {
          title: "Neuronale Netze, Deep Learning und Sprachmodelle",
          text: "Ein neuronales Netzwerk ist lose an das menschliche Gehirn angelehnt: Viele verbundene „Neuronen“ sind in Schichten organisiert – Eingabeschicht, versteckte Schichten, Ausgabeschicht. Deep Learning nutzt besonders tiefe Netze mit vielen Schichten und ist stark bei unstrukturierten Daten wie Bildern und Sprache; beim Training werden die Gewichtungen zwischen den Neuronen so angepasst, dass die Vorhersagen immer besser werden. Sprachmodelle wie ChatGPT (GPT = Generative Pretraining Transformer) basieren auf der Transformer-Architektur mit Aufmerksamkeits-Mechanismus und werden zweistufig trainiert: erst Vortraining auf riesigen Textmengen, dann Feinabstimmung mit menschlichem Feedback. Bei der Generierung sagt das Modell ab dem Prompt Wort für Wort das wahrscheinlichste nächste voraus – mit etwas Zufall. Es klingt überzeugend, hat aber kein Bewusstsein und kein echtes Verständnis."
        },
        {
          title: "KI im Online-Marketing: Chancen, Grenzen, Verantwortung",
          text: "Im Onlinemarketing unterstützt KI an vielen Stellen: Chatbots beantworten Kundenanfragen rund um die Uhr, E-Commerce-Assistenten helfen bei Produktberatung und Empfehlungen, personalisierte Marketingkommunikation passt Angebote an Kundendaten an, KI analysiert Kundenfeedback und Kampagnendaten und bereitet Texte, Bilder und Newsletter vor – neben ChatGPT gibt es dafür viele weitere Tools. Die Grenzen: KI kann Kontext missverstehen, Fehlinformationen und Verzerrungen aus den Trainingsdaten übernehmen, und ihr Wissensstand endet am Trainingszeitpunkt. Dazu kommen ethische Fragen: Datenschutz bei Kundendaten, Manipulationsgefahr durch immer gezieltere Ansprache und der Wandel von Arbeitsplätzen, wenn Routineaufgaben automatisiert werden. Die Verantwortung bleibt beim Menschen: Ausgaben kritisch prüfen, transparent einsetzen und erst nach Freigabe veröffentlichen."
        }
      ],
      takeaways: [
        "KI reicht von regelbasierten Systemen über maschinelles Lernen bis Deep Learning – heutige Systeme sind schwache KI, starke KI bleibt eine Hypothese.",
        "Drei Lernarten: überwacht (mit bekannten Ergebnissen), unüberwacht (Muster finden) und bestärkend (Belohnung) – Deep Learning nutzt tiefe neuronale Netze für Bild und Sprache.",
        "Sprachmodelle sagen ab dem Prompt Wort für Wort das wahrscheinlichste nächste voraus – gute Prompts nennen Ziel, Kontext, Format und Qualitätskriterien.",
        "Im Marketing hilft KI bei Personalisierung, Chatbots, Analyse und Content – Datenschutz, Manipulationsgefahr und Arbeitsplatzwandel verlangen menschliche Kontrolle und Freigabe."
      ],
      projectSteps: [
        "Beziehe Position: „KI wird den Marketingbereich grundlegend verändern“ – schreibe eine Stellungnahme (150 bis 200 Wörter) mit Einleitung, Chancen, Risiken und Fazit.",
        "Erstelle eine Pro-/Contra-Tafel zur Frage „Sollten Unternehmen im Online-Marketing vermehrt auf KI setzen?“ – mit je vier Argumenten.",
        "KI & Ich: Finde drei konkrete Einsatzfelder für KI in deinem (Ausbildungs-)Betrieb – von Kundenkommunikation über Produktbeschreibungen bis Datenanalyse – und nenne je einen Vorteil.",
        "Analysiere deine eigenen Aufgaben: Welche könnte KI übernehmen oder verändern – und was bedeutet das für deinen Arbeitsplatz (mehr Verantwortung, weniger Routine, neues Lernen)?",
        "Praxistest: Lass ein KI-Tool eine Produktbeschreibung für dein Webshop-Projekt entwerfen und prüfe sie kritisch auf Fakten, Tonalität und rechtliche Grenzen – notiere, was du ändern musstest."
      ],
      resources: [
        {
          title: "Video: KI & Ich – Auswirkungen auf den Arbeitsplatz",
          description: "Einführungsvideo zur Frage, wie KI Arbeitsplätze und Marketingaufgaben verändert – Grundlage für die Reflexionsaufgaben im Projektauftrag.",
          href: "https://www.youtube.com/watch?v=Cs32Q0ayM4M&t=4s",
          type: "Video"
        }
      ]
    }
  ],
  questions: [
    {
      id: "tar-01",
      module: "targeting",
      type: "choice",
      prompt: "Ein regionaler Lieferdienst wirbt nur in einem Radius von 20 km. Welche Targeting-Art steht im Vordergrund?",
      options: ["Geografisches Targeting", "Behavioral Targeting", "Retargeting", "Contextual Targeting"],
      answer: 0,
      explanation: "Der Aufenthaltsort beziehungsweise die Region begrenzt die Zielgruppe."
    },
    {
      id: "tar-02",
      module: "targeting",
      type: "choice",
      prompt: "Eine Anzeige für Wanderschuhe erscheint in einem Onlineartikel über Bergtouren. Wie heißt dieser Ansatz?",
      options: ["Demografisches Targeting", "Contextual Targeting", "Retargeting", "Zeitliches Targeting"],
      answer: 1,
      explanation: "Die Anzeige passt zum Inhalt und Kontext der besuchten Seite."
    },
    {
      id: "tar-03",
      module: "targeting",
      type: "choice",
      prompt: "Eine Person hat einen Warenkorb verlassen und sieht später erneut eine Anzeige für das Produkt. Was ist das?",
      options: ["Retargeting", "Geotargeting", "SEO", "Keyword-Ausschluss"],
      answer: 0,
      explanation: "Retargeting spricht frühere Shopbesucher oder Interessenten erneut an."
    },
    {
      id: "tar-04",
      module: "targeting",
      type: "choice",
      prompt: "Was ist ein typisches Risiko einer extrem eng definierten Zielgruppe?",
      options: [
        "Die Reichweite kann zu klein werden.",
        "Die Kampagne erhält automatisch mehr Budget.",
        "Die Anzeige wird zu einem organischen Treffer.",
        "Die Conversion Rate ist immer null."
      ],
      answer: 0,
      explanation: "Zu enge Kriterien können Reichweite und Lernmöglichkeiten der Kampagne stark begrenzen."
    },
    {
      id: "tar-05",
      module: "targeting",
      type: "choice",
      prompt: "Welche Vorgehensweise ist beim Targeting am verantwortungsvollsten?",
      options: [
        "Möglichst viele persönliche Daten sammeln, auch ohne Zweck.",
        "Nur notwendige Signale verwenden und Ergebnisse auf Benachteiligung prüfen.",
        "Sensible Merkmale grundsätzlich zur Preissteigerung einsetzen.",
        "Zielgruppen nie anhand von Kennzahlen kontrollieren."
      ],
      answer: 1,
      explanation: "Datenminimierung und die Prüfung auf unfaire Wirkungen gehören zu verantwortungsvollem Targeting."
    },
    {
      id: "tar-06",
      module: "targeting",
      type: "choice",
      prompt: "Welches Ziel verfolgt Targeting hauptsächlich?",
      options: [
        "Jede Person mit derselben Botschaft erreichen",
        "Relevanz erhöhen und Streuverluste verringern",
        "Organische Rankings garantieren",
        "Den Produktpreis automatisch berechnen"
      ],
      answer: 1,
      explanation: "Passendere Zielgruppen und Botschaften sollen die Wirkung der Werbung verbessern."
    },
    {
      id: "tar-07",
      module: "targeting",
      type: "choice",
      prompt: "Eine Kampagne legt fest: höchstens fünf identische Banner pro Tag und Person. Wie heißt diese Technik – und wozu dient sie?",
      options: [
        "Banner-Stalking – sie erhöht den Werbedruck gezielt.",
        "Frequency Capping – sie verhindert, dass Nutzer von stets wiederkehrender Werbung genervt werden (Banner-Burn-out).",
        "Predictive Targeting – sie sagt künftige Käufe voraus.",
        "Conversion Capping – sie begrenzt die Zahl der Bestellungen."
      ],
      answer: 1,
      explanation: "Frequency Capping deckelt die Einblendungen je Person. Zu häufige Wiederholung führt zum Banner-Burn-out: Die Werbewirkung sinkt, und die Nutzer sind genervt."
    },
    {
      id: "tar-08",
      module: "targeting",
      type: "choice",
      prompt: "Third-Party-Cookies werden zunehmend blockiert. Welche Targeting-Verfahren funktionieren auch ohne Cookies?",
      options: [
        "Ausschließlich Network Behavioral Targeting.",
        "Gar keine – ohne Cookies ist kein Targeting möglich.",
        "Kontext-, semantisches und Keyword-Targeting sowie Geo- und Zeit-Targeting.",
        "Nur das klassische Re-Targeting."
      ],
      answer: 2,
      explanation: "Kontextbasierte Verfahren durchsuchen Themen und Inhalte statt Nutzerdaten; Geo- und Zeit-Targeting nutzen öffentlich verfügbare Signale. Sie gelten als cookielose, datenschutzfreundlichere Alternativen."
    },
    {
      id: "sea-01",
      module: "search",
      type: "choice",
      prompt: "Welche Reihenfolge beschreibt den vereinfachten Suchmaschinenprozess?",
      options: [
        "Ranking – Crawling – Indexierung",
        "Crawling – Indexierung – Ranking",
        "Indexierung – Ranking – Crawling",
        "Anzeige – Conversion – Crawling"
      ],
      answer: 1,
      explanation: "Zuerst werden Seiten entdeckt, dann in den Index aufgenommen und bei einer Anfrage geordnet."
    },
    {
      id: "sea-02",
      module: "search",
      type: "choice",
      prompt: "Was ist ein Suchmaschinenindex?",
      options: [
        "Ein Speicher analysierter Webinhalte",
        "Eine Liste aller bezahlten Rechnungen",
        "Ein Browser-Verlauf auf dem Schüler-PC",
        "Eine Sammlung ausschließlich gelöschter Seiten"
      ],
      answer: 0,
      explanation: "Der Index macht analysierte Dokumente für Suchanfragen durchsuchbar."
    },
    {
      id: "sea-03",
      module: "search",
      type: "choice",
      prompt: "Wofür steht die Abkürzung SERP?",
      options: [
        "Search Engine Results Page",
        "Search Evaluation Ranking Process",
        "Sales Engine Revenue Plan",
        "Systematic E-Commerce Retargeting Program"
      ],
      answer: 0,
      explanation: "SERP bezeichnet die Seite mit den Ergebnissen einer Suchanfrage."
    },
    {
      id: "sea-04",
      module: "search",
      type: "choice",
      prompt: "Welche Aussage ist richtig?",
      options: [
        "Jede gecrawlte Seite wird garantiert indexiert.",
        "Crawling und Indexierung sind exakt dasselbe.",
        "Eine entdeckte Seite kann von der Indexierung ausgeschlossen bleiben.",
        "Ranking findet nur einmal pro Jahr statt."
      ],
      answer: 2,
      explanation: "Entdeckung allein garantiert nicht, dass eine Seite in den Suchindex aufgenommen wird."
    },
    {
      id: "sea-05",
      module: "search",
      type: "choice",
      prompt: "Was beschreibt die Suchintention?",
      options: [
        "Den Zweck hinter einer Suchanfrage",
        "Die Farbe des Browserfensters",
        "Die Höhe eines Werbebudgets",
        "Die Anzahl gespeicherter Cookies"
      ],
      answer: 0,
      explanation: "Die Suchintention beschreibt, welches Problem oder Bedürfnis die suchende Person lösen möchte."
    },
    {
      id: "sea-06",
      module: "search",
      type: "choice",
      prompt: "Welche Elemente können gemeinsam auf einer SERP vorkommen?",
      options: [
        "Nur organische Texttreffer",
        "Nur Anzeigen",
        "Organische Treffer, Anzeigen, Bilder und Karten",
        "Ausschließlich Social-Media-Beiträge"
      ],
      answer: 2,
      explanation: "Moderne Ergebnisseiten kombinieren je nach Anfrage unterschiedliche Ergebnisformate."
    },
    {
      id: "sea-07",
      module: "search",
      type: "choice",
      prompt: "Warum liefert eine Suchmaschine Ergebnisse in Sekundenbruchteilen, obwohl das Web Milliarden Seiten hat?",
      options: [
        "Sie durchsucht bei jeder Anfrage das komplette Internet mit Höchstgeschwindigkeit.",
        "Sie zeigt einfach immer dieselben zehn Ergebnisse an.",
        "Sie durchsucht nicht das Internet, sondern nur ihren vorbereiteten Index – den Katalog der gecrawlten Inhalte.",
        "Sie lässt die Websites selbst nach der Antwort suchen."
      ],
      answer: 2,
      explanation: "Webcrawler sammeln Inhalte laufend ein und legen sie im Index ab. Bei der Suchanfrage wird nur dieser Katalog durchsucht – wie in einer gut sortierten Bibliothek."
    },
    {
      id: "sea-08",
      module: "search",
      type: "choice",
      prompt: "Eine Nutzerin googelt „Bürostuhl ergonomisch kaufen“. Welches Suchverhalten liegt vor – und warum ist das für deinen Shop wichtig?",
      options: [
        "Navigationsorientiert – sie sucht eine bekannte Website.",
        "Transaktionsorientiert – sie hat eine Kaufabsicht und ist nah an der Conversion.",
        "Informationsorientiert – sie möchte nur Wissen aufbauen.",
        "Zufallsorientiert – solche Anfragen lassen sich nicht einordnen."
      ],
      answer: 1,
      explanation: "„Kaufen“ signalisiert eine Handlungs- bzw. Kaufabsicht. Von transaktionsorientierten Suchanfragen profitieren Onlineshops am meisten – hier lohnt sich Suchmaschinenmarketing besonders."
    },
    {
      id: "seo-01",
      module: "seo",
      type: "choice",
      prompt: "Welche Maßnahme gehört zur Onpage-Optimierung?",
      options: [
        "Eine klare Überschriftenstruktur erstellen",
        "Ein höheres Anzeigengebot setzen",
        "Einen Fernsehspot buchen",
        "Die Klickkosten erhöhen"
      ],
      answer: 0,
      explanation: "Überschriften und Seitenstruktur werden direkt auf der eigenen Seite optimiert."
    },
    {
      id: "seo-02",
      module: "seo",
      type: "choice",
      prompt: "Welche Maßnahme ist technisches SEO?",
      options: [
        "Ladezeit und mobile Nutzbarkeit verbessern",
        "Ein Rabattbanner gestalten",
        "Ein Keyword häufiger als nötig wiederholen",
        "Ein Tagesbudget für Anzeigen festlegen"
      ],
      answer: 0,
      explanation: "Performance und mobile Bedienbarkeit sind technische Qualitätsfaktoren."
    },
    {
      id: "seo-03",
      module: "seo",
      type: "choice",
      prompt: "Was ist ein Backlink?",
      options: [
        "Ein Link von einer anderen Website auf die eigene Seite",
        "Der Zurück-Button im Browser",
        "Ein interner Warenkorb-Link",
        "Eine bezahlte Suchanzeige"
      ],
      answer: 0,
      explanation: "Backlinks sind externe Verweise und können Vertrauen sowie Autorität signalisieren."
    },
    {
      id: "seo-04",
      module: "seo",
      type: "choice",
      prompt: "Warum ist die Suchintention für SEO wichtig?",
      options: [
        "Weil die Seite das tatsächliche Bedürfnis hinter dem Keyword erfüllen soll.",
        "Weil dadurch jedes Ranking garantiert wird.",
        "Weil Suchmaschinen keine Inhalte lesen.",
        "Weil sie das Anzeigenbudget festlegt."
      ],
      answer: 0,
      explanation: "Hilfreiche Inhalte beantworten die Frage, die hinter der Suchanfrage steht."
    },
    {
      id: "seo-05",
      module: "seo",
      type: "choice",
      prompt: "Welche Aussage über SEO ist fachlich richtig?",
      options: [
        "SEO garantiert Platz 1.",
        "SEO kauft Sichtbarkeit pro Klick.",
        "SEO verbessert die Voraussetzungen für organische Sichtbarkeit.",
        "SEO wirkt nur auf Produktpreise."
      ],
      answer: 2,
      explanation: "SEO kann Sichtbarkeit verbessern, aber keine feste Position garantieren."
    },
    {
      id: "seo-06",
      module: "seo",
      type: "choice",
      prompt: "Welche Produktseite ist voraussichtlich hilfreicher?",
      options: [
        "Eine Seite mit kopiertem Einzeiler und ohne Produktdaten",
        "Eine schnelle Seite mit klarer Beschreibung, Bildern, Daten und verständlicher Navigation",
        "Eine Seite mit hundertfach wiederholtem Keyword",
        "Eine leere Seite mit sehr kurzer URL"
      ],
      answer: 1,
      explanation: "Nützliche Informationen, gute Bedienbarkeit und saubere Technik unterstützen Nutzer und Suchmaschine."
    },
    {
      id: "seo-07",
      module: "seo",
      type: "choice",
      prompt: "Ein Onlineshop hat in kurzer Zeit massenhaft Links gekauft und stürzt im Ranking ab. Welches Google-Update erfasst dieses Verhalten?",
      options: [
        "Das Penguin-Update",
        "Das Panda-Update",
        "Das Hummingbird-Update",
        "Das Mobile-First-Indexing"
      ],
      answer: 0,
      explanation: "Das Penguin-Update (2012) zielt auf Spam, gekaufte Backlinks und zu schnellen Linkaufbau; seit Version 4.0 ist der Filter fest im Algorithmus. Panda bewertet dagegen die Content-Qualität."
    },
    {
      id: "seo-08",
      module: "seo",
      type: "number",
      prompt: "Eine Shopseite erscheint in einem Monat 12500-mal in den Suchergebnissen (Impressionen) und wird 375-mal angeklickt. Berechne die Click-Through-Rate in Prozent.",
      answer: 3,
      tolerance: 0.1,
      suffix: "%",
      explanation: "Click-Through-Rate = Klicks ÷ Impressionen × 100 = 375 ÷ 12500 × 100 = 3 %. Die Klickrate ist selbst ein Rankingfaktor: Je höher, desto besser."
    },
    {
      id: "ads-01",
      module: "sea",
      type: "choice",
      prompt: "Was unterscheidet SEA grundsätzlich von SEO?",
      options: [
        "SEA nutzt bezahlte Anzeigen, SEO zielt auf organische Sichtbarkeit.",
        "SEA funktioniert ohne Suchmaschine.",
        "SEO wird pro Klick abgerechnet.",
        "Es gibt keinen Unterschied."
      ],
      answer: 0,
      explanation: "SEA kauft Anzeigenreichweite; SEO optimiert die unbezahlten Suchergebnisse."
    },
    {
      id: "ads-02",
      module: "sea",
      type: "choice",
      prompt: "Warum gewinnt nicht automatisch immer das höchste Gebot?",
      options: [
        "Weil auch Relevanz und Anzeigenqualität berücksichtigt werden.",
        "Weil Gebote nie eine Rolle spielen.",
        "Weil nur die Länge der Anzeige zählt.",
        "Weil Anzeigen zufällig verteilt werden."
      ],
      answer: 0,
      explanation: "Suchmaschinen verbinden wirtschaftliche und qualitative Faktoren in der Anzeigenauktion."
    },
    {
      id: "ads-03",
      module: "sea",
      type: "choice",
      prompt: "Wozu dienen ausschließende Keywords?",
      options: [
        "Sie verhindern unpassende Ausspielungen.",
        "Sie erhöhen automatisch den Produktpreis.",
        "Sie ersetzen die Landingpage.",
        "Sie machen aus Anzeigen organische Treffer."
      ],
      answer: 0,
      explanation: "Unpassende Suchanfragen können ausgeschlossen und unnötige Klickkosten reduziert werden."
    },
    {
      id: "ads-04",
      module: "sea",
      type: "choice",
      prompt: "Welche Kombination ist am schlüssigsten?",
      options: [
        "Keyword 'rote Laufschuhe' – Anzeige für Bürostühle – Startseite ohne Schuhe",
        "Keyword 'rote Laufschuhe' – passende Anzeige – Landingpage mit roten Laufschuhen",
        "Keyword 'rote Laufschuhe' – leere Anzeige – Fehlerseite",
        "Beliebiges Keyword – beliebige Zielseite"
      ],
      answer: 1,
      explanation: "Suchanfrage, Anzeigenversprechen und Landingpage sollten dieselbe Absicht bedienen."
    },
    {
      id: "ads-05",
      module: "sea",
      type: "choice",
      prompt: "Was bedeutet CPC?",
      options: ["Cost per Click", "Conversion per Campaign", "Customer Page Content", "Click Performance Code"],
      answer: 0,
      explanation: "CPC bezeichnet die durchschnittlichen Werbekosten je Klick."
    },
    {
      id: "ads-06",
      module: "sea",
      type: "choice",
      prompt: "Warum reicht eine hohe Klickzahl allein nicht zur Kampagnenbewertung?",
      options: [
        "Weil Klicks noch nichts über Bestellungen, Kosten und Wertbeitrag sagen.",
        "Weil Klicks nie gemessen werden können.",
        "Weil nur Impressionen wichtig sind.",
        "Weil jeder Klick automatisch eine Bestellung ist."
      ],
      answer: 0,
      explanation: "Die Klickzahl muss mit Zielerreichung und Wirtschaftlichkeit verbunden werden."
    },
    {
      id: "ads-07",
      module: "sea",
      type: "choice",
      prompt: "Ein Konkurrent bietet mehr pro Klick, deine Anzeige steht trotzdem über seiner. Was kann das erklären?",
      options: [
        "Ein besserer Qualitätsfaktor durch relevante Anzeige und gute Zielseite",
        "Eine höhere Zahl an Impressionen",
        "Ein längerer Anzeigentext",
        "Ein größeres Tagesbudget"
      ],
      answer: 0,
      explanation: "Google Ads ist keine reine Auktion: Der Qualitätsfaktor (Skala 1 bis 10) bezieht Relevanz, bisherige Klickraten und Zielseitenqualität ein – gute Qualität schlägt ein höheres Gebot."
    },
    {
      id: "ads-08",
      module: "sea",
      type: "number",
      prompt: "Deine Kampagne hat ein Tagesbudget von 45 Euro, der durchschnittliche CPC liegt bei 0,90 Euro. Wie viele Klicks erlaubt das Budget höchstens pro Tag?",
      answer: 50,
      tolerance: 0.5,
      suffix: "Klicks",
      explanation: "Maximale Klicks = Tagesbudget ÷ CPC = 45 € ÷ 0,90 € = 50 Klicks. Beim Cost-per-Click-Verfahren zahlst du nur für tatsächliche Klicks – Impressionen ohne Klick sind kostenloser Branding-Effekt."
    },
    {
      id: "kpi-01",
      module: "analytics",
      type: "number",
      prompt: "Eine Anzeige erzielt 2.000 Klicks bei 100.000 Impressionen. Wie hoch ist die CTR?",
      suffix: "%",
      answer: 2,
      tolerance: 0.01,
      explanation: "2.000 / 100.000 × 100 = 2 %."
    },
    {
      id: "kpi-02",
      module: "analytics",
      type: "number",
      prompt: "Eine Kampagne kostet 900 € und erzielt 1.500 Klicks. Wie hoch ist der CPC?",
      suffix: "€",
      answer: 0.6,
      tolerance: 0.01,
      explanation: "900 € / 1.500 Klicks = 0,60 € je Klick."
    },
    {
      id: "kpi-03",
      module: "analytics",
      type: "number",
      prompt: "Aus 1.500 Klicks entstehen 75 Bestellungen. Wie hoch ist die Conversion Rate?",
      suffix: "%",
      answer: 5,
      tolerance: 0.01,
      explanation: "75 / 1.500 × 100 = 5 %."
    },
    {
      id: "kpi-04",
      module: "analytics",
      type: "number",
      prompt: "Eine Kampagne kostet 900 € und erzielt 75 Bestellungen. Wie hoch ist der CPO?",
      suffix: "€",
      answer: 12,
      tolerance: 0.01,
      explanation: "900 € / 75 Bestellungen = 12 € je Bestellung."
    },
    {
      id: "kpi-05",
      module: "analytics",
      type: "number",
      prompt: "3.600 € zugeordneter Umsatz bei 900 € Werbekosten: Wie hoch ist der ROAS als Faktor?",
      suffix: "x",
      answer: 4,
      tolerance: 0.01,
      explanation: "3.600 € / 900 € = 4,0. Jeder Werbe-Euro erzeugt vier Euro Umsatz."
    },
    {
      id: "kpi-06",
      module: "analytics",
      type: "choice",
      prompt: "Kampagne A hat den höheren ROAS, aber deutlich weniger Umsatz. Was folgt daraus?",
      options: [
        "A ist ohne weitere Prüfung immer die bessere Kampagne.",
        "Effizienz und Volumen müssen gemeinsam mit Marge und Ziel bewertet werden.",
        "ROAS darf nie verwendet werden.",
        "Nur Impressionen entscheiden."
      ],
      answer: 1,
      explanation: "Eine einzelne Kennzahl reicht selten für eine belastbare Entscheidung."
    },
    {
      id: "kpi-07",
      module: "analytics",
      type: "choice",
      prompt: "Ein Fahrrad-Shop schaltet Suchanzeigen, um den Umsatz um 10 % zu steigern. Welche KPI ist für dieses Ziel am aussagekräftigsten?",
      options: [
        "Die Menge an Bestellungen",
        "Die Impressionen der Anzeigen",
        "Die Zahl der Newsletter-Abonnenten",
        "Die Sitzungsdauer auf der Website"
      ],
      answer: 0,
      explanation: "Schritt 1 der Auswertung: Die KPI muss zum Ziel passen. Nur ein Kauf steigert den Umsatz – Impressionen zeigen nur, dass die Anzeige gesehen wurde."
    },
    {
      id: "kpi-08",
      module: "analytics",
      type: "choice",
      prompt: "Die Zahlen zeigen, dass viele Besucher den Warenkorb abbrechen – aber nicht, warum. Welcher Analyse-Schritt hilft jetzt weiter?",
      options: [
        "Die qualitative Analyse, z. B. mit Nutzerbefragungen oder Heatmaps",
        "Noch einmal dieselben Kennzahlen berechnen",
        "Die Anzeigen sofort abschalten",
        "Die Konkurrenz kopieren"
      ],
      answer: 0,
      explanation: "Web-Analytics-Tools liefern nur Zahlen (das Was). Für das Warum braucht es qualitative Methoden wie Befragungen, Umfragen oder Heatmaps – Schritt 3 der Auswertung."
    },
    {
      id: "ai-01",
      module: "ai",
      type: "choice",
      prompt: "Wie verhalten sich KI, maschinelles Lernen und Deep Learning zueinander?",
      options: [
        "Deep Learning ist ein Teil des maschinellen Lernens, das ein Teilgebiet der KI ist.",
        "KI ist ein Teil von Deep Learning.",
        "Alle drei Begriffe bedeuten exakt dasselbe.",
        "Maschinelles Lernen gehört nicht zur KI."
      ],
      answer: 0,
      explanation: "Die Begriffe bilden vereinfacht eine Hierarchie: KI umfasst ML, ML umfasst Deep Learning."
    },
    {
      id: "ai-02",
      module: "ai",
      type: "choice",
      prompt: "Was ist eine typische Fähigkeit generativer KI?",
      options: [
        "Neue Texte oder Bilder aus erlernten Mustern erzeugen",
        "Jede Aussage garantiert wahr machen",
        "Ohne Daten und Training arbeiten",
        "Rechtliche Verantwortung übernehmen"
      ],
      answer: 0,
      explanation: "Generative Modelle erzeugen neue Inhalte auf Basis statistisch erlernter Muster."
    },
    {
      id: "ai-03",
      module: "ai",
      type: "choice",
      prompt: "Was ist eine Halluzination bei generativer KI?",
      options: [
        "Eine überzeugend formulierte, aber falsche oder erfundene Ausgabe",
        "Eine besonders schnelle Berechnung",
        "Ein verschlüsselter Datensatz",
        "Eine garantierte Quellenangabe"
      ],
      answer: 0,
      explanation: "Sprachmodelle können plausible Aussagen erzeugen, die sachlich nicht stimmen."
    },
    {
      id: "ai-04",
      module: "ai",
      type: "choice",
      prompt: "Welcher Prompt ist am brauchbarsten?",
      options: [
        "Mach Marketing.",
        "Erstelle fünf sachliche Betreffzeilen für einen Schulshop, Zielgruppe Auszubildende, maximal 45 Zeichen, ohne Übertreibung.",
        "Schreib irgendwas Tolles.",
        "Denk dir Daten aus und nenne sie Fakten."
      ],
      answer: 1,
      explanation: "Ziel, Kontext, Format und Qualitätskriterien machen den Auftrag prüfbarer."
    },
    {
      id: "ai-05",
      module: "ai",
      type: "choice",
      prompt: "Welche Aufgabe sollte bei KI-generierten Marketinginhalten beim Menschen bleiben?",
      options: [
        "Fakten, Tonalität, Rechte und Eignung vor Veröffentlichung prüfen",
        "Jede Ausgabe ungeprüft veröffentlichen",
        "Verantwortung an das Modell abgeben",
        "Quellen grundsätzlich ignorieren"
      ],
      answer: 0,
      explanation: "Die Freigabe und Verantwortung für veröffentlichte Inhalte bleiben beim Menschen."
    },
    {
      id: "ai-06",
      module: "ai",
      type: "choice",
      prompt: "Wo kann KI im Online-Marketing sinnvoll unterstützen?",
      options: [
        "Beim Clustern von Suchbegriffen und Erkennen von Datenmustern",
        "Beim Garantieren zukünftiger Umsätze",
        "Beim automatischen Ersetzen jeder menschlichen Entscheidung",
        "Beim Veröffentlichen ungeprüfter Kundendaten"
      ],
      answer: 0,
      explanation: "Mustererkennung und vorbereitende Analysen sind typische unterstützende Anwendungen."
    },
    {
      id: "ai-07",
      module: "ai",
      type: "choice",
      prompt: "Ein Sprachassistent beantwortet Fragen, kann aber sonst nichts. Welche Art von KI liegt vor?",
      options: [
        "Schwache KI – auf eine spezifische Aufgabe beschränkt, ohne Bewusstsein",
        "Starke KI – sie kann jede menschliche Aufgabe erfüllen",
        "Keine KI, weil kein Roboter beteiligt ist",
        "Bestärkendes Lernen, weil der Assistent spricht"
      ],
      answer: 0,
      explanation: "Praktisch alle heutigen Systeme sind schwache KI. Starke KI, die jede intellektuelle Aufgabe eines Menschen selbstständig erfüllt, ist bis heute nicht realisiert."
    },
    {
      id: "ai-08",
      module: "ai",
      type: "choice",
      prompt: "Ein Modell lernt aus Wohnfläche und Lage mit bekannten Verkaufspreisen, künftige Hauspreise vorherzusagen. Welche Lernart ist das?",
      options: [
        "Überwachtes Lernen – Training mit Eingabedaten und bekannten Ergebnissen (Labels)",
        "Unüberwachtes Lernen – das Modell sucht ohne Labels nach Mustern",
        "Bestärkendes Lernen – das Modell erhält Belohnungen und Strafen",
        "Regelbasiertes System – der Preis folgt festen Wenn-dann-Regeln"
      ],
      answer: 0,
      explanation: "Beim überwachten Lernen sind die richtigen Antworten (hier: Verkaufspreise) im Training bekannt. Clustering ohne Labels wäre unüberwacht, Lernen über Belohnung bestärkend."
    },
    {
      id: "webanalyse-01",
      module: "webanalyse",
      type: "choice",
      prompt: "Welche drei Grundfragen beantwortet die Webanalyse für einen Webshop?",
      options: [
        "Woher kommen Besucher, was tun sie auf der Seite und erreichen sie das Ziel?",
        "Wie heißen die Besucher, wo wohnen sie und was verdienen sie?",
        "Welche Farbe hat das Logo, wie groß ist die Schrift und wie teuer war das Design?",
        "Wie viele Mitarbeiter hat der Shop, wer ist Chef und wann ist Feierabend?"
      ],
      answer: 0,
      explanation: "Herkunft, Verhalten und Zielerreichung der Besucher sind die Kernfragen – personenbezogene Details wie Namen gehören ausdrücklich nicht dazu."
    },
    {
      id: "webanalyse-02",
      module: "webanalyse",
      type: "number",
      prompt: "Von 1.200 Sitzungen enden 420 ohne weitere Interaktion. Wie hoch ist die Absprungrate?",
      suffix: "%",
      answer: 35,
      tolerance: 0.1,
      explanation: "420 / 1.200 × 100 = 35 %. Eine hohe Absprungrate kann auf unpassende Erwartungen oder Probleme der Seite hinweisen."
    },
    {
      id: "webanalyse-03",
      module: "webanalyse",
      type: "choice",
      prompt: "Wozu dienen UTM-Parameter an Kampagnenlinks?",
      options: [
        "Sie verschlüsseln die Zahlungsdaten der Kunden.",
        "Sie machen die Seite automatisch schneller.",
        "Sie kennzeichnen, aus welchem Kanal oder welcher Kampagne ein Besucher kommt.",
        "Sie ersetzen das Impressum bei Werbelinks."
      ],
      answer: 2,
      explanation: "UTM-Parameter markieren Links, damit die Webanalyse Besucher dem richtigen Kanal zuordnen kann – etwa Newsletter oder Suchanzeige."
    },
    {
      id: "webanalyse-04",
      module: "webanalyse",
      type: "choice",
      prompt: "Welche Regel gehört zu einem sauberen A/B-Test?",
      options: [
        "Möglichst viele Elemente gleichzeitig ändern, um Zeit zu sparen.",
        "Nur ein Element pro Test ändern und die Besucher zufällig aufteilen.",
        "Nur Stammkunden in den Test aufnehmen.",
        "Den Test beenden, sobald die Lieblingsvariante vorne liegt."
      ],
      answer: 1,
      explanation: "Ändert man mehrere Elemente gleichzeitig, weiß man nicht, welche Änderung gewirkt hat. Zufallsaufteilung verhindert verzerrte Gruppen."
    },
    {
      id: "webanalyse-05",
      module: "webanalyse",
      type: "number",
      prompt: "Im A/B-Test erzielt Variante B bei 2.000 Besuchern 90 Bestellungen. Wie hoch ist ihre Conversion Rate?",
      suffix: "%",
      answer: 4.5,
      tolerance: 0.01,
      explanation: "90 / 2.000 × 100 = 4,5 %. Für ein belastbares Urteil braucht es zusätzlich die Rate der Variante A und genügend Daten."
    },
    {
      id: "webanalyse-06",
      module: "webanalyse",
      type: "choice",
      prompt: "Ein Test lief nur einen Vormittag mit 30 Besuchern; Variante B liegt knapp vorn. Was ist die richtige Schlussfolgerung?",
      options: [
        "B sofort für alle übernehmen, der Test ist eindeutig.",
        "A löschen und nie wieder testen.",
        "Das Ergebnis ist noch nicht belastbar – der Test braucht mehr Daten und Laufzeit.",
        "Beide Varianten gleichzeitig allen Besuchern zeigen."
      ],
      answer: 2,
      explanation: "Bei so wenigen Besuchern entscheidet der Zufall. A/B-Tests brauchen ausreichend Daten über einen längeren Zeitraum."
    },
    {
      id: "webanalyse-07",
      module: "webanalyse",
      type: "choice",
      prompt: "Wann dürfen Tracking-Cookies für die Webanalyse gesetzt werden?",
      options: [
        "Immer sofort beim Seitenaufruf, das ist Standard.",
        "Erst nach informierter Einwilligung der Nutzer, etwa über ein Consent-Banner.",
        "Nur nachts, wenn wenig Besucher da sind.",
        "Sobald der Kunde etwas in den Warenkorb legt."
      ],
      answer: 1,
      explanation: "Nach § 25 TDDDG (früher TTDSG) und DSGVO braucht Tracking eine Einwilligung. Nur unbedingt erforderliche Cookies – wie der Warenkorb – sind ausgenommen."
    },
    {
      id: "webanalyse-08",
      module: "webanalyse",
      type: "choice",
      prompt: "Warum sollten Webanalyse-Zahlen nie als „ganze Wahrheit“ gelesen werden?",
      options: [
        "Weil Zahlen grundsätzlich falsch sind.",
        "Weil nur der Chef die Zahlen sehen darf.",
        "Weil die Tools absichtlich falsche Werte anzeigen.",
        "Weil sie zeigen, was passiert, aber nicht warum – und Nutzer ohne Einwilligung sowie Bots die Daten verzerren."
      ],
      answer: 3,
      explanation: "Die Daten sind unvollständig und erklären keine Motive. Für das „Warum“ helfen z. B. Nutzerbefragungen oder Usability-Tests."
    },
    {
      id: "lf2-layout-01",
      module: "lf2-layout",
      type: "choice",
      prompt: "Welche Aufgabe hat das Layout eines Webshops besonders?",
      options: [
        "Es führt Kunden durch Inhalte, Produkte und nächste Handlungsschritte.",
        "Es ersetzt Produktdaten und rechtliche Angaben vollständig.",
        "Es soll möglichst viele Elemente ohne Ordnung auf eine Seite bringen.",
        "Es ist nur für die Farbe des Hintergrunds zuständig."
      ],
      answer: 0,
      explanation: "Layout strukturiert die Oberfläche und hilft Kunden, schnell Orientierung und Vertrauen zu finden."
    },
    {
      id: "lf2-layout-02",
      module: "lf2-layout",
      type: "choice",
      prompt: "Welche Elemente gehören typischerweise in den Header eines Webshops?",
      options: [
        "Logo, Suche, Navigation oder Warenkorbzugang",
        "Nur das Impressum und alle AGB im Volltext",
        "Ausschließlich Produktbewertungen",
        "Nur eine unsichtbare Überschrift"
      ],
      answer: 0,
      explanation: "Der Header bietet schnelle Wiedererkennung und zentrale Einstiege wie Suche, Kategorien oder Warenkorb."
    },
    {
      id: "lf2-layout-03",
      module: "lf2-layout",
      type: "choice",
      prompt: "Warum ist Responsive Design für einen Webshop wichtig?",
      options: [
        "Weil der Shop auf Smartphone, Tablet und Desktop sinnvoll nutzbar sein soll.",
        "Weil dadurch automatisch alle Preise rechtlich geprüft werden.",
        "Weil Produktbilder dadurch nicht mehr benötigt werden.",
        "Weil die Seite dann nur noch auf großen Monitoren funktioniert."
      ],
      answer: 0,
      explanation: "Kunden nutzen unterschiedliche Geräte. Layout, Schrift, Navigation und Produktdarstellung müssen darauf reagieren."
    },
    {
      id: "lf2-layout-04",
      module: "lf2-layout",
      type: "choice",
      prompt: "Was ist ein Call-to-Action auf einer Produktseite?",
      options: [
        "Eine klare Handlungsaufforderung wie 'In den Warenkorb'.",
        "Ein zufällig gewählter Dateiname.",
        "Eine rechtliche Unternehmensform.",
        "Eine interne Notiz im CSS-Code."
      ],
      answer: 0,
      explanation: "Ein Call-to-Action zeigt, welche Handlung Kunden als Nächstes ausführen können."
    },
    {
      id: "lf2-layout-05",
      module: "lf2-layout",
      type: "choice",
      prompt: "Welche technische Umsetzung passt gut zu einem Webshop-Projekt im Unterricht?",
      options: [
        "Semantisches HTML, eine gemeinsame CSS-Datei und gut benannte Bereiche.",
        "Alle Inhalte nur als ein großes Bild ohne Alternativtext.",
        "Jede Seite mit völlig anderer Navigation.",
        "Private Kundendaten als Beispielinhalt veröffentlichen."
      ],
      answer: 0,
      explanation: "Semantisches HTML und konsistentes CSS machen das Projekt wartbar, verständlich und besser zugänglich."
    },
    {
      id: "lf2-layout-06",
      module: "lf2-layout",
      type: "choice",
      prompt: "Welche Angabe sollte bei erlaubtem KI-Einsatz im Projekt transparent gemacht werden?",
      options: [
        "Wofür KI genutzt wurde und welche Ergebnisse eigenständig geprüft wurden.",
        "Dass KI-Einsatz grundsätzlich geheim bleiben muss.",
        "Nur der Name des Browsers.",
        "Ausschließlich die Bildschirmgröße des Laptops."
      ],
      answer: 0,
      explanation: "Die Projekt-Dokumentation sollte zeigen, welche Hilfen verwendet wurden und welche fachlichen Entscheidungen selbst verantwortet werden."
    },
    {
      id: "lf2-webshop-seiten-01",
      module: "lf2-webshop-seiten",
      type: "choice",
      prompt: "Welche Aufgabe übernimmt die Startseite eines Webshops besonders?",
      options: [
        "Sie macht Zweck, Angebot und wichtige Einstiege des Shops schnell erkennbar.",
        "Sie ersetzt jede Produktdetailseite vollständig.",
        "Sie zeigt ausschließlich rechtliche Pflichttexte.",
        "Sie darf keine Navigation enthalten."
      ],
      answer: 0,
      explanation: "Die Startseite soll Vertrauen und Orientierung schaffen und Kunden zu passenden Bereichen des Sortiments weiterführen."
    },
    {
      id: "lf2-webshop-seiten-02",
      module: "lf2-webshop-seiten",
      type: "choice",
      prompt: "Woran erkennt man eine Produktkategorienseite?",
      options: [
        "Sie zeigt eine Auswahl zusammengehöriger Artikel und hilft beim Vergleichen und Eingrenzen.",
        "Sie enthält nur eine einzelne Rechnungsnummer.",
        "Sie ist ausschließlich für das Impressum zuständig.",
        "Sie besteht immer nur aus einem Kontaktformular."
      ],
      answer: 0,
      explanation: "Produktkategorienseiten strukturieren das Sortiment und führen Kunden zu passenden Produktdetailseiten."
    },
    {
      id: "lf2-webshop-seiten-03",
      module: "lf2-webshop-seiten",
      type: "choice",
      prompt: "Welche Kombination passt gut zu einer großen Produktkategorie?",
      options: [
        "Filter, Sortierung und bei Bedarf Paginierung",
        "Keine Kategorien, keine Suche und zufällige Reihenfolge",
        "Nur ein einziges Produktbild ohne Text",
        "Ein versteckter Warenkorb ohne Produktliste"
      ],
      answer: 0,
      explanation: "Bei vielen Artikeln helfen Filter, Sortierung und Seitenaufteilung, damit Kunden nicht endlos suchen müssen."
    },
    {
      id: "lf2-webshop-seiten-04",
      module: "lf2-webshop-seiten",
      type: "choice",
      prompt: "Was ist der Kern einer Landing Page im Webshop?",
      options: [
        "Sie nimmt ein konkretes Interesse auf und führt zu einer klaren Handlung.",
        "Sie zeigt wahllos alle internen Dateien des Shops.",
        "Sie darf keinen Call-to-Action enthalten.",
        "Sie wird nur für Mitarbeitende im Lager genutzt."
      ],
      answer: 0,
      explanation: "Landing Pages passen oft zu Anzeigen, Suchanfragen oder E-Mails und sollen Besucher gezielt zur nächsten Aktion führen."
    },
    {
      id: "lf2-webshop-seiten-05",
      module: "lf2-webshop-seiten",
      type: "choice",
      prompt: "Welche Information gehört typischerweise auf eine Produktdetailseite?",
      options: [
        "Produktbeschreibung, Bilder, Preis, Varianten und eine klare Kauf- oder Anfragehandlung",
        "Nur der Seitenname ohne Produktdaten",
        "Ausschließlich eine Liste aller internen CSS-Klassen",
        "Nur der Stundenplan der Klasse"
      ],
      answer: 0,
      explanation: "Die Produktdetailseite liefert die Informationen, die Kunden für Auswahl, Vertrauen und Kaufentscheidung brauchen."
    },
    {
      id: "lf2-webshop-seiten-06",
      module: "lf2-webshop-seiten",
      type: "choice",
      prompt: "Was ist ein sinnvolles Filterkriterium für eine Produktkategorienseite?",
      options: [
        "Preis, Marke, Farbe, Größe oder Verfügbarkeit",
        "Die private Handynummer der Lehrkraft",
        "Die zufällige Hintergrundfarbe des Browsers",
        "Der Dateiname der CSS-Datei"
      ],
      answer: 0,
      explanation: "Filter müssen zu echten Produktmerkmalen passen. Dafür sind gepflegte Produktdaten nötig."
    },
    {
      id: "lf2-impressum-01",
      module: "lf2-impressum",
      type: "choice",
      prompt: "Welche Hauptfunktion hat ein Impressum in einem geschäftlichen Webshop?",
      options: [
        "Es macht Anbieter, Anschrift und Kontaktmöglichkeiten transparent.",
        "Es ersetzt die Datenschutzerklärung vollständig.",
        "Es versteckt rechtliche Angaben vor Kunden.",
        "Es dient nur als gestalterisches Element im Footer."
      ],
      answer: 0,
      explanation: "Das Impressum ist die Anbieterkennzeichnung und hilft Besuchern, den Verantwortlichen der Webseite zu erkennen und zu erreichen."
    },
    {
      id: "lf2-impressum-02",
      module: "lf2-impressum",
      type: "choice",
      prompt: "Welche Rechtsgrundlage ist für allgemeine Informationspflichten heute aktueller als der alte Hinweis auf § 5 TMG?",
      options: [
        "§ 5 DDG",
        "§ 55 RStV",
        "Nur die AGB des Shops",
        "Die Bildbeschreibung der Produktseite"
      ],
      answer: 0,
      explanation: "Das Digitale-Dienste-Gesetz hat das TMG abgelöst. Für die Unterrichtsformulierung sollte deshalb § 5 DDG genannt und geprüft werden."
    },
    {
      id: "lf2-impressum-03",
      module: "lf2-impressum",
      type: "choice",
      prompt: "Wo sollte ein Impressum in einem Webshop verlinkt sein?",
      options: [
        "Eindeutig erkennbar und von wichtigen Seiten aus erreichbar, zum Beispiel im Footer.",
        "Nur als versteckter Kommentar im HTML-Code.",
        "Nur innerhalb eines Produktbildes.",
        "Ausschließlich nach Abschluss einer Bestellung."
      ],
      answer: 0,
      explanation: "Die Anbieterkennzeichnung muss leicht erkennbar, unmittelbar erreichbar und dauerhaft verfügbar sein."
    },
    {
      id: "lf2-impressum-04",
      module: "lf2-impressum",
      type: "choice",
      prompt: "Welche Angabe gehört typischerweise in ein Impressum eines fiktiven Webshops?",
      options: [
        "Name oder Firma, Anschrift und Kontaktmöglichkeiten",
        "Die Lieblingsfarbe des Shopbetreibers",
        "Nur ein Social-Media-Handle ohne Anschrift",
        "Eine Liste aller privaten Passwörter"
      ],
      answer: 0,
      explanation: "Name beziehungsweise Firma, ladungsfähige Anschrift und Kontakt sind zentrale Bausteine. Je nach Fall kommen weitere Angaben hinzu."
    },
    {
      id: "lf2-impressum-05",
      module: "lf2-impressum",
      type: "choice",
      prompt: "Was ist im Unterrichtsprojekt beim Erstellen eines Impressums besonders wichtig?",
      options: [
        "Realistische, aber erfundene Daten verwenden.",
        "Private Echtdaten von Mitschülerinnen und Mitschülern eintragen.",
        "Das Impressum absichtlich unvollständig lassen.",
        "Den Link so benennen, dass niemand ihn erkennt."
      ],
      answer: 0,
      explanation: "Im Projekt geht es um fachlich plausibles Arbeiten. Private Daten gehören nicht in fiktive Schüler-Webshops."
    },
    {
      id: "lf2-impressum-06",
      module: "lf2-impressum",
      type: "choice",
      prompt: "Wann kann zusätzlich ein Verantwortlicher nach § 18 Abs. 2 MStV relevant sein?",
      options: [
        "Bei journalistisch-redaktionell gestalteten Angeboten.",
        "Immer bei jedem einzelnen Produktfoto.",
        "Nur wenn der Shop keine Preise anzeigt.",
        "Nur bei rein privaten Familienseiten."
      ],
      answer: 0,
      explanation: "Bei journalistisch-redaktionellen Inhalten kann eine zusätzliche verantwortliche Person nach § 18 Abs. 2 MStV relevant sein."
    },
    {
      id: "lf2-haftung-01",
      module: "lf2-haftung",
      type: "choice",
      prompt: "In einem Blogbeitrag seines Webshops beleidigt ein Betreiber einen Konkurrenten. Wer ist dafür verantwortlich?",
      options: [
        "Der Hostprovider, weil er die Seite speichert.",
        "Der Betreiber selbst, denn für eigene Inhalte haftet er grundsätzlich.",
        "Niemand, weil das Internet ein rechtsfreier Raum ist.",
        "Die Besucher, die den Beitrag gelesen haben."
      ],
      answer: 1,
      explanation: "Für selbst veröffentlichte Inhalte haftet der Betreiber der Webseite – bei Beleidigungen sogar strafrechtlich."
    },
    {
      id: "lf2-haftung-02",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Was stimmt über einen pauschalen Disclaimer wie „Für alle Links übernehmen wir keine Haftung“?",
      options: [
        "Er schließt jede Haftung für verlinkte Seiten sicher aus.",
        "Er ist gesetzlich für jede Webseite vorgeschrieben.",
        "Er schützt nicht zuverlässig – wichtiger sind Prüfung, Kennzeichnung und schnelles Entfernen problematischer Links.",
        "Er macht verlinkte Inhalte automatisch zu eigenen Inhalten."
      ],
      answer: 2,
      explanation: "Wer verlinkt, empfiehlt die Zielseite. Eine pauschale Distanzierung ist widersprüchlich und rechtlich kaum wirksam – entscheidend ist sorgfältiges Verhalten."
    },
    {
      id: "lf2-haftung-03",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Du erfährst, dass eine von dir verlinkte Seite inzwischen rechtswidrige Inhalte zeigt. Was ist die richtige Reaktion?",
      options: [
        "Den Link sofort entfernen.",
        "Abwarten, ob sich jemand beschwert.",
        "Den Link nur optisch kleiner darstellen.",
        "Einen zusätzlichen Disclaimer unter den Link schreiben."
      ],
      answer: 0,
      explanation: "Ab Kenntnis der Rechtswidrigkeit muss der Link unverzüglich entfernt werden – sonst droht eine Mithaftung."
    },
    {
      id: "lf2-haftung-04",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Ein Schüler findet ein tolles Produktfoto ohne Copyright-Vermerk im Netz und will es in seinen Webshop übernehmen. Was gilt?",
      options: [
        "Ohne ©-Zeichen ist das Foto frei verwendbar.",
        "Fotos sind auch ohne Copyright-Vermerk urheberrechtlich geschützt – er braucht das Einverständnis des Urhebers.",
        "Nach 14 Tagen im Internet erlischt das Urheberrecht.",
        "Hauptsache, er verkleinert das Bild vor der Nutzung."
      ],
      answer: 1,
      explanation: "Werke sind automatisch durch das UrhG geschützt. Für die Nutzung fremder Werke ist grundsätzlich die Zustimmung des Urhebers nötig."
    },
    {
      id: "lf2-haftung-05",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Welche Folgen kann eine Urheberrechtsverletzung im Webshop haben?",
      options: [
        "Höchstens eine freundliche Erinnerungs-E-Mail.",
        "Nur ein schlechteres Suchmaschinen-Ranking.",
        "Gar keine, solange der Shop klein ist.",
        "Abmahnung, Unterlassung, Schadensersatz sowie Anwalts- und Gutachterkosten."
      ],
      answer: 3,
      explanation: "Urheberrechtsverletzungen können teuer werden: Neben Beseitigung und Unterlassung drohen Schadensersatz und erhebliche Verfahrenskosten."
    },
    {
      id: "lf2-haftung-06",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Ein Bild steht unter der Lizenz CC BY. Was bedeutet das für dein Webshop-Projekt?",
      options: [
        "Du darfst es gar nicht verwenden.",
        "Du darfst es nur privat, aber nie online nutzen.",
        "Du darfst es nutzen, wenn du den Urheber wie gefordert namentlich nennst.",
        "Du musst dem Urheber eine Lizenzgebühr überweisen."
      ],
      answer: 2,
      explanation: "CC BY erlaubt die Nutzung unter der Bedingung der Namensnennung. Creative-Commons-Lizenzen legen genau fest, was erlaubt ist."
    },
    {
      id: "lf2-haftung-07",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Ein Kunde hinterlässt in deinem Webshop eine beleidigende Bewertung über eine andere Person. Was gilt?",
      options: [
        "Der Betreiber haftet sofort wie für einen eigenen Text und muss den Shop schließen.",
        "Bewertungen sind Meinungsfreiheit, da darf nie etwas gelöscht werden.",
        "Grundsätzlich haftet der Verfasser – der Betreiber muss den Beitrag aber entfernen, sobald er darauf hingewiesen wird.",
        "Der Betreiber muss den Kunden öffentlich zurückbeleidigen."
      ],
      answer: 2,
      explanation: "Für fremde Nutzerinhalte haftet zunächst der Verfasser. Ab Kenntnis muss der Betreiber rechtswidrige Beiträge aber löschen, sonst haftet er mit."
    },
    {
      id: "lf2-haftung-08",
      module: "lf2-haftung",
      type: "choice",
      prompt: "Ein Webshop speichert Kundendaten für einen Newsletter, ohne darüber zu informieren oder eine Einwilligung einzuholen. Wie ist das zu bewerten?",
      options: [
        "Unproblematisch, solange die Daten nicht weiterverkauft werden.",
        "Nur für große Konzerne relevant, kleine Shops sind ausgenommen.",
        "Erlaubt, wenn der Newsletter kostenlos ist.",
        "Ein Verstoß gegen die DSGVO – nötig sind transparente Information und eine Einwilligung."
      ],
      answer: 3,
      explanation: "Personenbezogene Daten dürfen nur transparent und mit Rechtsgrundlage verarbeitet werden. Für Newsletter braucht es eine Einwilligung und eine Datenschutzerklärung."
    },
    {
      id: "lf2-produktdetailseite-01",
      module: "lf2-produktdetailseite",
      type: "choice",
      prompt: "Warum darf die Ware für Webshop-Mitarbeiter keine „Black Box“ sein?",
      options: [
        "Weil nur mit echtem Warenwissen überzeugend und fair auf der Produktdetailseite argumentiert werden kann.",
        "Weil schwarze Verpackungen im Onlinehandel verboten sind.",
        "Weil Kunden grundsätzlich keine Produktinformationen lesen.",
        "Weil Suchmaschinen Produktseiten ohne Preis löschen."
      ],
      answer: 0,
      explanation: "Wer nur Name und Preis kennt, kann weder beraten noch überzeugen. Warenwissen liefert die Argumente für eine gute Produktdetailseite."
    },
    {
      id: "lf2-produktdetailseite-02",
      module: "lf2-produktdetailseite",
      type: "choice",
      prompt: "Welche Quelle liefert besonders unabhängige, vergleichende Warentests?",
      options: [
        "Die Werbebroschüre des Herstellers",
        "Die Stiftung Warentest",
        "Der eigene Instagram-Kanal des Shops",
        "Die Produktbeschreibung des günstigsten Konkurrenten"
      ],
      answer: 1,
      explanation: "Die Stiftung Warentest ist ein unabhängiges Institut für vergleichende Waren- und Dienstleistungstests. Herstellerangaben sind dagegen nie neutral."
    },
    {
      id: "lf2-produktdetailseite-03",
      module: "lf2-produktdetailseite",
      type: "choice",
      prompt: "Welche Angaben gehören zu einer vollständigen Preisdarstellung auf der Produktdetailseite?",
      options: [
        "Nur der Nettopreis, Steuern rechnet der Kunde selbst.",
        "Ein Preis ohne weitere Hinweise, damit die Seite aufgeräumt wirkt.",
        "Gesamtpreis inklusive Umsatzsteuer plus Hinweis auf Versandkosten.",
        "Ausschließlich der Rabatt in Prozent."
      ],
      answer: 2,
      explanation: "Kunden müssen den Gesamtpreis inklusive Umsatzsteuer sehen und erkennen können, welche Versandkosten dazukommen."
    },
    {
      id: "lf2-produktdetailseite-04",
      module: "lf2-produktdetailseite",
      type: "choice",
      prompt: "Zum Bürostuhl wird ein passendes Sitzkissen empfohlen, alternativ das teurere Premium-Modell. Wie heißen diese beiden Maßnahmen?",
      options: [
        "Retargeting und Geotargeting",
        "Cross-Selling (Sitzkissen) und Up-Selling (Premium-Modell)",
        "Crawling und Indexierung",
        "Paginierung und Sortierung"
      ],
      answer: 1,
      explanation: "Cross-Selling empfiehlt ergänzende Produkte, Up-Selling eine höherwertige Alternative. Beide steigern Kundennutzen und Warenkorbwert."
    },
    {
      id: "lf2-produktdetailseite-05",
      module: "lf2-produktdetailseite",
      type: "choice",
      prompt: "Wozu dienen Katalogaustauschformate wie BMEcat oder CSV?",
      options: [
        "Sie machen Produktfotos automatisch schöner.",
        "Sie ersetzen das Impressum eines Webshops.",
        "Sie verhindern, dass Kunden Preise vergleichen können.",
        "Sie übertragen Produktdaten standardisiert zwischen Lieferanten, Webshops und Marktplätzen."
      ],
      answer: 3,
      explanation: "Standardisierte Austauschformate sorgen dafür, dass Produktdaten ohne aufwendige Handarbeit in Shops, Marktplätze und Beschaffungssysteme übernommen werden können."
    },
    {
      id: "lf2-produktdetailseite-06",
      module: "lf2-produktdetailseite",
      type: "choice",
      prompt: "Was ist die Hauptaufgabe eines Produktinformationsmanagementsystems (PIM)?",
      options: [
        "Produktdaten zentral pflegen und für Shop, Marktplätze und Werbung einheitlich bereitstellen.",
        "Die Buchhaltung des Unternehmens erledigen.",
        "Kundenbewertungen automatisch positiv umschreiben.",
        "Das Lager physisch umräumen."
      ],
      answer: 0,
      explanation: "Ein PIM-System speichert Produktdaten zentral und standardisiert, damit alle Kanäle dieselben aktuellen Informationen nutzen."
    },
    {
      id: "lf2-kundeninformationen-01",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Was beschreibt eine Sorte im Sortiment besonders passend?",
      options: [
        "Eine konkrete Ausprägung eines Artikels, zum Beispiel Farbe, Größe oder Material.",
        "Den gesamten Webshop mit allen rechtlichen Pflichtseiten.",
        "Nur den Nettopreis eines Produkts.",
        "Eine zufällige Sortierung in der Kategorienseite."
      ],
      answer: 0,
      explanation: "Eine Sorte ist eine Variante oder Ausprägung eines Artikels, etwa ein T-Shirt in Blau und Größe M."
    },
    {
      id: "lf2-kundeninformationen-02",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Woran erkennt man eine Warengruppe?",
      options: [
        "Sie bündelt mehrere ähnliche oder zusammengehörige Artikel.",
        "Sie ist immer eine einzelne Farbe eines Produkts.",
        "Sie ersetzt das Impressum des Shops.",
        "Sie ist ein einmaliger Rabattcode."
      ],
      answer: 0,
      explanation: "Warengruppen strukturieren das Sortiment, zum Beispiel Oberbekleidung, Zubehör oder Ersatzteile."
    },
    {
      id: "lf2-kundeninformationen-03",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Ein Shop verkauft Bekleidung, Elektronik, Sportartikel und Haushaltswaren. Was ist daran besonders hoch?",
      options: [
        "Die Sortimentsbreite.",
        "Die Schriftgröße der Produktseite.",
        "Die Paginierung.",
        "Die Rückgabefrist."
      ],
      answer: 0,
      explanation: "Viele unterschiedliche Warengruppen bedeuten eine hohe Sortimentsbreite."
    },
    {
      id: "lf2-kundeninformationen-04",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Wodurch ist ein tiefes Sortiment gekennzeichnet?",
      options: [
        "Durch viele Varianten innerhalb einer Warengruppe oder eines Artikels.",
        "Durch besonders lange rechtliche Texte.",
        "Durch möglichst wenige Produktmerkmale.",
        "Durch eine Produktseite ohne Bilder."
      ],
      answer: 0,
      explanation: "Sortimentstiefe entsteht durch viele Ausführungen, Größen, Farben, Materialien oder Qualitätsstufen innerhalb eines Bereichs."
    },
    {
      id: "lf2-kundeninformationen-05",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Was ist ein Produktmerkmal?",
      options: [
        "Eine Eigenschaft eines Produkts, die es beschreibt oder unterscheidbar macht.",
        "Ein beliebiger Link im Footer.",
        "Nur die interne CSS-Klasse eines Buttons.",
        "Ein Kommentar im HTML-Code."
      ],
      answer: 0,
      explanation: "Produktmerkmale können Material, Größe, Farbe, Funktion, Qualität, Marke, Verpackung oder Serviceangaben sein."
    },
    {
      id: "lf2-kundeninformationen-06",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Aus welchen Bestandteilen besteht eine Maßangabe wie 250 ml?",
      options: [
        "Aus Zahlenwert und Einheit.",
        "Aus Marke und Claim.",
        "Aus Header und Footer.",
        "Aus Impressum und Datenschutz."
      ],
      answer: 0,
      explanation: "Bei 250 ml ist 250 der Zahlenwert und ml die Einheit. Beides muss verständlich und korrekt angegeben werden."
    },
    {
      id: "lf2-kundeninformationen-07",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Welche Aussage passt zu Testzeichen, Gütezeichen und Typenschild?",
      options: [
        "Sie liefern unterschiedliche Informationen zu Prüfung, Qualität oder technischer Identifikation.",
        "Sie sind immer frei erfundene Werbesymbole ohne Bedeutung.",
        "Sie ersetzen die Produktbeschreibung vollständig.",
        "Sie dürfen auf Produktdetailseiten nie erwähnt werden."
      ],
      answer: 0,
      explanation: "Testzeichen bestätigen Prüfungen, Gütezeichen stehen für Qualitätsanforderungen, Typenschilder liefern technische Identifikationsdaten."
    },
    {
      id: "lf2-kundeninformationen-08",
      module: "lf2-kundeninformationen",
      type: "choice",
      prompt: "Welche Information gehört zu Handling-Informationen auf einer Produktdetailseite?",
      options: [
        "Lagerung, Pflege, Montage, Sicherheit oder Entsorgung.",
        "Nur der Name des Webdesigners.",
        "Ausschließlich die Anzahl der Besucher auf der Startseite.",
        "Der Dateipfad der CSS-Datei."
      ],
      answer: 0,
      explanation: "Handling-Informationen helfen Kunden beim sachgerechten Umgang mit der Ware und vermeiden Fehlkäufe oder falsche Nutzung."
    },
    {
      id: "lf2-produktbeschreibung-01",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Warum ist eine gute Produktbeschreibung auf der Produktdetailseite wichtig?",
      options: [
        "Sie informiert Kunden, unterstützt die Kaufentscheidung und hilft bei der Auffindbarkeit.",
        "Sie ersetzt grundsätzlich alle Produktbilder.",
        "Sie muss immer aus dem Herstellerkatalog kopiert werden.",
        "Sie ist nur für interne Mitarbeitende gedacht."
      ],
      answer: 0,
      explanation: "Produktbeschreibungen verbinden sachliche Information, Verkaufswirkung und Suchmaschinenrelevanz."
    },
    {
      id: "lf2-produktbeschreibung-02",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Was sind Bullet Points in einer Produktbeschreibung?",
      options: [
        "Kurze, übersichtliche Stichpunkte mit wichtigen Vorteilen oder Eigenschaften.",
        "Lange juristische Pflichttexte im Footer.",
        "Automatisch generierte Dateinamen für Produktbilder.",
        "Zufällige Suchbegriffe ohne Zusammenhang zum Artikel."
      ],
      answer: 0,
      explanation: "Bullet Points machen zentrale Informationen schnell erfassbar und helfen beim Scannen der Produktseite."
    },
    {
      id: "lf2-produktbeschreibung-03",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Welche Formulierung ist für einen Produkttext am besten geeignet?",
      options: [
        "Die wasserabweisende Oberfläche schützt den Inhalt bei leichtem Regen.",
        "Das Produkt ist halt irgendwie mega krass.",
        "Greifen Sie sofort zu, sonst ist alles vorbei.",
        "Hiermit wird von uns ein Nutzen ausgearbeitet."
      ],
      answer: 0,
      explanation: "Gute Produkttexte sind konkret, aktiv, verständlich und verbinden ein Merkmal mit einem Kundennutzen."
    },
    {
      id: "lf2-produktbeschreibung-04",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Was ist mit Unique Content auf einer Produktdetailseite gemeint?",
      options: [
        "Ein eigenständig formulierter Text, der nicht einfach von anderen Seiten kopiert wurde.",
        "Ein Text, der nur aus Sonderzeichen besteht.",
        "Ein beliebiger Herstellertext, der in jedem Shop identisch ist.",
        "Eine Bilddatei ohne Produktinformationen."
      ],
      answer: 0,
      explanation: "Unique Content macht die Seite für Kunden und Suchmaschinen wertvoller, weil er eigenständig und passend zur Zielgruppe formuliert ist."
    },
    {
      id: "lf2-produktbeschreibung-05",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Welche Frage gehört in die Planung eines Produkttextes?",
      options: [
        "Welche Zielgruppe kauft den Artikel und welchen Nutzen erwartet sie?",
        "Welche Farbe hat der Header der CSS-Datei?",
        "Wie viele private Notizen stehen im Projektordner?",
        "Wie kann der Text möglichst unverständlich werden?"
      ],
      answer: 0,
      explanation: "Produkttexte sollten aus Zielgruppe, Informationsbedarf, Nutzen und Produkteigenschaften heraus geplant werden."
    },
    {
      id: "lf2-produktbeschreibung-06",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Was ist ein Kommunikationsstörer in Produkttexten?",
      options: [
        "Unklare Fachsprache, lange Satzketten, leere Floskeln oder Drucksprache.",
        "Eine klare Zwischenüberschrift.",
        "Ein präziser Kundennutzen.",
        "Eine kurze Liste mit Produkteigenschaften."
      ],
      answer: 0,
      explanation: "Kommunikationsstörer erschweren das Verstehen oder wirken auf Kunden unangenehm."
    },
    {
      id: "lf2-produktbeschreibung-07",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Welche Struktur hilft Kunden beim schnellen Erfassen einer Produktbeschreibung?",
      options: [
        "Titel, Kurzbeschreibung, Bullet Points, Zwischenüberschriften und bei Bedarf Langbeschreibung.",
        "Ein einziger unstrukturierter Block ohne Absätze.",
        "Nur ein Preis ohne weitere Informationen.",
        "Eine zufällige Liste interner Dateipfade."
      ],
      answer: 0,
      explanation: "Eine klare Struktur reduziert Suchaufwand und macht wichtige Informationen schneller sichtbar."
    },
    {
      id: "lf2-produktbeschreibung-08",
      module: "lf2-produktbeschreibung",
      type: "choice",
      prompt: "Wie sollten Keywords in Produktbeschreibungen eingesetzt werden?",
      options: [
        "Natürlich, passend zur Suchabsicht und ohne unnötige Wiederholung.",
        "Hundertfach hintereinander am Seitenende.",
        "Nur in weißer Schrift auf weißem Hintergrund.",
        "Ausschließlich in internen Kommentaren."
      ],
      answer: 0,
      explanation: "Keywords helfen nur, wenn sie sinnvoll zum Produkt, zur Zielgruppe und zum tatsächlichen Text passen."
    },
    {
      id: "lf2-artikelauswahl-01",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Warum braucht die Produktdetailseite gute Auswahlmöglichkeiten für Artikelvarianten?",
      options: [
        "Damit Kunden die passende Ausführung auswählen können und weniger unsicher sind.",
        "Damit der Warenkorb versteckt werden kann.",
        "Damit Produktbilder grundsätzlich unnötig werden.",
        "Damit alle Varianten denselben Preis und dieselbe Lieferzeit haben müssen."
      ],
      answer: 0,
      explanation: "Varianten wie Farbe, Größe oder Modell müssen leicht auswählbar sein. Das reduziert Unsicherheit und unterstützt die Kaufentscheidung."
    },
    {
      id: "lf2-artikelauswahl-02",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Welche Angaben sollten sich idealerweise anpassen, wenn ein Kunde eine andere Variante wählt?",
      options: [
        "Nur die interne Dateigröße des Produktbildes.",
        "Bild, Preis, Verfügbarkeit, Lieferzeit und passende Produktdaten.",
        "Das Impressum des Shops.",
        "Die gesamte Navigation des Webshops ohne Bezug zum Produkt."
      ],
      answer: 1,
      explanation: "Eine Variante kann andere Bilder, Preise, Lagerbestände oder Lieferzeiten haben. Diese Informationen sollten zur aktuellen Auswahl passen."
    },
    {
      id: "lf2-artikelauswahl-03",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Welche Lieferzeitangabe ist für Kunden am hilfreichsten?",
      options: [
        "ca. irgendwann",
        "voraussichtlich bald",
        "Lieferung in 2-3 Werktagen",
        "i. d. R. demnächst"
      ],
      answer: 2,
      explanation: "Konkrete Lieferzeitangaben helfen Kunden, den Anlieferungstermin einzuschätzen. Ungefähre Wörter schaffen eher Unsicherheit."
    },
    {
      id: "lf2-artikelauswahl-04",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Welche Maßnahme ist eine typische Auswahlhilfe auf einer Produktdetailseite?",
      options: [
        "Eine Größentabelle oder Messhilfe.",
        "Ein versteckter Warenkorb ohne Inhalt.",
        "Ein zufälliger Rabattcode ohne Erklärung.",
        "Ein Footer ohne Kontaktmöglichkeit."
      ],
      answer: 0,
      explanation: "Größentabellen, Messhilfen, Symbole, Infoblöcke oder Beratung helfen Kunden, die richtige Variante zu finden."
    },
    {
      id: "lf2-artikelauswahl-05",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Wozu dient ein Produktvergleich?",
      options: [
        "Er zeigt wesentliche Produktmerkmale nebeneinander, damit Unterschiede schnell erkennbar werden.",
        "Er verhindert, dass Kunden technische Daten sehen.",
        "Er ersetzt grundsätzlich den Preis.",
        "Er zeigt nur Werbung ohne Bezug zum Produkt."
      ],
      answer: 0,
      explanation: "Produktvergleiche helfen bei ähnlichen Artikeln, indem wichtige Merkmale übersichtlich gegenübergestellt werden."
    },
    {
      id: "lf2-artikelauswahl-06",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Was bedeutet Cross-Selling auf der Produktdetailseite?",
      options: [
        "Ergänzende oder passende Produkte zum betrachteten Artikel anbieten.",
        "Kunden absichtlich zu einem falschen Artikel führen.",
        "Die Produktbeschreibung löschen.",
        "Die Lieferzeit verstecken."
      ],
      answer: 0,
      explanation: "Cross-Selling empfiehlt sinnvolle Ergänzungsartikel oder passende Alternativen und kann Kundennutzen sowie Warenkorbwert erhöhen."
    },
    {
      id: "lf2-artikelauswahl-07",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Welche Bestandteile gehören typischerweise in eine Buy-Box?",
      options: [
        "Preis, Versandkosten, Varianten, Menge, Verfügbarkeit, Lieferzeit und Call-to-Action.",
        "Nur der Name der CSS-Datei.",
        "Ausschließlich ein zufälliges Produktfoto.",
        "Nur das Impressum des Unternehmens."
      ],
      answer: 0,
      explanation: "Die Buy-Box bündelt die kaufentscheidenden Informationen und den nächsten Handlungsschritt, etwa 'In den Warenkorb'."
    },
    {
      id: "lf2-artikelauswahl-08",
      module: "lf2-artikelauswahl",
      type: "choice",
      prompt: "Was sollte nach dem Klick auf 'In den Warenkorb' deutlich werden?",
      options: [
        "Dass der Artikel hinzugefügt wurde und welche nächsten Schritte möglich sind.",
        "Dass die Seite ohne Rückmeldung leer bleibt.",
        "Dass der Kunde sofort zum Kauf gezwungen wird.",
        "Dass alle Produktinformationen verschwinden."
      ],
      answer: 0,
      explanation: "Eine Bestätigung oder ein Warenkorb-Layer zeigt den hinzugefügten Artikel, wichtige Eckdaten und Wege wie weiter einkaufen, Warenkorb ansehen oder zur Kasse gehen."
    },
    {
      id: "lf2-visualisierungen-01",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Warum sind Produktfotos auf Produktdetailseiten besonders wichtig?",
      options: [
        "Weil Kunden das Produkt online nicht anfassen oder direkt begutachten können.",
        "Weil Produkttexte dadurch grundsätzlich verboten sind.",
        "Weil Bilder immer jede Dateigröße haben dürfen.",
        "Weil Fotos rechtliche Pflichtangaben ersetzen."
      ],
      answer: 0,
      explanation: "Produktbilder gleichen einen Nachteil des Online-Handels aus: Kunden müssen Produktmerkmale aus der Ferne beurteilen."
    },
    {
      id: "lf2-visualisierungen-02",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Welche Kombination unterstützt Kunden bei der visuellen Produktbeurteilung am besten?",
      options: [
        "Ein unscharfes Bild ohne Varianten und ohne Details.",
        "Mehrere Perspektiven, Detailaufnahmen, Variantenbilder und ein einheitlicher Stil.",
        "Nur ein Herstellerlogo ohne Produktansicht.",
        "Ausschließlich sehr kleine Vorschaubilder ohne Vergrößerung."
      ],
      answer: 1,
      explanation: "Mehrere passende Ansichten zeigen Form, Material, Farbe, Details und Varianten deutlich besser als ein einzelnes Bild."
    },
    {
      id: "lf2-visualisierungen-03",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Welche Aufgabe haben Thumbnails in einer Produktbild-Galerie?",
      options: [
        "Sie ersetzen die Produktdetailseite vollständig.",
        "Sie zeigen kleine Vorschauen und ermöglichen den schnellen Wechsel zwischen Ansichten.",
        "Sie erhöhen immer automatisch die Dateigröße.",
        "Sie verhindern, dass Kunden Details erkennen."
      ],
      answer: 1,
      explanation: "Thumbnails sind Vorschaubilder. Sie helfen Kunden, zwischen Gesamtansicht, Detail, Variante oder Nutzungssituation zu wechseln."
    },
    {
      id: "lf2-visualisierungen-04",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Was beschreibt die Bildauflösung im Web-Kontext am treffendsten?",
      options: [
        "Die Anzahl der Bildpunkte, zum Beispiel Breite mal Höhe in Pixeln.",
        "Den Verkaufspreis eines Artikels.",
        "Die Lieferzeit eines Produkts.",
        "Die Anzahl der Warenkorb-Schritte."
      ],
      answer: 0,
      explanation: "Die Auflösung beschreibt, aus wie vielen Pixeln ein Bild besteht. Sie beeinflusst Detaildarstellung und mögliche Bildgröße."
    },
    {
      id: "lf2-visualisierungen-05",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Warum sollten Produktbilder für den Webshop komprimiert werden?",
      options: [
        "Um Ladezeiten und Speicherbedarf zu verringern, ohne wichtige Details sichtbar zu verlieren.",
        "Damit jedes Bild absichtlich unscharf wird.",
        "Damit Kunden keine Bilder mehr sehen.",
        "Damit die Produktbeschreibung gelöscht werden kann."
      ],
      answer: 0,
      explanation: "Komprimierung reduziert Dateigröße. Sie ist sinnvoll, solange die sichtbare Qualität für Kunden ausreichend bleibt."
    },
    {
      id: "lf2-visualisierungen-06",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Welches Dateiformat eignet sich typischerweise für Fotos im Webshop?",
      options: [
        "JPG oder WebP, wenn gute Qualität bei kleiner Dateigröße gebraucht wird.",
        "Eine Textdatei mit der Endung .txt.",
        "Nur ein Tabellenblatt ohne Bilddaten.",
        "Ein beliebiger Dateiname ohne Format."
      ],
      answer: 0,
      explanation: "Fotos werden häufig als JPG oder WebP genutzt. Für transparente Grafiken ist eher PNG geeignet."
    },
    {
      id: "lf2-visualisierungen-07",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Wann ist ein Produktvideo auf der Produktdetailseite besonders sinnvoll?",
      options: [
        "Wenn Funktionen, Größenverhältnisse, Anwendung oder Montage besser gezeigt als beschrieben werden können.",
        "Wenn es automatisch mit Ton starten und Kunden stören soll.",
        "Wenn es keinerlei Bezug zum Produkt hat.",
        "Wenn es alle rechtlichen und technischen Fragen verschleiert."
      ],
      answer: 0,
      explanation: "Videos liefern Zusatznutzen, wenn sie Anwendung, Bewegung, Funktion oder erklärungsbedürftige Details verständlich machen."
    },
    {
      id: "lf2-visualisierungen-08",
      module: "lf2-visualisierungen",
      type: "choice",
      prompt: "Was sollte beim Einbinden von Produktvideos beachtet werden?",
      options: [
        "Relevanz, Rechte, Ladezeit, Einbindung und eine nicht aufdringliche Wiedergabe.",
        "Nur möglichst viele Videos, egal ob sie zum Produkt passen.",
        "Automatischer Tonstart ohne Nutzerentscheidung.",
        "Dass Produktbilder und Texte danach entfernt werden."
      ],
      answer: 0,
      explanation: "Videos sollten bewusst eingesetzt werden: rechtlich geklärt, technisch passend und für Kunden hilfreich."
    },
    {
      id: "lf2-preisgestaltung-01",
      module: "lf2-preisgestaltung",
      type: "number",
      prompt: "Ein Webshop kauft einen Artikel zum Bezugspreis von 10,00 € ein und kalkuliert 30 % Handlungskosten auf den Bezugspreis. Wie hoch sind die Selbstkosten je Stück?",
      suffix: "€",
      answer: 13,
      tolerance: 0.01,
      explanation: "10,00 € + 30 % Handlungskosten (3,00 €) = 13,00 € Selbstkosten. Sie markieren die langfristige Preisuntergrenze."
    },
    {
      id: "lf2-preisgestaltung-02",
      module: "lf2-preisgestaltung",
      type: "number",
      prompt: "Ein Artikel kostet 19,36 € netto und verkauft sich 100-mal im Monat. Nach einer Preissenkung auf 18,50 € werden 130 Stück verkauft. Wie hoch ist der Monatsumsatz nach der Senkung?",
      suffix: "€",
      answer: 2405,
      tolerance: 0.5,
      explanation: "18,50 € × 130 Stück = 2.405 € – deutlich mehr als vorher (19,36 € × 100 = 1.936 €). Eine Preissenkung kann sich über die Menge lohnen."
    },
    {
      id: "lf2-preisgestaltung-03",
      module: "lf2-preisgestaltung",
      type: "number",
      prompt: "Ein Duschgel mit 250 ml Inhalt kostet 2,50 €. Welchen Grundpreis je Liter muss der Webshop nach der Preisangabenverordnung angeben?",
      suffix: "€ je Liter",
      answer: 10,
      tolerance: 0.01,
      explanation: "2,50 € ÷ 0,25 l = 10,00 € je Liter. Der Grundpreis macht Angebote mit unterschiedlichen Packungsgrößen vergleichbar."
    },
    {
      id: "lf2-preisgestaltung-04",
      module: "lf2-preisgestaltung",
      type: "choice",
      prompt: "Ein Hersteller nennt für ein Produkt eine unverbindliche Preisempfehlung (UVP) von 49,99 €. Was bedeutet das für den Webshop?",
      options: [
        "Der Shop muss exakt diesen Preis verlangen.",
        "Der Shop darf höchstens 10 % davon abweichen.",
        "Der Shop ist an die Empfehlung nicht gebunden und legt seinen Preis selbst fest.",
        "Der Shop darf das Produkt nur mit schriftlicher Genehmigung verkaufen."
      ],
      answer: 2,
      explanation: "Unverbindliche Preisempfehlungen sind zulässig, aber nicht bindend. Eine verbindliche Preisbindung gibt es nur in Ausnahmen wie bei Verlagserzeugnissen."
    },
    {
      id: "lf2-preisgestaltung-05",
      module: "lf2-preisgestaltung",
      type: "choice",
      prompt: "Ein Shop bietet einen Weißwein für 7,99 € statt 8,00 € an. Welcher Effekt der Preiswahrnehmung wird hier genutzt?",
      options: [
        "Der Schnäppcheneffekt bei Kombinationsangeboten",
        "Der Preisrundungs- und Preisschwelleneffekt",
        "Die künstliche Verknappung",
        "Der Eckpreisartikel-Effekt"
      ],
      answer: 1,
      explanation: "Preise knapp unter ganzen Eurobeträgen wirken deutlich günstiger, weil das Unterbewusstsein Preisschwellen wahrnimmt."
    },
    {
      id: "lf2-preisgestaltung-06",
      module: "lf2-preisgestaltung",
      type: "choice",
      prompt: "Skier werden im Sommer deutlich günstiger angeboten als zur Weihnachtszeit. Welche Form der Preisdifferenzierung liegt vor?",
      options: [
        "Zeitliche Preisdifferenzierung",
        "Räumliche Preisdifferenzierung",
        "Personelle Preisdifferenzierung",
        "Mengenmäßige Preisdifferenzierung"
      ],
      answer: 0,
      explanation: "Die gleiche Ware wird zu verschiedenen Zeiten unterschiedlich bepreist – typisch für Saisonware."
    },
    {
      id: "lf2-preisgestaltung-07",
      module: "lf2-preisgestaltung",
      type: "choice",
      prompt: "Ein Kunde bestellt 100 Flaschen Wein, erhält 110 Flaschen und bezahlt 100. Wie heißt diese Rabattform?",
      options: [
        "Skonto",
        "Treuerabatt",
        "Dreingabe",
        "Naturalrabatt als Draufgabe"
      ],
      answer: 3,
      explanation: "Bei der Draufgabe gibt es mehr Ware als bestellt. Bei der Dreingabe erhält der Kunde die gewünschte Menge, bezahlt aber nur einen Teil."
    },
    {
      id: "lf2-preisgestaltung-08",
      module: "lf2-preisgestaltung",
      type: "choice",
      prompt: "Ein Webshop bewirbt einen Artikel mit „nur 39,99 € statt 59,99 €“. Was verlangt die Preisangabenverordnung seit 2022 zusätzlich?",
      options: [
        "Ein Gutachten über die Preiswürdigkeit des Artikels.",
        "Die Angabe des niedrigsten Gesamtpreises der letzten 30 Tage.",
        "Eine Genehmigung der Preissenkung durch die IHK.",
        "Nichts – Streichpreise sind völlig frei gestaltbar."
      ],
      answer: 1,
      explanation: "Nach § 11 PAngV muss bei Preisermäßigungen der niedrigste Preis der letzten 30 Tage genannt werden. Das verhindert Mondpreise vor Rabattaktionen."
    },
    {
      id: "lf2-warenwirtschaft-01",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Was umfasst der Begriff Warenwirtschaft in einem Handelsunternehmen?",
      options: [
        "Nur die Buchhaltung des Unternehmens.",
        "Alle Tätigkeiten rund um Beschaffung, Lagerung und Absatz der Ware.",
        "Ausschließlich die Werbung für neue Produkte.",
        "Nur die Gestaltung der Webshop-Startseite."
      ],
      answer: 1,
      explanation: "Warenwirtschaft ist der gesamte Warenbereich des Unternehmens – von der Beschaffung über die Lagerung bis zum Absatz."
    },
    {
      id: "lf2-warenwirtschaft-02",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Eine Mitarbeiterin kontrolliert die Rechnung eines Lieferanten und bucht den neuen Bestand ins System. Wozu gehören diese Tätigkeiten?",
      options: [
        "Zum Warenfluss, weil Ware bewegt wird.",
        "Zu keinem der beiden Flüsse.",
        "Zum Informationsfluss, weil mit Daten über Waren gearbeitet wird.",
        "Zur Warenpräsentation im Shop."
      ],
      answer: 2,
      explanation: "Beim Informationsfluss arbeiten Beschäftigte mit Informationen über Waren – etwa Belege prüfen und Bestände buchen. Der Warenfluss bewegt die Ware physisch."
    },
    {
      id: "lf2-warenwirtschaft-03",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Welcher Zielkonflikt tritt in der Warenwirtschaft auf?",
      options: [
        "Niedrige Lagerbestände (wenig Kapitalbindung) gegen sofortige Lieferfähigkeit für Kunden.",
        "Schöne Produktfotos gegen schnelle Ladezeiten.",
        "Hohe Werbekosten gegen niedrige Personalkosten.",
        "Viele Filialen gegen wenige Webshops."
      ],
      answer: 0,
      explanation: "Ware bindet Kapital und verursacht Lagerkosten – gleichzeitig sollen Kunden sofort beliefert werden. Warenwirtschaftssysteme liefern die Daten, um diesen Konflikt zu steuern."
    },
    {
      id: "lf2-warenwirtschaft-04",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Was zeichnet ein integriertes Warenwirtschaftssystem aus?",
      options: [
        "Es funktioniert komplett ohne Computer.",
        "Es erfasst nur einen Teil der Warenwirtschaft per EDV.",
        "Es dient ausschließlich der Kassenabrechnung.",
        "Es bindet Kunden, Lieferanten und Banken ein – Daten fließen ohne Mehrfacherfassung direkt zwischen den Systemen."
      ],
      answer: 3,
      explanation: "Integrierte Systeme verbinden die Partner elektronisch, sodass Daten nur einmal erfasst werden müssen. Geschlossene Systeme lösen alles intern per EDV, offene nur teilweise."
    },
    {
      id: "lf2-warenwirtschaft-05",
      module: "lf2-warenwirtschaft",
      type: "number",
      prompt: "Aus wie vielen Ziffern besteht eine GTIN (früher EAN), wie sie auf fast jeder Verpackung als Strichcode aufgedruckt ist?",
      suffix: "Ziffern",
      answer: 13,
      tolerance: 0,
      explanation: "Die klassische GTIN hat 13 Ziffern: Länderkennzeichen, Unternehmensnummer, individuelle Artikelnummer und Prüfziffer."
    },
    {
      id: "lf2-warenwirtschaft-06",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Wozu dient die GTIN im Handel?",
      options: [
        "Sie ersetzt das Impressum des Herstellers.",
        "Sie identifiziert jede Mengen- und Verpackungseinheit eindeutig und ermöglicht artikelgenaue Datenverarbeitung auf allen Handelsstufen.",
        "Sie gibt den Verkaufspreis gesetzlich vor.",
        "Sie ist nur eine Dekoration auf der Verpackung."
      ],
      answer: 1,
      explanation: "Die GTIN begleitet den Artikel vom Hersteller bis zum Endverbraucher und macht Verkäufe artikelgenau erfassbar – etwa beim Scannen an der Kasse."
    },
    {
      id: "lf2-warenwirtschaft-07",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Was ist der zentrale Vorteil eines ERP-Systems gegenüber vielen einzelnen Programmen?",
      options: [
        "Es ist immer kostenlos.",
        "Es benötigt keinerlei Einarbeitung.",
        "Alle Geschäftsbereiche arbeiten mit einer zentralen Datenbasis – einmal erfasste Daten stehen überall aktuell zur Verfügung.",
        "Es funktioniert nur ohne Internetverbindung."
      ],
      answer: 2,
      explanation: "ERP-Systeme verknüpfen Warenwirtschaft, Verkauf, Finanzen, Personal und mehr über eine gemeinsame Datenbasis und vermeiden Mehrfacherfassung."
    },
    {
      id: "lf2-warenwirtschaft-08",
      module: "lf2-warenwirtschaft",
      type: "choice",
      prompt: "Worin unterscheidet sich ein Matrixcode (QR-Code) vom klassischen Strichcode?",
      options: [
        "Er ist zweidimensional und kann deutlich mehr Informationen speichern.",
        "Er kann nur von Spezialkameras der Polizei gelesen werden.",
        "Er funktioniert ausschließlich auf Papier.",
        "Er enthält immer den Verkaufspreis in Klartext."
      ],
      answer: 0,
      explanation: "Matrixcodes speichern Informationen in zwei Dimensionen und fassen dadurch deutlich mehr Daten als eindimensionale Strichcodes."
    },
    {
      id: "lf6-servicekanaele-01",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Eine Kundin braucht eine ausführliche Beratung zu einem erklärungsbedürftigen Produkt mit vielen Rückfragen. Welcher Kanal passt am besten?",
      options: [
        "Ein einzelner FAQ-Eintrag.",
        "Eine Videokonferenz oder ein Telefonat mit Beratungstermin.",
        "Ein öffentlicher Social-Media-Kommentar.",
        "Ein automatischer Chatbot ohne Weiterleitung."
      ],
      answer: 1,
      explanation: "Komplexe Beratung braucht Dialog in Echtzeit – ideal per Videokonferenz oder Telefon. Kurze Standardfragen passen dagegen gut in Chat oder FAQ."
    },
    {
      id: "lf6-servicekanaele-02",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Was gehört an den Anfang einer guten Service-E-Mail zu einer Beschwerde?",
      options: [
        "Eine lange Entschuldigungsgeschichte ohne Ergebnis.",
        "Die Firmengeschichte des Shops.",
        "Die Lösung beziehungsweise der konkrete nächste Schritt für den Kunden.",
        "Ein Hinweis, dass der Kunde selbst schuld ist."
      ],
      answer: 2,
      explanation: "Kunden wollen zuerst wissen, wie es weitergeht. Klarer Betreff, persönliche Anrede und die Lösung am Anfang machen die E-Mail kundenorientiert."
    },
    {
      id: "lf6-servicekanaele-03",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Ein Kunde beschwert sich öffentlich auf Social Media über eine falsche Lieferung. Wie reagiert der Shop professionell?",
      options: [
        "Den Kommentar löschen und den Kunden blockieren.",
        "Öffentlich zurückschimpfen, um Stärke zu zeigen.",
        "Gar nicht reagieren, das verläuft von selbst.",
        "Öffentlich freundlich antworten, eine Lösung anbieten und Details per Direktnachricht klären."
      ],
      answer: 3,
      explanation: "Social-Media-Service hat Publikum: Eine souveräne, lösungsorientierte Antwort überzeugt auch alle Mitlesenden. Bestelldaten gehören in die Direktnachricht."
    },
    {
      id: "lf6-servicekanaele-04",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Wo liegt die Grenze eines Chatbots im Kundenservice?",
      options: [
        "Er kann keine Standardfragen wie Lieferzeiten beantworten.",
        "Er funktioniert nur werktags.",
        "Komplexe oder emotionale Anliegen sollte er erkennbar an einen Menschen übergeben.",
        "Er darf rechtlich nur nachts eingesetzt werden."
      ],
      answer: 2,
      explanation: "Chatbots entlasten bei Routinefragen rund um die Uhr. Bei komplexen oder emotionalen Fällen braucht es die Übergabe an Menschen – sonst eskaliert der Frust."
    },
    {
      id: "lf6-servicekanaele-05",
      module: "lf6-servicekanaele",
      type: "number",
      prompt: "Ein Newsletter geht an 4.000 Empfänger, 720 öffnen ihn. Wie hoch ist die Öffnungsrate?",
      suffix: "%",
      answer: 18,
      tolerance: 0.1,
      explanation: "720 / 4.000 × 100 = 18 %. Die Öffnungsrate zeigt, wie gut Betreff und Absender funktionieren – gemessen wird sie mit den Mitteln der Webanalyse."
    },
    {
      id: "lf6-servicekanaele-06",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Warum nutzen seriöse Shops für die Newsletter-Anmeldung das Double-Opt-in-Verfahren?",
      options: [
        "Weil so die Einwilligung nachweisbar ist: Erst der Klick auf den Bestätigungslink aktiviert das Abo.",
        "Weil dadurch doppelt so viele Newsletter verschickt werden dürfen.",
        "Weil die E-Mails dann schneller ankommen.",
        "Weil der Abmeldelink dann entfallen darf."
      ],
      answer: 0,
      explanation: "Beim Double-Opt-in bestätigt der Empfänger die Anmeldung per Link. Das belegt die Einwilligung – der Abmeldelink bleibt trotzdem in jeder Ausgabe Pflicht."
    },
    {
      id: "lf6-servicekanaele-07",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Was gehört zur guten Vorbereitung einer Kundenberatung per Videokonferenz?",
      options: [
        "Erst im Termin prüfen, ob Kamera und Mikrofon funktionieren.",
        "Technik vorher testen, ruhige Umgebung schaffen und Unterlagen für die Bildschirmfreigabe bereithalten.",
        "Nebenbei andere Kundenanfragen beantworten.",
        "Die Kamera grundsätzlich ausgeschaltet lassen."
      ],
      answer: 1,
      explanation: "Ein professioneller Videocall wirkt vorbereitet: funktionierende Technik, ruhiger Hintergrund und griffbereite Unterlagen für die Bildschirmfreigabe."
    },
    {
      id: "lf6-servicekanaele-08",
      module: "lf6-servicekanaele",
      type: "choice",
      prompt: "Welchen doppelten Nutzen haben gute FAQ- und Hilfeseiten?",
      options: [
        "Sie ersetzen das Impressum und die Datenschutzerklärung.",
        "Sie machen den Shop automatisch günstiger.",
        "Sie verhindern jede Beschwerde für immer.",
        "Kunden finden Antworten rund um die Uhr – auch über Suchmaschinen – und das Serviceteam wird entlastet."
      ],
      answer: 3,
      explanation: "Viele Kunden suchen ihre Frage zuerst über Suchmaschinen. Gute Hilfeinhalte beantworten sie sofort und reduzieren gleichzeitig das Anfragevolumen im Service."
    },
    {
      id: "lf6-email-01",
      module: "lf6-email",
      type: "choice",
      prompt: "Warum muss eine geschäftliche E-Mail genauso sorgfältig gestaltet werden wie ein Geschäftsbrief auf Papier?",
      options: [
        "Weil E-Mails immer ausgedruckt und abgeheftet werden müssen.",
        "Weil sie das Unternehmen repräsentiert und dieselben gesetzlichen Geschäftsangaben enthalten muss.",
        "Weil E-Mails sonst technisch nicht zugestellt werden können.",
        "Weil nur formatierte E-Mails verschlüsselt werden dürfen."
      ],
      answer: 1,
      explanation: "Jede Kontaktaufnahme repräsentiert das Unternehmen. Für geschäftliche E-Mails gelten deshalb dieselben Vorschriften zu den Geschäftsangaben wie für den Geschäftsbrief (u. a. §§ 37a, 125a HGB)."
    },
    {
      id: "lf6-email-02",
      module: "lf6-email",
      type: "choice",
      prompt: "Die Vertriebsleitung soll über dein Angebot an einen Kunden informiert werden, ohne dass der Kunde das sieht. Welches Feld nutzt du?",
      options: [
        "CC – dort sind Kopien grundsätzlich unsichtbar.",
        "Den Betreff, mit dem Zusatz „Kopie an Vertrieb“.",
        "BCC – der Empfänger erkennt nicht, dass eine Kopie an weitere Personen ging.",
        "Ein zweites Anschreiben per Post."
      ],
      answer: 2,
      explanation: "Bei BCC (Blind Carbon Copy) sehen die übrigen Empfänger die Kopie-Adressen nicht. Bei CC (Carbon Copy) sind alle Kopie-Empfänger dagegen für alle sichtbar."
    },
    {
      id: "lf6-email-03",
      module: "lf6-email",
      type: "choice",
      prompt: "Welche Aussage zum Betreff einer geschäftlichen E-Mail ist richtig?",
      options: [
        "Er ist zwingend anzugeben und fasst den Inhalt kurz und präzise zusammen.",
        "Er ist freiwillig und kann leer bleiben.",
        "Er darf beim Beantworten niemals verändert werden, auch wenn sich das Thema ändert.",
        "Er sollte möglichst viele Umlaute und Sonderzeichen enthalten."
      ],
      answer: 0,
      explanation: "Der Betreff ist Pflicht und dient als kurze Inhaltsangabe. Ändert sich beim Weiterleiten oder Beantworten der Inhalt, wird der Betreff angepasst – und für internationale Mails besser auf Umlaute und Akzente verzichten."
    },
    {
      id: "lf6-email-04",
      module: "lf6-email",
      type: "choice",
      prompt: "In welcher Reihenfolge ist der Abschluss einer geschäftlichen E-Mail aufgebaut?",
      options: [
        "Kommunikationsdaten, Gruß, Firmenname, Bearbeiter.",
        "Bearbeiter, Gruß, gesetzliche Angaben, Firmenname.",
        "Firmenname, Gruß, Bearbeiter, Kommunikationsdaten.",
        "Gruß, Firmenname, Bearbeiter mit Zusatz, Kommunikationsdaten und gesetzliche Angaben."
      ],
      answer: 3,
      explanation: "Nach dem Brieftext folgt mit Leerzeile der Gruß, dann Firmenname, Name der Bearbeiterin oder des Bearbeiters (mit i. A., i. V. oder ppa.) und zuletzt Kommunikationsdaten samt gesetzlicher Angaben – oft automatisch per Signatur."
    },
    {
      id: "lf6-email-05",
      module: "lf6-email",
      type: "number",
      prompt: "Ein Unternehmen ersetzt monatlich 1.200 Briefe (Porto je 0,95 €) durch E-Mails. Wie viel Porto spart es im Jahr?",
      suffix: "€",
      answer: 13680,
      tolerance: 1,
      explanation: "1.200 × 0,95 € = 1.140 € pro Monat, × 12 Monate = 13.680 € im Jahr. Kosteneinsparung ist neben Schnelligkeit und ständiger Erreichbarkeit ein Hauptvorteil der E-Mail."
    },
    {
      id: "lf6-email-06",
      module: "lf6-email",
      type: "choice",
      prompt: "Unter einer E-Mail steht „ppa. Sandra Krause“. Was bedeutet der Zusatz?",
      options: [
        "Sandra Krause ist Auszubildende im ersten Lehrjahr.",
        "Sandra Krause unterschreibt als Prokuristin (per Prokura).",
        "Die E-Mail wurde automatisch von einem Programm erstellt.",
        "Die E-Mail ist nur ein unverbindlicher Entwurf."
      ],
      answer: 1,
      explanation: "Die Zusätze zeigen die Vertretungsbefugnis: i. A. = im Auftrag, i. V. = in Vollmacht, ppa. = per Prokura – die weitreichendste kaufmännische Vollmacht."
    },
    {
      id: "lf6-email-07",
      module: "lf6-email",
      type: "choice",
      prompt: "Warum unterliegt der geschäftliche E-Mail-Verkehr dem Datenschutz?",
      options: [
        "Weil jede E-Mail automatisch beim Registergericht gespeichert wird.",
        "Weil das @-Zeichen markenrechtlich geschützt ist.",
        "Weil E-Mail-Adressen und E-Mail-Inhalte zu den personenbezogenen Daten zählen.",
        "Nur Newsletter unterliegen dem Datenschutz, normale E-Mails nicht."
      ],
      answer: 2,
      explanation: "E-Mail-Adressen und Inhalte sind personenbezogene Daten. Deshalb gehören Zugangsschutz, Verschlüsselung, Virenscanner und Firewall sowie datenschutzkonforme Weiterleitung und Archivierung zum Pflichtprogramm."
    },
    {
      id: "lf6-email-08",
      module: "lf6-email",
      type: "choice",
      prompt: "Ein Kollege will vertrauliche Kundendaten als unverschlüsselte E-Mail-Anlage versenden. Was ist die richtige Reaktion?",
      options: [
        "Kein Problem – E-Mails können unterwegs nicht mitgelesen werden.",
        "Hauptsache BCC verwenden, dann sind die Daten sicher.",
        "Die Daten vorher ausdrucken, das ist immer datenschutzkonform.",
        "Stopp: Vertrauliche Daten nur verschlüsselt übermitteln – DSGVO-Verstöße können Bußgelder bis 20 Millionen Euro kosten."
      ],
      answer: 3,
      explanation: "Vertrauliche Inhalte gehören nur verschlüsselt in die E-Mail. Die DSGVO sieht bei Datenschutzverstößen Bußgelder bis 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes vor."
    },
    {
      id: "lf6-social-media-01",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Was unterscheidet Social Media grundlegend von der Kommunikation per E-Mail?",
      options: [
        "Social Media funktioniert nur mit Werbebudget.",
        "Social Media ist Many-to-Many-Kommunikation in Echtzeit – E-Mail ist One-to-One.",
        "E-Mails erreichen grundsätzlich mehr Menschen als Social Media.",
        "In Social Media gibt es keine rechtlichen Regeln."
      ],
      answer: 1,
      explanation: "Soziale Medien ermöglichen den Austausch vieler mit vielen in Echtzeit. Die E-Mail richtet sich dagegen an einen bestimmten Personenkreis – One-to-One-Kommunikation."
    },
    {
      id: "lf6-social-media-02",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Eine Falschmeldung über deinen Shop verbreitet sich „viral“. Was bedeutet das – und warum ist es gefährlich?",
      options: [
        "Sie wird automatisch von der Plattform gelöscht und ist harmlos.",
        "Sie ist nur für Follower des Shops sichtbar.",
        "Sie verbreitet sich wie ein Virus in Sekunden an eine breite Öffentlichkeit – auch schnelles Reagieren verhindert Imageschäden nicht immer.",
        "Sie wird erst nach behördlicher Prüfung veröffentlicht."
      ],
      answer: 2,
      explanation: "Viral heißt: Inhalte verbreiten sich in wenigen Sekunden an eine breite Öffentlichkeit. Fake News können deshalb bleibende Schäden wie Image- oder Vertrauensverlust verursachen, selbst bei schneller Reaktion."
    },
    {
      id: "lf6-social-media-03",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Deinem Shop ist ein Fehler passiert, der öffentlich diskutiert wird. Wie reagierst du nach den Grundsätzen guter Social-Media-Kommunikation?",
      options: [
        "Den Fehler offen eingestehen und eine Lösung anbieten – das wird als Stärke wahrgenommen.",
        "Den Fehler leugnen, bis Beweise auftauchen.",
        "Alle kritischen Kommentare löschen.",
        "Das Profil vorübergehend deaktivieren."
      ],
      answer: 0,
      explanation: "Social Media erwartet Offenheit und Ehrlichkeit. Wer Fehler eingesteht statt sie zu verschleiern, kann das Ansehen des Unternehmens sogar verbessern."
    },
    {
      id: "lf6-social-media-04",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Du willst ein stimmungsvolles Foto aus dem Internet für den Unternehmensauftritt posten. Was gilt?",
      options: [
        "Alles im Internet darf frei verwendet werden.",
        "Ein Bildnachweis in kleiner Schrift genügt immer.",
        "Hauptsache, das Foto wird leicht bearbeitet.",
        "Bestehende Fotos sind meist urheberrechtlich geschützt – ohne Einwilligung des Urhebers darf es nicht verwendet werden; abgebildete Personen müssen ebenfalls zustimmen."
      ],
      answer: 3,
      explanation: "Fremde Bilder, Videos und Texte sind fast immer urheberrechtlich geschützt. Zusätzlich gilt das Recht am eigenen Bild: Erkennbare Personen müssen der Veröffentlichung zustimmen."
    },
    {
      id: "lf6-social-media-05",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Warum kann sogar ein „Gefällt mir“-Klick des Unternehmens problematisch sein?",
      options: [
        "Likes kosten für Unternehmensseiten eine Gebühr.",
        "Wer Beiträge mit Links auf rechtswidrige Inhalte liked oder teilt, kann sich strafbar machen.",
        "Likes verringern die Reichweite der eigenen Seite.",
        "Unternehmen dürfen grundsätzlich keine Beiträge liken."
      ],
      answer: 1,
      explanation: "Beim Verlinken, Teilen und selbst beim Kommentieren mit „Gefällt mir“ haftet, wer auf rechtswidrige Inhalte verweist. Solche Inhalte auf der eigenen Präsenz müssen zügig gelöscht werden."
    },
    {
      id: "lf6-social-media-06",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Eine Influencerin stellt den Bürostuhl deines Shops in ihrem Video vor und wird dafür bezahlt. Was ist zwingend nötig?",
      options: [
        "Nichts – Empfehlungen sind formfrei.",
        "Das Video darf höchstens 60 Sekunden lang sein.",
        "Die kommerzielle Produktvorstellung muss als Werbung gekennzeichnet werden.",
        "Der Preis des Produkts muss geheim bleiben."
      ],
      answer: 2,
      explanation: "Wer Produkte aus kommerziellen Gründen vorstellt, ausprobiert oder beurteilt, muss das kenntlich machen – sonst liegt Schleichwerbung vor."
    },
    {
      id: "lf6-social-media-07",
      module: "lf6-social-media",
      type: "number",
      prompt: "Eine Studie untersuchte 29.000 Instagram-Profile; rund 50 % davon nutzten Emojis. Wie viele Profile waren das?",
      suffix: "Profile",
      answer: 14500,
      tolerance: 10,
      explanation: "29.000 × 0,5 = 14.500 Profile. Emojis sind in Social Media weit verbreitet – geschäftlich sollten sie trotzdem sparsam und unmissverständlich eingesetzt werden."
    },
    {
      id: "lf6-social-media-08",
      module: "lf6-social-media",
      type: "choice",
      prompt: "Kundinnen und Kunden sollen Erfahrungsberichte mit Sternebewertungen zu deinem Shop lesen können. Welcher Plattformtyp passt?",
      options: [
        "Ein Messenger-Dienst.",
        "Eine Videoplattform.",
        "Ein firmeninterner Blog ohne Kommentarfunktion.",
        "Eine Bewertungsplattform wie yelp oder Google-Rezensionen."
      ],
      answer: 3,
      explanation: "Bewertungsplattformen bieten offenen Meinungsaustausch mit Sternen und Berichten. Netzwerke, Blogs, Videoplattformen und Messenger erfüllen andere Aufgaben."
    },
    {
      id: "lf6-vertriebswege-01",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Warum eignet sich eine Videokonferenz besonders gut, um eine Reklamation zu klären?",
      options: [
        "Weil das Gespräch dabei automatisch aufgezeichnet und veröffentlicht wird.",
        "Weil beide Seiten das Gegenüber und das Problem tatsächlich sehen – so ist schnell und einfach Abhilfe möglich.",
        "Weil Reklamationen per Video rechtlich verbindlicher sind als per E-Mail.",
        "Weil die Kundschaft dann keine Rückfragen mehr stellen darf."
      ],
      answer: 1,
      explanation: "„Face to Face“ lässt sich ein Problem zeigen statt nur beschreiben. Das tatsächliche Sehen von Gegenüber und Ware macht die Klärung schnell und persönlich."
    },
    {
      id: "lf6-vertriebswege-02",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Was gehört zu einer sicheren Videokonferenz mit Kundinnen und Kunden?",
      options: [
        "Möglichst viele unbekannte Teilnehmende zulassen.",
        "Die Standardeinstellungen niemals verändern.",
        "Ein Videosystem mit integrierter Verschlüsselung, geprüfte Provider-Sicherheit und ein sicheres Netzwerk.",
        "Sicherheit spielt bei Videokonferenzen keine Rolle."
      ],
      answer: 2,
      explanation: "Videosysteme sollten nach gängigen Standards verschlüsseln. Dazu kommen: Sicherheitsmaßnahmen des Providers prüfen, Standardeinstellungen anpassen, sicheres Netzwerk, Schulungen und klare Regeln."
    },
    {
      id: "lf6-vertriebswege-03",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Welcher Vorteil spricht für den Chat in der Kundenbetreuung?",
      options: [
        "Der Verlauf ist dokumentiert, Bilder und Anleitungen sind schnell versendet, und eine Person kann mehrere Chats fast gleichzeitig betreuen.",
        "Chats funktionieren ohne Personal vollautomatisch fehlerfrei.",
        "Chats sind nur zu Bürozeiten technisch möglich.",
        "Im Chat dürfen keine Dateien versendet werden."
      ],
      answer: 0,
      explanation: "Chat-Verläufe sind nachlesbar, Emotionen kochen weniger hoch, Dateien wie Montageanleitungen sind schnell geteilt – und mehrere Kundinnen und Kunden können nahezu zeitgleich betreut werden."
    },
    {
      id: "lf6-vertriebswege-04",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Dein Team nutzt im Chat vorgefertigte Textbausteine. Was ist Vorteil und was Gefahr?",
      options: [
        "Vorteil: Sie ersetzen die Datenschutzerklärung. Gefahr: keine.",
        "Vorteil: Der Chat wird automatisch übersetzt. Gefahr: hohe Lizenzkosten.",
        "Vorteil: Kundinnen und Kunden antworten schneller. Gefahr: Der Server wird überlastet.",
        "Vorteil: Zeitersparnis und weniger Tippfehler. Gefahr: Vorformulierte Floskeln können roboterartig klingen."
      ],
      answer: 3,
      explanation: "Textbausteine werden per Copy-and-paste eingefügt – das spart Zeit und vermeidet Tippfehler. Sie müssen aber persönlich angepasst werden, sonst wirkt der Chat wie ein Roboter."
    },
    {
      id: "lf6-vertriebswege-05",
      module: "lf6-vertriebswege",
      type: "number",
      prompt: "Textbausteine sparen im Chat je Anfrage etwa 2 Minuten. Euer Support bearbeitet 450 Anfragen pro Woche. Wie viele Stunden spart das Team wöchentlich?",
      suffix: "Stunden",
      answer: 15,
      tolerance: 0.1,
      explanation: "450 × 2 Minuten = 900 Minuten, geteilt durch 60 = 15 Stunden pro Woche. Solche Auswertungen gelingen leicht, weil Chatprotokolle automatisch gespeichert werden."
    },
    {
      id: "lf6-vertriebswege-06",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Wie funktioniert Sprachsteuerung technisch – etwa bei einer Bestellung per Stimme?",
      options: [
        "Das Gerät versteht die Sprache lokal ohne jede Verarbeitung.",
        "Ein Mensch im Callcenter tippt jede Spracheingabe live ab.",
        "Die Spracheingabe wird in eine Cloud übertragen, dort zerlegt und analysiert und in Text umgewandelt.",
        "Die Sprache wird als Tondatei an den Hersteller gefaxt."
      ],
      answer: 2,
      explanation: "Die Stimme wird in die Cloud übertragen, zerlegt, prozessiert und analysiert. Grenzen: Die Erkennung arbeitet nicht immer korrekt, und viele Systeme sind untereinander nicht kompatibel."
    },
    {
      id: "lf6-vertriebswege-07",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Warum fragen viele Hotlines zu Beginn per Sprachcomputer nach dem Anliegen?",
      options: [
        "Damit Anrufende möglichst schnell wieder auflegen.",
        "Weil die Anrufenden dann direkt in die passende Fachabteilung geleitet werden – das spart Zeit und Personalkosten.",
        "Weil Gespräche ohne Vorauswahl gesetzlich verboten sind.",
        "Damit die Warteschleifenmusik länger läuft."
      ],
      answer: 1,
      explanation: "Die Vorauswahl nach dem Anliegen führt zielgerichtet zu geschulten Fachkräften, etwa in die Reklamationsabteilung – Zeitersparnis für beide Seiten und geringere Kosten für das Unternehmen."
    },
    {
      id: "lf6-vertriebswege-08",
      module: "lf6-vertriebswege",
      type: "choice",
      prompt: "Was macht eine gute FAQ-Liste im Onlineshop aus?",
      options: [
        "Sie wird einmal erstellt und dann nie wieder angefasst.",
        "Sie beantwortet ausschließlich Fragen, die noch nie gestellt wurden.",
        "Sie ersetzt Impressum und Datenschutzerklärung.",
        "Sie entsteht aus echten Kundenfragen, ist einfach formuliert, per Schlagwort durchsuchbar und wird stetig aktualisiert."
      ],
      answer: 3,
      explanation: "Häufig gestellte Fragen werden gesammelt, klar beantwortet und übersichtlich – etwa alphabetisch mit Schlagwortsuche – dargestellt. Pflege ist Pflicht: FAQ stetig evaluieren und aktualisieren."
    }
  ],
  badges: [
    {
      id: "first-signal",
      title: "Erstes Signal",
      description: "Die erste Aufgabe richtig gelöst.",
      condition: "correct",
      value: 1
    },
    {
      id: "lf2-layout-ready",
      title: "Layoutpilot",
      description: "Das LF2-Modul zum Webshop-Layout vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-layout"
    },
    {
      id: "lf2-webshop-seiten-ready",
      title: "Shop-Navigator",
      description: "Das LF2-Modul zu Webshop-Seiten vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-webshop-seiten"
    },
    {
      id: "lf2-impressum-ready",
      title: "Impressum sicher",
      description: "Das LF2-Modul zum Impressum vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-impressum"
    },
    {
      id: "lf2-haftung-ready",
      title: "Haftungs-Profi",
      description: "Das LF2-Modul zur Haftung für Webseiteninhalte vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-haftung"
    },
    {
      id: "lf2-produktdetailseite-ready",
      title: "Warenkenner",
      description: "Das LF2-Modul zur Produktdetailseite vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-produktdetailseite"
    },
    {
      id: "lf2-kundeninformationen-ready",
      title: "Kundeninformant",
      description: "Das LF2-Modul zu Kundeninformationen auf Produktdetailseiten vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-kundeninformationen"
    },
    {
      id: "lf2-produktbeschreibung-ready",
      title: "Textprofi",
      description: "Das LF2-Modul zur Produktbeschreibung vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-produktbeschreibung"
    },
    {
      id: "lf2-artikelauswahl-ready",
      title: "Variantenlotse",
      description: "Das LF2-Modul zur Artikelauswahl auf Produktdetailseiten vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-artikelauswahl"
    },
    {
      id: "lf2-visualisierungen-ready",
      title: "Visualisierer",
      description: "Das LF2-Modul zu Visualisierungen auf Produktdetailseiten vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-visualisierungen"
    },
    {
      id: "lf2-preisgestaltung-ready",
      title: "Preis-Stratege",
      description: "Das LF2-Modul zur Preisgestaltung und -darstellung vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-preisgestaltung"
    },
    {
      id: "lf2-warenwirtschaft-ready",
      title: "ERP-Lotse",
      description: "Das LF2-Modul zu ERP- und Warenwirtschaftssystemen vollständig abgeschlossen.",
      condition: "module",
      value: "lf2-warenwirtschaft"
    },
    {
      id: "lf6-servicekanaele-ready",
      title: "Service-Ass",
      description: "Das LF6-Modul zu Servicekanälen vollständig abgeschlossen.",
      condition: "module",
      value: "lf6-servicekanaele"
    },
    {
      id: "lf6-email-ready",
      title: "Postfach-Profi",
      description: "Das LF6-Modul zur Kommunikation per E-Mail vollständig abgeschlossen.",
      condition: "module",
      value: "lf6-email"
    },
    {
      id: "lf6-social-media-ready",
      title: "Community-Manager",
      description: "Das LF6-Modul zur Kommunikation über Social Media vollständig abgeschlossen.",
      condition: "module",
      value: "lf6-social-media"
    },
    {
      id: "lf6-vertriebswege-ready",
      title: "Kanal-Kapitän",
      description: "Das LF6-Modul zu den weiteren Vertriebswegen vollständig abgeschlossen.",
      condition: "module",
      value: "lf6-vertriebswege"
    },
    {
      id: "lf6-komplett",
      title: "LF6 komplett",
      description: "Alle vier LF6-Module vollständig abgeschlossen.",
      condition: "allModules",
      field: "LF6",
      value: 4
    },
    {
      id: "targeting-ready",
      title: "Zielgruppenblick",
      description: "Das Targeting-Modul vollständig abgeschlossen.",
      condition: "module",
      value: "targeting"
    },
    {
      id: "search-ready",
      title: "SERP-Scout",
      description: "Suchmaschinen, SEO und SEA vollständig abgeschlossen.",
      condition: "moduleSet",
      value: ["search", "seo", "sea"]
    },
    {
      id: "data-minded",
      title: "KPI-Kopf",
      description: "Das Kennzahlen-Modul vollständig abgeschlossen.",
      condition: "module",
      value: "analytics"
    },
    {
      id: "webanalyse-ready",
      title: "Datendetektiv",
      description: "Das Webanalyse-Modul vollständig abgeschlossen.",
      condition: "module",
      value: "webanalyse"
    },
    {
      id: "lab-user",
      title: "Laborleitung",
      description: "Drei Kampagnenszenarien im Kennzahlen-Labor berechnet.",
      condition: "labRuns",
      value: 3
    },
    {
      id: "xp-400",
      title: "Marketing-Analyst",
      description: "400 XP gesammelt.",
      condition: "xp",
      value: 400
    },
    {
      id: "all-modules",
      title: "LF7 komplett",
      description: "Alle sieben Module vollständig abgeschlossen.",
      condition: "allModules",
      field: "LF7",
      value: 7
    },
    {
      id: "sprint",
      title: "Praxischeck",
      description: "Einen gemischten Praxischeck beendet.",
      condition: "sprints",
      value: 1
    },
    {
      id: "glossary-starter",
      title: "Begriffsprofi",
      description: "Zehn Glossar-Checks richtig gelöst.",
      condition: "glossary",
      value: 10
    }
  ],
  glossary: [
    {
      id: "e-commerce",
      term: "E-Commerce",
      category: "Grundlagen",
      summary: "Elektronischer Handel mit Waren oder Dienstleistungen über digitale Vertriebskanäle.",
      detail: "E-Commerce umfasst mehr als einen Webshop. Dazu gehören Sortiment, Produktdaten, Zahlungsarten, Logistik, Kundenkommunikation, Marketing, Recht, Kennzahlen und technische Systeme.",
      example: "Ein Unternehmen verkauft Pflegeprodukte im eigenen Shop und zusätzlich über einen Online-Marktplatz."
    },
    {
      id: "online-vertriebskanal",
      term: "Online-Vertriebskanal",
      category: "Grundlagen",
      summary: "Digitaler Weg, über den ein Unternehmen Produkte online anbietet und verkauft.",
      detail: "Ein Online-Vertriebskanal kann der eigene Webshop, ein Marktplatz, eine App oder ein Social-Commerce-Kanal sein. Wichtig sind Reichweite, Kosten, Zielgruppe, Steuerbarkeit und technische Anbindung.",
      example: "Ein Shop nutzt den eigenen Webshop für Stammkunden und einen Marktplatz zur Neukundengewinnung."
    },
    {
      id: "online-vertriebssystem",
      term: "Online-Vertriebssystem",
      category: "Grundlagen",
      summary: "Technische Plattform, mit der ein Online-Vertriebskanal betrieben wird.",
      detail: "Das System bildet Produkte, Preise, Warenkorb, Checkout, Zahlungen, Kundendaten und Schnittstellen ab. Es verbindet kaufmännische Prozesse mit der sichtbaren Shopoberfläche.",
      example: "Das Shopsystem übernimmt Produktseiten, Warenkorb, Bestellabschluss und Schnittstellen zum Warenwirtschaftssystem."
    },
    {
      id: "geschaeftsmodell",
      term: "Geschäftsmodell",
      category: "Grundlagen",
      summary: "Beschreibung, wie ein Unternehmen Nutzen schafft und damit Geld verdient.",
      detail: "Im E-Commerce klärt das Geschäftsmodell Zielgruppe, Leistungsangebot, Vertriebskanäle, Erlösquellen, Kostenstruktur, Partner und besonderen Kundennutzen.",
      example: "Ein Abo-Modell liefert Verbrauchsprodukte regelmäßig nach Hause und erzielt wiederkehrende Umsätze."
    },
    {
      id: "zielgruppe",
      term: "Zielgruppe",
      category: "Grundlagen",
      summary: "Personen- oder Unternehmensgruppe, die mit einem Angebot gezielt angesprochen werden soll.",
      detail: "Zielgruppen werden nach Bedürfnissen, Verhalten, Kaufkraft, Situation oder Branche beschrieben. Je genauer das Kundenproblem verstanden wird, desto passender werden Sortiment, Ansprache und Service.",
      example: "Berufspendler mit wenig Zeit sind eine Zielgruppe für schnelle Lieferoptionen und klare Produktvergleiche."
    },
    {
      id: "online-sortiment",
      term: "Online-Sortiment",
      category: "Sortiment",
      summary: "Gesamtheit der online angebotenen Waren und Dienstleistungen.",
      detail: "Das Online-Sortiment muss nach Nachfrage, Konkurrenz, Verfügbarkeit, Marge, Suchbarkeit und Retourenrisiko gepflegt werden. Es unterscheidet sich oft vom stationären Sortiment.",
      example: "Ein Shop erweitert sein Sortiment um Ersatzteile, weil Kundensuchen und Warenkörbe Nachfrage zeigen."
    },
    {
      id: "sortimentsbreite",
      term: "Sortimentsbreite",
      category: "Sortiment",
      summary: "Anzahl unterschiedlicher Produktgruppen im Sortiment.",
      detail: "Eine große Sortimentsbreite bietet viele Warengruppen. Sie kann neue Zielgruppen erreichen, erhöht aber Pflegeaufwand, Datenkomplexität und Beschaffungsrisiko.",
      example: "Ein Shop verkauft Schuhe, Kleidung, Taschen und Pflegeprodukte: Die Sortimentsbreite ist groß."
    },
    {
      id: "sortimentstiefe",
      term: "Sortimentstiefe",
      category: "Sortiment",
      summary: "Anzahl der Varianten innerhalb einer Produktgruppe.",
      detail: "Sortimentstiefe entsteht durch Größen, Farben, Ausführungen oder Qualitätsstufen. Sie hilft bei genauer Kundenwahl, kann aber Lagerbestand und Datenpflege erhöhen.",
      example: "Ein Laufschuh ist in acht Größen und fünf Farben verfügbar."
    },
    {
      id: "sorte",
      term: "Sorte",
      category: "Sortiment",
      summary: "Konkrete Ausprägung eines Artikels.",
      detail: "Eine Sorte unterscheidet sich durch Merkmale wie Farbe, Größe, Material, Ausführung oder Qualität. Sorten machen Varianten auf Produktdetailseiten vergleichbar.",
      example: "Ein T-Shirt gibt es in den Sorten Blau, Schwarz und Weiß sowie in mehreren Größen."
    },
    {
      id: "artikel",
      term: "Artikel",
      category: "Sortiment",
      summary: "Handelbare Produktlinie mit eindeutiger Identifikation.",
      detail: "Ein Artikel kann über Artikelnummer, EAN oder andere Stammdaten identifiziert werden. Zu einem Artikel können mehrere Sorten oder Varianten gehören.",
      example: "Der Artikel 'Classic T-Shirt' umfasst verschiedene Farben und Größen."
    },
    {
      id: "warengruppe",
      term: "Warengruppe",
      category: "Sortiment",
      summary: "Gruppe ähnlicher oder zusammengehöriger Artikel.",
      detail: "Warengruppen strukturieren das Sortiment und erleichtern Kunden Navigation, Suche und Vergleich. Sie sind auch für Beschaffung, Lager und Auswertung wichtig.",
      example: "Oberbekleidung ist eine Warengruppe mit T-Shirts, Hemden und Pullovern."
    },
    {
      id: "kernsortiment",
      term: "Kernsortiment",
      category: "Sortiment",
      summary: "Zentrale, strategisch wichtige Artikel eines Shops.",
      detail: "Das Kernsortiment enthält die Produkte, für die ein Shop besonders stehen möchte. Es umfasst häufig Bestseller, Stammkundenartikel oder margenstarke Angebote.",
      example: "Ein Laufschuh-Shop führt seine wichtigsten Trainingsschuhe dauerhaft im Kernsortiment."
    },
    {
      id: "randsortiment",
      term: "Randsortiment",
      category: "Sortiment",
      summary: "Ergänzende Produkte neben dem Kernsortiment.",
      detail: "Das Randsortiment ergänzt die Hauptartikel um Zubehör, Nischenprodukte oder Zusatzangebote. Es kann Cross-Selling fördern und neue Kundengruppen ansprechen.",
      example: "Zum Kernsortiment Laufschuhe kommen Trinkflaschen, Reflektoren und Pflegeprodukte als Randsortiment."
    },
    {
      id: "produktmerkmal",
      term: "Produktmerkmal",
      category: "Sortiment",
      summary: "Eigenschaft, die ein Produkt beschreibt und vergleichbar macht.",
      detail: "Produktmerkmale können materiell, gestalterisch, funktional, qualitativ, wirtschaftlich oder verpackungsbezogen sein. Sie bilden die Grundlage für Filter, Tabellen und Produkttexte.",
      example: "Material, Gewicht, Farbe, Wasserdichtigkeit, Marke und Garantie sind Produktmerkmale."
    },
    {
      id: "herkunftsangabe",
      term: "Herkunftsangabe",
      category: "Sortiment",
      summary: "Information zur räumlichen, personellen oder zeitlichen Herkunft eines Produkts.",
      detail: "Herkunftsangaben können Region, Hersteller, Fertigungsbetrieb, Produktionszeitraum oder Charge erklären. Sie können Qualität, Vertrauen und Rückverfolgbarkeit unterstützen.",
      example: "Eine Produktseite nennt die Region, die Manufaktur und das Produktionsjahr."
    },
    {
      id: "guetezeichen",
      term: "Gütezeichen",
      category: "Sortiment",
      summary: "Zeichen für geprüfte oder überwachte Qualität.",
      detail: "Gütezeichen stehen für festgelegte Qualitätsanforderungen und häufig für externe Überwachung. Sie unterscheiden sich von reinen Marken- oder Schutzzeichen.",
      example: "Ein Gütezeichen signalisiert, dass ein Produkt bestimmte Qualitätsanforderungen erfüllt."
    },
    {
      id: "typenschild",
      term: "Typenschild",
      category: "Sortiment",
      summary: "Technisches Schild zur Identifikation eines Produkts.",
      detail: "Ein Typenschild enthält oft Modell, Typ, Seriennummer, Leistung, Hersteller- und Zulassungsangaben. Es hilft bei Wartung, Ersatzteilen und sicherer Nutzung.",
      example: "Auf einem Netzteil stehen Spannung, Leistung, Modellnummer und Hersteller auf dem Typenschild."
    },
    {
      id: "handling-informationen",
      term: "Handling-Informationen",
      category: "Sortiment",
      summary: "Hinweise zum sachgerechten Umgang mit einer Ware.",
      detail: "Handling-Informationen betreffen Transport, Lagerung, Montage, Pflege, Wartung, Sicherheit und Entsorgung. Sie helfen Kunden, Produkte richtig zu nutzen und Schäden zu vermeiden.",
      example: "Die Produktdetailseite nennt frostfreie Lagerung, Reinigungsweise und Recyclinghinweise."
    },
    {
      id: "produktbeschreibung",
      term: "Produktbeschreibung",
      category: "Sortiment",
      summary: "Text auf der Produktdetailseite, der ein Produkt erklärt und einordnet.",
      detail: "Eine Produktbeschreibung verbindet sachliche Informationen mit Nutzenargumenten. Sie beantwortet Kundenfragen, macht Eigenschaften verständlich und kann zugleich die Auffindbarkeit in Suchmaschinen verbessern.",
      example: "Ein Rucksack wird nicht nur als grau beschrieben, sondern als wasserabweisend, gepolstert und passend für ein 15-Zoll-Notebook."
    },
    {
      id: "bullet-points",
      term: "Bullet Points",
      category: "Sortiment",
      summary: "Kurze Stichpunkte mit zentralen Produktvorteilen oder Eigenschaften.",
      detail: "Bullet Points helfen Kunden, die wichtigsten Informationen schnell zu erfassen. Sie eignen sich besonders für Vorteile, Maße, Lieferumfang, Material oder besondere Funktionen.",
      example: "Eine Produktseite nennt in fünf Stichpunkten Material, Volumen, Notebookfach, Gewicht und Pflegehinweis."
    },
    {
      id: "unique-content",
      term: "Unique Content",
      category: "Marketing",
      summary: "Eigenständiger Inhalt, der nicht einfach von anderen Seiten kopiert wurde.",
      detail: "Unique Content ist für Webshops wichtig, weil kopierte Herstellertexte Kunden selten einen Mehrwert bieten und Suchmaschinen identische Inhalte schwerer bewerten können. Eigene Texte passen besser zur Zielgruppe.",
      example: "Ein Shop formuliert eine eigene Produktbeschreibung statt den Standardtext des Herstellers unverändert zu übernehmen."
    },
    {
      id: "kommunikationsstoerer",
      term: "Kommunikationsstörer",
      category: "Sortiment",
      summary: "Formulierungen, die das Verstehen oder Vertrauen stören.",
      detail: "Kommunikationsstörer sind zum Beispiel unnötige Fachwörter, lange Satzketten, leere Floskeln, aggressive Kaufbefehle oder unklare Aussagen. Sie erschweren Kunden die Entscheidung.",
      example: "Statt 'ultimativ bestes Produkt' wirkt eine konkrete Aussage wie 'gepolsterte Schultergurte entlasten den Rücken' glaubwürdiger."
    },
    {
      id: "kommunikationsfoerderer",
      term: "Kommunikationsförderer",
      category: "Sortiment",
      summary: "Formulierungen, die Verständlichkeit und Vertrauen fördern.",
      detail: "Kommunikationsförderer sind klare Wörter, kurze Sätze, aktive Verben, positive Aussagen und konkrete Nutzenformulierungen. Sie helfen, Produktinformationen wie ein gutes Verkaufsgespräch wirken zu lassen.",
      example: "Die Aussage 'Das Fach schützt dein Notebook vor Kratzern' ist aktiver und hilfreicher als eine abstrakte Materialbeschreibung."
    },
    {
      id: "vorteilformulierung",
      term: "Vorteilformulierung",
      category: "Sortiment",
      summary: "Verbindung eines Produktmerkmals mit einem konkreten Kundennutzen.",
      detail: "Eine Vorteilformulierung erklärt nicht nur, was ein Produkt hat, sondern warum das für Kunden nützlich ist. Dadurch wird aus einem Merkmal ein überzeugendes Argument.",
      example: "Aus 'reflektierende Streifen' wird 'reflektierende Streifen machen dich im Dunkeln besser sichtbar'."
    },
    {
      id: "kurzbeschreibung",
      term: "Kurzbeschreibung",
      category: "Sortiment",
      summary: "Kompakter Produkttext mit den wichtigsten Informationen.",
      detail: "Eine Kurzbeschreibung steht meist weit oben auf der Produktdetailseite. Sie fasst den Nutzen und die wichtigsten Eigenschaften knapp zusammen und hilft Kunden beim ersten Überblick.",
      example: "Ein kurzer Absatz erklärt, für wen der Rucksack geeignet ist und welche Hauptvorteile er bietet."
    },
    {
      id: "langbeschreibung",
      term: "Langbeschreibung",
      category: "Sortiment",
      summary: "Ausführlicher Produkttext mit vertiefenden Informationen.",
      detail: "Eine Langbeschreibung liefert Details, die nicht sofort im ersten Blickfeld stehen müssen. Sie kann über Reiter, aufklappbare Bereiche oder eine eigene Informationssektion angeboten werden.",
      example: "Unter 'Details' stehen Material, Pflege, Maße, Einsatzbereich und weitere Hinweise ausführlicher erklärt."
    },
    {
      id: "artikelauswahl",
      term: "Artikelauswahl",
      category: "Sortiment",
      summary: "Entscheidung des Kunden für die passende Ausführung eines Artikels.",
      detail: "Artikelauswahl meint den Schritt, in dem Kunden aus Varianten, Lieferoptionen und Zusatzinformationen die passende Lösung wählen. Gute Produktdetailseiten machen diesen Schritt einfach und vermeiden Unsicherheit.",
      example: "Vor dem Kauf wählt ein Kunde Farbe, Größe, Menge und Lieferart aus."
    },
    {
      id: "artikelvariante",
      term: "Artikelvariante",
      category: "Sortiment",
      summary: "Konkrete Ausführung eines Artikels, etwa Farbe, Größe, Modell oder Material.",
      detail: "Artikelvarianten gehören zum gleichen Artikel, unterscheiden sich aber in einzelnen Merkmalen. Je nach Variante können Bild, Preis, Lagerbestand, Lieferzeit oder technische Daten abweichen.",
      example: "Der gleiche Rucksack wird in Grau, Schwarz und Grün sowie in zwei Größen angeboten."
    },
    {
      id: "auswahlhilfe",
      term: "Auswahlhilfe",
      category: "Sortiment",
      summary: "Unterstützung, die Kunden bei der passenden Produkt- oder Variantenwahl hilft.",
      detail: "Auswahlhilfen können Größentabellen, Messanleitungen, Infoblöcke, Symbole, Produktberater, Chat, Hotline oder Entscheidungstabellen sein. Sie reduzieren Fehlkäufe und Nachfragen.",
      example: "Eine Größentabelle erklärt, welche Jackengröße zu welchen Körpermaßen passt."
    },
    {
      id: "produktvergleich",
      term: "Produktvergleich",
      category: "Sortiment",
      summary: "Gegenüberstellung ähnlicher Produkte anhand wichtiger Merkmale.",
      detail: "Ein Produktvergleich zeigt Merkmale, Preise, Bewertungen oder Funktionen nebeneinander. Er hilft besonders dann, wenn Kunden zwischen mehreren ähnlichen Artikeln entscheiden müssen.",
      example: "Drei Monitore werden nach Displaygröße, Auflösung, Anschlüssen, Preis und Bewertung verglichen."
    },
    {
      id: "buy-box",
      term: "Buy-Box",
      category: "Sortiment",
      summary: "Kaufbereich einer Produktdetailseite mit den wichtigsten Entscheidungs- und Handlungsdaten.",
      detail: "Die Buy-Box bündelt Preis, Versandkosten, Varianten, Menge, Verfügbarkeit, Lieferzeit und Call-to-Action. Sie ist die zentrale Schnittstelle zwischen Produktentscheidung und Warenkorb.",
      example: "Rechts neben dem Produktbild stehen Preis, Größenauswahl, Lagerstatus und der Button 'In den Warenkorb'."
    },
    {
      id: "warenkorb-layer",
      term: "Warenkorb-Layer",
      category: "Sortiment",
      summary: "Eingeblendeter Hinweis nach dem Hinzufügen eines Artikels zum Warenkorb.",
      detail: "Ein Warenkorb-Layer legt sich über die Seite oder erscheint als Hinweisbereich. Er bestätigt den hinzugefügten Artikel und bietet nächste Schritte wie weiter einkaufen, Warenkorb ansehen oder zur Kasse gehen.",
      example: "Nach dem Klick auf den Button erscheint ein Fenster mit Produktbild, Menge, Zwischensumme und den Buttons 'Weiter einkaufen' und 'Zur Kasse'."
    },
    {
      id: "lieferzeit",
      term: "Lieferzeit",
      category: "Beschaffung",
      summary: "Zeitraum zwischen Bestellung und voraussichtlicher Anlieferung beim Kunden.",
      detail: "Lieferzeitangaben müssen realistisch und verständlich sein. Konkrete Zeiträume helfen Kunden besser als unklare Formulierungen und sollten mit Lagerbestand, Versandart und Abholoptionen abgestimmt sein.",
      example: "Die Produktseite zeigt 'Lieferung in 2-3 Werktagen' statt nur 'bald verfügbar'."
    },
    {
      id: "produktfoto",
      term: "Produktfoto",
      category: "Sortiment",
      summary: "Bild eines Artikels, das Form, Farbe, Material, Details oder Nutzung zeigt.",
      detail: "Produktfotos sollen Kunden helfen, ein Produkt ohne direkten Kontakt realistisch einzuschätzen. Mehrere Perspektiven, Detailaufnahmen, Variantenbilder und ein einheitlicher Stil erhöhen die Aussagekraft.",
      example: "Ein Rucksack wird frontal, von der Seite, geöffnet und am Rücken getragen gezeigt."
    },
    {
      id: "thumbnail",
      term: "Thumbnail",
      category: "Sortiment",
      summary: "Kleine Bildvorschau in einer Produktgalerie.",
      detail: "Thumbnails zeigen verfügbare Ansichten im Kleinformat. Kunden können damit schnell zwischen Hauptbild, Detail, Farbe, Variante oder Anwendungssituation wechseln.",
      example: "Unter dem großen Produktbild stehen fünf kleine Vorschaubilder für weitere Ansichten."
    },
    {
      id: "zoom-funktion",
      term: "Zoom-Funktion",
      category: "Sortiment",
      summary: "Vergrößerung eines Produktbildes zur Detailprüfung.",
      detail: "Eine Zoom-Funktion macht Strukturen, Material, Verarbeitung oder kleine Merkmale sichtbar. Sie ist besonders sinnvoll, wenn Details für Qualität, Passform oder Kaufentscheidung wichtig sind.",
      example: "Beim Überfahren des Bildes wird die Naht einer Tasche vergrößert angezeigt."
    },
    {
      id: "rundumansicht",
      term: "360-Grad-Ansicht",
      category: "Sortiment",
      summary: "Interaktive Rundumdarstellung eines Produkts aus mehreren Blickwinkeln.",
      detail: "Eine 360-Grad-Ansicht vermittelt räumliche Wirkung und kann Unsicherheit verringern. Sie ersetzt nicht jede Detailaufnahme, ergänzt aber klassische Produktbilder sinnvoll.",
      example: "Kunden drehen einen Schuh am Bildschirm und sehen Sohle, Seite und Rückansicht."
    },
    {
      id: "produktvideo",
      term: "Produktvideo",
      category: "Sortiment",
      summary: "Video, das Anwendung, Funktion, Größe oder Besonderheiten eines Produkts zeigt.",
      detail: "Produktvideos können erklärungsbedürftige Artikel verständlicher machen, Aufmerksamkeit erhöhen und Vertrauen schaffen. Sie sollten relevant, kurz, rechtlich geklärt und technisch sauber eingebunden sein.",
      example: "Ein Video zeigt, wie ein Fahrradhelm eingestellt und getragen wird."
    },
    {
      id: "bildaufloesung",
      term: "Bildauflösung",
      category: "Technik",
      summary: "Anzahl der Bildpunkte, aus denen ein digitales Bild besteht.",
      detail: "Die Bildauflösung wird häufig als Breite mal Höhe in Pixeln angegeben. Mehr Pixel können mehr Details zeigen, führen aber oft auch zu größeren Dateien.",
      example: "Ein Bild mit 1200 × 800 Pixeln enthält deutlich mehr Bildpunkte als ein Thumbnail mit 300 × 200 Pixeln."
    },
    {
      id: "bildkompression",
      term: "Bildkompression",
      category: "Technik",
      summary: "Verringerung der Dateigröße eines Bildes.",
      detail: "Bildkompression reduziert Speicherbedarf und Ladezeit. Verlustfreie Kompression erhält alle Informationen, verlustbehaftete Kompression spart stärker, kann aber Artefakte erzeugen.",
      example: "Ein Produktfoto wird für den Webshop komprimiert, damit die Seite schneller lädt."
    },
    {
      id: "dateiformat",
      term: "Dateiformat",
      category: "Technik",
      summary: "Technische Speicherform einer Datei, erkennbar an Endungen wie JPG, PNG, WebP oder MP4.",
      detail: "Das Dateiformat beeinflusst Qualität, Komprimierung, Transparenz, Kompatibilität und Ladezeit. Für Fotos, Grafiken und Videos sind unterschiedliche Formate sinnvoll.",
      example: "Ein Foto wird als JPG oder WebP gespeichert, eine transparente Grafik eher als PNG."
    },
    {
      id: "produktdaten",
      term: "Produktdaten",
      category: "Sortiment",
      summary: "Strukturierte Informationen, die ein Produkt beschreiben und verkaufbar machen.",
      detail: "Produktdaten umfassen Titel, Beschreibung, Bilder, Preis, Maße, Material, Verfügbarkeit, Artikelnummer, Varianten und rechtlich notwendige Angaben. Gute Daten verbessern Auffindbarkeit und Kaufentscheidung.",
      example: "Material, Maße, Pflegehinweise und Lieferzeit werden auf der Produktseite gepflegt."
    },
    {
      id: "produktpraesentation",
      term: "Produktpräsentation",
      category: "Sortiment",
      summary: "Verkaufsfördernde und rechtssichere Darstellung eines Produkts im Online-Kanal.",
      detail: "Zur Produktpräsentation gehören Titel, Bilder, Beschreibung, Preisangaben, Nutzenargumente, Varianten, Hinweise und Vertrauen schaffende Informationen. Sie soll informieren und Retouren vermeiden.",
      example: "Ein Produktvideo zeigt Größe und Anwendung, damit Kunden realistisch entscheiden können."
    },
    {
      id: "webshop-layout",
      term: "Webshop-Layout",
      category: "Sortiment",
      summary: "Anordnung der sichtbaren Bereiche eines Webshops.",
      detail: "Das Layout legt fest, wo Logo, Navigation, Suche, Produktbereiche, Warenkorb, Hinweise und Footer erscheinen. Es steuert Orientierung, Vertrauen und die nächsten Handlungsschritte.",
      example: "Eine klare Startseite zeigt oben Suche und Kategorien, darunter wichtige Angebote und am Ende Service-Links."
    },
    {
      id: "header",
      term: "Header",
      category: "Sortiment",
      summary: "Oberer Seitenbereich mit Wiedererkennung und zentraler Orientierung.",
      detail: "Im Header stehen häufig Logo, Suchfeld, Navigation, Login und Warenkorb. Er sollte auf allen wichtigen Seiten ähnlich aufgebaut sein.",
      example: "Kunden finden im Header sofort die Suche und den Warenkorb."
    },
    {
      id: "footer",
      term: "Footer",
      category: "Sortiment",
      summary: "Unterer Seitenbereich mit Service- und Pflichtinformationen.",
      detail: "Der Footer enthält oft Impressum, Datenschutz, Kontakt, Zahlungsarten, Versandhinweise und Service-Links. Er hilft, wiederkehrende Informationen verlässlich zu finden.",
      example: "Das Impressum ist im Footer eindeutig verlinkt."
    },
    {
      id: "call-to-action",
      term: "Call-to-Action",
      category: "Sortiment",
      summary: "Sichtbare Aufforderung zu einer gewünschten Handlung.",
      detail: "Ein Call-to-Action führt Nutzer zum nächsten Schritt, etwa Produkt ansehen, in den Warenkorb legen oder Anfrage senden. Er muss klar benannt und gut erreichbar sein.",
      example: "Der Button 'In den Warenkorb' ist ein Call-to-Action."
    },
    {
      id: "responsive-design",
      term: "Responsive Design",
      category: "Sortiment",
      summary: "Gestaltung, die sich an unterschiedliche Bildschirmgrößen anpasst.",
      detail: "Responsive Design sorgt dafür, dass Inhalte auf Smartphone, Tablet und Desktop gut lesbar und bedienbar bleiben. Dazu gehören flexible Layouts, passende Schriftgrößen und angepasste Navigation.",
      example: "Auf dem Smartphone wird die Produktnavigation untereinander statt nebeneinander angezeigt."
    },
    {
      id: "startseite",
      term: "Startseite",
      category: "Sortiment",
      summary: "Erste zentrale Einstiegsseite eines Webshops.",
      detail: "Die Startseite macht erkennbar, wofür der Shop steht, welche Sortimentsbereiche wichtig sind und wie Kunden weiterkommen. Sie verbindet Wiedererkennung, Navigation, Suche, Teaser und Vertrauen.",
      example: "Die Startseite zeigt Kategorien, aktuelle Angebote, Suchfeld, Warenkorb und Servicehinweise."
    },
    {
      id: "produktkategorieseite",
      term: "Produktkategorieseite",
      category: "Sortiment",
      summary: "Seite mit einer Auswahl zusammengehöriger Produkte.",
      detail: "Eine Produktkategorieseite gibt Überblick über eine Warengruppe oder Warenwelt. Sie unterstützt Vergleich, Eingrenzung und den Wechsel zur passenden Produktdetailseite.",
      example: "Die Kategorie 'Rucksäcke' zeigt mehrere Modelle mit Bild, Preis, Filter und Sortierung."
    },
    {
      id: "landing-page",
      term: "Landing Page",
      category: "Marketing",
      summary: "Zielseite für ein konkretes Besucherinteresse.",
      detail: "Eine Landing Page wird häufig aus Anzeigen, Suchergebnissen, Newslettern oder Kampagnen heraus aufgerufen. Sie soll ein bestimmtes Angebot erklären und zu einer klaren Handlung führen.",
      example: "Eine Anzeige für Schulrucksäcke führt direkt auf eine Landing Page mit passendem Angebot und Button."
    },
    {
      id: "produktdetailseite",
      term: "Produktdetailseite",
      category: "Sortiment",
      summary: "Einzelseite mit kaufrelevanten Informationen zu einem Artikel.",
      detail: "Produktdetailseiten enthalten typischerweise Bilder, Beschreibung, Preis, Varianten, Lieferinformationen, Bewertungen, Vertrauen schaffende Elemente und den Call-to-Action.",
      example: "Eine Produktdetailseite zeigt Größe, Material, Farbe, Produktfotos, Verfügbarkeit und den Warenkorb-Button."
    },
    {
      id: "sortierung",
      term: "Sortierung",
      category: "Sortiment",
      summary: "Reihenfolge, in der Treffer oder Produkte angezeigt werden.",
      detail: "Sortierung hilft Kunden, Treffer nach passenden Kriterien zu ordnen. Typische Sortierungen sind Preis aufsteigend, Beliebtheit, Bewertung, Neuheiten oder Relevanz.",
      example: "Ein Kunde sortiert Sneaker zuerst nach niedrigstem Preis."
    },
    {
      id: "paginierung",
      term: "Paginierung",
      category: "Sortiment",
      summary: "Aufteilung langer Produktlisten auf mehrere Seiten.",
      detail: "Paginierung verhindert sehr lange Trefferlisten und macht große Kategorien überschaubarer. Alternativ können Shops auch 'Mehr laden' oder endloses Scrollen verwenden.",
      example: "Nach 24 Produkten wechselt der Kunde mit 'Seite 2' zur nächsten Trefferliste."
    },
    {
      id: "produktkategorie",
      term: "Produktkategorie",
      category: "Sortiment",
      summary: "Thematische Einordnung von Produkten zur Navigation und Suche im Shop.",
      detail: "Produktkategorien strukturieren das Sortiment und beeinflussen Filter, Suchfunktionen, Beratung und SEO. Kategorien müssen aus Kundensicht verständlich sein.",
      example: "Eine Trinkflasche wird in Outdoor, Schule und Zubehör eingeordnet."
    },
    {
      id: "filter",
      term: "Filter",
      category: "Sortiment",
      summary: "Funktion zum Eingrenzen von Such- oder Kategorietreffern nach Merkmalen.",
      detail: "Filter helfen Kunden, große Sortimente schnell zu durchsuchen. Dafür müssen Produktdaten sauber gepflegt sein, zum Beispiel Größe, Farbe, Preis, Marke oder Lieferbarkeit.",
      example: "Kunden filtern Schuhe nach Größe 42, Farbe schwarz und Lieferzeit zwei Tage."
    },
    {
      id: "barrierefreiheit",
      term: "Barrierefreiheit",
      category: "Sortiment",
      summary: "Gestaltung digitaler Angebote, damit möglichst viele Menschen sie nutzen können.",
      detail: "Barrierefreiheit betrifft Kontraste, Tastaturbedienung, Alternativtexte, verständliche Struktur, Formulare und Sprache. Sie verbessert Zugang, Qualität und oft auch Suchmaschinenfreundlichkeit.",
      example: "Produktbilder erhalten Alternativtexte, damit Screenreader sie beschreiben können."
    },
    {
      id: "cross-selling",
      term: "Cross-Selling",
      category: "Sortiment",
      summary: "Angebot ergänzender Produkte passend zum Hauptprodukt.",
      detail: "Cross-Selling soll den Kundennutzen und den Warenkorbwert erhöhen. Die Empfehlungen müssen sinnvoll und nicht aufdringlich sein.",
      example: "Zum Smartphone werden passende Hülle und Ladekabel angeboten."
    },
    {
      id: "up-selling",
      term: "Up-Selling",
      category: "Sortiment",
      summary: "Angebot einer höherwertigen Alternative zum betrachteten Produkt.",
      detail: "Up-Selling zeigt dem Kunden ein besseres oder umfangreicheres Modell mit höherem Preis. Es funktioniert nur, wenn der Mehrwert ehrlich erkennbar ist – sonst wirkt es aufdringlich.",
      example: "Auf der Seite des Bürostuhls X1000 wird das Premium-Modell X2000 mit besserer Ausstattung vorgeschlagen."
    },
    {
      id: "warenkenntnisse",
      term: "Warenkenntnisse",
      category: "Sortiment",
      summary: "Fundiertes Wissen über Eigenschaften, Nutzen und Grenzen der angebotenen Waren.",
      detail: "Warenkenntnisse entstehen aus Warenprüfung, Herstellerinformationen, Messen, Fachmedien, Tests und Kundenrückmeldungen. Sie ermöglichen faire Beratung am Preis-Leistungs-Verhältnis und überzeugende Produktdetailseiten.",
      example: "Ein Mitarbeiter prüft eine Funktionsjacke im Wareneingang und liest zusätzlich einen unabhängigen Warentest."
    },
    {
      id: "elektronischer-katalog",
      term: "Elektronischer Katalog",
      category: "Sortiment",
      summary: "Datenbank, in der Produktdaten samt Medien und Preisen gebündelt vorliegen.",
      detail: "Elektronische Kataloge fassen Produktdaten, Grafiken, Videos, Preis- und Bestellinformationen zusammen. Lieferanten stellen sie bereit, Webshops prüfen die Daten und übernehmen sie in das eigene System (Katalogmanagement).",
      example: "Ein Händler übernimmt den elektronischen Katalog seines Lieferanten statt hunderte Artikel von Hand einzupflegen."
    },
    {
      id: "katalogaustauschformat",
      term: "Katalogaustauschformat",
      category: "Beschaffung",
      summary: "Standardformat für die Übertragung von Produktkatalogen zwischen Unternehmen.",
      detail: "Formate wie BMEcat, ONIX, xCBL, cXML oder einfaches CSV strukturieren Produktdaten einheitlich. So können Lieferanten, Webshops und Marktplätze Kataloge automatisiert austauschen und pflegen.",
      example: "Ein Lieferant liefert seine Produktdaten als BMEcat-Datei, der Shop liest sie automatisiert ein."
    },
    {
      id: "pim-system",
      term: "PIM-System",
      category: "Sortiment",
      summary: "Produktinformationsmanagementsystem; pflegt Produktdaten zentral für alle Kanäle.",
      detail: "Ein PIM-System erfasst, pflegt und verteilt Produktdaten systemneutral an Webshop, Marktplätze, Kataloge und Werbung. Es verhindert widersprüchliche Datenversionen in verschiedenen Abteilungen und erleichtert Aktualisierungen.",
      example: "Eine geänderte Produktbeschreibung wird einmal im PIM gepflegt und erscheint danach in Shop und Marktplatz gleichzeitig."
    },
    {
      id: "produktklassifikation",
      term: "Produktklassifikation",
      category: "Sortiment",
      summary: "Einheitliche Einordnung von Artikeln nach einem Klassifikationsstandard.",
      detail: "Standards wie eCl@ss oder ETIM ordnen Produkte hierarchisch in Klassen mit definierten Merkmalen. Das macht Artikel eindeutig identifizierbar, vergleichbar und erleichtert die elektronische Kommunikation mit Geschäftspartnern.",
      example: "Ein Koaxialkabel ist im Standard eCl@ss der Klasse „Kabel und Leitungen“ zugeordnet und über das Synonym „Erdkabel“ auffindbar."
    },
    {
      id: "warenwirtschaftssystem",
      term: "Warenwirtschaftssystem",
      category: "Beschaffung",
      summary: "System zur Verwaltung von Artikeln, Beständen, Preisen, Einkauf und Verkauf.",
      detail: "Im E-Commerce ist das Warenwirtschaftssystem oft mit Shop und Lager verbunden. Es liefert Stammdaten, Verfügbarkeit, Preise und unterstützt Beschaffungsprozesse.",
      example: "Wenn der Bestand sinkt, löst das System einen Bestellvorschlag aus."
    },
    {
      id: "schnittstelle",
      term: "Schnittstelle",
      category: "Beschaffung",
      summary: "Verbindung, über die Systeme Daten austauschen.",
      detail: "Schnittstellen verbinden zum Beispiel Shop, Warenwirtschaft, Zahlungsdienstleister, Versanddienstleister und Marktplätze. Gute Schnittstellen verringern doppelte Dateneingaben.",
      example: "Nach einer Bestellung sendet der Shop Bestelldaten automatisch an das Warenwirtschaftssystem."
    },
    {
      id: "verfuegbarkeit",
      term: "Verfügbarkeit",
      category: "Beschaffung",
      summary: "Information, ob und wann ein Produkt geliefert werden kann.",
      detail: "Verfügbarkeit beeinflusst Kaufentscheidung, Kundenzufriedenheit und Retouren. Sie muss mit Lagerbestand, Nachlieferung und Lieferzeit abgestimmt sein.",
      example: "Die Produktseite zeigt: verfügbar, Lieferung in zwei Werktagen."
    },
    {
      id: "optimale-bestellmenge",
      term: "Optimale Bestellmenge",
      category: "Beschaffung",
      summary: "Bestellmenge, bei der Bestell- und Lagerkosten möglichst günstig zusammenwirken.",
      detail: "Viele kleine Bestellungen erhöhen Bestellkosten, große Bestellungen erhöhen Lagerbestand und Kapitalbindung. Die optimale Bestellmenge gleicht diesen Zielkonflikt aus.",
      example: "Ein Shop bestellt nicht täglich 20 Stück, sondern alle zwei Wochen 280 Stück, weil die Gesamtkosten niedriger sind."
    },
    {
      id: "checkout-prozess",
      term: "Checkout-Prozess",
      category: "Vertrag",
      summary: "Schritte vom Warenkorb bis zum verbindlichen Abschluss der Bestellung.",
      detail: "Ein guter Checkout ist übersichtlich, rechtssicher, mobil nutzbar und reduziert Abbrüche. Er umfasst Kundendaten, Versand, Zahlung, Prüfung und Bestellbutton.",
      example: "Gastbestellung, klare Versandkosten und mehrere Zahlarten senken die Absprungrate."
    },
    {
      id: "agb",
      term: "AGB",
      category: "Vertrag",
      summary: "Allgemeine Geschäftsbedingungen für wiederkehrende Vertragsregeln.",
      detail: "AGB enthalten standardisierte Bedingungen, etwa zu Lieferung, Zahlung, Eigentumsvorbehalt oder Haftung. Sie müssen wirksam einbezogen und rechtlich zulässig sein.",
      example: "Der Shop verweist im Checkout auf die AGB und lässt sie vor der Bestellung akzeptieren."
    },
    {
      id: "informationspflichten",
      term: "Informationspflichten",
      category: "Vertrag",
      summary: "Rechtlich vorgeschriebene Informationen, die Kunden erhalten müssen.",
      detail: "Informationspflichten betreffen unter anderem Anbieter, Produkt, Preis, Versandkosten, Widerruf, Zahlung und Vertragsschluss. Sie schaffen Transparenz und Rechtssicherheit.",
      example: "Vor dem Kauf werden Gesamtpreis, Lieferkosten und Widerrufsrecht klar angezeigt."
    },
    {
      id: "widerrufsbelehrung",
      term: "Widerrufsbelehrung",
      category: "Vertrag",
      summary: "Information über das Recht, einen Fernabsatzvertrag innerhalb einer Frist zu widerrufen.",
      detail: "Die Widerrufsbelehrung erklärt Frist, Voraussetzungen und Ablauf. Sie ist im Online-Handel besonders wichtig, weil Kunden Produkte vor dem Kauf meist nicht physisch prüfen können.",
      example: "Nach der Bestellung erhält der Kunde eine Belehrung mit Link zum Widerrufsformular."
    },
    {
      id: "bezahlverfahren",
      term: "Bezahlverfahren",
      category: "Vertrag",
      summary: "Möglichkeit, eine Online-Bestellung zu bezahlen.",
      detail: "Bezahlverfahren werden nach Zielgruppe, Kosten, Ausfallrisiko, Sicherheit und Nutzerfreundlichkeit ausgewählt. Beispiele sind Rechnung, Karte, Lastschrift oder digitale Zahlungsdienste.",
      example: "Für Geschäftskunden wird Kauf auf Rechnung angeboten, für Neukunden zusätzlich Kartenzahlung."
    },
    {
      id: "bonitaetspruefung",
      term: "Bonitätsprüfung",
      category: "Vertrag",
      summary: "Prüfung, wie wahrscheinlich ein Kunde seine Zahlung leisten kann.",
      detail: "Bonitätsprüfungen sollen Zahlungsausfälle vermeiden. Sie müssen verhältnismäßig sein und Datenschutzanforderungen beachten.",
      example: "Vor Ratenkauf wird geprüft, ob das Ausfallrisiko vertretbar ist."
    },
    {
      id: "b2b",
      term: "B2B",
      category: "Vertrag",
      summary: "Geschäftsbeziehung zwischen Unternehmen.",
      detail: "Business-to-Business unterscheidet sich im Online-Vertrieb oft durch größere Bestellmengen, individuelle Konditionen, andere Zahlungsarten und andere rechtliche Rahmenbedingungen.",
      example: "Ein Großhändler verkauft Verpackungsmaterial an Online-Shops."
    },
    {
      id: "b2c",
      term: "B2C",
      category: "Vertrag",
      summary: "Geschäftsbeziehung zwischen Unternehmen und Privatkunden.",
      detail: "Business-to-Consumer ist stark von Verbraucherrechten, Nutzerfreundlichkeit, Zahlungsoptionen, Versand und Servicekommunikation geprägt.",
      example: "Ein Privatkunde bestellt Kopfhörer in einem Online-Shop."
    },
    {
      id: "retoure",
      term: "Retoure",
      category: "Service",
      summary: "Rücksendung eines Produkts durch den Kunden.",
      detail: "Retouren verursachen Kosten und Aufwand, liefern aber auch Hinweise auf Probleme bei Produktdaten, Qualität, Größenberatung oder Kundenerwartung.",
      example: "Viele Rücksendungen wegen falscher Größe können auf unklare Größentabellen hinweisen."
    },
    {
      id: "retourenquote",
      term: "Retourenquote",
      category: "Service",
      summary: "Anteil zurückgesendeter Artikel oder Bestellungen.",
      detail: "Die Retourenquote hilft, Rückabwicklungen messbar zu machen. Sie sollte nach Produktgruppe, Ursache und Zeitraum ausgewertet werden.",
      example: "Wenn 80 von 1.000 Bestellungen retourniert werden, beträgt die Retourenquote 8 Prozent."
    },
    {
      id: "stornoquote",
      term: "Stornoquote",
      category: "Service",
      summary: "Anteil der stornierten Bestellungen an allen Bestellungen.",
      detail: "Eine hohe Stornoquote kann auf Lieferprobleme, unklare Informationen, lange Lieferzeiten oder falsche Erwartungen hinweisen.",
      example: "Viele Stornos vor Versand zeigen, dass Lieferzeiten oder Preise überprüft werden sollten."
    },
    {
      id: "lieferungsverzug",
      term: "Lieferungsverzug",
      category: "Service",
      summary: "Leistungsstörung, bei der die Lieferung nicht rechtzeitig erfolgt.",
      detail: "Bei Lieferungsverzug muss das Unternehmen kundenorientiert und rechtssicher reagieren. Mögliche Maßnahmen sind Information, Nachfrist, Ersatzlösung oder Rückabwicklung.",
      example: "Ein Shop informiert aktiv, wenn sich die Lieferung wegen Lieferantenproblemen verzögert."
    },
    {
      id: "zahlungsverzug",
      term: "Zahlungsverzug",
      category: "Service",
      summary: "Situation, in der eine fällige Zahlung nicht rechtzeitig eingeht.",
      detail: "Beim Zahlungsverzug werden Mahnungen und weitere Schritte nötig. Dabei sollten rechtliche Vorgaben und Kundenbeziehung berücksichtigt werden.",
      example: "Nach Ablauf der Zahlungsfrist wird eine freundliche Zahlungserinnerung versendet."
    },
    {
      id: "after-sales-service",
      term: "After-Sales-Service",
      category: "Service",
      summary: "Betreuung von Kunden nach dem Kauf.",
      detail: "After-Sales-Service umfasst Fragen zur Nutzung, Reklamationen, Ersatzteile, Retouren, Bewertungen und Folgeangebote. Er kann Kundenbindung deutlich stärken.",
      example: "Nach dem Kauf erhält der Kunde eine Anleitung und Hilfe bei Rückfragen."
    },
    {
      id: "kundenbindung",
      term: "Kundenbindung",
      category: "Service",
      summary: "Maßnahmen, die Kunden zu weiteren Käufen und langfristiger Beziehung bewegen.",
      detail: "Kundenbindung entsteht durch gute Produkte, verlässlichen Service, passende Kommunikation, Vertrauen und sinnvolle Angebote. Sie ist oft günstiger als reine Neukundengewinnung.",
      example: "Ein Shop bietet personalisierte Nachkauf-Erinnerungen und schnellen Service."
    },
    {
      id: "servicekommunikation",
      term: "Servicekommunikation",
      category: "Service",
      summary: "Kundenorientierte Kommunikation vor, während und nach dem Kauf.",
      detail: "Servicekommunikation nutzt passende Kanäle wie E-Mail, Chat, Telefon oder Messenger. Sie soll Anliegen lösen, Vertrauen schaffen und Informationen für Verbesserungen liefern.",
      example: "Ein Chat klärt vor dem Kauf, ob ein Ersatzteil zum Gerät passt."
    },
    {
      id: "wertestrom",
      term: "Wertestrom",
      category: "Kennzahlen",
      summary: "Fluss von Waren, Dienstleistungen, Informationen und Geld in Geschäftsprozessen.",
      detail: "Werteströme zeigen, wie Leistungen entstehen und bezahlt werden. Sie sind Grundlage für Buchhaltung, Prozessanalyse und wirtschaftliche Beurteilung.",
      example: "Bestellung, Versand, Rechnung und Zahlung bilden zusammen einen Wertestrom."
    },
    {
      id: "beleg",
      term: "Beleg",
      category: "Kennzahlen",
      summary: "Nachweis eines Geschäftsvorfalls.",
      detail: "Belege dokumentieren Werteströme und sind Grundlage der Buchführung. Beispiele sind Rechnungen, Quittungen, Lieferscheine oder Gutschriften.",
      example: "Eine Eingangsrechnung belegt den Einkauf von Verpackungsmaterial."
    },
    {
      id: "umsatzsteuer",
      term: "Umsatzsteuer",
      category: "Kennzahlen",
      summary: "Steuer auf den Verkauf von Waren und Dienstleistungen.",
      detail: "Im Online-Shop müssen Netto- und Bruttopreise sowie geltende Umsatzsteuersätze korrekt berücksichtigt werden. Fehler können rechtliche und kaufmännische Folgen haben.",
      example: "Ein Nettopreis von 100 Euro ergibt bei 19 Prozent Umsatzsteuer einen Bruttopreis von 119 Euro."
    },
    {
      id: "rohertrag",
      term: "Rohertrag",
      category: "Kennzahlen",
      summary: "Differenz zwischen Umsatzerlösen und Waren- beziehungsweise Materialeinsatz.",
      detail: "Der Rohertrag zeigt, welcher Betrag nach Abzug des Wareneinsatzes zur Deckung weiterer Kosten und für Gewinn verbleibt.",
      example: "Verkauf 80 Euro, Wareneinsatz 50 Euro: Rohertrag 30 Euro."
    },
    {
      id: "liquiditaet",
      term: "Liquidität",
      category: "Kennzahlen",
      summary: "Fähigkeit eines Unternehmens, fällige Zahlungen leisten zu können.",
      detail: "Liquidität ist überlebenswichtig. Ein Unternehmen kann profitabel wirken und trotzdem zahlungsunfähig werden, wenn Geld zu spät eingeht.",
      example: "Genügend Bankguthaben für Lieferantenrechnungen zeigt kurzfristige Zahlungsfähigkeit."
    },
    {
      id: "rentabilitaet",
      term: "Rentabilität",
      category: "Kennzahlen",
      summary: "Verhältnis von Erfolg zu eingesetztem Kapital oder Umsatz.",
      detail: "Rentabilität zeigt, wie wirtschaftlich ein Unternehmen arbeitet. Im Unterricht sind etwa Eigenkapital- und Umsatzrentabilität relevant.",
      example: "Ein Gewinn von 10.000 Euro bei 100.000 Euro Umsatz entspricht 10 Prozent Umsatzrentabilität."
    },
    {
      id: "kpi",
      term: "KPI",
      category: "Kennzahlen",
      summary: "Key Performance Indicator, also eine Schlüsselkennzahl zur Steuerung.",
      detail: "KPIs helfen, Ziele messbar zu machen. Eine gute KPI passt zum Ziel, hat eine klare Berechnung und führt zu möglichen Maßnahmen.",
      example: "Für Kampagnen kann die Conversion Rate eine KPI sein."
    },
    {
      id: "customer-journey",
      term: "Customer Journey",
      category: "Marketing",
      summary: "Weg eines Kunden von erstem Kontakt bis Kauf und Nachbetreuung.",
      detail: "Die Customer Journey betrachtet Kontaktpunkte wie Anzeige, Suche, Produktseite, Warenkorb, Checkout, Lieferung und Service. Schwachstellen können gezielt optimiert werden.",
      example: "Eine Anzeige führt zur Landingpage, dann zum Produktvergleich, Warenkorb und Kauf."
    },
    {
      id: "targeting",
      term: "Targeting",
      category: "Marketing",
      summary: "Gezielte Ansprache ausgewählter Zielgruppen mit passenden Werbemitteln.",
      detail: "Targeting nutzt zum Beispiel Kontext, Ort, Interessen oder Verhalten. Es soll Relevanz erhöhen, Streuverluste senken und verantwortungsvoll mit Daten umgehen.",
      example: "Eine Anzeige für Laufschuhe wird Personen gezeigt, die sich für Training interessieren."
    },
    {
      id: "retargeting",
      term: "Retargeting",
      category: "Marketing",
      summary: "Erneute Ansprache früherer Besucher oder Interessenten.",
      detail: "Retargeting erinnert Personen an Produkte oder Warenkörbe, mit denen sie bereits Kontakt hatten. Es kann wirksam sein, darf aber nicht aufdringlich werden.",
      example: "Ein Kunde sieht später erneut eine Anzeige für den verlassenen Warenkorb."
    },
    {
      id: "seo",
      term: "SEO",
      category: "Marketing",
      summary: "Optimierung für organische Sichtbarkeit in Suchmaschinen.",
      detail: "SEO umfasst hilfreiche Inhalte, technische Qualität, klare Struktur und externe Signale. Es kauft keine Klicks, sondern verbessert Voraussetzungen für unbezahlte Treffer.",
      example: "Eine Produktberatung beantwortet Suchfragen und verlinkt passende Produktseiten."
    },
    {
      id: "onpage-optimierung",
      term: "OnPage-Optimierung",
      category: "Marketing",
      summary: "Alle SEO-Maßnahmen auf der eigenen Website.",
      detail: "Die OnPage-Optimierung (auch OnSite) umfasst alles, was auf der eigenen Website geschieht und von Dritten nicht beeinflussbar ist: Keywords, technische Optimierung (Meta-Daten, Alt-Attribute, interne Links, Seitenstruktur), Content und die Auswertung über KPI.",
      example: "Der Shop überarbeitet Title, Meta-Beschreibung und Überschriften seiner Kategorieseite."
    },
    {
      id: "offpage-optimierung",
      term: "OffPage-Optimierung",
      category: "Marketing",
      summary: "SEO-Bemühungen außerhalb der eigenen Website.",
      detail: "Die OffPage-Optimierung (auch OffSite) arbeitet an Signalen außerhalb der eigenen Website – vor allem am Aufbau hochwertiger, themenrelevanter Backlinks. Gekaufte oder zu schnell aufgebaute Links erkennen Suchmaschinen und strafen sie ab.",
      example: "Ein Fachblog verlinkt den Ratgeber des Shops – ein wertvoller, themenrelevanter Backlink."
    },
    {
      id: "backlink",
      term: "Backlink",
      category: "Marketing",
      summary: "Link von einer fremden Website auf die eigene Seite.",
      detail: "Suchmaschinen werten Backlinks als Empfehlung und damit als Rankingfaktor. Entscheidend sind Qualität und Themenrelevanz der verlinkenden Seite, nicht die bloße Menge. Gute Quellen sind Gastbeiträge, geteilte Infografiken oder Engagement in Communitys.",
      example: "Ein Ratgeberportal verlinkt in einem Artikel über Rückenschmerzen den Bürostuhl-Guide des Shops."
    },
    {
      id: "longtail-keyword",
      term: "Longtail Keyword",
      category: "Marketing",
      summary: "Spezifische, mehrteilige Suchanfrage mit geringem Suchvolumen.",
      detail: "Longtail Keywords („Kommode weiß günstig“) haben weniger Suchvolumen und Wettbewerb als Shorthead Keywords („Kommode“), führen aber öfter zum Kauf, weil die Absicht konkreter ist. Eine gute Keywordstrategie mischt beide Arten.",
      example: "Statt nur auf „Bürostuhl“ optimiert der Shop auch auf „ergonomischer Bürostuhl mit Lordosenstütze“."
    },
    {
      id: "content-marketing",
      term: "Content Marketing",
      category: "Marketing",
      summary: "Zielgruppen mit nützlichen Inhalten informieren und unterhalten.",
      detail: "Content Marketing erstellt Inhalte mit echtem Mehrwert – Blogbeiträge, Tests, Infografiken, Videos. Im SEO-Bereich ist es entscheidend: Ohne guten, einzigartigen Content gibt es keine guten Rankings. Die Textlänge zählt weniger als der Nutzen für die Lesenden.",
      example: "Der Shop veröffentlicht einen Ratgeber „Homeoffice ergonomisch einrichten“ mit Checkliste."
    },
    {
      id: "duplicate-content",
      term: "Duplicate Content",
      category: "Marketing",
      summary: "Identische Inhalte, die mehrfach im Netz auftauchen.",
      detail: "Kopierte oder mehrfach verwendete Inhalte gelten als schlechter Rankingfaktor: Seit dem Panda-Update belohnt Google relevante, einzigartige Inhalte und wertet Seiten ohne eigenen Mehrwert ab.",
      example: "Zwei Produktseiten mit wortgleicher Herstellerbeschreibung konkurrieren gegeneinander – besser eigene Texte schreiben."
    },
    {
      id: "sea",
      term: "SEA",
      category: "Marketing",
      summary: "Bezahlte Suchmaschinenwerbung.",
      detail: "SEA nutzt Anzeigen bei Suchmaschinen. Kampagnen werden über Keywords, Anzeigen, Gebote, Budgets, Zielseiten und Kennzahlen gesteuert.",
      example: "Für das Keyword 'ergonomischer Bürostuhl' wird eine Suchanzeige geschaltet."
    },
    {
      id: "qualitaetsfaktor",
      term: "Qualitätsfaktor",
      category: "Marketing",
      summary: "Schätzwert von Google Ads über die Leistung der Keywords (Skala 1 bis 10).",
      detail: "Der Qualitätsfaktor macht aus Google Ads keine reine Auktion: Er bewertet unter anderem die Relevanz der Keywords, bisherige Klickraten, die Qualität der Zielseite und die Verwendung von Anzeigenerweiterungen. Ein guter Qualitätsfaktor bringt bessere Positionen bei geringeren Klickkosten.",
      example: "Trotz niedrigerem Gebot steht die relevantere Anzeige mit passender Zielseite weiter oben."
    },
    {
      id: "conversion-tracking",
      term: "Conversion-Tracking",
      category: "Marketing",
      summary: "Nachverfolgen, welche Kampagne oder welches Keyword zu einer Conversion geführt hat.",
      detail: "Conversion-Tracking ist Teil der Website-Analyse: Es verbindet Klicks mit dem eigentlichen Ziel – Bestellungen, Anfragen, Umsatz. So zeigt sich, welche Keywords Umsatz generieren statt nur Klicks; das steigert die Erfolgsauswertung von Onlinemarketing-Maßnahmen deutlich.",
      example: "Das Keyword mit den meisten Klicks bringt kaum Bestellungen – ein anderes mit weniger Klicks den meisten Umsatz."
    },
    {
      id: "performance-marketing",
      term: "Performance Marketing",
      category: "Marketing",
      summary: "Werbung, die nach messbarer Leistung abgerechnet und gesteuert wird.",
      detail: "Suchmaschinenwerbung ist Performance Marketing: Bezahlt wird im Cost-per-Click-Verfahren nur für tatsächliche Klicks, Budgets und Gebote sind frei wählbar, der Erfolg wird über Echtzeit-Kennzahlen und Conversion-Tracking gemessen. Anzeigen ohne Klick liefern einen kostenlosen Branding-Effekt.",
      example: "Die Kampagne wird täglich anhand von Klickrate und Cost-per-Conversion nachjustiert."
    },
    {
      id: "anzeigenerweiterung",
      term: "Anzeigenerweiterung",
      category: "Marketing",
      summary: "Zusatzelemente, die eine Suchanzeige größer und informativer machen.",
      detail: "Anzeigenerweiterungen ergänzen die Anzeige um Standorte, Preise, Zusatzinformationen wie Versand und Beratung oder eine Telefonnummer. Die Anzeige belegt mehr Platz auf der Suchergebnisseite und wird präsenter – das kann die Klickrate und den Qualitätsfaktor verbessern.",
      example: "Unter dem Anzeigentext erscheinen Öffnungszeiten, Standort und ein Anruf-Button."
    },
    {
      id: "sem",
      term: "SEM",
      category: "Marketing",
      summary: "Search Engine Marketing: SEO und SEA im Zusammenspiel.",
      detail: "SEM erhöht die Sichtbarkeit in Suchergebnisseiten durch die Kombination von bezahlten Suchanzeigen (SEA) und Suchmaschinenoptimierung (SEO). Beide teilen Keywords, Kennzahlen und Zielseiten – die SEA-Keyword-Daten zeigen, welche Begriffe sich für langfristige SEO lohnen.",
      example: "Ein performantes SEA-Keyword wird zusätzlich in die SEO-Strategie der Kategorieseite übernommen."
    },
    {
      id: "serp",
      term: "SERP",
      category: "Marketing",
      summary: "Search Engine Results Page, also die Suchergebnisseite.",
      detail: "Eine SERP kann organische Ergebnisse, Anzeigen, Bilder, Karten, Shopping-Elemente oder direkte Antworten enthalten. Ihre Darstellung hängt von Anfrage und Kontext ab.",
      example: "Bei einer Produktsuche erscheinen Anzeigen, organische Treffer und Shopping-Kacheln."
    },
    {
      id: "conversion",
      term: "Conversion",
      category: "Marketing",
      summary: "Gewünschte Handlung eines Nutzers.",
      detail: "Eine Conversion muss zum Ziel passen. Sie kann Kauf, Registrierung, Download, Kontaktanfrage, Newsletter-Anmeldung oder Warenkorbabschluss sein.",
      example: "Aus einem Klick wird eine Bestellung: Das ist eine Conversion."
    },
    {
      id: "ctr",
      term: "CTR",
      category: "Marketing",
      summary: "Click-Through-Rate: Anteil der Klicks an den Impressionen.",
      detail: "Die CTR zeigt, wie gut ein Suchergebnis oder eine Anzeige zum Klick motiviert. Sie wird mit Klicks durch Impressionen mal 100 berechnet.",
      example: "2.000 Klicks bei 100.000 Impressionen ergeben 2 Prozent CTR."
    },
    {
      id: "cpc",
      term: "CPC",
      category: "Marketing",
      summary: "Cost per Click, also durchschnittliche Kosten je Klick.",
      detail: "Der CPC verteilt die Werbekosten auf die erzielten Klicks. Er sagt noch nicht, ob diese Klicks auch zu Umsatz geführt haben.",
      example: "900 Euro Kosten bei 1.500 Klicks ergeben 0,60 Euro CPC."
    },
    {
      id: "cpo",
      term: "CPO",
      category: "Marketing",
      summary: "Cost per Order, also Werbekosten je Bestellung.",
      detail: "Der CPO hilft, Kampagnen wirtschaftlich zu bewerten. Er sollte mit Warenkorbwert, Marge und Zielkosten verglichen werden.",
      example: "1.200 Euro Werbekosten bei 80 Bestellungen ergeben 15 Euro CPO."
    },
    {
      id: "roas",
      term: "ROAS",
      category: "Marketing",
      summary: "Return on Advertising Spend: Umsatz im Verhältnis zu Werbekosten.",
      detail: "Der ROAS zeigt, wie viel Umsatz je Werbe-Euro entsteht. Für eine echte Entscheidung müssen zusätzlich Marge, Retouren und Fixkosten betrachtet werden.",
      example: "4.800 Euro Umsatz bei 1.200 Euro Kosten ergeben einen ROAS von 4,0."
    },
    {
      id: "online-marktplatz",
      term: "Online-Marktplatz",
      category: "Vertriebskanäle",
      summary: "Plattform, auf der viele Anbieter ihre Produkte online verkaufen.",
      detail: "Marktplätze bieten Reichweite und Vertrauen, können aber Gebühren, Abhängigkeiten und weniger Kontrolle über Kundendaten mit sich bringen.",
      example: "Ein Händler verkauft zusätzlich zum eigenen Shop auf einem Marktplatz."
    },
    {
      id: "usability",
      term: "Usability",
      category: "Vertriebskanäle",
      summary: "Benutzerfreundlichkeit eines digitalen Angebots.",
      detail: "Gute Usability macht Navigation, Suche, Produktvergleich, Warenkorb und Checkout verständlich. Schlechte Usability erhöht Absprungraten und Serviceaufwand.",
      example: "Ein gut sichtbarer Warenkorb und klare Fehlermeldungen verbessern die Usability."
    },
    {
      id: "ab-test",
      term: "A/B-Test",
      category: "Vertriebskanäle",
      summary: "Vergleich zweier Varianten, um Wirkung anhand von Daten zu prüfen.",
      detail: "Beim A/B-Test sehen Nutzer unterschiedliche Versionen, zum Beispiel einer Produktseite. Danach wird gemessen, welche Variante ein Ziel besser erreicht.",
      example: "Zwei Buttontexte werden getestet, um die höhere Klickrate zu finden."
    },
    {
      id: "prozessoptimierung",
      term: "Prozessoptimierung",
      category: "Vertriebskanäle",
      summary: "Gezielte Verbesserung von Abläufen nach Analyse von Schwachstellen.",
      detail: "Im E-Commerce können Produktdatenpflege, Bestellabwicklung, Versand, Retouren, Service oder Marketingprozesse optimiert werden. Ziel sind Qualität, Effizienz und Kundennutzen.",
      example: "Retourengründe werden ausgewertet und die Größentabelle verbessert."
    },
    {
      id: "kundenwertanalyse",
      term: "Kundenwertanalyse",
      category: "Vertriebskanäle",
      summary: "Bewertung, welchen wirtschaftlichen und strategischen Wert Kundengruppen haben.",
      detail: "Kundenwert kann Umsatz, Marge, Wiederkaufrate, Servicekosten, Retouren und Weiterempfehlung berücksichtigen. Er hilft bei Prioritäten in Marketing und Service.",
      example: "Stammkunden mit hoher Wiederkaufrate erhalten gezielte Serviceangebote."
    },
    {
      id: "soziale-marktwirtschaft",
      term: "Soziale Marktwirtschaft",
      category: "Wirtschaft",
      summary: "Wirtschaftsordnung, die Wettbewerb mit sozialem Ausgleich verbindet.",
      detail: "Unternehmen handeln marktorientiert, der Staat setzt aber Regeln und Ausgleichsmechanismen. Für E-Commerce sind Wettbewerb, Verbraucherschutz und Innovation relevant.",
      example: "Der Staat schützt Verbraucherrechte, während Unternehmen frei um Kunden konkurrieren."
    },
    {
      id: "wirtschaftskreislauf",
      term: "Wirtschaftskreislauf",
      category: "Wirtschaft",
      summary: "Modell der Geld- und Güterströme zwischen Wirtschaftsteilnehmern.",
      detail: "Der erweiterte Wirtschaftskreislauf betrachtet Haushalte, Unternehmen, Staat, Banken und Ausland. Er hilft, gesamtwirtschaftliche Einflüsse auf Unternehmen zu verstehen.",
      example: "Haushalte kaufen Produkte, Unternehmen zahlen Löhne und Steuern fließen an den Staat."
    },
    {
      id: "oekonomisches-prinzip",
      term: "Ökonomisches Prinzip",
      category: "Wirtschaft",
      summary: "Grundsatz, mit knappen Mitteln möglichst wirtschaftlich umzugehen.",
      detail: "Beim Minimalprinzip wird ein Ziel mit möglichst geringem Mitteleinsatz erreicht. Beim Maximalprinzip wird mit gegebenen Mitteln ein möglichst großer Erfolg angestrebt.",
      example: "Mit einem festen Werbebudget soll möglichst viel qualifizierter Umsatz erzielt werden."
    },
    {
      id: "nachhaltigkeit",
      term: "Nachhaltigkeit",
      category: "Wirtschaft",
      summary: "Berücksichtigung ökonomischer, ökologischer und sozialer Wirkungen.",
      detail: "Im E-Commerce betrifft Nachhaltigkeit Versand, Verpackung, Retouren, Lieferketten, Energieverbrauch, Arbeitsbedingungen und langfristige Wirtschaftlichkeit.",
      example: "Ein Shop reduziert Retouren durch bessere Produktinformationen und spart dadurch Kosten und Ressourcen."
    },
    {
      id: "projektauftrag",
      term: "Projektauftrag",
      category: "Projekt",
      summary: "Vereinbarung über Ziel, Umfang, Rahmenbedingungen und Ergebnis eines Projekts.",
      detail: "Ein klarer Projektauftrag verhindert Missverständnisse. Er beschreibt Ausgangslage, Ziel, Auftraggeber, Termine, Ressourcen, Risiken und erwartete Ergebnisse.",
      example: "Ein Projektauftrag legt fest, dass der Checkout bis Ende Mai verbessert werden soll."
    },
    {
      id: "agiles-projektmanagement",
      term: "Agiles Projektmanagement",
      category: "Projekt",
      summary: "Flexible Projektvorgehensweise mit kurzen Arbeitszyklen und regelmäßigem Feedback.",
      detail: "Agiles Vorgehen eignet sich, wenn Anforderungen noch unsicher sind oder sich ändern. Ergebnisse werden schrittweise entwickelt und laufend geprüft.",
      example: "Das Team testet jede Woche eine neue Shopfunktion mit Nutzerfeedback."
    },
    {
      id: "projektstatus",
      term: "Projektstatus",
      category: "Projekt",
      summary: "Aktueller Stand eines Projekts bezogen auf Ziel, Zeit, Kosten, Qualität und Risiken.",
      detail: "Der Projektstatus macht Fortschritt sichtbar und zeigt, ob Anpassungen nötig sind. Er unterstützt Kommunikation im Team und mit Auftraggebern.",
      example: "Der Statusbericht zeigt: Zeitplan grün, Budget gelb, Risiko bei externer Schnittstelle."
    },
    {
      id: "impressum",
      term: "Impressum",
      category: "Recht & Daten",
      summary: "Anbieterkennzeichnung einer geschäftlichen Webseite.",
      detail: "Das Impressum zeigt, wer für eine Webseite verantwortlich ist und wie der Anbieter erreichbar ist. Im Webshop muss es eindeutig benannt, gut auffindbar und dauerhaft verfügbar sein.",
      example: "Im Footer eines Shops führt ein Link „Impressum“ zu Name, Anschrift, E-Mail und weiteren Pflichtangaben."
    },
    {
      id: "anbieterkennzeichnung",
      term: "Anbieterkennzeichnung",
      category: "Recht & Daten",
      summary: "Pflichtangaben, die den Anbieter eines digitalen Dienstes erkennbar machen.",
      detail: "Die Anbieterkennzeichnung umfasst je nach Fall Name oder Firma, Anschrift, Kontakt, Vertretungsberechtigte, Registerangaben und Umsatzsteuer-ID. Sie ist eng mit dem Impressum verbunden.",
      example: "Eine GmbH nennt Firma, Sitz, Geschäftsführung, Registergericht und Registernummer."
    },
    {
      id: "ddg",
      term: "DDG",
      category: "Recht & Daten",
      summary: "Digitale-Dienste-Gesetz; aktuelle Grundlage für allgemeine Informationspflichten.",
      detail: "Das DDG löst frühere Bezüge zum Telemediengesetz in diesem Bereich ab. Für Impressumsangaben ist insbesondere § 5 DDG relevant.",
      example: "Ein aktuelles Arbeitsblatt verweist auf § 5 DDG statt pauschal auf § 5 TMG."
    },
    {
      id: "mstv",
      term: "MStV",
      category: "Recht & Daten",
      summary: "Medienstaatsvertrag; enthält Regeln für bestimmte Medienangebote.",
      detail: "Für journalistisch-redaktionell gestaltete Angebote kann nach § 18 Abs. 2 MStV eine verantwortliche Person anzugeben sein. Nicht jeder einfache Webshop braucht diese Zusatzangabe.",
      example: "Ein Shop mit redaktionellem Magazin prüft, ob eine verantwortliche Person nach MStV genannt werden muss."
    },
    {
      id: "datenschutz",
      term: "Datenschutz",
      category: "Recht & Daten",
      summary: "Schutz personenbezogener Daten vor unzulässiger Nutzung.",
      detail: "Datenschutz ist im E-Commerce zentral, weil Kundendaten, Zahlungsdaten, Nutzungsdaten und Kommunikationsdaten verarbeitet werden. Er verlangt Zweckbindung, Transparenz und Sicherheit.",
      example: "Newsletter dürfen nur mit zulässiger Einwilligung versendet werden."
    },
    {
      id: "datensicherheit",
      term: "Datensicherheit",
      category: "Recht & Daten",
      summary: "Technische und organisatorische Maßnahmen zum Schutz von Daten.",
      detail: "Datensicherheit schützt vor Verlust, Manipulation und unbefugtem Zugriff. Dazu gehören Rechtekonzepte, Verschlüsselung, Backups und sichere Schnittstellen.",
      example: "Mitarbeiter erhalten nur Zugriff auf Daten, die sie für ihre Aufgabe benötigen."
    },
    {
      id: "urheberrecht",
      term: "Urheberrecht",
      category: "Recht & Daten",
      summary: "Schutz geistiger Werke wie Texte, Bilder, Videos oder Grafiken.",
      detail: "Im Online-Shop dürfen Medien nur verwendet werden, wenn die Nutzungsrechte geklärt sind. Verstöße können Abmahnungen und Kosten verursachen.",
      example: "Produktbilder eines Herstellers werden nur genutzt, wenn die Nutzung erlaubt ist."
    },
    {
      id: "markenrecht",
      term: "Markenrecht",
      category: "Recht & Daten",
      summary: "Rechtlicher Schutz von Kennzeichen wie Markenname oder Logo.",
      detail: "Markenrecht schützt vor Verwechslung und unberechtigter Nutzung. Bei Produktpräsentation, Anzeigen und Keywords muss sorgfältig geprüft werden.",
      example: "Ein Händler darf fremde Marken nicht so einsetzen, dass Kunden über die Herkunft getäuscht werden."
    },
    {
      id: "unlauterer-wettbewerb",
      term: "Unlauterer Wettbewerb",
      category: "Recht & Daten",
      summary: "Unfaire geschäftliche Handlung im Wettbewerb.",
      detail: "Unlauter kann zum Beispiel irreführende Werbung, aggressive Ansprache oder Verschleierung wichtiger Informationen sein. Im E-Commerce betrifft das besonders Produktseiten und Werbung.",
      example: "Ein künstlich verknappter Countdown ohne echte Grundlage kann problematisch sein."
    },
    {
      id: "disclaimer",
      term: "Disclaimer",
      category: "Recht & Daten",
      summary: "Hinweis, mit dem sich Webseitenbetreiber von fremden Inhalten distanzieren wollen.",
      detail: "Ein Disclaimer soll klarstellen, dass verlinkte Inhalte nicht zu eigen gemacht werden. Ein pauschaler Textbaustein schließt die Haftung aber nicht zuverlässig aus. Wichtiger sind die Prüfung von Zielseiten, klare Kennzeichnung externer Links und schnelles Entfernen problematischer Verlinkungen.",
      example: "Statt einer leeren Floskel schreibt ein Shop, dass Links bei Kenntnis von Rechtsverstößen umgehend entfernt werden – und tut das auch."
    },
    {
      id: "abmahnung",
      term: "Abmahnung",
      category: "Recht & Daten",
      summary: "Formale Aufforderung, einen Rechtsverstoß zu beenden und künftig zu unterlassen.",
      detail: "Mit einer Abmahnung verlangt ein Rechteinhaber oder Wettbewerber, ein rechtswidriges Verhalten zu stoppen, meist verbunden mit einer Unterlassungserklärung und Kostenerstattung. Im E-Commerce sind fehlerhafte Impressen, Urheberrechtsverstöße und irreführende Werbung häufige Anlässe.",
      example: "Ein Händler nutzt ein fremdes Produktfoto ohne Erlaubnis und erhält eine kostenpflichtige Abmahnung des Fotografen."
    },
    {
      id: "creative-commons",
      term: "Creative Commons",
      category: "Recht & Daten",
      summary: "System vorgefertigter Lizenzen, mit denen Urheber die Nutzung ihrer Werke freigeben.",
      detail: "Creative-Commons-Lizenzen kombinieren Bausteine wie BY (Namensnennung), SA (Weitergabe unter gleichen Bedingungen), NC (nicht kommerziell) und ND (keine Bearbeitung). CC0 verzichtet weitgehend auf Rechte. Die Lizenzangabe zeigt genau, was mit einem Werk erlaubt ist.",
      example: "Ein Schüler nutzt für sein Webshop-Projekt ein CC-BY-Foto und nennt dafür den Fotografen unter dem Bild."
    },
    {
      id: "zitatrecht",
      term: "Zitatrecht",
      category: "Recht & Daten",
      summary: "Erlaubnis, fremde Textstellen mit klarer Quellenangabe einzubinden.",
      detail: "Das Zitatrecht ist eine Ausnahme vom Urheberrecht: Kurze Auszüge dürfen übernommen werden, wenn sie einen inhaltlichen Zweck erfüllen und der Urheber deutlich genannt wird. Ein Zitat ersetzt keine eigene Leistung und darf nicht beliebig lang sein.",
      example: "Ein Blogartikel übernimmt zwei Sätze aus einem Fachbuch und nennt Autor, Titel, Jahr und Seite."
    },
    {
      id: "deep-link",
      term: "Deep Link",
      category: "Recht & Daten",
      summary: "Link, der direkt auf eine Unterseite einer fremden Website führt.",
      detail: "Deep Links (tiefe Verknüpfungen) verweisen nicht auf die Startseite, sondern direkt auf einzelne Inhalte. Gerichte haben bestätigt, dass Deep Links grundsätzlich zulässig sind. Externe Links sollten trotzdem klar als solche gekennzeichnet werden.",
      example: "Ein Shop verlinkt direkt auf die Pflegehinweis-Seite eines Herstellers statt auf dessen Startseite."
    },
    {
      id: "hotlink",
      term: "Hotlink",
      category: "Recht & Daten",
      summary: "Einbindung fremder Dateien, die direkt vom fremden Server geladen werden.",
      detail: "Beim Hotlinking wird zum Beispiel ein Bild über ein HTML-Attribut eingebunden und von einem fremden Server geladen. Besucher erkennen die fremde Herkunft nicht – rechtlich und technisch problematisch, da Urheberrechte verletzt und fremde Ressourcen belastet werden können.",
      example: "Statt ein Bild per Hotlink einzubetten, klärt ein Händler die Rechte und lädt es auf den eigenen Server."
    },
    {
      id: "preisangabenverordnung",
      term: "Preisangabenverordnung",
      category: "Recht & Daten",
      summary: "PAngV; regelt, wie Preise gegenüber Verbrauchern anzugeben sind.",
      detail: "Die PAngV verlangt Endpreise inklusive Umsatzsteuer, klare Versandkosten-Hinweise und bei Mengenware den Grundpreis. Preise müssen leicht erkennbar, deutlich lesbar und dem Angebot eindeutig zugeordnet sein. Verstöße können Bußgelder bis 25.000 € nach sich ziehen.",
      example: "Ein Shop schreibt unter jeden Artikelpreis „inkl. MwSt. zzgl. Versandkosten“ mit Link zur Versandkostenübersicht."
    },
    {
      id: "grundpreis",
      term: "Grundpreis",
      category: "Recht & Daten",
      summary: "Preis je Mengeneinheit, zum Beispiel je Liter oder Kilogramm.",
      detail: "Der Grundpreis macht Angebote mit unterschiedlichen Packungsgrößen vergleichbar. Er ist inklusive Umsatzsteuer in unmittelbarer Nähe des Endpreises anzugeben, wenn Ware nach Gewicht, Volumen, Länge oder Fläche angeboten wird.",
      example: "Neben „250 ml für 2,50 €“ steht der Grundpreis „10,00 € / 1 l“."
    },
    {
      id: "dynamic-pricing",
      term: "Dynamic Pricing",
      category: "Wirtschaft",
      summary: "Laufende, algorithmische Anpassung der Verkaufspreise.",
      detail: "Beim Dynamic Pricing passt Software die Preise an Nachfrage, Tageszeit, Wettbewerb, Standort oder Endgerät an – teils mehrmals täglich. Kunden begegnen dem mit Preistrackern, gelöschten Cookies oder Preisvergleichsportalen.",
      example: "Der Preis einer Uhr ist über einen Gutschein-Link niedriger als beim direkten Aufruf desselben Shops."
    },
    {
      id: "preisdifferenzierung",
      term: "Preisdifferenzierung",
      category: "Wirtschaft",
      summary: "Gleiche Ware wird verschiedenen Kunden zu unterschiedlichen Preisen angeboten.",
      detail: "Preisdifferenzierung kann räumlich (nach Ort), personell (nach Kundengruppe), zeitlich (nach Saison oder Uhrzeit) oder mengenmäßig (nach Abnahmemenge) erfolgen. Künstliche Benachteiligung ausländischer EU-Kunden ist verboten.",
      example: "Skier sind im Sommer günstiger als im Dezember – zeitliche Preisdifferenzierung."
    },
    {
      id: "rabatt",
      term: "Rabatt",
      category: "Wirtschaft",
      summary: "Preisnachlass auf den festgelegten Verkaufspreis.",
      detail: "Übliche Formen sind Mengenrabatt, Treuerabatt, Wiederverkäuferrabatt, Personalrabatt und Bonus. Naturalrabatte gewähren Ware statt Geld: als Draufgabe (mehr Ware) oder Dreingabe (geringerer Preis für die gewünschte Menge).",
      example: "Ab 100 Flaschen Wein erhält der Kunde 10 Flaschen als Draufgabe gratis dazu."
    },
    {
      id: "skonto",
      term: "Skonto",
      category: "Wirtschaft",
      summary: "Preisnachlass für Zahlung innerhalb einer kurzen Frist.",
      detail: "Skonto belohnt schnelles Bezahlen einer Rechnung, zum Beispiel 2 % Abzug bei Zahlung innerhalb von 10 Tagen. Es ist Teil der Konditionenpolitik und verbessert die Liquidität des Verkäufers.",
      example: "„Zahlbar innerhalb 30 Tagen netto, bei Zahlung in 10 Tagen 2 % Skonto.“"
    },
    {
      id: "preisschwelleneffekt",
      term: "Preisschwelleneffekt",
      category: "Marketing",
      summary: "Psychologische Preisgrenzen beeinflussen die Kaufbereitschaft deutlich.",
      detail: "Beim Über- oder Unterschreiten bestimmter Schwellen (z. B. 20,00 €) ändert sich der Absatz spürbar. Deshalb setzen Händler gebrochene Preise wie 19,95 € knapp unter die Schwelle. Verwandt sind Preisrundungseffekt und Preisfiguren.",
      example: "Nach der Senkung von 20,00 € auf 19,95 € steigt der Absatz von 40 auf 250 Stück im Monat."
    },
    {
      id: "uvp",
      term: "UVP",
      category: "Wirtschaft",
      summary: "Unverbindliche Preisempfehlung des Herstellers.",
      detail: "Der Hersteller empfiehlt einen Verkaufspreis, an den Händler nicht gebunden sind. Verbindliche Preisbindung ist nur in Ausnahmen wie bei Büchern zulässig. In der Werbung darf eine echte UVP als Vergleichspreis genannt werden.",
      example: "Ein Kopfhörer mit UVP 99,99 € wird im Shop für 79,99 € angeboten."
    },
    {
      id: "warenwirtschaft",
      term: "Warenwirtschaft",
      category: "Beschaffung",
      summary: "Alle Tätigkeiten rund um Beschaffung, Lagerung und Absatz der Ware.",
      detail: "Die Warenwirtschaft ist der Warenbereich des Unternehmens. Ihr Ziel: die richtige Ware zur rechten Zeit, in der richtigen Menge, zum richtigen Preis am richtigen Ort. Dabei besteht ein Zielkonflikt zwischen niedrigen Beständen und sofortiger Lieferfähigkeit.",
      example: "Ein Auftragseingang löst Verfügbarkeitsprüfung, Kommissionierung, Verpackung und Versand aus."
    },
    {
      id: "warenfluss",
      term: "Warenfluss",
      category: "Beschaffung",
      summary: "Die physische Bewegung der Ware durch das Unternehmen.",
      detail: "Im Warenfluss wird die Ware körperlich bewegt: annehmen, prüfen, lagern, kommissionieren, verpacken, versenden. Er läuft parallel zum Informationsfluss, in dem die zugehörigen Daten verarbeitet werden.",
      example: "Die Ware wird im Wareneingang geprüft, eingelagert und später für den Versand verpackt."
    },
    {
      id: "informationsfluss",
      term: "Informationsfluss",
      category: "Beschaffung",
      summary: "Die Bewegung von Informationen über Waren durch das Unternehmen.",
      detail: "Im Informationsfluss arbeiten Beschäftigte mit Daten über Waren: Lieferschein prüfen, Rechnung kontrollieren, Bestand buchen, Preis kalkulieren, Umsatz erfassen und Nachbestellungen planen.",
      example: "Nach dem Wareneingang wird der Lieferschein geprüft und der Bestand im System aktualisiert."
    },
    {
      id: "artikelnummer",
      term: "Artikelnummer",
      category: "Beschaffung",
      summary: "Eindeutige Kennung, mit der ein System jeden Artikel identifiziert.",
      detail: "Artikelnummern sind die Voraussetzung für artikelgenaue Erfassung im Warenwirtschaftssystem. Webshops vergeben hauseigene Nummern nach eigenem Schema oder nutzen die herstellerübergreifende GTIN.",
      example: "Der Bürostuhl X1000 trägt im Shop die hauseigene Artikelnummer BS-1000."
    },
    {
      id: "gtin",
      term: "GTIN",
      category: "Beschaffung",
      summary: "Global Trade Item Number; weltweit eindeutige Artikelnummer (früher EAN).",
      detail: "Die 13-stellige GTIN besteht aus Länderkennzeichen, Unternehmensnummer, individueller Artikelnummer und Prüfziffer. Sie wird vom Hersteller vergeben, begleitet den Artikel über alle Handelsstufen und wird als Strichcode oder Matrixcode maschinenlesbar.",
      example: "An der Kasse wird die GTIN gescannt und der Verkauf artikelgenau im System erfasst."
    },
    {
      id: "erp-system",
      term: "ERP-System",
      category: "Beschaffung",
      summary: "Enterprise Resource Planning; Programmpaket für alle Geschäftsprozesse.",
      detail: "ERP-Systeme verknüpfen Warenwirtschaft, Verkauf, Finanzen, Rechnungswesen, Controlling, Personal und Marketing über eine zentrale Datenbasis. Vorteile sind aktuelle Daten ohne Mehrfacherfassung; Nachteile sind Customizing-Aufwand und Herstellerabhängigkeit. Bekannte Anbieter: SAP, Oracle, Microsoft Dynamics.",
      example: "Eine Bestellung im Shop aktualisiert automatisch Lagerbestand, Rechnungswesen und Verkaufsstatistik."
    },
    {
      id: "supply-chain-management",
      term: "Supply Chain Management",
      category: "Beschaffung",
      summary: "Koordination der Lieferkette vom Lieferanten bis zum Kunden.",
      detail: "Supply Chain Management (SCM) stimmt die Zusammenarbeit mit Lieferanten, Händlern, Logistikdienstleistern und Kunden über alle Wirtschaftsstufen ab. Moderne ERP-Systeme steuern diese Prozesse, inklusive Online-Beschaffung (E-Procurement).",
      example: "Sinkt der Bestand, bestellt das ERP-System automatisch beim Lieferanten nach."
    },
    {
      id: "crm",
      term: "CRM",
      category: "Marketing",
      summary: "Customer Relationship Management; systematische Pflege der Kundenbeziehungen.",
      detail: "CRM bündelt Kundendaten, Kaufhistorie und Kommunikation, um Kundenbeziehungen zu optimieren und die Kundenbindung zu stärken. CRM-Funktionen sind oft Teil moderner ERP-Systeme.",
      example: "Der Shop erkennt Stammkunden und schlägt passende Angebote auf Basis früherer Käufe vor."
    },
    {
      id: "werbeerfolgskontrolle",
      term: "Werbeerfolgskontrolle",
      category: "Marketing",
      summary: "Nachhaltige Kontrolle und Optimierung einer Werbekampagne und ihres Erfolgs.",
      detail: "Im Onlinemarketing ist die Werbeerfolgskontrolle direkt möglich: Tools werten Kampagnen eigenständig aus und liefern Berichte und Kennzahlen teils in Echtzeit. Die Auswertung folgt vier Schritten: Ziel und KPIs bestimmen, quantitative Analyse, qualitative Analyse und Konkurrenzanalyse.",
      example: "Nach drei Monaten Kampagne prüft der Shop, ob die Bestellungen das Umsatzziel von plus 10 Prozent erreicht haben."
    },
    {
      id: "google-analytics",
      term: "Google Analytics",
      category: "Marketing",
      summary: "Meistgenutztes Web-Analytics-Programm, aktuell als eventbasiertes GA4.",
      detail: "Google Analytics 4 erfasst Nutzerinteraktionen als Events (Seitenaufrufe, Klicks, Käufe) statt nur als Sitzungen und bietet sieben Berichtsbereiche: Echtzeit, Akquisition, Engagement, Monetarisierung, Bindung, Nutzerattribute und Technologie. Kostenlos und leicht zu integrieren – aber wegen der DSGVO setzen viele EU-Unternehmen auf datenschutzorientierte Alternativen wie etracker oder Matomo.",
      example: "Der Akquisition-Bericht zeigt, dass die meisten neuen Besucher über die organische Suche kommen."
    },
    {
      id: "heatmap",
      term: "Heatmap",
      category: "Marketing",
      summary: "Visualisierung, wo Besucher klicken, scrollen und verweilen.",
      detail: "Heatmaps machen sichtbar, welche Bereiche einer Seite Aufmerksamkeit bekommen und wo Nutzer sich durch die Seiten bewegen. Sie gehören zur qualitativen Analyse: Sie helfen zu verstehen, warum Besucher sich so verhalten, wie die Zahlen es zeigen.",
      example: "Die Heatmap zeigt, dass kaum jemand bis zum Bestellbutton unterhalb des Produktbilds scrollt."
    },
    {
      id: "multivariater-test",
      term: "Multivariater Test",
      category: "Marketing",
      summary: "Testverfahren, das mehrere Elemente gleichzeitig in Kombinationen prüft.",
      detail: "Während ein A/B-Test nur eine Variable verändert, kombiniert der multivariate Test mehrere Varianten mehrerer Elemente, um die beste Kombination zu finden. Das spart aufeinanderfolgende A/B-Tests, braucht aber deutlich mehr Besucher und eine aufwendigere Auswertung – für den Einstieg ist ein einfacher A/B-Test die bessere Wahl.",
      example: "Drei Bilder und zwei Überschriften ergeben sechs Versionen, die gleichzeitig getestet werden."
    },
    {
      id: "webanalyse",
      term: "Webanalyse",
      category: "Marketing",
      summary: "Systematische Auswertung des Besucherverhaltens auf einer Website.",
      detail: "Webanalyse-Tools zeigen, woher Besucher kommen, welche Seiten sie nutzen und ob sie Ziele wie einen Kauf erreichen. Grundlage guter Analyse ist ein Messkonzept: erst Ziel und Kennzahl festlegen, dann messen.",
      example: "Die Analyse zeigt, dass viele Besucher im Warenkorb abbrechen – der Checkout wird daraufhin vereinfacht."
    },
    {
      id: "tracking",
      term: "Tracking",
      category: "Marketing",
      summary: "Technische Erfassung des Nutzerverhaltens über Cookies oder ähnliche Verfahren.",
      detail: "Tracking erkennt Besucher wieder und ordnet ihnen Seitenaufrufe, Kanäle und Conversions zu. Es darf in der Regel erst nach Einwilligung eingesetzt werden und sollte datensparsam konfiguriert sein.",
      example: "Erst nach dem Klick auf „Akzeptieren“ im Consent-Banner beginnt die Analyse-Messung."
    },
    {
      id: "sitzung",
      term: "Sitzung",
      category: "Marketing",
      summary: "Zusammenhängender Besuch eines Nutzers auf einer Website (Session).",
      detail: "Eine Sitzung umfasst alle Seitenaufrufe und Aktionen eines Besuchs. Bei längerer Inaktivität beginnt eine neue Sitzung. Sitzungen sind eine Basisgröße der Webanalyse, verwandt mit Nutzern und Seitenaufrufen.",
      example: "Ein Kunde stöbert morgens zehn Minuten im Shop – eine Sitzung mit acht Seitenaufrufen."
    },
    {
      id: "absprungrate",
      term: "Absprungrate",
      category: "Marketing",
      summary: "Anteil der Besuche, die ohne weitere Interaktion enden.",
      detail: "Eine hohe Absprungrate kann bedeuten, dass Erwartungen und Seiteninhalt nicht zusammenpassen oder die Seite Probleme hat. Sie ist aber kontextabhängig: Bei einer Kontaktseite kann ein schneller Ausstieg völlig normal sein.",
      example: "420 von 1.200 Sitzungen enden auf der Einstiegsseite – Absprungrate 35 %."
    },
    {
      id: "utm-parameter",
      term: "UTM-Parameter",
      category: "Marketing",
      summary: "Anhängsel an Links, die Kampagne und Kanal eines Besuchers kennzeichnen.",
      detail: "UTM-Parameter wie utm_source und utm_campaign werden an Kampagnenlinks angehängt. Die Webanalyse kann Besucher damit dem richtigen Kanal zuordnen und Kampagnen vergleichbar machen.",
      example: "Der Newsletter-Link trägt utm_source=newsletter – so ist sichtbar, wie viele Käufe der Newsletter bringt."
    },
    {
      id: "maschinelles-lernen",
      term: "Maschinelles Lernen",
      category: "Marketing",
      summary: "Teilbereich der KI: Computer lernen aus Daten, ohne explizit programmiert zu werden.",
      detail: "Statt fester Regeln erkennt maschinelles Lernen Muster in Beispieldaten und trifft daraus Vorhersagen. Drei Grundarten: überwachtes Lernen (mit bekannten Ergebnissen/Labels), unüberwachtes Lernen (Muster ohne Labels, z. B. Clustering) und bestärkendes Lernen (über Belohnung und Strafe).",
      example: "Aus früheren Bestellungen lernt das Modell, welche Produktempfehlungen zu welchen Kundengruppen passen."
    },
    {
      id: "neuronales-netzwerk",
      term: "Neuronales Netzwerk",
      category: "Marketing",
      summary: "Modell aus verbundenen „Neuronen“ in Schichten, lose ans Gehirn angelehnt.",
      detail: "Eine Eingabeschicht nimmt Daten auf, versteckte Schichten führen Berechnungen durch, die Ausgabeschicht liefert das Ergebnis. Beim Training werden die Gewichtungen zwischen den Neuronen angepasst, bis die Vorhersagen stimmen. Deep Learning nutzt besonders tiefe Netze mit vielen Schichten – stark bei Bildern und Sprache.",
      example: "Ein tiefes Netz erkennt auf Produktfotos automatisch, ob ein Bürostuhl oder ein Schreibtisch zu sehen ist."
    },
    {
      id: "schwache-und-starke-ki",
      term: "Schwache und starke KI",
      category: "Marketing",
      summary: "Heutige KI ist auf einzelne Aufgaben spezialisiert; Allround-KI bleibt Hypothese.",
      detail: "Schwache (schmale) KI ist auf eine spezifische Aufgabe beschränkt und hat kein Bewusstsein – dazu gehören praktisch alle heutigen Systeme wie Chatbots und Sprachassistenten. Starke KI, die jede intellektuelle Aufgabe eines Menschen selbstständig erfüllen könnte, ist bis heute nicht realisiert.",
      example: "Der Übersetzungsdienst ist exzellent im Übersetzen – kann aber keine Kampagne planen: schwache KI."
    },
    {
      id: "sprachmodell",
      term: "Sprachmodell",
      category: "Marketing",
      summary: "KI-Modell, das ab einem Prompt Wort für Wort wahrscheinlichen Text erzeugt.",
      detail: "Sprachmodelle wie ChatGPT (GPT = Generative Pretraining Transformer) basieren auf der Transformer-Architektur und werden zweistufig trainiert: Vortraining auf riesigen Textmengen, dann Feinabstimmung mit menschlichem Feedback. Sie sagen das jeweils wahrscheinlichste nächste Wort voraus – überzeugend formuliert, aber ohne Bewusstsein; Ausgaben können falsch sein und müssen geprüft werden.",
      example: "Das Modell entwirft fünf Betreffzeilen für den Newsletter – die Marketingfachkraft prüft und wählt aus."
    },
    {
      id: "prompt",
      term: "Prompt",
      category: "Marketing",
      summary: "Eingabetext, mit dem eine generative KI gesteuert wird.",
      detail: "Der Prompt ist der Anfangstext, aus dem das Sprachmodell die Fortsetzung erzeugt. Gute Prompts nennen Ziel, Kontext, Format und Qualitätskriterien – je präziser der Auftrag, desto brauchbarer und prüfbarer die Ausgabe.",
      example: "„Erstelle fünf sachliche Betreffzeilen für einen Schulshop, Zielgruppe Auszubildende, maximal 45 Zeichen.“"
    },
    {
      id: "cookie",
      term: "Cookie",
      category: "Recht & Daten",
      summary: "Kleine Datei, die eine Website im Browser des Nutzers speichert.",
      detail: "Cookies können technisch notwendig sein (z. B. Warenkorb, Login) oder der Analyse und Werbung dienen. Für nicht notwendige Cookies ist nach § 25 TDDDG und DSGVO eine Einwilligung erforderlich.",
      example: "Der Warenkorb-Cookie merkt sich die Artikel – der Analyse-Cookie wartet auf die Einwilligung."
    },
    {
      id: "consent-banner",
      term: "Consent-Banner",
      category: "Recht & Daten",
      summary: "Einwilligungsdialog für Cookies und Tracking beim ersten Seitenbesuch.",
      detail: "Das Consent-Banner informiert über Zwecke und holt die Einwilligung ein, bevor nicht notwendige Cookies gesetzt werden. Ablehnen muss so einfach sein wie Zustimmen; die Auswahl muss später änderbar bleiben.",
      example: "Besucher können im Banner „Nur notwendige“ wählen – die Webanalyse bleibt dann ausgeschaltet."
    },
    {
      id: "pseudonymisierung",
      term: "Pseudonymisierung",
      category: "Recht & Daten",
      summary: "Ersetzen direkter Personenbezüge durch Kennungen.",
      detail: "Bei der Pseudonymisierung werden identifizierende Angaben durch Pseudonyme ersetzt, etwa gekürzte IP-Adressen oder zufällige IDs. Sie verringert Datenschutzrisiken, ersetzt aber keine Einwilligung, wo diese nötig ist.",
      example: "Das Analyse-Tool speichert nur gekürzte IP-Adressen statt vollständiger."
    },
    {
      id: "servicekanal",
      term: "Servicekanal",
      category: "Service",
      summary: "Weg, über den Kunden den Kundenservice erreichen oder informiert werden.",
      detail: "Typische Servicekanäle sind E-Mail, Telefon, Live-Chat, Social Media, Videokonferenz, Newsletter und FAQ-Seiten. Die Kanalwahl richtet sich nach Anliegen, Dringlichkeit und Zielgruppe – jeder Kanal hat eigene Ton- und Reaktionszeit-Erwartungen.",
      example: "Die kurze Lieferzeit-Frage klärt der Chat, die ausführliche Produktberatung übernimmt ein Videocall."
    },
    {
      id: "live-chat",
      term: "Live-Chat",
      category: "Service",
      summary: "Text-Dialog in Echtzeit direkt auf der Shopseite.",
      detail: "Der Live-Chat beantwortet Fragen schnell und senkt Kaufabbrüche, erfordert aber erreichbares Personal. Der Ton ist informeller als in der E-Mail, bleibt aber professionell. Oft übernimmt zunächst ein Chatbot.",
      example: "Während des Bestellvorgangs fragt eine Kundin im Chat nach der Größentabelle und bekommt sofort den Link."
    },
    {
      id: "chatbot",
      term: "Chatbot",
      category: "Service",
      summary: "Programm, das Kundenanfragen automatisch im Dialog beantwortet.",
      detail: "Chatbots beantworten Standardfragen rund um die Uhr, etwa zu Lieferzeiten oder Retouren. Sie müssen als Bot erkennbar sein und komplexe oder emotionale Anliegen an Menschen übergeben können.",
      example: "Der Bot beantwortet die Frage zur Retourenfrist und leitet die Beschwerde über eine beschädigte Ware an den Service weiter."
    },
    {
      id: "newsletter",
      term: "Newsletter",
      category: "Service",
      summary: "Regelmäßige E-Mail an Abonnenten mit Neuigkeiten und Angeboten.",
      detail: "Der Newsletter ist proaktive Servicekommunikation und Marketinginstrument zugleich. Er braucht eine nachweisbare Einwilligung (Double-Opt-in), einen Abmeldelink in jeder Ausgabe und Inhalte mit echtem Nutzen. Öffnungs- und Klickraten zeigen die Wirkung.",
      example: "Der Shop verschickt monatlich Pflegetipps passend zu den gekauften Produkten – abmelden geht mit einem Klick."
    },
    {
      id: "double-opt-in",
      term: "Double-Opt-in",
      category: "Service",
      summary: "Anmeldeverfahren mit Bestätigungslink als Nachweis der Einwilligung.",
      detail: "Nach der Anmeldung erhält der Empfänger eine E-Mail mit Bestätigungslink; erst der Klick aktiviert das Abo. So ist nachweisbar, dass wirklich der Inhaber der Adresse eingewilligt hat.",
      example: "Wer sich zum Newsletter anmeldet, bekommt zuerst eine Mail: „Bitte bestätige deine Anmeldung.“"
    },
    {
      id: "videokonferenz",
      term: "Videokonferenz",
      category: "Service",
      summary: "Online-Gespräch mit Bild und Ton, oft mit Bildschirmfreigabe.",
      detail: "Videokonferenzen eignen sich für persönliche Beratung, Produktvorführungen und Abstimmungen. Professionell wirken getestete Technik, ruhige Umgebung, Blick in die Kamera und vorbereitete Unterlagen für die Bildschirmfreigabe.",
      example: "Ein Kunde bekommt im Videocall die Einrichtung seines neuen Geräts per Bildschirmfreigabe gezeigt."
    },
    {
      id: "faq",
      term: "FAQ",
      category: "Service",
      summary: "Frequently Asked Questions; Sammlung häufiger Fragen mit Antworten.",
      detail: "FAQ- und Hilfeseiten sind Selbstservice: Kunden finden Antworten rund um die Uhr, oft direkt über Suchmaschinen. Gute FAQ entstehen aus echten Serviceanfragen und entlasten das Team spürbar.",
      example: "Die Frage „Wie verfolge ich meine Sendung?“ steht mit Anleitung ganz oben in den FAQ."
    },
    {
      id: "reaktionszeit",
      term: "Reaktionszeit",
      category: "Service",
      summary: "Zeitspanne bis zur ersten Antwort auf eine Kundenanfrage.",
      detail: "Jeder Kanal weckt eigene Erwartungen: Im Chat werden Minuten erwartet, bei E-Mails höchstens ein bis zwei Werktage, auf Social Media wenige Stunden. Eine Eingangsbestätigung überbrückt längere Bearbeitungszeiten.",
      example: "Die automatische Antwort bestätigt den Eingang und nennt die voraussichtliche Bearbeitungszeit."
    },
    {
      id: "geschaeftliche-e-mail",
      term: "Geschäftliche E-Mail",
      category: "Service",
      summary: "E-Mail im Namen des Unternehmens mit den Pflichtangaben des Geschäftsbriefs.",
      detail: "Jede geschäftliche E-Mail repräsentiert das Unternehmen. Für sie gelten dieselben gesetzlichen Vorschriften zu den Geschäftsangaben wie für Geschäftsbriefe (u. a. §§ 37a, 125a HGB): Rechtsform, Sitz, Registergericht, Handelsregisternummer und je nach Rechtsform weitere Angaben.",
      example: "Die Bestellbestätigung des Shops nennt im Abschluss Firmenname, Sitz, Registergericht und HRB-Nummer."
    },
    {
      id: "cc-und-bcc",
      term: "CC und BCC",
      category: "Service",
      summary: "Kopie-Felder der E-Mail – offen (CC) oder verdeckt (BCC).",
      detail: "CC steht für Carbon Copy: Alle Empfänger sehen, wer die Kopie erhält. BCC steht für Blind Carbon Copy: Die Kopie-Empfänger bleiben für alle anderen unsichtbar. BCC schützt bei Rundmails an viele externe Empfänger auch die E-Mail-Adressen – ein Datenschutzaspekt.",
      example: "Die Einladung an 80 Kundinnen und Kunden geht per BCC, damit niemand die Adressen der anderen sieht."
    },
    {
      id: "betreff",
      term: "Betreff",
      category: "Service",
      summary: "Pflichtzeile der E-Mail mit kurzer, präziser Inhaltsangabe.",
      detail: "Der Betreff ist zwingend anzugeben und wird wie im Geschäftsbrief präzise und zielführend formuliert. Er hilft beim Einordnen und Weiterleiten. Ändert sich beim Beantworten der Inhalt, wird der Betreff angepasst; im internationalen Verkehr verzichtet man auf Umlaute und Akzente.",
      example: "Statt „Frage“ lautet der Betreff „Anfrage: 100 Team-Hoodies mit Logodruck – Lieferzeit und Preis“."
    },
    {
      id: "signatur",
      term: "Signatur (E-Mail)",
      category: "Service",
      summary: "Automatischer Baustein mit Gruß, Firmen- und Pflichtangaben am E-Mail-Ende.",
      detail: "Die elektronische Signatur fügt den Abschluss automatisch in jede ausgehende E-Mail ein: Gruß, Firmenname, Bearbeiterin oder Bearbeiter, Kommunikationsdaten und die gesetzlich vorgeschriebenen Unternehmensangaben. Zusätze wie „Think before you print“ sind möglich.",
      example: "Im E-Mail-Programm ist die Firmensignatur hinterlegt – niemand muss die HRB-Nummer von Hand tippen."
    },
    {
      id: "vertretungszusatz",
      term: "i. A. / i. V. / ppa.",
      category: "Service",
      summary: "Zusätze vor dem Namen, die die Vertretungsbefugnis zeigen.",
      detail: "i. A. bedeutet „im Auftrag“ (Unterzeichnung für eine einzelne Angelegenheit), i. V. „in Vollmacht“ (Handlungsvollmacht) und ppa. „per Prokura“ – die weitreichendste kaufmännische Vollmacht, die im Handelsregister eingetragen wird.",
      example: "Die Auszubildende unterschreibt die Terminbestätigung mit „i. A. Lena Roth“."
    },
    {
      id: "top-level-domain",
      term: "Top-Level-Domain",
      category: "Service",
      summary: "Endung einer Domain, z. B. „.de“ für Deutschland.",
      detail: "Die Top-Level-Domain steht ganz rechts in der Adresse. Länderspezifische TLDs wie „.de“, „.fr“ oder „.uk“ zeigen den Länderbezug, generische wie „.com“ oder „.org“ den Verwendungszweck. Die offizielle Liste pflegt die IANA.",
      example: "An „info@shop-bordeaux.fr“ erkennst du den Unternehmenssitz in Frankreich – die Anfrage formulierst du auf Französisch oder in der im Unternehmen üblichen Verkehrssprache."
    },
    {
      id: "e-mail-verschluesselung",
      term: "E-Mail-Verschlüsselung",
      category: "Recht & Daten",
      summary: "Schutz vertraulicher E-Mail-Inhalte vor Mitlesen auf dem Übertragungsweg.",
      detail: "Weil E-Mail-Adressen und Inhalte personenbezogene Daten sind, müssen vertrauliche Informationen verschlüsselt übermittelt werden. Dazu kommen Zugangsschutz für Rechner und Postfach, aktuelle Virenscanner und Firewalls. DSGVO-Verstöße können Bußgelder bis 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes kosten.",
      example: "Die Gehaltsabrechnung wird nur als verschlüsselte, passwortgeschützte Anlage verschickt."
    },
    {
      id: "de-mail",
      term: "De-Mail",
      category: "Recht & Daten",
      summary: "Gesetzlich geregelter Dienst für rechtsverbindliche elektronische Kommunikation.",
      detail: "De-Mail (§ 1 De-Mail-Gesetz) sollte eine sichere, vertrauliche und nachweisbare elektronische Kommunikation ermöglichen. Voraussetzung: Beide Seiten haben ein De-Mail-Konto und ihren Sitz in Deutschland. In der Praxis hat sich der Dienst kaum durchgesetzt; große Anbieter haben ihn wieder eingestellt.",
      example: "Statt De-Mail setzen viele Behörden heute auf eigene Portale mit Postfachfunktion."
    },
    {
      id: "social-media",
      term: "Social Media",
      category: "Service",
      summary: "Digitale Medien für Many-to-Many-Kommunikation in Echtzeit.",
      detail: "Soziale Medien verbinden viele Menschen gleichzeitig – anders als die One-to-One-Kommunikation per E-Mail. Im Fokus steht der Kontakt zwischen Menschen; Ziel ist ein Mehrwert aus der Interaktion. Für Unternehmen sind sie Service-, Dialog- und Marketingkanal zugleich.",
      example: "Auf die Instagram-Frage zur Lieferzeit antwortet der Shop öffentlich – und tausende Mitlesende sehen den guten Service."
    },
    {
      id: "viral",
      term: "Viral",
      category: "Service",
      summary: "Sehr schnelle Verbreitung von Inhalten über das Social Web.",
      detail: "Inhalte erreichen über Teilen und Empfehlen in Sekunden eine breite Öffentlichkeit – wie ein Virus. Das wirkt für gelungene Kampagnen ebenso wie für Pannen und Fake News; auch schnelles Reagieren verhindert Image-Schäden nicht immer.",
      example: "Das witzige Produktvideo wird zehntausendfach geteilt – die Reichweite kostet keinen Cent Mediabudget."
    },
    {
      id: "netiquette",
      term: "Netiquette",
      category: "Service",
      summary: "Verhaltensregeln für den respektvollen Umgang im eigenen Online-Kanal.",
      detail: "Das Kunstwort aus „Net“ und „Etiquette“ beschreibt Umgangsregeln für Internet-Seiten und -Dienste. Unternehmen passen sie an Zielgruppe und Kommunikationsform an – etwa: vertrauliche Daten nicht in öffentliche Foren, sachlich bleiben, Privates in die Direktnachricht.",
      example: "Die Facebook-Seite des Shops verweist bei beleidigenden Kommentaren auf die Netiquette und blendet sie aus."
    },
    {
      id: "blog",
      term: "Blog",
      category: "Service",
      summary: "Website mit längeren Artikeln in umgekehrt chronologischer Reihenfolge.",
      detail: "Blogs stellen Informationen längerfristig bereit und erlauben Kommentare, Verlinkungen und Schlagwortsuche (Tag Cloud). Unternehmen zeigen damit Kompetenz zu einem Thema, werden über Suchmaschinen gefunden und können FAQ-ähnliche Servicethemen vertiefen.",
      example: "Der Möbel-Shop bloggt „So pflegst du Massivholz“ – der Artikel bringt monatelang Besucher über Google."
    },
    {
      id: "bewertungsplattform",
      term: "Bewertungsplattform",
      category: "Service",
      summary: "Plattform für öffentliche Erfahrungsberichte mit Sternebewertungen.",
      detail: "Bewertungsplattformen wie yelp oder Google-Rezensionen ermöglichen offenen Meinungsaustausch über Unternehmen, Produkte und Standorte. Unternehmen sollten Bewertungen beobachten und professionell auf Kritik antworten – sachlich falsche oder rechtswidrige Beiträge können sie beim Betreiber beanstanden, berechtigte Kritik nicht.",
      example: "Auf die Zwei-Sterne-Bewertung antwortet der Shop freundlich mit einer Lösung – sichtbar für alle künftigen Leser."
    },
    {
      id: "messenger-dienst",
      term: "Messenger-Dienst",
      category: "Service",
      summary: "Dienst für private Text-, Bild- und Sprachnachrichten, z. B. WhatsApp.",
      detail: "Messenger bieten gegenüber offenen Plattformen mehr Privatsphäre und eine ungestörte One-to-One-Kommunikation. Unternehmen nutzen sie für Kundenservice und Sendungsverfolgung; dabei müssen sie auf die Datenschutzerklärung des Anbieters hinweisen und den vertraulichen Umgang mit Nachrichten sicherstellen.",
      example: "Die Kundin bekommt Versandstatus und Rückfragen direkt in den Messenger – schneller als jede Warteschleife."
    },
    {
      id: "influencer-kennzeichnung",
      term: "Influencer-Kennzeichnung",
      category: "Recht & Daten",
      summary: "Pflicht, bezahlte Produktvorstellungen als Werbung kenntlich zu machen.",
      detail: "Wer Produkte aus kommerziellen Gründen vorstellt, ausprobiert oder beurteilt, muss das kennzeichnen – sonst liegt Schleichwerbung vor. Unternehmen, die mit Influencerinnen und Influencern arbeiten, müssen auf diese Pflicht hinweisen; daneben gelten Wettbewerbsvorschriften wie das Verbot herabsetzender Konkurrenzvergleiche.",
      example: "Das gesponserte Unboxing-Video trägt gut sichtbar den Hinweis „Werbung“."
    },
    {
      id: "emoji",
      term: "Emoji",
      category: "Service",
      summary: "Kleine Bildzeichen, die Gefühle und Begriffe in Nachrichten transportieren.",
      detail: "Emojis (japanisch „e“ = Bild, „moji“ = Buchstabe/Zeichen) entstanden Ende der 1990er-Jahre in Japan und sind seit der Aufnahme in den Unicode-Standard weltweit einheitlich nutzbar. Sie lockern Kommunikation auf und drücken Gefühle aus, werden aber nicht von allen gleich verstanden – geschäftlich deshalb sparsam und unmissverständlich einsetzen.",
      example: "Im Chat passt der Daumen nach oben – im förmlichen Beschwerde-Antwortschreiben bleibt er draußen."
    },
    {
      id: "sprachsteuerung",
      term: "Sprachsteuerung",
      category: "Service",
      summary: "Bedienung von Geräten und Webshops per gesprochener Sprache.",
      detail: "Die Spracheingabe wird in eine Cloud übertragen, dort zerlegt, analysiert und in Text umgewandelt. So lassen sich Suchanfragen und zunehmend Bestellungen per Stimme erledigen. Grenzen: Erkennungsfehler und fehlende Kompatibilität zwischen Systemen.",
      example: "„Bestell noch einmal das Druckerpapier von letzter Woche“ – der Artikel landet per Sprachbefehl im Warenkorb."
    },
    {
      id: "smart-speaker",
      term: "Smart Speaker",
      category: "Service",
      summary: "Sprachgesteuerter Lautsprecher mit digitalem Assistenten.",
      detail: "Smart Speaker wie Sprachassistenz-Lautsprecher nehmen gesprochene Befehle entgegen und verarbeiten sie über eine Cloud. Für den E-Commerce interessant: Suche, Bestellung und Sendungsstatus per Zuruf – ein Vertriebsweg, der sich stetig weiterentwickelt.",
      example: "Der Lautsprecher im Wohnzimmer beantwortet die Frage nach dem Lieferstatus der Bestellung."
    },
    {
      id: "hotline",
      term: "Hotline",
      category: "Service",
      summary: "Telefonischer Kundenservice, oft mit Sprachcomputer-Vorauswahl.",
      detail: "Hotlines klären Fragen schnell und persönlich. Varianten: Sprachcomputer mit Anliegen-Vorauswahl (leitet in die passende Fachabteilung), 24-Stunden-Hotline und externe Callcenter. Nachteile wie Wartezeiten, Erkennungsfehler und Telefonkosten müssen gegen die kompetente Beratung abgewogen werden.",
      example: "„Sagen Sie ‚Retoure‘ oder ‚Bestellung‘“ – der Sprachcomputer verbindet direkt mit dem richtigen Team."
    },
    {
      id: "callcenter",
      term: "Callcenter",
      category: "Service",
      summary: "Externer Dienstleister, der die telefonische Kundenbetreuung übernimmt.",
      detail: "Will ein Unternehmen keine eigenen Mitarbeitenden für die Hotline einsetzen, übernimmt ein Callcenter mit geschultem Personal die Anrufe. Es fallen Kosten an – meist jedoch geringere als eigene Personal-, Raum- und Nebenkosten.",
      example: "Im Weihnachtsgeschäft fängt das beauftragte Callcenter die Anrufspitzen ab."
    },
    {
      id: "textbaustein",
      term: "Textbaustein",
      category: "Service",
      summary: "Vorformulierte Antwort für wiederkehrende Anfragen im Chat oder Support.",
      detail: "Textbausteine werden per Copy-and-paste in den Chatverlauf eingefügt: Das spart Zeit und vermeidet Tippfehler. Gefahr: Vorformulierte Floskeln können roboterartig klingen – Bausteine deshalb persönlich anpassen.",
      example: "Der Baustein zur Retourenfrist wird mit dem Namen der Kundin und ihrer Bestellnummer ergänzt."
    },
    {
      id: "user-experience",
      term: "User Experience",
      category: "Service",
      summary: "Gesamterlebnis der Nutzerinnen und Nutzer mit Shop und Service.",
      detail: "Die User Experience umfasst alle Erfahrungen rund um den Shop – von der Bedienung der Website bis zur Erreichbarkeit des Supports über Hotline, Chat oder FAQ. Gute Servicewege zahlen direkt auf die User Experience und damit auf Kundenbindung und Umsatz ein.",
      example: "Kurze Wartezeit, freundlicher Chat, klare FAQ: Die Kundin empfiehlt den Shop weiter."
    },
    {
      id: "persona",
      term: "Persona",
      category: "Marketing",
      summary: "Anschaulich beschriebene Modell-Kundin für Kampagnen und Gestaltung.",
      detail: "Eine Persona fasst Kundinnen und Kunden mit ähnlichen Merkmalen und Persönlichkeiten zu einer greifbaren Beispielperson zusammen – mit Name, Alter, Beruf, Interessen und Motiven. Werbebotschaft und Ansprache (Tonality) werden gezielt auf die Persona zugeschnitten.",
      example: "„Sportliche Steffi, 29, pendelt mit dem Rad und kauft nachhaltiges Zubehör“ – für sie wird die Anzeige getextet."
    },
    {
      id: "first-second-third-party-data",
      term: "First, Second & Third Party Data",
      category: "Marketing",
      summary: "Daten nach Herkunft: selbst erhoben, aus Marktforschung oder von Dritten.",
      detail: "First Party Data erhebt das Unternehmen selbst (Registrierung, Login, Bestellhistorie), Second Party Data stammen aus Marktforschung, Third Party Data werden von Dritten erhoben und gehandelt – oft über Tracking. Third Party Data verlieren durch Datenschutzregeln und das Ende der Third-Party-Cookies an Bedeutung.",
      example: "Der Shop nutzt vorrangig die eigene Bestellhistorie (First Party) statt zugekaufter Fremdprofile."
    },
    {
      id: "frequency-capping",
      term: "Frequency Capping",
      category: "Marketing",
      summary: "Obergrenze für die Zahl der Werbeeinblendungen je Person.",
      detail: "Frequency Capping legt fest, wie oft dieselbe Person ein Werbemittel maximal sieht, etwa fünf identische Banner pro Tag. Das verhindert den Banner-Burn-out: Zu häufige Wiederholung nervt und lässt die Werbewirkung deutlich sinken.",
      example: "Nach der fünften Einblendung des Sneaker-Banners pausiert die Anzeige für diese Nutzerin."
    },
    {
      id: "consent-management-plattform",
      term: "Consent-Management-Plattform",
      category: "Recht & Daten",
      summary: "System, das Einwilligungen der Nutzer einholt, verwaltet und nachweisbar macht.",
      detail: "Eine Consent-Management-Plattform (CMP) dokumentiert, ob Nutzerinnen und Nutzer Cookies und Datennutzung für Werbezwecke zugestimmt haben – jederzeit prüfbar für Publisher und Drittparteien. Branchenstandard ist das vom IAB entwickelte Transparency & Consent Framework.",
      example: "Erst nach dem „Zustimmen“-Klick im Consent-Banner lädt der Shop die Marketing-Cookies – die CMP protokolliert das."
    },
    {
      id: "webcrawler",
      term: "Webcrawler",
      category: "Marketing",
      summary: "Programm, das das Web laufend nach neuen Inhalten durchsucht.",
      detail: "Webcrawler (auch Bots oder Spider) folgen Links, durchsuchen das World Wide Web kontinuierlich nach neuen und geänderten Inhalten und legen sie auf Servern in Datenbankzentren ab. Aus diesen Daten baut die Suchmaschine ihren Index – ihren wichtigsten Bestandteil.",
      example: "Nach dem Relaunch besucht der Crawler die neue Produktseite und nimmt sie in den Index auf."
    },
    {
      id: "spezialsuchmaschine",
      term: "Spezialsuchmaschine",
      category: "Marketing",
      summary: "Suchmaschine für ein bestimmtes Themenfeld, z. B. Produkte oder Preise.",
      detail: "Spezialsuchmaschinen indexieren nicht das ganze Web, sondern ein Themenfeld: Produktsuchmaschinen wie Google Shopping, Preissuchmaschinen und Videosuchen sind typische Beispiele. Für Onlineshops sind sie eigene, wichtige Auffindbarkeitskanäle neben der klassischen Websuche.",
      example: "Der Bürostuhl taucht nicht nur bei Google auf, sondern auch im Preisvergleichsportal – mit direktem Link zum Shop."
    },
    {
      id: "knowledge-panel",
      term: "Knowledge Panel",
      category: "Marketing",
      summary: "Infokasten auf der SERP mit Fakten zum Suchbegriff.",
      detail: "Das Knowledge Panel blendet bei vielen Suchanfragen Zusatzinformationen ein, etwa Kurzbeschreibung, Gründungsdatum oder Zentrale eines Unternehmens. Bei regionalen Suchen übernimmt das Google-Unternehmensprofil diese Rolle als Online-Branchenbuch mit Öffnungszeiten, Adresse und Bewertungen.",
      example: "Wer den Shopnamen googelt, sieht rechts das Panel mit Logo, Öffnungszeiten und Kundenbewertungen."
    },
    {
      id: "suchverhalten",
      term: "Suchverhalten",
      category: "Marketing",
      summary: "Drei Anfrage-Muster: navigations-, informations- und transaktionsorientiert.",
      detail: "Navigationsorientierte Suchanfragen zielen auf eine bekannte Website („Shopname Kontakt“), informationsorientierte auf Wissen („Wie binde ich eine Krawatte?“), transaktionsorientierte enthalten eine Kauf- oder Handlungsabsicht („Schulbücher bestellen“). Für Suchmaschinenmarketing sind transaktionsorientierte Anfragen am wertvollsten.",
      example: "Für „Bürostuhl kaufen“ schaltet der Shop Anzeigen – für „Bürostuhl einstellen“ schreibt er einen Ratgeber."
    }
  ]
};
