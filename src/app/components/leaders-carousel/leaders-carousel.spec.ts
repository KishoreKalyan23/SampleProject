import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersCarousel } from './leaders-carousel';

describe('LeadersCarousel', () => {
  let component: LeadersCarousel;
  let fixture: ComponentFixture<LeadersCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadersCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
