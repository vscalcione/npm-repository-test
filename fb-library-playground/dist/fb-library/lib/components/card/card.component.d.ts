import { EventEmitter } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
/**
 * This component is a simplier card
 */
import * as ɵngcc0 from '@angular/core';
export declare class CardComponent {
    utils: UtilsService;
    /**
     * The title of the card
     */
    title: string;
    /**
     * Represents if panel is opened or not
     */
    opened: boolean;
    /**
     * Invated when the user click on the titlebar
     */
    toggle: EventEmitter<any>;
    constructor(utils: UtilsService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardComponent, "fb-card", never, { "title": "title"; "opened": "opened"; }, { "toggle": "toggle"; }, never, ["*"]>;
}

//# sourceMappingURL=card.component.d.ts.map