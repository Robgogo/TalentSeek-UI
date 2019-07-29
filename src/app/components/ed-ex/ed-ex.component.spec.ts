import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdExComponent } from './ed-ex.component';

describe('EdExComponent', () => {
  let component: EdExComponent;
  let fixture: ComponentFixture<EdExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
