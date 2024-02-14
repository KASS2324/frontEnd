export default interface Formation {
    id: number;
    nom: string;
    categorie: string;
    theme: string;
    sousTheme: string;
    prix: string;
    description: string;
    duree: string;
    ville: string;
/*
si mis en class
    constructor(id: number, nom: string, categorie: string, theme: string, sousTheme: string, prix: string, description: string, duree: string, ville: string) {
        this.id = id;
        this.nom = nom;
        this.categorie = categorie;
        this.theme = theme;
        this.sousTheme = sousTheme;
        this.prix = prix;
        this.description = description;
        this.duree = duree;
        this.ville = ville;
      }
      */
}
