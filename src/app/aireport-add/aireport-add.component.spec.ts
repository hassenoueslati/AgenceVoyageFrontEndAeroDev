import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AireportAddComponent } from './aireport-add.component';

describe('AireportAddComponent', () => {
  let component: AireportAddComponent;
  let fixture: ComponentFixture<AireportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AireportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AireportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
