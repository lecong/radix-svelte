import { SvelteComponent } from "svelte";
import { type HoverCardRootProps } from '../../..';
declare const __propDef: {
    props: {
        open?: HoverCardRootProps['open'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HoverCardTestProps = typeof __propDef.props;
export type HoverCardTestEvents = typeof __propDef.events;
export type HoverCardTestSlots = typeof __propDef.slots;
export default class HoverCardTest extends SvelteComponent<HoverCardTestProps, HoverCardTestEvents, HoverCardTestSlots> {
}
export {};
