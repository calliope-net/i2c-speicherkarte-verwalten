
> Diese Seite bei [https://calliope-net.github.io/i2c-speicherkarte-verwalten/](https://calliope-net.github.io/i2c-speicherkarte-verwalten/) öffnen

### i2c Module an Calliope anstecken

* [Grove - 16x2 LCD](https://wiki.seeedstudio.com/Grove-16x2_LCD_Series/)
* [SparkFun Qwiic OpenLog](https://www.sparkfun.com/products/15164) | [Qwiic Cable - Grove Adapter](https://www.sparkfun.com/products/15109)

Alle i2c Module werden parallel am linken Grove Steckverbinder A0 angeschlossen. 
Dazu kann ein [i2c-Hub](https://wiki.seeedstudio.com/Grove-I2C-Hub-6Port/) benutzt werden.

Für die Stromversorgung sollte Calliope über USB Kabel (an Computer oder Powerbank) angeschlossen sein.

### Dieses Projekt importieren, mit Calliope testen, bearbeiten.

Um dieses Repository in MakeCode zu importieren.

* öffne [https://makecode.calliope.cc](https://makecode.calliope.cc)
* klicke auf **Importieren** und dann auf **Importiere URL**
* kopiere die folgende **URL des Projekts** in die Zwischenablage
* **calliope-net/i2c-speicherkarte-verwalten**
* füge sie auf der MakeCode Webseite ein und klicke auf **Los geht's!**

### Bedienung Calliope: Speicherkarte verwalten

* das Programm hat mehrere Zustände, die wichtigsten sind:
  * *start* (beim Start wurde eine Speicherkarte erkannt)
  * *dir*   (Directory von Speicherkarte wurde in internes Array eingelesen)
  * *read*  (Datei-Inhalt wurde in internes Array eingelesen)
  * *write* (Datei wurde auf Speicherkarte geschrieben)
* von dem Status ist die Funktion von Knopf A und B abhängig
* im Status *start* 
  * werden 'wildcards' wie \*.* angezeigt für die Verzeichnis Suche
  * **A geklickt** rückwärts (-1)
  * **B geklickt** vorwärts (+1)
  * **A+B geklickt** zu dem gewählten Suchmuster passende Datei-Namen einlesen
    * begrenzt auf 20 Dateinamen (kann im Programm geändert werden)
    * Status Wechsel zu → *dir*
  * **A halten** Testprogramm 'schreibeUmlaute' starten
  * **B halten** Testprogramm 'loescheDateien' starten
  * **A+B halten** frei
* im Status *dir* (nach **A+B geklickt**)
  * wird jeweils einer der gefundenen Dateinamen angezeigt
  * **A geklickt** rückwärts (-1)
  * **B geklickt** vorwärts (+1)
  * **A+B geklickt** Status Wechsel zurück zu → *start*
  * **A halten** Dateigröße in Byte ermitteln und anzeigen
  * **B halten** Datei-Inhalt einlesen und die ersten 32 Zeichen anzeigen
    * begrenzt auf 260 Byte (kann im Programm geändert werden)
    * Status Wechsel zu → *read*
  * **A+B halten** aktuelle Datei löschen
* im Status *read* (nach **B halten**)
  * werden jeweils 32 Zeichen der eingelesenen Datei angezeigt
  * **A geklickt** rückwärts (-32 Zeichen)
  * **B geklickt** vorwärts (+32 Zeichen)
  * **A+B geklickt** Status Wechsel zurück zu → *start*
  * **A halten** frei
  * **B halten** frei
  * **A+B halten** frei




## ---
* Knopf A geklickt (ändert Index um -1 und zeigt neues Element aus dem Array an)
  *    start - SeachString -1
  *    dir     Datei-Name -1
  *    read    Datei-Inhalt -32
  *    write   
* Knopf B geklickt (ändert Index um +1 und zeigt neues Element aus dem Array an)
  *    start - SeachString +1
  *    dir     Datei-Name +1
  *    read    Datei-Inhalt +32
  *    write   
* Knopf A+B geklickt (zeigt Dateinamen und kehrt sonst immer zum Anfang zurück)
  *    start   DIR (list directory)
  *    dir     zurück zu start
  *    read    zurück zu start
  *    write   syncFile (Close), zurück zu start
  *    ansonsten   zurück zu start (zeigeStatus)
* Knopf A halten
  *    start   i2c Beispiele LCD+LOG: 3 Zeilen in Datei "UMLAUTE.TXT" schreiben, lesen und anzeigen
  *    dir     Dateigröße zum aktuellen Dateiname anzeigen
  *    -read
  *    -write
* Knopf B halten
  *    start   i2c Beispiele LCD+LOG: lösche 10 leere "LOG*.TXT" Dateien mit Protokoll in "REMOVE.LOG"
  *    dir     Datei lesen und Inhalt in 2 Zeilen (32 Byte) anzeigen, weiter mit B+
  *    -read
  *    -write
* Knopf A+B halten
  *    start   i2c Beispiele LCD+PCF+LOG: dauerhaft protokollieren mit Datum und Zeit
  *    dir     aktuelle Datei löschen
  *    -read
  *    -write

### 3 Erweiterungen werden automatisch mit geladen

* [https://github.com/calliope-net/bit](https://calliope-net.github.io/bit/)
* [https://github.com/calliope-net/lcd-16x2rgb](https://calliope-net.github.io/lcd-16x2rgb/)
* [https://github.com/calliope-net/log-qwiicopenlog](https://calliope-net.github.io/log-qwiicopenlog/)

### Updates

> Um ein Update einer Erweiterung von GitHub zu laden, klicke in der JavaScript Ansicht
> links unter dem Simulator auf den schwarzen Explorer. Dort steht der Name der Erweiterung
> vor einem Mülleimer- und einem Pfeil-Symbol. Mit dem Mülleimer wird die Erweiterung gelöscht,
> mit dem runden Pfeil nach einem Update gesucht. Danach steht dort eine Versionsnummer.

### Programmier-Beispiele, i2c-Module, Bilder, Bezugsquellen:
* [Calliope i2c Demo-Projekt mit vier i2c Modulen gleichzeitig, mit DIP-Schalter.](https://calliope-net.github.io/i2c-test/)
* [Quarz-Uhr anzeigen, stellen mit Knopf A/B, Korrektur-Register, Binär-Uhr.](https://calliope-net.github.io/i2c-uhr-stellen/)
* [Dateien der Speicherkarte anzeigen, lesen, schreiben, löschen, mit Knopf A/B.](https://calliope-net.github.io/i2c-speicherkarte-verwalten/)

#### Metadaten (verwendet für Suche, Rendering)

* Calliope mini
* i2c
