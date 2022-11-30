import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistDetailComponent } from './vist-detail.component';

describe('VistDetailComponent', () => {
  let component: VistDetailComponent;
  let fixture: ComponentFixture<VistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
