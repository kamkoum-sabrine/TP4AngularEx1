import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telephone-composant',
  templateUrl: './telephone-composant.component.html',
  styleUrls: ['./telephone-composant.component.css']
})
export class TelephoneComposantComponent implements OnInit {

  telephone = {
    marque: "Samsung",
    modele: "A51",
    photo: "assets/samsung.jpg",
    prix: 1150
  };
  constructor() { }
  details() {
    alert("Prix " + this.telephone.prix + " Modele " + this.telephone.modele)
  }
  ngOnInit(): void {
  }

}
