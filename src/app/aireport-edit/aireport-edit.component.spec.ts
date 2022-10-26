import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AireportEditComponent } from './aireport-edit.component';

describe('AireportEditComponent', () => {
  let component: AireportEditComponent;
  let fixture: ComponentFixture<AireportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AireportEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AireportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
