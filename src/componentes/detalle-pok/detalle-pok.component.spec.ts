import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokComponent } from './detalle-pok.component';

describe('DetallePokComponent', () => {
  let component: DetallePokComponent;
  let fixture: ComponentFixture<DetallePokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
