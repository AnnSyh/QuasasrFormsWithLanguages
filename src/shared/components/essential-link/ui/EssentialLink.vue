<template>
  <q-item
    clickable
    tag="a"
    :href="link"
	:class="{ 'active-link': isActive }" 
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}>(), {
  caption: '',
  link: '#',
  icon: ''
});

const isActive = computed(() => {
  if (props.link === '#') return false;
  return window.location.pathname === props.link;
});
</script>

<style scoped>
.active-link {
  background: rgba(25, 118, 210, 0.1);
  color: var(--q-primary);
  border-left: 3px solid var(--q-primary);
}
</style>