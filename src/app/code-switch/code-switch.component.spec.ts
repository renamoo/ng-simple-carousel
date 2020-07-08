import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSwitchComponent } from './code-switch.component';

describe('CodeSwitchComponent', () => {
  let component: CodeSwitchComponent;
  let fixture: ComponentFixture<CodeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
