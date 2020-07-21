import { EventEmitter } from '@angular/core';
/**
 * This component is a simplier card
 */
export declare class CardComponent {
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
}
