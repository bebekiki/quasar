<template>
 <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <q-btn
          fab
          :color="color"
          icon="local_grocery_store"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          @click="count = count + 1"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{name}}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="shopping_basket" />
            {{ count }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-caption text-grey">
          {{pantone_value}}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-between">
        <q-btn flat icon="event">
        <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
          <q-date v-model="proxyDate">
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Cancel" color="primary" flat v-close-popup />
              <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
            </div>
          </q-date>
        </q-popup-proxy>
    </q-btn>
        <!-- <q-btn flat round icon="event" /> -->
        <div>
          {{date}}
        </div>
        <q-btn flat color="primary" @click="newWindow">
          {{$t('about.reserver')}}
        </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
import { ref } from 'vue'
import { Platform } from 'quasar'

export default {
  name: 'cardAbout',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    pantone_value: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      default: 1
    }
  },
  setup () {
    const count = ref(0)
    const date = ref('2021/09/21')
    const proxyDate = ref('2021/09/21')
    return {
      count,
      date,
      proxyDate,
      updateProxy () {
        proxyDate.value = date.value
      },
      save () {
        date.value = proxyDate.value
      }
    }
  },
  mounted () {
    // window.api.receive('test', (event, args) => {
    //   console.log('renderer')
    // })
  },
  methods: {
    newWindow () {
      if (Platform.is.electron) {
        window.ipcRenderer.send('bouton', this.name, this.date, this.count)
      } else {
        this.$router.push({
          path: '/book',
          query: { name: this.name, date: this.date, number: this.count }
        })
      }
      // if (window.ipcRenderer.receive) {
      //   window.ipcRenderer.receive('test', (event, name, date, number) => {
      //     this.$router.push({
      //       path: '/book',
      //       query: { name: name, date: date, number: number }
      //     })
      //   })
      // }
    }
  }
}
</script>

<style>

</style>
