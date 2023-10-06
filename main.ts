function schreibeUmlaute (pFilename: string) {
    lcd16x2rgb.clearScreen(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, lcd16x2rgb.lcd16x2_text(pFilename))
    iSize = qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.fileSize, pFilename)
    basic.pause(5000)
    if (iSize < 0) {
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text("nicht gefunden"))
    } else if (iSize > 0) {
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, lcd16x2rgb.lcd16x2_text("Datei Größe " + iSize))
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text("wird gelöscht"))
        basic.pause(5000)
        iSize = qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.remove, pFilename)
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text("gelöscht " + iSize))
    }
    qwiicopenlog.writeFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), pFilename, "äöüßÄÖÜ", qwiicopenlog.eCRLF.CRLF)
    qwiicopenlog.writeFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), pFilename, "gjpqy", qwiicopenlog.eCRLF.CRLF)
    qwiicopenlog.writeFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), pFilename, "~ 1€ 2µF -3°C", qwiicopenlog.eCRLF.CRLF)
    iSize = qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.fileSize, pFilename)
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, lcd16x2rgb.lcd16x2_text("neue Datei " + iSize))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text("wird gelesen"))
    basic.pause(5000)
    qwiicopenlog.readFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), pFilename, 128)
    lcd16x2rgb.clearScreen(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2))
    lcd16x2rgb.writeLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileContent).substr(0, 16)))
    lcd16x2rgb.setCursor(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0)
    lcd16x2rgb.writeLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileContent).substr(16, 16)))
}
function zeigeDateiInhalt () {
    lcd16x2rgb.clearScreen(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2))
    if (qwiicopenlog.getInt(qwiicopenlog.eArray.FileContent, qwiicopenlog.eInt.Array_Length) > 0) {
        lcd16x2rgb.writeLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileContent).substr(0, 16)))
        lcd16x2rgb.setCursorCB(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, false)
        lcd16x2rgb.writeLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileContent).substr(16, 16)))
    } else {
        lcd16x2rgb.writeLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), lcd16x2rgb.lcd16x2_text("Datei leer"))
    }
}
function zeigeSearchString () {
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, 8, lcd16x2rgb.lcd16x2_text("" + qwiicopenlog.getInt(qwiicopenlog.eArray.SearchString, qwiicopenlog.eInt.Index) + "/" + qwiicopenlog.getInt(qwiicopenlog.eArray.SearchString, qwiicopenlog.eInt.Array_Length)))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 3, 12, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.SearchString)))
    lcd16x2rgb.setCursorCB(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 3, true)
}
input.onButtonEvent(Button.A, ButtonEvent.Click, function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.SearchString, -1)
        zeigeSearchString()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileName, -1)
        zeigeDateiName()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.read)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileContent, -1)
        zeigeDateiInhalt()
    }
})
function schreibeZeilen (pFilename: string) {
    qwiicopenlog.testWrite(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), pFilename)
    iSize = qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.fileSize, pFilename)
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, lcd16x2rgb.lcd16x2_text("Datei Größe " + iSize))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text(pFilename))
}
function zeigeDateiName () {
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, 15, lcd16x2rgb.lcd16x2_text("" + qwiicopenlog.getInt(qwiicopenlog.eArray.FileName, qwiicopenlog.eInt.Index) + "/" + qwiicopenlog.getInt(qwiicopenlog.eArray.FileName, qwiicopenlog.eInt.Array_Length) + " " + qwiicopenlog.getString(qwiicopenlog.eArray.SearchString)))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileName)))
    zeigeStatus()
    lcd16x2rgb.setCursorCB(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, true)
}
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        qwiicopenlog.listDirectory(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.getString(qwiicopenlog.eArray.SearchString), 20)
        zeigeDateiName()
    } else {
        _("zurück zu Status 2 start")
        qwiicopenlog.checkStatusRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A))
        zeigeStatus()
    }
})
function zeigeStatus () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.error_SD)) {
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 2, lcd16x2rgb.lcd16x2_text(bit.formatNumber(qwiicopenlog.readRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eReadRegister.status), bit.eLength.HEX_FF)))
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 3, 15, lcd16x2rgb.lcd16x2_text("Speicherkarte"))
    } else {
        if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
            basic.setLedColor(basic.rgb(0, 0, 7))
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
            basic.setLedColor(basic.rgb(0, 7, 0))
        }
    }
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, 4, lcd16x2rgb.lcd16x2_text(bit.formatNumber(qwiicopenlog.readRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eReadRegister.status), bit.eLength.HEX_FF)))
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 5, 15, lcd16x2rgb.lcd16x2_text("" + qwiicopenlog.readRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eReadRegister.firmwareMajor) + "." + qwiicopenlog.readRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eReadRegister.firmwareMinor) + " DIR A+B"))
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text("-A            B+"))
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 3, 12, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.SearchString)))
        lcd16x2rgb.setCursorCB(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 3, true, true)
    }
}
input.onButtonEvent(Button.B, ButtonEvent.Click, function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.SearchString, 1)
        zeigeSearchString()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileName, 1)
        zeigeDateiName()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.read)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileContent, 1)
        zeigeDateiInhalt()
    }
})
function _ (Kommentar: string) {
	
}
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    if (!(input.buttonIsPressed(Button.B))) {
        if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
            schreibeUmlaute("UMLAUTE.TXT")
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
            _("Dateigröße in Zeile 0 rechtsbündig anzeigen")
            lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, 15, qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.fileSize, qwiicopenlog.getString(qwiicopenlog.eArray.FileName)), lcd16x2rgb.eAlign.right)
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.read)) {
            lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.fileSize, qwiicopenlog.getString(qwiicopenlog.eArray.FileName)), lcd16x2rgb.eAlign.right)
            lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileName)))
        }
    }
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    if (!(input.buttonIsPressed(Button.A))) {
        if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
            schreibeZeilen("ASCII94.LOG")
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
            _("aktuelle Datei löschen")
            iRemove = 0
            lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, 15, lcd16x2rgb.lcd16x2_text("" + iRemove + " gelöscht"), lcd16x2rgb.eAlign.right)
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.read)) {
            iRemove = 0
            lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, lcd16x2rgb.lcd16x2_text("" + iRemove + " gelöscht"), lcd16x2rgb.eAlign.right)
            lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileName)))
        }
    }
})
function loescheDateien (pCount: number, logFilename: string) {
    qwiicopenlog.listDirectory(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), "LOG00*.TXT", pCount)
    // Länge des Arrays aFileName=Anzahl Dateinamen fürs Protokoll
    sText = "" + qwiicopenlog.getInt(qwiicopenlog.eArray.FileName, qwiicopenlog.eInt.Array_Length) + " Dateien"
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 9, lcd16x2rgb.lcd16x2_text(sText))
    qwiicopenlog.writeFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), logFilename, sText, qwiicopenlog.eCRLF.CRLF)
    // Zähler für gelöschte Dateien
    iCount = 0
    // Schleife durch alle gefundenen Dateinamen, kann weniger als pCount sein
    for (let Index = 0; Index <= qwiicopenlog.getInt(qwiicopenlog.eArray.FileName, qwiicopenlog.eInt.Array_Length) - 1; Index++) {
        // fragt Register 13 fileSize vom aktuellen Dateiname (Array aFileName(iFileName))
        iSize = qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.fileSize, qwiicopenlog.getString(qwiicopenlog.eArray.FileName))
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 10, 15, lcd16x2rgb.lcd16x2_text(convertToText(iSize)), lcd16x2rgb.eAlign.right)
        lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 0, 15, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.FileName)))
        qwiicopenlog.writeFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), logFilename, "" + qwiicopenlog.getString(qwiicopenlog.eArray.FileName) + " " + iSize + " Bytes", qwiicopenlog.eCRLF.CRLF)
        if (iSize == 0) {
            // sendet aktuellen Dateiname an Register 15 remove
            // und bekommt Anzahl gelöschter Dateien zurück, 1 oder 0 wird zum Zähler addiert
            iCount += qwiicopenlog.readInt32BE(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.eWriteStringReadInt32BE.remove, qwiicopenlog.getString(qwiicopenlog.eArray.FileName))
        }
        basic.pause(1000)
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileName, 1)
    }
    // Anzahl gelöschter Dateien fürs Protokoll auf Display und in die Datei auf Speicherkarte
    sText = "" + iCount + " gelöscht"
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 0, 15, lcd16x2rgb.lcd16x2_text(sText))
    qwiicopenlog.writeFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), logFilename, sText, qwiicopenlog.eCRLF.CRLF)
}
input.onButtonEvent(Button.AB, ButtonEvent.Hold, function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        loescheDateien(10, "REMOVE.LOG")
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        _("Datei lesen und Inhalt in 2 Zeilen (32 Byte) anzeigen, weiter mit B+")
        basic.setLedColor(basic.rgb(7, 0, 0))
        qwiicopenlog.readFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A), qwiicopenlog.getString(qwiicopenlog.eArray.FileName), 160)
        zeigeDateiInhalt()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.write)) {
        qwiicopenlog.syncFile(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A))
        _("zurück zu Status 2 start")
        qwiicopenlog.checkStatusRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A))
        zeigeStatus()
    }
})
let iCount = 0
let sText = ""
let iRemove = 0
let iSize = 0
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2))
qwiicopenlog.checkStatusRegister(qwiicopenlog.qwiicopenlog_eADDR(qwiicopenlog.eADDR.LOG_x2A))
zeigeStatus()
