function schreibeUmlaute (pFilename: string) {
    iSize = 0
    basic.pause(5000)
    if (iSize < 0) {
    	
    } else if (iSize > 0) {
        basic.pause(5000)
        iSize = 0
    }
    iSize = 0
    basic.pause(5000)
}
function zeigeDateiInhalt () {
    if (0 > 0) {
    	
    } else {
    	
    }
}
function zeigeSearchString () {
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 0, 2, 8, lcd16x2rgb.lcd16x2_text("" + qwiicopenlog.getInt(qwiicopenlog.eArray.SearchString, qwiicopenlog.eInt.Index) + "/" + qwiicopenlog.getInt(qwiicopenlog.eArray.SearchString, qwiicopenlog.eInt.Array_Length)))
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 3, 12, lcd16x2rgb.lcd16x2_text(qwiicopenlog.getString(qwiicopenlog.eArray.SearchString)))
    lcd16x2rgb.setCursorCB(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2), 1, 3, true)
}
input.onButtonEvent(Button.A, ButtonEvent.Click, function () {
    if (true) {
        zeigeSearchString()
    } else if (true) {
        zeigeDateiName()
    } else if (true) {
        zeigeDateiInhalt()
    }
})
function schreibeZeilen (pFilename: string) {
    iSize = 0
}
function zeigeDateiName () {
    zeigeStatus()
}
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (true) {
        zeigeDateiName()
    } else {
        _("zurück zu Status 2 start")
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
    if (true) {
        zeigeSearchString()
    } else if (true) {
        zeigeDateiName()
    } else if (true) {
        zeigeDateiInhalt()
    }
})
function _ (Kommentar: string) {
	
}
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    if (!(input.buttonIsPressed(Button.B))) {
        if (true) {
        	
        } else if (true) {
            _("Dateigröße in Zeile 0 rechtsbündig anzeigen")
        } else if (true) {
        	
        }
    }
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    if (!(input.buttonIsPressed(Button.A))) {
        if (true) {
            schreibeZeilen("ASCII94.LOG")
        } else if (true) {
            _("aktuelle Datei löschen")
            iRemove = 0
        } else if (true) {
            iRemove = 0
        }
    }
})
function loescheDateien (pCount: number, logFilename: string) {
    // Länge des Arrays aFileName=Anzahl Dateinamen fürs Protokoll
    sText = ""
    // Zähler für gelöschte Dateien
    iCount = 0
    // Schleife durch alle gefundenen Dateinamen, kann weniger als pCount sein
    for (let Index = 0; Index <= 0 - 1; Index++) {
        // fragt Register 13 fileSize vom aktuellen Dateiname (Array aFileName(iFileName))
        iSize = 0
        if (iSize == 0) {
            // sendet aktuellen Dateiname an Register 15 remove
            // und bekommt Anzahl gelöschter Dateien zurück, 1 oder 0 wird zum Zähler addiert
            iCount += 0
        }
        basic.pause(1000)
    }
    // Anzahl gelöschter Dateien fürs Protokoll auf Display und in die Datei auf Speicherkarte
    sText = "" + iCount + " gelöscht"
}
input.onButtonEvent(Button.AB, ButtonEvent.Hold, function () {
    if (true) {
        loescheDateien(10, "REMOVE.LOG")
    } else if (true) {
        _("Datei lesen und Inhalt in 2 Zeilen (32 Byte) anzeigen, weiter mit B+")
        basic.setLedColor(basic.rgb(7, 0, 0))
        zeigeDateiInhalt()
    } else if (true) {
        _("zurück zu Status 2 start")
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
