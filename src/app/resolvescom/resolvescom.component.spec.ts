import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvescomComponent } from './resolvescom.component';

describe('ResolvescomComponent', () => {
  let component: ResolvescomComponent;
  let fixture: ComponentFixture<ResolvescomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolvescomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvescomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
