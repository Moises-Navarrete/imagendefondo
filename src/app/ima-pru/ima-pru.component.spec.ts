import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaPruComponent } from './ima-pru.component';

describe('ImaPruComponent', () => {
  let component: ImaPruComponent;
  let fixture: ComponentFixture<ImaPruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaPruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaPruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
