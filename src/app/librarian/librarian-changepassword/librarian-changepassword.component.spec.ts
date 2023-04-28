import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianChangepasswordComponent } from './librarian-changepassword.component';

describe('LibrarianChangepasswordComponent', () => {
  let component: LibrarianChangepasswordComponent;
  let fixture: ComponentFixture<LibrarianChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianChangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
