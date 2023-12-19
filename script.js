// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*


START

FUNCTION named "delaUppNota(summa, antalVanner, dricksProcent)"
    // Räkna ut notan per vän och returnera beloppet
    SET totalBelopp = summa * (1 + dricksProcent)
    SET beloppPerVan = totalBelopp / antalVanner
     RETURN beloppPerVan
END FUNCTION

// Huvudprogrammet börjar här
PRINT "Vänligen ange summan ni druckit för: "
set summa = INPUT summa

PRINT "Vänligen ange antal vänner: "
set antalVanner = INPUT antalVanner

PRINT "Vänligen ange dricks i decimalform (t.ex. 0.10 för 10%): "
set dricksProcent = INPUT dricksProcent


// Anropa funktionen för att räkna ut notan per vän
set beloppPerVan = CALL FUNCTION named "delaUppNota(summa, antalVanner, dricksProcent)"
set variabel beloppPerVan = returen från delauppnota, skicka med summa, antalvänner och dricksProcent
// Visa resultatet
PRINT "Varje person ska betala: " + beloppPerVan

END





*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*


// FÖRSÖK TVÅ FAST SUPERFÖRENKLAT

START
Set variabel startord = "FOUR"
Set variabel slutord = "FIVE"
Set variabel nyttOrd = ""

LOOPA TILLS startord = slutord
    Uppmana användaren att mata in ett ord som skiljer sig med ett tecken från startordet
    INMATNING nyttOrd
    
    OM nyttOrd = startord, återgå till början av loopen
    OM nyttOrd = slutord, avsluta loopen och skriv ut grattis
    OM nyttOrd inte finns i ordboken, skriv ut att ordet inte finns i ordboken
    ANNARS OM längden av (nyttOrd minus startord) != 1, skriv ut att endast ett tecken ska ändras
    ANNARS OM antal olika tecken mellan nyttOrd och startord != 1, skriv ut att endast ett tecken ska ändras
    ANNARS
        ersätt startord med nyttOrd och skriv ut att du är ett steg närmare slutordet
END

 






*/