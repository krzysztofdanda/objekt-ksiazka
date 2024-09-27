class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    
    opiszKsiazke() {
        return `Książka ma tytuł "${this.tytul}", autorem jest ${this.autor} i ${this.przeczytana ? 'została przeczytana' : 'nie została przeczytana'}.`;
    }
}


const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
const ksiazka2 = new Ksiazka("Harry Potter", "J.K. Rowling", false);
const ksiazka3 = new Ksiazka("Hobbit", "J.R.R. Tolkien", false);


const biblioteka = [ksiazka1, ksiazka2, ksiazka3];


function iloscPrzeczytanych(ksiazki) {
    let licznikPrzeczytanych = 0;

    ksiazki.forEach(ksiazka => {
        
        console.log(ksiazka.opiszKsiazke());

        
        if (ksiazka.przeczytana) {
            licznikPrzeczytanych++;
        }
    });

    return licznikPrzeczytanych;
}


const przeczytaneKsiazki = iloscPrzeczytanych(biblioteka);
console.log(`Liczba przeczytanych książek: ${przeczytaneKsiazki}`);
