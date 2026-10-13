import { onBeforeUnmount, ref, watch } from 'vue';
export function useDebouncedValue(source, delayMs = 250) {
    const value = ref(source.value);
    let timer;
    watch(source, (next) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => { value.value = next; }, delayMs);
    });
    onBeforeUnmount(() => { if (timer)
        clearTimeout(timer); });
    return value;
}
