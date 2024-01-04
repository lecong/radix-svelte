import { SvelteComponent } from "svelte";
import { type SwitchRootProps } from '..';
declare const __propDef: {
    props: {
        checked?: SwitchRootProps['checked'];
        disabled?: SwitchRootProps['disabled'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SwitchTestProps = typeof __propDef.props;
export type SwitchTestEvents = typeof __propDef.events;
export type SwitchTestSlots = typeof __propDef.slots;
export default class SwitchTest extends SvelteComponent<SwitchTestProps, SwitchTestEvents, SwitchTestSlots> {
}
export {};
