import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreationCategorieComponent } from './admin-creation-categorie.component';

describe('AdminCreationCategorieComponent', () => {
  let component: AdminCreationCategorieComponent;
  let fixture: ComponentFixture<AdminCreationCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreationCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreationCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
