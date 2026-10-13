import { onBeforeUnmount, ref, watch, type Ref } from 'vue'

export function useDebouncedValue<T>(source: Ref<T>, delayMs = 250) {
  const value = ref(source.value) as Ref<T>
  let timer: ReturnType<typeof setTimeout> | undefined
  watch(source, (next) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => { value.value = next }, delayMs)
  })
  onBeforeUnmount(() => { if (timer) clearTimeout(timer) })
  return value
}
