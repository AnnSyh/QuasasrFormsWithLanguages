<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>
			<q-btn-toggle
				v-model="locale"
				label="Quasar Language"
				class="my-custom-toggle"
				no-caps
				rounded
				unelevated
				toggle-color="primary"
				color="white"
				text-color="primary"
				:options="localeOptions"
			/>
			<q-btn
				flat
				round
				:icon="isDark ? 'light_mode' : 'dark_mode'"
				@click="toggleTheme"
			/>
		</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
			Меню
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from '#components/essential-link';
import { useQuasar } from 'quasar';

import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });

interface LocaleOption {
  value: string;
  label: string;
}


const localeOptions: LocaleOption[] = [
  { value: 'en-US', label: 'English' },
  { value: 'ru-RU', label: 'Russian' }
]

const linksList: EssentialLinkProps[] = [
{
    title: 'Главная страница',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Страница пользователя',
    icon: 'person',
    link: '/user-edit'
  },
  {
    title: 'Создать форму',
    icon: 'format_list_bulleted_add',
    link: '/create'
  },
  {
    title: 'Опросник',
    icon: 'quiz',
    link: '/question'
  },
  {
    title: 'FAQ',
    icon: 'help',
    link: '/faq'
  },
  {
    title: 'Swagger docs',
    icon: 'description',
    link: '/docs'
  }
];

const leftDrawerOpen = ref(false);

const $q = useQuasar();
const isDark = ref($q.dark.isActive);

const toggleTheme = () => {
      $q.dark.toggle();
      isDark.value = $q.dark.isActive;
    };

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
