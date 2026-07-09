window.EC_CONTENT = {
  version: "1.16.0",
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
      id: "targeting",
      code: "7.5",
      mark: "TG",
      title: "Targeting",
      short: "Zielgruppen sinnvoll eingrenzen, Streuverluste reduzieren und Datenschutz mitdenken.",
      color: "cyan",
      mission: "Entscheide, welche Zielgruppensignale zu einem Kampagnenziel passen.",
      lessons: [
        {
          title: "Vom Gesamtmarkt zur Zielgruppe",
          text: "Targeting bedeutet, Werbemittel gezielt an ausgewählte Nutzergruppen auszuspielen. Grundlage sind Merkmale, Interessen, Situationen oder beobachtbares Verhalten."
        },
        {
          title: "Wichtige Targeting-Arten",
          text: "Geografisches und demografisches Targeting nutzen Orts- beziehungsweise Personenmerkmale. Contextual Targeting orientiert sich am Inhalt einer Seite, Behavioral Targeting am bisherigen Verhalten."
        },
        {
          title: "Retargeting und ähnliche Zielgruppen",
          text: "Retargeting spricht Personen erneut an, die bereits Kontakt mit Shop oder Produkt hatten. Ähnliche Zielgruppen übertragen typische Merkmale vorhandener Kundengruppen auf neue Kontakte."
        },
        {
          title: "Qualität vor Reichweite",
          text: "Eine kleine passende Zielgruppe kann wirksamer sein als eine große ungenaue. Zu enge Zielgruppen begrenzen jedoch Reichweite und Lernmöglichkeiten einer Kampagne."
        }
      ],
      takeaways: [
        "Targeting soll Relevanz erhöhen und Streuverluste senken.",
        "Die Targeting-Art muss zum Produkt, Ziel und verfügbaren Signal passen.",
        "Nur notwendige Daten verwenden und Zielgruppen nicht diskriminierend bilden.",
        "Erfolg immer mit Kennzahlen prüfen, nicht nur mit vermuteter Passgenauigkeit."
      ]
    },
    {
      id: "search",
      code: "7.7",
      mark: "SU",
      title: "Suchmaschinen",
      short: "Verstehen, wie Suchmaschinen Inhalte finden, ordnen und als Ergebnisse ausgeben.",
      color: "blue",
      mission: "Erkläre den Weg von einer Webseite bis zum sichtbaren Suchergebnis.",
      lessons: [
        {
          title: "Crawling",
          text: "Automatisierte Programme folgen Links und entdecken neue oder veränderte Seiten. Dieser Vorgang wird Crawling genannt."
        },
        {
          title: "Indexierung",
          text: "Gefundene Inhalte werden analysiert und in einem durchsuchbaren Index gespeichert. Nicht jede gecrawlte Seite muss automatisch im Index erscheinen."
        },
        {
          title: "Ranking",
          text: "Bei einer Suchanfrage ordnet die Suchmaschine passende Dokumente. Relevanz, Qualität, Nutzerfreundlichkeit und viele weitere Signale beeinflussen die Reihenfolge."
        },
        {
          title: "Suchergebnisseite",
          text: "Die Search Engine Results Page, kurz SERP, kann organische Treffer, Anzeigen, Bilder, Karten, Produkte und direkte Antworten enthalten."
        }
      ],
      takeaways: [
        "Crawling entdeckt, Indexierung speichert, Ranking sortiert.",
        "Eine Suchmaschine beantwortet eine konkrete Suchintention.",
        "Organische Treffer und bezahlte Anzeigen sind unterschiedliche Ergebnisarten.",
        "Die Darstellung der SERP hängt von Anfrage, Gerät, Ort und weiteren Signalen ab."
      ]
    },
    {
      id: "seo",
      code: "7.8",
      mark: "SEO",
      title: "Suchmaschinenoptimierung",
      short: "Inhalte, Technik und Autorität für bessere organische Sichtbarkeit zusammendenken.",
      color: "mint",
      mission: "Optimiere eine Shopseite für Menschen und Suchmaschinen.",
      lessons: [
        {
          title: "Onpage-Optimierung",
          text: "Onpage-SEO umfasst Inhalt, Überschriften, Seitentitel, interne Links, Bilder und die verständliche Struktur einer einzelnen Webseite."
        },
        {
          title: "Technisches SEO",
          text: "Ladezeit, mobile Nutzbarkeit, klare URLs, sichere Übertragung, Statuscodes, Canonical-Angaben und Crawlbarkeit bilden die technische Grundlage."
        },
        {
          title: "Offpage-Optimierung",
          text: "Offpage-SEO betrachtet Signale außerhalb der eigenen Website. Besonders relevant sind glaubwürdige Verlinkungen und Erwähnungen aus passenden Quellen."
        },
        {
          title: "Suchintention und hilfreicher Inhalt",
          text: "Ein Keyword allein genügt nicht. Die Seite muss die Absicht hinter der Suche treffen, Fragen beantworten und einen nachvollziehbaren nächsten Schritt anbieten."
        }
      ],
      takeaways: [
        "SEO wirkt mittel- bis langfristig und kauft keine feste Position.",
        "Keywords natürlich und passend zur Suchintention einsetzen.",
        "Gute Technik macht gute Inhalte auffindbar und nutzbar.",
        "Erfolg über Sichtbarkeit, qualifizierten Traffic und Conversions bewerten."
      ]
    },
    {
      id: "sea",
      code: "7.9",
      mark: "SEA",
      title: "Suchmaschinenwerbung",
      short: "Anzeigen, Keywords, Gebote und Landingpages als zusammenhängende Kampagne planen.",
      color: "orange",
      mission: "Baue eine Suchanzeige, deren Versprechen auf der Landingpage erfüllt wird.",
      lessons: [
        {
          title: "Bezahlte Sichtbarkeit",
          text: "SEA bezeichnet bezahlte Anzeigen in Suchmaschinen. Werbetreibende legen Kampagnen, Zielgruppen, Keywords, Anzeigen und Budgets fest."
        },
        {
          title: "Auktion statt Festplatz",
          text: "Eine Anzeige erscheint nicht allein wegen des höchsten Gebots. Auch erwartete Relevanz, Anzeigenqualität und Nutzererlebnis beeinflussen die Ausspielung."
        },
        {
          title: "Keyword-Optionen",
          text: "Weitgehend passende, passende und genau passende Keywords steuern, wie eng Suchanfragen zu einem eingebuchten Begriff passen. Ausschließende Keywords verhindern unpassende Ausspielungen."
        },
        {
          title: "Anzeige und Landingpage",
          text: "Suchbegriff, Anzeigentext und Zielseite sollten dasselbe Bedürfnis aufgreifen. Ein klarer Call-to-Action führt zum gewünschten nächsten Schritt."
        }
      ],
      takeaways: [
        "SEA kann schnell Reichweite erzeugen, verbraucht aber laufend Budget.",
        "Relevanz und Qualität gehören neben dem Gebot zur Kampagnensteuerung.",
        "Ausschließende Keywords reduzieren unnötige Klicks.",
        "Klicks sind nur ein Zwischenschritt; entscheidend ist das Kampagnenziel."
      ]
    },
    {
      id: "analytics",
      code: "7.19",
      mark: "KPI",
      title: "Marketing-Maßnahmen auswerten",
      short: "Kennzahlen korrekt berechnen, einordnen und daraus begründete Maßnahmen ableiten.",
      color: "violet",
      mission: "Übersetze Kampagnendaten in eine nachvollziehbare Handlungsempfehlung.",
      lessons: [
        {
          title: "Vom Ziel zur Kennzahl",
          text: "Eine Kennzahl ist nur dann hilfreich, wenn sie zu einem Ziel gehört. Für Aufmerksamkeit, Traffic, Verkauf und Rentabilität werden unterschiedliche KPIs benötigt."
        },
        {
          title: "CTR und CPC",
          text: "Die Click-Through-Rate misst Klicks im Verhältnis zu Impressionen. Der Cost-per-Click verteilt die Werbekosten auf die erzielten Klicks."
        },
        {
          title: "Conversion Rate und CPO",
          text: "Die Conversion Rate setzt gewünschte Handlungen ins Verhältnis zu den Klicks oder Besuchen. Der Cost-per-Order zeigt die Werbekosten je Bestellung."
        },
        {
          title: "ROAS und Interpretation",
          text: "Der Return on Advertising Spend setzt den zugeordneten Umsatz ins Verhältnis zu den Werbekosten. Eine Bewertung benötigt zusätzlich Marge, Zeitraum, Datenqualität und Vergleichswerte."
        }
      ],
      takeaways: [
        "CTR = Klicks / Impressionen × 100.",
        "CPC = Werbekosten / Klicks.",
        "Conversion Rate = Conversions / Klicks × 100.",
        "CPO = Werbekosten / Bestellungen; ROAS = Umsatz / Werbekosten."
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
      short: "Grundideen künstlicher Intelligenz verstehen und KI im Marketing verantwortungsvoll nutzen.",
      color: "pink",
      mission: "Prüfe, wo KI unterstützt und wo menschliche Kontrolle unverzichtbar bleibt.",
      lessons: [
        {
          title: "Von Regeln zu lernenden Systemen",
          text: "Frühe KI-Systeme arbeiteten stark regelbasiert. Maschinelles Lernen erkennt dagegen Muster in Beispieldaten und nutzt sie für Vorhersagen oder Entscheidungen."
        },
        {
          title: "Neuronale Netze und generative KI",
          text: "Deep Learning verwendet mehrschichtige neuronale Netze. Generative Modelle erzeugen neue Texte, Bilder oder andere Inhalte auf Basis erlernter statistischer Muster."
        },
        {
          title: "Anwendungen im Online-Marketing",
          text: "KI kann Zielgruppen analysieren, Empfehlungen erzeugen, Suchbegriffe clustern, Texte vorbereiten, Bilder variieren und Auffälligkeiten in Kampagnendaten finden."
        },
        {
          title: "Grenzen und Verantwortung",
          text: "KI-Ausgaben können falsch, verzerrt oder ungeeignet sein. Quellenprüfung, Datenschutz, Urheberrecht, transparente Kennzeichnung und menschliche Freigabe bleiben wichtig."
        }
      ],
      takeaways: [
        "KI ist ein Oberbegriff; maschinelles Lernen und Deep Learning sind Teilbereiche.",
        "Generative KI erzeugt wahrscheinliche Inhalte, keine garantierten Wahrheiten.",
        "Gute Prompts enthalten Ziel, Kontext, Format und Qualitätskriterien.",
        "Verantwortung für veröffentlichte Inhalte bleibt beim Menschen."
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
      id: "sea",
      term: "SEA",
      category: "Marketing",
      summary: "Bezahlte Suchmaschinenwerbung.",
      detail: "SEA nutzt Anzeigen bei Suchmaschinen. Kampagnen werden über Keywords, Anzeigen, Gebote, Budgets, Zielseiten und Kennzahlen gesteuert.",
      example: "Für das Keyword 'ergonomischer Bürostuhl' wird eine Suchanzeige geschaltet."
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
    }
  ]
};
