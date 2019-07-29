import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEdExComponent } from './update-ed-ex.component';

describe('UpdateEdExComponent', () => {
  let component: UpdateEdExComponent;
  let fixture: ComponentFixture<UpdateEdExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEdExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEdExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
