import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresRechercheComponent } from './criteres-recherche.component';

describe('CriteresRechercheComponent', () => {
  let component: CriteresRechercheComponent;
  let fixture: ComponentFixture<CriteresRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteresRechercheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriteresRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
