import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureeEditComponent } from './voituree-edit.component';

describe('VoitureeEditComponent', () => {
  let component: VoitureeEditComponent;
  let fixture: ComponentFixture<VoitureeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
