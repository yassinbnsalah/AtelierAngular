import { Component } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent {
  display = true
  searchTerm = '';
  IdProductUpdated = 0
  text = null;
  CodeProduct = '';
  libelle = "";
  prixUnitaire = 0;
  tauxTVA = 0;
  idProduit = 0;
  listProduit: Produit[] = [
    { idProduit: 1, code: "P147852P", libelle: "Produit1", prixUnitaire: 12.5, tauxTVA: 0.02 },
    { idProduit: 2, code: "P147552P", libelle: "Produit1", prixUnitaire: 30, tauxTVA: 0.1980 },
    { idProduit: 3, code: "D14785CC", libelle: "Produit1", prixUnitaire: 20, tauxTVA: 0.1980 },
    { idProduit: 4, code: "E147852P", libelle: "Produit1", prixUnitaire: 50, tauxTVA: 0.1980 },
    { idProduit: 5, code: "F147852P", libelle: "Produit1", prixUnitaire: 70, tauxTVA: 0.02 },
  ]

  ChangeTVA(produit: Produit) {
    console.log(produit);
    this.display = false
    this.text != "gg";
    this.IdProductUpdated = produit.idProduit
    produit.tauxTVA = 0.02
    console.log(produit);
    console.log("Product TAV changed");
  }

  filterData() {
    if (this.searchTerm.trim() === '') {
      return this.listProduit;
    }
    return this.listProduit.filter(item => item.code.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  AddNewProduct() {
    this.listProduit.push({
      idProduit: this.idProduit,
      code: this.CodeProduct,
      libelle: this.libelle,
      prixUnitaire: this.prixUnitaire,
      tauxTVA: this.tauxTVA
    })
    this.CodeProduct = '';
    this.libelle = "";
    this.prixUnitaire = 0;
    this.tauxTVA = 0;
    this.idProduit = 0;
  }
}
