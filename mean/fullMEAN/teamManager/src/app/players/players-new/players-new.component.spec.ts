import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersNewComponent } from './players-new.component';

describe('PlayersNewComponent', () => {
  let component: PlayersNewComponent;
  let fixture: ComponentFixture<PlayersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
