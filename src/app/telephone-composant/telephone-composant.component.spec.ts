import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneComposantComponent } from './telephone-composant.component';

describe('TelephoneComposantComponent', () => {
  let component: TelephoneComposantComponent;
  let fixture: ComponentFixture<TelephoneComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneComposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
