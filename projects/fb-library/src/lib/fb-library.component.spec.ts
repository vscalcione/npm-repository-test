import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLibraryComponent } from './fb-library.component';

describe('FbLibraryComponent', () => {
  let component: FbLibraryComponent;
  let fixture: ComponentFixture<FbLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
