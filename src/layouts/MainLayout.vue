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
          {{$t('app.title')}}
        </q-toolbar-title>
        <div class="q-gutter-md column" style="max-width: 300px">
          <q-select filled color="warning" label-color="white"
          :model-value="localeLabel($i18n.locale)"
          :options="options"
          :label="$t('app.langue')"
          @update:model-value="changeLanguage"
          style="min-width: 130px"/>
        </div>
        <div class="q-mx-lg ">Quasar v{{ $q.version }}</div>
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
          {{$t('title_toggle')}}
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLink"
          :key="link.title"
          v-bind="link"
          :to="link.link"
          exact
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const model = ref(null)
    const i18n = useI18n()
    const linksList = [
      {
        title: 'home.title',
        caption: 'home.desc_home',
        icon: 'home',
        link: '/'
      },
      {
        title: 'about.title',
        caption: 'about.desc_about',
        icon: 'person',
        link: 'about'
      }
    ]

    const changeLanguage = ({ value }) => {
      i18n.locale.value = value
    }
    const options = [
      { value: 'fr', label: 'Français' },
      { value: 'en-US', label: 'English' }
    ]
    const localeLabel = (value) => options.find(option => option.value === value).label

    return {
      essentialLink: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      model,
      options,
      localeLabel,
      changeLanguage
    }
  }
})
</script>
