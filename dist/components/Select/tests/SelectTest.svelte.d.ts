import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SelectTestProps = typeof __propDef.props;
export type SelectTestEvents = typeof __propDef.events;
export type SelectTestSlots = typeof __propDef.slots;
export default class SelectTest extends SvelteComponent<SelectTestProps, SelectTestEvents, SelectTestSlots> {
}
export {};
