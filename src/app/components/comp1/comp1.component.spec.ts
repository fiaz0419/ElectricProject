import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewCompComponent } from './comp1.component';

describe('MyNewCompComponent', () => {
  let component: MyNewCompComponent;
  let fixture: ComponentFixture<MyNewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
