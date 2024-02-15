import { Component } from '@angular/core';
import DemandeSpe from '../../models/demande-spe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeSpeService } from '../../services/demande-spe.service';

@Component({
  selector: 'app-admin-demande-perso',
  standalone: true,
  imports: [],
  templateUrl: './admin-demande-perso.component.html',
  styleUrl: './admin-demande-perso.component.css'
})
export class AdminDemandePersoComponent {

    
  demandes: DemandeSpe[] = []; 
  

  constructor(private router: Router, private route:ActivatedRoute,private demandesService: DemandeSpeService){}
 
    

  ngOnInit(): void {
    
    this.demandesService.getDemandeSpes().subscribe((demandes) => { this.demandes = demandes });
    console.log(this.demandes);
  }

}
