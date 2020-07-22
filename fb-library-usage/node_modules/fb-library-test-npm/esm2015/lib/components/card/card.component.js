import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
/**
 * This component is a simplier card
 */
export class CardComponent {
    constructor(utils) {
        this.utils = utils;
        /**
         * Invated when the user click on the titlebar
         */
        this.toggle = new EventEmitter();
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'fb-card',
                template: "<div class=\"card\">\n    <div class=\"title\" (click)=\"toggle.emit(1234)\"> {{title}} </div>\n    <div class=\"description\" *ngIf=\"opened\">\n        <ng-content></ng-content>\n        <hr>\n        {{utils.title}}\n    </div>\n</div>",
                styles: [".card{border:1px solid #000;border-radius:10px}.title{padding:10px}.description{font-style:italic;padding:10px}"]
            },] }
];
CardComponent.ctorParameters = () => [
    { type: UtilsService }
];
CardComponent.propDecorators = {
    title: [{ type: Input }],
    opened: [{ type: Input }],
    toggle: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9mYi1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVEOztHQUVHO0FBTUgsTUFBTSxPQUFPLGFBQWE7SUFpQnhCLFlBQW1CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFMdEM7O1dBRUc7UUFDTyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJekQsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsMFBBQW9DOzthQUVyQzs7O1lBVFEsWUFBWTs7O29CQWVsQixLQUFLO3FCQUtMLEtBQUs7cUJBS0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIGEgc2ltcGxpZXIgY2FyZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBjYXJkXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nOyBcbiAgXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGlmIHBhbmVsIGlzIG9wZW5lZCBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpIG9wZW5lZDogYm9vbGVhbjtcbiAgXG4gIC8qKlxuICAgKiBJbnZhdGVkIHdoZW4gdGhlIHVzZXIgY2xpY2sgb24gdGhlIHRpdGxlYmFyXG4gICAqL1xuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXRpbHM6IFV0aWxzU2VydmljZSkge1xuICAgIFxuICB9XG59XG4iXX0=