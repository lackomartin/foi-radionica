# FoiRadionica
 
ZADACI

Zadatak 1:

Postavite naslov u header-u aplikacije "Foi radionica" da bude prikazan sa velikim slovima iu pomoć CSS-a.
Stilizirajte "Add new vehicle" gumb. Dodati mu pozadinsku boju (#4738a8) i visinu (45px) - sve to odraditi u css komponenti.
Dodajte input formu za upisivanje modela vozila u HTML template-u (Ispod "model" labele).

Zadatak 2:

Dohvatite sva vozila pozivanjem na backend. Za to je potrebno koristiti Vehicle servis (servis je već ubačen u komponentu - "vehicleService").
Iz servisa se poziva metoda "getVehicles". Potrebno je napraviti "subscribe" na tu metodu prilikom pozivanja na nju.

HINT: 
this.vehicleService.getVehicles().subscribe((response: any) => {
   Ovdje je potrebno dohvaćene podatke spremiti u za to predviđeni property "cars"
})

Smjestite pozivanje metode iz servisa u odgovarajuću već kreiranu funkciju za dohvaćanje vozila.
Nakon što ste odradili dohvaćanje vozila, potrebno je u "dashboard.component.html" komponenti ubaciti preostale podatke 
o vozilu (km i vin) po primjeru već ubačenih podataka (brand, model, firstRegistration)
(Car brand i name su već ubačeni, koristite se tim primjerom)

Zadatak 3:
Implementirajte dodavanje novog vozila u bazu koristeći se Vehicle servisom. Pronađite odgovarajuću metodu u servisu predviđenu za to.
Nakon dodavanja novog vozila, resetirajte formu.
Implementirajte već gotovu "deleteVehicle" funkciju u "dashboard.component.html" komponentu na delete button.
Postavite validatore na formu. Polja koja moraju biti obavezna su sljedeća: brand, model i vin. Onemogućite klik na "Add new vehicle"
button ako forma nije validna.