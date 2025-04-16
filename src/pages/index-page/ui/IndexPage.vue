<template>
  <q-page class="row items-center justify-evenly">
	<div>
		<h1>{{ t('common.welcome') }}</h1>
	</div>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo, Meta } from '#components/models';
import ExampleComponent from '#components/example-component';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);

const meta = ref<Meta>({
  totalCount: 1200
});


</script>
