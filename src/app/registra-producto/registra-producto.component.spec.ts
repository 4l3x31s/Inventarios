import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraProductoComponent } from './registra-producto.component';

describe('RegistraProductoComponent', () => {
  let component: RegistraProductoComponent;
  let fixture: ComponentFixture<RegistraProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
