import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlageTechnologiesComponent } from './knowlage-technologies.component';

describe('KnowlageTechnologiesComponent', () => {
  let component: KnowlageTechnologiesComponent;
  let fixture: ComponentFixture<KnowlageTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnowlageTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowlageTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
