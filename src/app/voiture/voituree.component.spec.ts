import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureeComponent } from './voituree.component';

describe('VoitureeComponent', () => {
  let component: VoitureeComponent;
  let fixture: ComponentFixture<VoitureeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
