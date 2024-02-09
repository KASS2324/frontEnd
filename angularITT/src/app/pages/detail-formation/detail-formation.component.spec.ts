import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormationJavaComponent } from './detail-formation.component';

describe('DetailFormationJavaComponent', () => {
  let component: DetailFormationJavaComponent;
  let fixture: ComponentFixture<DetailFormationJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFormationJavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFormationJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
