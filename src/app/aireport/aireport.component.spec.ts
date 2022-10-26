import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AireportComponent } from './aireport.component';

describe('AireportComponent', () => {
  let component: AireportComponent;
  let fixture: ComponentFixture<AireportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AireportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AireportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
