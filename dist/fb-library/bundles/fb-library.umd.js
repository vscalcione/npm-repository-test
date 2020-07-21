(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fb-library', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['fb-library'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var FbLibraryService = /** @class */ (function () {
        function FbLibraryService() {
        }
        return FbLibraryService;
    }());
    FbLibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FbLibraryService_Factory() { return new FbLibraryService(); }, token: FbLibraryService, providedIn: "root" });
    FbLibraryService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    FbLibraryService.ctorParameters = function () { return []; };

    var FbLibraryComponent = /** @class */ (function () {
        function FbLibraryComponent() {
        }
        FbLibraryComponent.prototype.ngOnInit = function () {
        };
        return FbLibraryComponent;
    }());
    FbLibraryComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fb-fb-library',
                    template: "\n    <p>\n      fb-library works!\n    </p>\n  "
                },] }
    ];
    FbLibraryComponent.ctorParameters = function () { return []; };

    /**
     * This component is a simplier card
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            /**
             * Invated when the user click on the titlebar
             */
            this.toggle = new i0.EventEmitter();
        }
        return CardComponent;
    }());
    CardComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'fb-card',
                    template: "<div class=\"card\">\n    <div class=\"title\" (click)=\"toggle.emit()\"> {{title}} </div>\n    <div class=\"description\">\n        <ng-content></ng-content>\n    </div>\n</div>",
                    styles: [".card{border:1px solid #000;border-radius:10px}.title{padding:10px}.description{font-style:italic;padding:10px}"]
                },] }
    ];
    CardComponent.propDecorators = {
        title: [{ type: i0.Input }],
        opened: [{ type: i0.Input }],
        toggle: [{ type: i0.Output }]
    };

    var FbLibraryModule = /** @class */ (function () {
        function FbLibraryModule() {
        }
        return FbLibraryModule;
    }());
    FbLibraryModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.CardComponent = CardComponent;
    exports.FbLibraryComponent = FbLibraryComponent;
    exports.FbLibraryModule = FbLibraryModule;
    exports.FbLibraryService = FbLibraryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fb-library.umd.js.map
