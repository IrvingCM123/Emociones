import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaPrincipalComponent } from './tema-principal.component';

describe('TemaPrincipalComponent', () => {
  let component: TemaPrincipalComponent;
  let fixture: ComponentFixture<TemaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
