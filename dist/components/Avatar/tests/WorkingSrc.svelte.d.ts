import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkingSrcProps = typeof __propDef.props;
export type WorkingSrcEvents = typeof __propDef.events;
export type WorkingSrcSlots = typeof __propDef.slots;
export default class WorkingSrc extends SvelteComponent<WorkingSrcProps, WorkingSrcEvents, WorkingSrcSlots> {
}
export {};
