import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

@Component({
  selector: 'fb-test-host-card',
  template: `<fb-card [title]="myTitle" [opened]="true">
  bla bla bla
  </fb-card>
  `
})
class TestCardComponent {
  public myTitle = "super title";
}

/**
 * Tests
 */
describe('Component', () => {
  
  let fixture;
  let context;
  let element;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCardComponent, CardComponent]
    });
    fixture = TestBed.createComponent(TestCardComponent);
    context = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('Card', () => {
    it('should be prop "title" is included in card titlebar', () => {
      expect(element.querySelector('.title').textContent).toContain(context.myTitle)
    });
    it('should content displayed in the description box', () => {
      expect(element.querySelector('.description').textContent).toContain('bla bla bla')
    });
  });
});