export default class DemandeSpeUser {
   
    nom: string;
    prenom: string;
    email: string;
    telephones:string; 
    entreprise:string; // données user
    

    constructor(nom: string, prenom: string, email: string, telephones: string, entreprise: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephones = telephones;
        this.entreprise = entreprise;
      }
}