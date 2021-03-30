import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPostComponent } from './todo-post.component';

describe('TodoPostComponent', () => {
  let component: TodoPostComponent;
  let fixture: ComponentFixture<TodoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
