import { ɵɵdefineInjectable, Injectable, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';

class FbLibraryService {
    constructor() { }
}
FbLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function FbLibraryService_Factory() { return new FbLibraryService(); }, token: FbLibraryService, providedIn: "root" });
FbLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
FbLibraryService.ctorParameters = () => [];

class FbLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
FbLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'fb-fb-library',
                template: `
    <p>
      fb-library works!
    </p>
  `
            },] }
];
FbLibraryComponent.ctorParameters = () => [];

class UtilsService {
    constructor() {
        /**
         * Hello message
         */
        this.title = 'Card footer';
    }
    /**
     * Add operation
     */
    add(a, b) {
        return a + b;
    }
}
UtilsService.ɵprov = ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
UtilsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

/**
 * This component is a simplier card
 */
class CardComponent {
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

class FbLibraryModule {
}
FbLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FbLibraryComponent, CardComponent],
                imports: [],
                exports: [FbLibraryComponent, CardComponent]
            },] }
];

/*
 * Public API Surface of fb-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, FbLibraryComponent, FbLibraryModule, FbLibraryService, UtilsService };
//# sourceMappingURL=fb-library-test-npm.js.map
