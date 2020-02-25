import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectByIdComponent } from './view-project-by-id.component';

describe('ViewProjectByIdComponent', () => {
  let component: ViewProjectByIdComponent;
  let fixture: ComponentFixture<ViewProjectByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
