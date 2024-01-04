import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToggleTestProps = typeof __propDef.props;
export type ToggleTestEvents = typeof __propDef.events;
export type ToggleTestSlots = typeof __propDef.slots;
export default class ToggleTest extends SvelteComponent<ToggleTestProps, ToggleTestEvents, ToggleTestSlots> {
}
export {};
