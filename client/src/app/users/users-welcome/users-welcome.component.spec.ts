import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWelcomeComponent } from './users-welcome.component';

describe('UsersWelcomeComponent', () => {
  let component: UsersWelcomeComponent;
  let fixture: ComponentFixture<UsersWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
