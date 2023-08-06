function zeigeDateiInhalt () {
    lcd16x2rgb.screenClear(lcd16x2rgb.eADDR_LCD.LCD_16x2)
    if (qwiicopenlog.getInt(qwiicopenlog.eArray.FileContent, qwiicopenlog.eInt.Array_Length) > 0) {
        lcd16x2rgb.writeLCD(lcd16x2rgb.eADDR_LCD.LCD_16x2, qwiicopenlog.getString(qwiicopenlog.eArray.FileContent).substr(0, 16))
        lcd16x2rgb.setCursorCB(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 0, lcd16x2rgb.eONOFF.OFF, lcd16x2rgb.eONOFF.OFF)
        lcd16x2rgb.writeLCD(lcd16x2rgb.eADDR_LCD.LCD_16x2, qwiicopenlog.getString(qwiicopenlog.eArray.FileContent).substr(16, 16))
    } else {
        lcd16x2rgb.writeLCD(lcd16x2rgb.eADDR_LCD.LCD_16x2, "Datei leer")
    }
}
function zeigeSearchString () {
    lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 2, 8, lcd16x2rgb.eAlign.left, "" + qwiicopenlog.getInt(qwiicopenlog.eArray.SearchString, qwiicopenlog.eInt.Index) + "/" + qwiicopenlog.getInt(qwiicopenlog.eArray.SearchString, qwiicopenlog.eInt.Array_Length))
    lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 3, 12, lcd16x2rgb.eAlign.left, qwiicopenlog.getString(qwiicopenlog.eArray.SearchString))
    lcd16x2rgb.setCursorCB(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 3, lcd16x2rgb.eONOFF.ON, lcd16x2rgb.eONOFF.OFF)
}
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.SearchString, -1)
        zeigeSearchString()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileName, -1)
        zeigeDateiName()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.read)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileContent, -1)
        zeigeDateiInhalt()
    } else {
    	
    }
})
function zeigeDateiName () {
    lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 2, 15, lcd16x2rgb.eAlign.left, "" + qwiicopenlog.getInt(qwiicopenlog.eArray.FileName, qwiicopenlog.eInt.Index) + "/" + qwiicopenlog.getInt(qwiicopenlog.eArray.FileName, qwiicopenlog.eInt.Array_Length) + " " + qwiicopenlog.getString(qwiicopenlog.eArray.SearchString))
    lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 0, 15, lcd16x2rgb.eAlign.left, qwiicopenlog.getString(qwiicopenlog.eArray.FileName))
    zeigeStatus()
    lcd16x2rgb.setCursorCB(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 2, lcd16x2rgb.eONOFF.ON, lcd16x2rgb.eONOFF.OFF)
}
function zeigeStatus () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.error_SD)) {
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 0, 2, lcd16x2rgb.eAlign.left, bit.formatNumber(qwiicopenlog.readRegister(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.eReadRegister.status), bit.eLength.HEX_FF))
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 3, 15, lcd16x2rgb.eAlign.left, "Speicherkarte")
    } else {
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 0, 1, lcd16x2rgb.eAlign.left, bit.formatNumber(qwiicopenlog.getStatus(), bit.eLength.HEX_F))
    }
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 2, 4, lcd16x2rgb.eAlign.left, bit.formatNumber(qwiicopenlog.readRegister(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.eReadRegister.status), bit.eLength.HEX_FF))
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 5, 15, lcd16x2rgb.eAlign.left, "" + qwiicopenlog.readRegister(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.eReadRegister.firmwareMajor) + "." + qwiicopenlog.readRegister(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.eReadRegister.firmwareMinor) + " DIR A+B")
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 0, 15, lcd16x2rgb.eAlign.left, "-A            B+")
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 3, 12, lcd16x2rgb.eAlign.left, qwiicopenlog.getString(qwiicopenlog.eArray.SearchString))
        lcd16x2rgb.setCursorCB(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 3, lcd16x2rgb.eONOFF.ON, lcd16x2rgb.eONOFF.ON)
    }
}
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.SearchString, 1)
        zeigeSearchString()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileName, 1)
        zeigeDateiName()
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.read)) {
        qwiicopenlog.changeIndex(qwiicopenlog.eArray.FileContent, 1)
        zeigeDateiInhalt()
    } else {
    	
    }
})
function _ (Kommentar: string) {
	
}
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    if (!(input.buttonIsPressed(Button.B))) {
        if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        	
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
            _("Dateigröße in Zeile 0 rechtsbündig anzeigen")
            lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 0, 2, 15, lcd16x2rgb.eAlign.right, convertToText(qwiicopenlog.readInt32BE(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.eWriteStringReadInt32BE.fileSize, qwiicopenlog.getString(qwiicopenlog.eArray.FileName))))
        } else {
        	
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    if (!(input.buttonIsPressed(Button.A))) {
        if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
        	
        } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
            _("Datei lesen und Inhalt in 2 Zeilen (32 Byte) anzeigen, weiter mit B+")
            qwiicopenlog.readFile(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.getString(qwiicopenlog.eArray.FileName), 260)
            zeigeDateiInhalt()
        } else {
        	
        }
    }
})
input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Hold), function () {
    if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.start)) {
    	
    } else if (qwiicopenlog.isStatus(qwiicopenlog.eStatus.dir)) {
        _("aktuelle Datei löschen")
        iRemove = qwiicopenlog.readInt32BE(qwiicopenlog.eADDR.LOG_Qwiic, qwiicopenlog.eWriteStringReadInt32BE.remove, qwiicopenlog.getString(qwiicopenlog.eArray.FileName))
        lcd16x2rgb.writeText(lcd16x2rgb.eADDR_LCD.LCD_16x2, 1, 0, 15, lcd16x2rgb.eAlign.left, "" + iRemove + " " + "gelöscht")
    }
})
let iRemove = 0
lcd16x2rgb.initLCD(lcd16x2rgb.eADDR_LCD.LCD_16x2)
qwiicopenlog.checkStatusRegister(qwiicopenlog.eADDR.LOG_Qwiic)
zeigeStatus()
