import { SvelteComponent } from "svelte";
import { type ProgressRootProps } from '..';
declare const __propDef: {
    props: {
        max?: ProgressRootProps['max'];
        value?: ProgressRootProps['value'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProgressTestProps = typeof __propDef.props;
export type ProgressTestEvents = typeof __propDef.events;
export type ProgressTestSlots = typeof __propDef.slots;
export default class ProgressTest extends SvelteComponent<ProgressTestProps, ProgressTestEvents, ProgressTestSlots> {
}
export {};
