
> Diese Seite bei [https://calliope-net.github.io/i2c-speicherkarte-verwalten/](https://calliope-net.github.io/i2c-speicherkarte-verwalten/) öffnen

## Dieses Projekt bearbeiten

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/calliope-net/i2c-speicherkarte-verwalten** ein und klicke auf Importieren


Speicherkarte verwalten - Bedienung

* Knopf A geklickt                Knopf B geklickt (ändert Index und zeigt neues Element aus dem Array an)
  *    start - SeachString -1      SeachString +1
  *    dir     Datei-Name -1       Datei-Name +1
  *    read    Datei-Inhalt -32    Datei-Inhalt +32
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

