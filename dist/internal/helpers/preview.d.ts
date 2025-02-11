import type { ComponentProps, SvelteComponent } from 'svelte';
import type { SlideParams } from 'svelte/transition';
type RadixComponentGroup = {
    [key: string]: typeof SvelteComponent<any>;
};
export type PreviewProps = PreviewPropBoolean | PreviewPropString | PreviewPropNumber | PreviewPropArray<number | string> | PreviewPropEnum<string>;
type BasePreviewProp<T> = {
    show?: 'controls' | 'value' | null;
    default?: T;
    typeLabel?: string;
};
export type PreviewPropBoolean = {
    type: 'boolean';
} & BasePreviewProp<boolean>;
export type PreviewPropString = {
    type: 'string';
} & BasePreviewProp<string>;
export type PreviewPropNumber = {
    type: 'number';
} & BasePreviewProp<number>;
export type PreviewPropArray<T> = {
    type: 'number[]' | 'string[]';
} & BasePreviewProp<T[]>;
export type PreviewPropEnum<T extends string> = {
    type: 'enum';
    options: T[];
} & BasePreviewProp<T>;
export type PreviewPropAny = {
    type: any;
    show: 'value' | null;
    default?: never;
};
type PreviewComponentProps<CMP extends SvelteComponent, P = ComponentProps<CMP>> = {
    [K in keyof P]: K extends `data-${string}` ? never : boolean extends NonNullable<P[K]> ? PreviewPropBoolean : NonNullable<P[K]> extends string ? PreviewPropString | PreviewPropEnum<NonNullable<P[K]>> : NonNullable<P[K]> extends string[] ? PreviewPropArray<string> : number extends NonNullable<P[K]> ? PreviewPropNumber : NonNullable<P[K]> extends number[] ? PreviewPropArray<number> : NonNullable<P[K]> extends boolean | SlideParams ? PreviewPropBoolean : PreviewPropAny;
};
export type ResolvedProps<GROUP extends RadixComponentGroup> = {
    [K in keyof GROUP]: ComponentProps<InstanceType<GROUP[K]>>;
};
export type PreviewEvent<T> = {
    payload: T | Array<T> | string;
};
type PreviewComponentEvents<CMP extends SvelteComponent> = {
    [K in keyof CMP['$$events_def']]: CMP['$$events_def'][K] extends CustomEvent<infer U> ? PreviewEvent<U> : never;
};
export type PreviewDataAttribute = {
    values: string[] | string;
};
type PreviewComponentDataAttributes = {
    [key: `data-${string}`]: PreviewDataAttribute;
};
type RadixComponentPreview<CMP extends typeof SvelteComponent> = {
    description?: string;
    props?: PreviewComponentProps<InstanceType<CMP>>;
    dataAttributes?: PreviewComponentDataAttributes;
    events?: PreviewComponentEvents<InstanceType<CMP>>;
};
export type PreviewMeta<GROUP extends RadixComponentGroup> = {
    [K in keyof GROUP]: RadixComponentPreview<GROUP[K]>;
};
export type PreviewSchema<GROUP extends RadixComponentGroup = RadixComponentGroup> = {
    title: string;
    description: string;
    example: unknown;
    code: string;
    meta: PreviewMeta<GROUP>;
};
export declare function getPropsObj<GROUP extends RadixComponentGroup>(previewMeta: PreviewMeta<GROUP>): ResolvedProps<GROUP>;
export {};
