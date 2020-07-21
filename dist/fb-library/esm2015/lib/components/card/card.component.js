import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * This component is a simplier card
 */
export class CardComponent {
    constructor() {
        /**
         * Invated when the user click on the titlebar
         */
        this.toggle = new EventEmitter();
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fb-card',
                template: "<div class=\"card\">\n    <div class=\"title\" (click)=\"toggle.emit()\"> {{title}} </div>\n    <div class=\"description\">\n        <ng-content></ng-content>\n    </div>\n</div>",
                styles: [".card{border:1px solid #000;border-radius:10px}.title{padding:10px}.description{font-style:italic;padding:10px}"]
            },] }
];
CardComponent.propDecorators = {
    title: [{ type: Input }],
    opened: [{ type: Input }],
    toggle: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9mYi1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7O0dBRUc7QUFNSCxNQUFNLE9BQU8sYUFBYTtJQUwxQjtRQWlCRTs7V0FFRztRQUNPLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUzRCxDQUFDOzs7WUF0QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiw4TEFBb0M7O2FBRXJDOzs7b0JBTUUsS0FBSztxQkFLTCxLQUFLO3FCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSBzaW1wbGllciBjYXJkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZiLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIGNhcmRcbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7IFxuICBcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgaWYgcGFuZWwgaXMgb3BlbmVkIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgb3BlbmVkOiBib29sZWFuO1xuICBcbiAgLyoqXG4gICAqIEludmF0ZWQgd2hlbiB0aGUgdXNlciBjbGljayBvbiB0aGUgdGl0bGViYXJcbiAgICovXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG59XG4iXX0=