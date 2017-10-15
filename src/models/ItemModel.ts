import { baseInterface } from './baseModel';
export interface Item extends baseInterface {
    name: string;
    subCollection? : any;
}