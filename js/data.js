var headerText = "Polizeiterror-Bingo";

var footerText = "<a href='https://github.com/id101010/HTML5-bingo/' target='_blank'>This versions is code available on github</a><br/><a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Original code</a>";

var winText = "Gratulation, du wirst verhaftet.";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [

          {"square": "Kinderrechte werden gewahrt"},
          {"square": "PMT schliesst L&uuml;ecke in der Terrorbek&auml;mpfung"},
          {"square": "Handeln bevor es zu sp&auml;t ist!"},
          {"square": "Verhinderung von terroristischen Aktivit&auml;ten!"},
          {"square": "Das Gesetz ist EMRK-Konform!"},
          {"square": "Im Ausland werden &auml;hnliche Massnahmen eingesetzt!"},
          {"square": "Gef&auml;hrder*innen-Begriff ist klar definiert."},
          {"square": "Erh&ouml;hung der Sicherheit der Bev&ouml;lkerung!"},
          {"square": "Rechtsstaatlichkeit ist gew&auml;hrleistet!"},
          {"square": "Attent&auml;ter waren polizeibekannt"},
          {"square": "Attent&auml;ter wurden bereits &uuml;berwacht"},
          {"square": "Attent&auml;ter waren auf Terrorliste"},
          {"square": "Massnahmen je nach Situation!"},
          {"square": "Psychologische Betreuung zur Pr&auml;vention."},
          {"square": "Besch&auml;ftigunsprogramme zur Pr&auml;vention."},
          {"square": "Radikalisierung!"},
          {"square": "Geheimdienst muss mehr Befugnisse erhalten!"},
          {"square": "Sch&auml;rfere Gesetze!"},
          {"square": "Vorratsdaten-speicherung"},
          {"square": "Grundrechte werden nicht verletzt."},
          {"square": "Hausarrest nur durch Gerichtsbeschluss!"},
          {"square": "Massnahmen k&ouml;nnen beim Bundesverwaltungsgericht angefochten werden"},
          {"square": "Gewaltenteilung wird respektiert!"},
          {"square": "Syrien!"},
          {"square": "Immigration!"},
          {"square": "Killerspiele!"},
          {"square": "In letzter Sekunde verhindert"},
          {"square": "Datenschutz ist Terroristenschutz"},
          {"square": "Privacy ist Schuld!"},
          {"square": "Details w&uuml;rden die Bev&ouml;lkerung verunsichern"},
          {"square": "Aus Mangel an Beweisen freigelassen"},
          {"square": "Verschl&uuml;sselung verhindert Strafverfolgung"},
          {"square": "Terroristen haben verschl&uuml;sselt"},
          {"square": "War doch nicht verschl&uuml;sselt"},
          {"square": "Snowden ist Schuld!"},
          {"square": "Mehr Befugnisse f&uuml;r die Dienste"},
          {"square": "Mehr Befugnisse f&uuml;r die Polizei"},
          {"square": "Pflegte Kontakte zu bekannten Terroristen"},
          {"square": "Salafisten"},
          {"square": "Die Grenzen zu!"},
          {"square": "\"Wir brauchen mehr &Uuml;berwachung!\""},
          {"square": "Sch&uuml;tzenverein"},
          {"square": "SVP ist daf&uuml;r."},
          {"square": "FDP ist daf&uuml;r."},
          {"square": "Ueli fingts &auml; gueti Sach."},
          {"square": "Geheimdienst-Quellen"},
          {"square": "Terrorwarnung aus nur einer Quelle"},
          {"square": "Koran"},
          {"square": "Fahne gefunden"},
          {"square": "\"Chemische Substanzen\""},
          {"square": "Datenbanken zusammen- f&uuml;hren"},
          {"square": "Gegner*innen sind linksversiffte Zecken."},
          {"square": "Keine Willk&uuml;r!"},
          {"square": "Nur mit konkreten Hinweisen!"},
          {"square": "FDP ist daf&uuml;r."},
      ]
};
