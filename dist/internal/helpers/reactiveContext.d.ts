/// <reference types="svelte" />
import { type Writable } from 'svelte/store';
import type { IfEquals } from '../types';
type ValueSetter<T> = (v: T) => void;
type WithoutNever<T> = Pick<T, {
    [K in keyof T]: T[K] extends never ? never : K;
}[keyof T]>;
type ValueSetters<T> = WithoutNever<{
    [K in keyof T]?: IfEquals<{
        [Q in K]: T[K];
    }, {
        -readonly [Q in K]: T[K];
    }, ValueSetter<T[K]>, never>;
}>;
type GetContextReturn<T extends Record<string, any>> = Writable<T>;
export type Defaults<T extends Record<string, unknown>> = {
    [K in keyof T]?: T[K];
};
export declare function reactiveContext<T extends Record<string, any>>(defaults?: Defaults<T>): {
    setContext: (setters?: ValueSetters<T>) => {
        set: (v: Partial<T>) => void;
        update: (updater: (state: T) => Partial<T>) => void;
        subscribe(this: void, run: import("svelte/store").Subscriber<T>, invalidate?: import("svelte/store").Invalidator<T> | undefined): import("svelte/store").Unsubscriber;
    };
    defaults: Defaults<T> | undefined;
    getContext: () => GetContextReturn<T>;
};
export {};
