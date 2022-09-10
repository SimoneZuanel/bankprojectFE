import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercardComponent } from './othercard.component';

describe('OthercardComponent', () => {
  let component: OthercardComponent;
  let fixture: ComponentFixture<OthercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
