import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDemandePersoComponent } from './admin-demande-perso.component';

describe('AdminDemandePersoComponent', () => {
  let component: AdminDemandePersoComponent;
  let fixture: ComponentFixture<AdminDemandePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDemandePersoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDemandePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
