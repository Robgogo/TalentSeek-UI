import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCardNoComponent } from './generate-card-no.component';

describe('GenerateCardNoComponent', () => {
  let component: GenerateCardNoComponent;
  let fixture: ComponentFixture<GenerateCardNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCardNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCardNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
