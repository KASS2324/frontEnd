import { Component, Input } from '@angular/core';
import Formation from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import Session from '../../models/session.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-detail-formation',
  standalone: true,
  imports: [],
  templateUrl: './detail-formation.component.html',
  styleUrl: './detail-formation.component.css'
})
export class DetailFormationComponent {
  
  formation!: Formation;
  sessions: Session[] = []; 
  

  constructor(private router: Router, private route:ActivatedRoute,private formationService: FormationService, private sessionService : SessionService){}
 
    

  ngOnInit(): void {
    const id : number = Number(this.route.snapshot.paramMap.get('id'));
  
    this.formationService.getFormation(id).subscribe((formation) => { this.formation = formation });
    this.sessionService.getSessionsByFormationId(id).subscribe((sessions) => { this.sessions = sessions });
  }

  

}
