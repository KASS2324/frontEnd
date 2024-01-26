import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemandeFormationSpeComponent } from './page-demande-formation-spe.component';

describe('PageDemandeFormationSpeComponent', () => {
  let component: PageDemandeFormationSpeComponent;
  let fixture: ComponentFixture<PageDemandeFormationSpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDemandeFormationSpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDemandeFormationSpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
