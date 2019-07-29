import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdexListComponent } from './edex-list.component';

describe('EdexListComponent', () => {
  let component: EdexListComponent;
  let fixture: ComponentFixture<EdexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
