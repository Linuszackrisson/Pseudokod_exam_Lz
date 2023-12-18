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

funktion play

set variabel ORDBOK = (alla ord i det engelska lexikonet)

set variabel startord = "FOUR"

set variabel slutord = "FIVE"

// Loopa tills spelaren har rätt ord
MEDANS startordet inte är lika med slutordet

    PRINT "Skriv ett ord som skiljer ett tecken från startordet för att komma ett steg närmare slutordet: "
    INPUT nyttORD
     om nyttORD = startord
     PRINT "Du skrev samma ord som startordet, försök igen"
     om nyttORD = slutord
     PRINT "Grattis du klarade det"
     om nyttORD inte finns i ORDBOK
      PRINT "Ordet finns inte i ordboken, försök igen"
     om nyttORD finns i ORDBOK och skiljer sig med ETT tecken från startordet
        ersätt startord med nyttORD
        PRINT "Du är nu ett steg närmare slutordet"

        WORK IN PROGRESS




 






*/