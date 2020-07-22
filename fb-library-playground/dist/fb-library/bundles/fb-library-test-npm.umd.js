(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fb-library-test-npm', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['fb-library-test-npm'] = {}, global.ng.core));
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

    var UtilsService = /** @class */ (function () {
        function UtilsService() {
            /**
             * Hello message
             */
            this.title = 'Card footer';
        }
        /**
         * Add operation
         */
        UtilsService.prototype.add = function (a, b) {
            return a + b;
        };
        return UtilsService;
    }());
    UtilsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });
    UtilsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    /**
     * This component is a simplier card
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent(utils) {
            this.utils = utils;
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
                    template: "<div class=\"card\">\n    <div class=\"title\" (click)=\"toggle.emit(1234)\"> {{title}} </div>\n    <div class=\"description\" *ngIf=\"opened\">\n        <ng-content></ng-content>\n        <hr>\n        {{utils.title}}\n    </div>\n</div>",
                    styles: [".card{border:1px solid #000;border-radius:10px}.title{padding:10px}.description{font-style:italic;padding:10px}"]
                },] }
    ];
    CardComponent.ctorParameters = function () { return [
        { type: UtilsService }
    ]; };
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
    exports.UtilsService = UtilsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fb-library-test-npm.umd.js.map
