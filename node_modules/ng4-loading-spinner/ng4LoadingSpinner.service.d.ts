import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
/**
 * Injectable service
 * @export
 */
export declare class Ng4LoadingSpinnerService {
    /**
     * @description spinners BehaviorSubject
     * @memberof Ng4LoadingSpinnerService
     */
    spinnerSubject: BehaviorSubject<any>;
    /**
     * Creates an instance of Ng4LoadingSpinnerService.
     * @memberof Ng4LoadingSpinnerService
     */
    constructor();
    /**
     * To show spinner
     * @memberof Ng4LoadingSpinnerService
     */
    show(): void;
    /**
     * To hide spinner
     * @memberof Ng4LoadingSpinnerService
     */
    hide(): void;
    getMessage(): Observable<any>;
}
