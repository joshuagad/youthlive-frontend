import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleshipGraphComponent } from './discipleship-graph.component';

describe('DiscipleshipGraphComponent', () => {
  let component: DiscipleshipGraphComponent;
  let fixture: ComponentFixture<DiscipleshipGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscipleshipGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipleshipGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
