import DemandeSpeUser from "./demande-spe-user.model";

export default class DemandeSpe {
   
    user:DemandeSpeUser;
    typeFormation:string;
    demande:string;
    
    constructor(typeFormation: string, demande: string, user: DemandeSpeUser){
        this.typeFormation = typeFormation;
        this.demande = demande;
        this.user = user;
    }
}