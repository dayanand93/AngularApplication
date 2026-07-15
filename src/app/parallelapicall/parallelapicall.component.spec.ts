import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelapicallComponent } from './parallelapicall.component';

describe('ParallelapicallComponent', () => {
  let component: ParallelapicallComponent;
  let fixture: ComponentFixture<ParallelapicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelapicallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelapicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
