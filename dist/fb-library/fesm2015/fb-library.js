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

/**
 * This component is a simplier card
 */
class CardComponent {
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

export { CardComponent, FbLibraryComponent, FbLibraryModule, FbLibraryService };
//# sourceMappingURL=fb-library.js.map
