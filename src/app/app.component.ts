import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularz1: any;
  title = 'formularz';
  email: string = "";
  haslo: string = "";
  wojewodztwo: string = "";
  jedzenie: string = "";
  opis: string = "";
  plik: string = "";
  plec: string = "Mężczyzna";
  zainteresowania: boolean = false;
  zainteresowania1: boolean = false;
  wiek: number = 0;
  zainter: string = "";
  regulamin: string = "";

  kebab() {
    this.zainter="";
    this.regulamin=this.regulamin.toString();
    this.email = this.email.toString();
    this.haslo = this.haslo.toString();
    this.wojewodztwo = this.wojewodztwo.toString();
    this.jedzenie = this.jedzenie.toString();
    this.opis = this.opis.toString();
    this.plik  = this.plik.toString();
    this.plec = this.plec.toString();
    if(this.zainteresowania){this.zainter+="Sport,"};
    if(this.zainteresowania1){this.zainter+="Spanko"};
    this.wiek = this.wiek.valueOf();
    alert(`Witam ${this.email}. Oto lista zaznaczonych rzeczy:\nHaslo: ${this.haslo}\nWojewodztwo: ${this.wojewodztwo}\nLista Jedzenia: ${this.jedzenie}\nOpis: ${this.opis}\nSciezka Pliku: ${this.plik}\nPlec: ${this.plec}\nZainteresowania: ${this.zainter}\nWiek: ${this.wiek}\n`);
  }


}
