import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingComponent } from './removing.component';

describe('RemovingComponent', () => {
  let component: RemovingComponent;
  let fixture: ComponentFixture<RemovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
