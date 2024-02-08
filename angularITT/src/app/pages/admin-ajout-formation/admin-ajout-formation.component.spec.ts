import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjoutFormationComponent } from './admin-ajout-formation.component';

describe('AdminAjoutFormationComponent', () => {
  let component: AdminAjoutFormationComponent;
  let fixture: ComponentFixture<AdminAjoutFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAjoutFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAjoutFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
