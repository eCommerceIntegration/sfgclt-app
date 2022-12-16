import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoptFormComponent } from './appopt-form.component';

describe('AppoptFormComponent', () => {
  let component: AppoptFormComponent;
  let fixture: ComponentFixture<AppoptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoptFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
