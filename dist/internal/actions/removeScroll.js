// Modified from @zag-js/remove-scroll v0.10.2 (2023-06-10)
// Source: https://github.com/chakra-ui/zag
// https://github.com/chakra-ui/zag/blob/main/packages/utilities/remove-scroll/src/index.ts
import { isIos } from '../helpers';
/**
 * A no operation function (does nothing)
 */
function noop() {
    //
}
const LOCK_CLASSNAME = 'data-radix-scroll-lock';
function assignStyle(el, style) {
    if (!el)
        return;
    const previousStyle = el.style.cssText;
    Object.assign(el.style, style);
    return () => {
        el.style.cssText = previousStyle;
    };
}
function setCSSProperty(el, property, value) {
    if (!el)
        return;
    const previousValue = el.style.getPropertyValue(property);
    el.style.setProperty(property, value);
    return () => {
        if (previousValue) {
            el.style.setProperty(property, previousValue);
        }
        else {
            el.style.removeProperty(property);
        }
    };
}
function getPaddingProperty(documentElement) {
    // RTL <body> scrollbar
    const documentLeft = documentElement.getBoundingClientRect().left;
    const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
    return scrollbarX ? 'paddingLeft' : 'paddingRight';
}
export function removeScroll(_node, { disable } = {}) {
    const win = document.defaultView ?? window;
    const { documentElement, body } = document;
    let cleanups = [];
    const init = () => {
        const locked = body.hasAttribute(LOCK_CLASSNAME);
        if (locked)
            return noop;
        body.setAttribute(LOCK_CLASSNAME, '');
        const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
        const setScrollbarWidthProperty = () => setCSSProperty(documentElement, '--scrollbar-width', `${scrollbarWidth}px`);
        const paddingProperty = getPaddingProperty(documentElement);
        const setStyle = () => assignStyle(body, {
            overflow: 'hidden',
            [paddingProperty]: `${scrollbarWidth}px`,
        });
        // Only iOS doesn't respect `overflow: hidden` on document.body
        const setIOSStyle = () => {
            const { scrollX, scrollY, visualViewport } = win;
            // iOS 12 does not support `visuaViewport`.
            const offsetLeft = visualViewport?.offsetLeft ?? 0;
            const offsetTop = visualViewport?.offsetTop ?? 0;
            const restoreStyle = assignStyle(body, {
                position: 'fixed',
                overflow: 'hidden',
                top: `${-(scrollY - Math.floor(offsetTop))}px`,
                left: `${-(scrollX - Math.floor(offsetLeft))}px`,
                right: '0',
                [paddingProperty]: `${scrollbarWidth}px`,
            });
            return () => {
                restoreStyle?.();
                win.scrollTo(scrollX, scrollY);
            };
        };
        cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
    };
    const unsub = () => {
        cleanups.forEach((fn) => fn?.());
        body.removeAttribute(LOCK_CLASSNAME);
    };
    if (!disable)
        init();
    return {
        update({ disable } = {}) {
            unsub();
            if (!disable) {
                init();
            }
        },
        destroy() {
            unsub();
        },
    };
}
