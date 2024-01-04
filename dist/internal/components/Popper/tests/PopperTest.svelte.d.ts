import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PopperTestProps = typeof __propDef.props;
export type PopperTestEvents = typeof __propDef.events;
export type PopperTestSlots = typeof __propDef.slots;
export default class PopperTest extends SvelteComponent<PopperTestProps, PopperTestEvents, PopperTestSlots> {
}
export {};
