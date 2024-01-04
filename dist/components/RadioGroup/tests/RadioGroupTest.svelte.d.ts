import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RadioGroupTestProps = typeof __propDef.props;
export type RadioGroupTestEvents = typeof __propDef.events;
export type RadioGroupTestSlots = typeof __propDef.slots;
export default class RadioGroupTest extends SvelteComponent<RadioGroupTestProps, RadioGroupTestEvents, RadioGroupTestSlots> {
}
export {};
