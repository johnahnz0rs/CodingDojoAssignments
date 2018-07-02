import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplierComponent } from './multiplier.component';

describe('MultiplierComponent', () => {
  let component: MultiplierComponent;
  let fixture: ComponentFixture<MultiplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
