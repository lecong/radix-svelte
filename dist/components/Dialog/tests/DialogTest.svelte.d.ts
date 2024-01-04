import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DialogTestProps = typeof __propDef.props;
export type DialogTestEvents = typeof __propDef.events;
export type DialogTestSlots = typeof __propDef.slots;
export default class DialogTest extends SvelteComponent<DialogTestProps, DialogTestEvents, DialogTestSlots> {
}
export {};
