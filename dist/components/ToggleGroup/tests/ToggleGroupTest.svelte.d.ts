import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToggleGroupTestProps = typeof __propDef.props;
export type ToggleGroupTestEvents = typeof __propDef.events;
export type ToggleGroupTestSlots = typeof __propDef.slots;
export default class ToggleGroupTest extends SvelteComponent<ToggleGroupTestProps, ToggleGroupTestEvents, ToggleGroupTestSlots> {
}
export {};
