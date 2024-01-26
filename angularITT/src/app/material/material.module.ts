import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggle} from '@angular/material/button-toggle';


const MaterialComponents=[MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggle,
]

@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents],
  
})
export class MaterialModule { }
