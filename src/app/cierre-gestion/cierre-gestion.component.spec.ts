import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreGestionComponent } from './cierre-gestion.component';

describe('CierreGestionComponent', () => {
  let component: CierreGestionComponent;
  let fixture: ComponentFixture<CierreGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CierreGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CierreGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
