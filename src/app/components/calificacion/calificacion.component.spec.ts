import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionComponent } from './calificacion.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalificacionComponent', () => {
  let component: CalificacionComponent;
  let fixture: ComponentFixture<CalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionComponent ],
      imports: [HttpClientTestingModule ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
