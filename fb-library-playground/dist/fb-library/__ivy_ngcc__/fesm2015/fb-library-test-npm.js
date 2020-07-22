import { ɵɵdefineInjectable, Injectable, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
class FbLibraryService {
    constructor() { }
}
FbLibraryService.ɵfac = function FbLibraryService_Factory(t) { return new (t || FbLibraryService)(); };
FbLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function FbLibraryService_Factory() { return new FbLibraryService(); }, token: FbLibraryService, providedIn: "root" });
FbLibraryService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FbLibraryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class FbLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
FbLibraryComponent.ɵfac = function FbLibraryComponent_Factory(t) { return new (t || FbLibraryComponent)(); };
FbLibraryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FbLibraryComponent, selectors: [["fb-fb-library"]], decls: 2, vars: 0, template: function FbLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " fb-library works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
FbLibraryComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FbLibraryComponent, [{
        type: Component,
        args: [{
                selector: 'fb-fb-library',
                template: `
    <p>
      fb-library works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

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
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(ɵngcc0.ɵɵdirectiveInject(UtilsService)); };
CardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardComponent, selectors: [["fb-card"]], inputs: { title: "title", opened: "opened" }, outputs: { toggle: "toggle" }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[1, "card"], [1, "title", 3, "click"], [1, "description"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function CardComponent_Template_div_click_1_listener() { return ctx.toggle.emit(); });
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelement(5, "hr");
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.utils.title, " ");
    } }, styles: [".card[_ngcontent-%COMP%]{border:1px solid #000;border-radius:10px}.title[_ngcontent-%COMP%]{padding:10px}.description[_ngcontent-%COMP%]{font-style:italic;padding:10px}"] });
CardComponent.ctorParameters = () => [
    { type: UtilsService }
];
CardComponent.propDecorators = {
    title: [{ type: Input }],
    opened: [{ type: Input }],
    toggle: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'fb-card',
                template: "<div class=\"card\">\n    <div class=\"title\" (click)=\"toggle.emit()\"> {{title}} </div>\n    <div class=\"description\">\n        <ng-content></ng-content>\n        <hr>\n        {{utils.title}}\n    </div>\n</div>",
                styles: [".card{border:1px solid #000;border-radius:10px}.title{padding:10px}.description{font-style:italic;padding:10px}"]
            }]
    }], function () { return [{ type: UtilsService }]; }, { toggle: [{
            type: Output
        }], title: [{
            type: Input
        }], opened: [{
            type: Input
        }] }); })();

class FbLibraryModule {
}
FbLibraryModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FbLibraryModule });
FbLibraryModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FbLibraryModule_Factory(t) { return new (t || FbLibraryModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FbLibraryModule, { declarations: [FbLibraryComponent, CardComponent], exports: [FbLibraryComponent, CardComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FbLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [FbLibraryComponent, CardComponent],
                imports: [],
                exports: [FbLibraryComponent, CardComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of fb-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, FbLibraryComponent, FbLibraryModule, FbLibraryService, UtilsService };

//# sourceMappingURL=fb-library-test-npm.js.map