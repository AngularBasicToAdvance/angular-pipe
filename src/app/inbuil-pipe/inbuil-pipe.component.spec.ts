import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuilPipeComponent } from './inbuil-pipe.component';

describe('InbuilPipeComponent', () => {
  let component: InbuilPipeComponent;
  let fixture: ComponentFixture<InbuilPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuilPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuilPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
