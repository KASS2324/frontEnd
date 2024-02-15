import { Component } from '@angular/core';
// import { MatPseudoCheckbox } from '@angular/material/core';
import { MaterialModule } from '../../material/material.module';
import { Router } from '@angular/router';





@Component({
    selector: 'app-catalogue',
    standalone: true,
    templateUrl: './catalogue.component.html',
    styleUrl: './catalogue.component.css',
    imports: [MaterialModule]
})
export class CatalogueComponent {

  allerVersElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  //constructor(private router : Router){}

  //redirectToOtherPage() : void{
    //this.router.navigate(['/home'])

  //}



}
