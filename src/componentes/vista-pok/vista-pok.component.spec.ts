import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPokComponent } from './vista-pok.component';

describe('VistaPokComponent', () => {
  let component: VistaPokComponent;
  let fixture: ComponentFixture<VistaPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
