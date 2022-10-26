import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureeAddComponent } from './voituree-add.component';

describe('VoitureeAddComponent', () => {
  let component: VoitureeAddComponent;
  let fixture: ComponentFixture<VoitureeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
