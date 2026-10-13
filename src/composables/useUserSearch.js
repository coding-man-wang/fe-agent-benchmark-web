import { ref, watch } from 'vue';
import { useDebouncedValue } from './useDebouncedValue';
import { useUsersStore } from '@/stores/users';
export function useUserSearch() {
    const store = useUsersStore();
    const input = ref(store.keyword);
    const debounced = useDebouncedValue(input, 250);
    watch(debounced, async (value) => {
        store.setKeyword(value);
        await store.fetchUsers();
    });
    return { input };
}
