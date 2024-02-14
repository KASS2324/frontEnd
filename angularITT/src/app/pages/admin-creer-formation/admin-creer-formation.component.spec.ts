import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreerFormationComponent } from './admin-creer-formation.component';

describe('AdminAjoutFormationComponent', () => {
  let component: AdminCreerFormationComponent;
  let fixture: ComponentFixture<AdminCreerFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreerFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreerFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
