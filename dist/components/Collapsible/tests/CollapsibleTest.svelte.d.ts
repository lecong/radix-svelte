import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CollapsibleTestProps = typeof __propDef.props;
export type CollapsibleTestEvents = typeof __propDef.events;
export type CollapsibleTestSlots = typeof __propDef.slots;
export default class CollapsibleTest extends SvelteComponent<CollapsibleTestProps, CollapsibleTestEvents, CollapsibleTestSlots> {
}
export {};
