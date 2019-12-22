let liczbaProduktowKoszyka = 0;
let identyfikator = 0;
let wartoscProduktowKoszyka = 0;

const koszyk = document.querySelector("#pozycje-koszyka");
const cenaKoszyka = document.querySelector("#cena-koszyka");

function kupKoszyk() {
     
     if (wartoscProduktowKoszyka > 0) {

          alert ('Kupiłeś towaru za ' + wartoscProduktowKoszyka + ' PLN');
          wyczyscKoszyk();
     
     } else {
          
          alert ('Nic nie ma w koszyku.');
          
     }
     
}

function wyczyscKoszyk() {
     
     liczbaProduktowKoszyka = 0;
     wartoscProduktowKoszyka = 0;
     
     cenaKoszyka.innerHTML = wartoscProduktowKoszyka + ' PLN';
     
     while (koszyk.firstChild) {
          koszyk.removeChild(koszyk.firstChild);
     }
     
}

function usunProdukt(id, cena){

     wartoscProduktowKoszyka -= cena;
     cenaKoszyka.innerHTML = wartoscProduktowKoszyka + ' PLN';
     
     element = document.getElementById(id);
     element.parentNode.removeChild(element);
     
}

function dodajProdukt(nazwa, cena){
     
     if (liczbaProduktowKoszyka < 8) {

          liczbaProduktowKoszyka++;
          identyfikator++;
          
          wartoscProduktowKoszyka += cena;
          
          cenaKoszyka.innerHTML = wartoscProduktowKoszyka + ' PLN';
          
          // stwórz kontener z pozycją
          
          pozycjaKoszyka = document.createElement('div');
          pozycjaKoszyka.classList.add('pozycja-koszyka');
          pozycjaKoszyka.id = 'element-koszyka-' + identyfikator;
          
          // stwórz pierwszy wiersz
          
          pozycjaKoszykaWiersz1 = document.createElement('div');
          pozycjaKoszykaWiersz1.classList.add('pozycja-koszyka-wiersz');
          
          // stwórz kolumnę z nazwą produktu
          
          pozycjaKoszykaNazwa = document.createElement('div');
          pozycjaKoszykaNazwa.classList.add('pozycja-koszyka-nazwa');
          pozycjaKoszykaNazwa.innerHTML = nazwa;
          
          // stwórz kolumnę z przyciskiem
          
          pozycjaKoszykaPrzycisk = document.createElement('div');
          pozycjaKoszykaPrzycisk.classList.add('pozycja-koszyka-usun');
          
          // stwórz przycisk
          
          przycisk = document.createElement('button');
          przycisk.innerHTML = 'Usuń';
          przycisk.onclick = function (e){ usunProdukt(e.target.parentNode.parentNode.parentNode.id, cena) };
          
          // dodaj przycisk do kolumny
          
          pozycjaKoszykaPrzycisk.appendChild(przycisk);
          
          // dodaj kolumny do wiersza
          
          pozycjaKoszykaWiersz1.appendChild(pozycjaKoszykaNazwa);
          pozycjaKoszykaWiersz1.appendChild(pozycjaKoszykaPrzycisk);
          
          // stwórz drugi wiersz
          
          pozycjaKoszykaWiersz2 = document.createElement('div');
          pozycjaKoszykaWiersz2.classList.add('pozycja-koszyka-cena');
          pozycjaKoszykaWiersz2.innerHTML = 'Cena: ' + cena + ' PLN';

          // dodaj stworzony obiekt do koszyka
          
          pozycjaKoszyka.appendChild(pozycjaKoszykaWiersz1);
          pozycjaKoszyka.appendChild(pozycjaKoszykaWiersz2);
          
          koszyk.appendChild(pozycjaKoszyka);
          
     } else {
          
          alert('maksymalna liczba produktów w koszyku to 8 sztuk!');
          
     }
}

document.querySelector('#wyczysc-koszyk').addEventListener('click', wyczyscKoszyk, false);
document.querySelector('#kup-koszyk').addEventListener('click', kupKoszyk, false);