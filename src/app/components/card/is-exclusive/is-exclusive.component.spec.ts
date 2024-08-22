import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsExclusiveComponent } from './is-exclusive.component';

describe('IsExclusiveComponent', () => {
  let component: IsExclusiveComponent;
  let fixture: ComponentFixture<IsExclusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsExclusiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
