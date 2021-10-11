<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4 q-px-lg q-py-lg">
            <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

                <q-list class="q-py-sm">
                    <q-item clickable class="row no-wrap items-center">
                        <q-item-section avatar>
                            <q-icon color="primary" name="restaurant_menu" />
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>{{$t('detail.nombre')}}</q-item-label>
                            <q-item-label caption>{{name}}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable>
                    <q-item-section avatar>
                        <q-icon color="red" name="event" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('detail.date')}}</q-item-label>
                        <q-item-label caption>{{date}}</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable>
                    <q-item-section avatar>
                        <q-icon color="amber" name="shopping_cart" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('detail.nombre')}}</q-item-label>
                        <q-item-label caption>{{number}}</q-item-label>
                        <!-- <q-item-label caption>{{$route.query.number}}</q-item-label> -->
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-card>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Platform } from 'quasar'
export default {
  setup () {
    const name = ref(null)
    const date = ref(null)
    const number = ref(0)
    return {
      name,
      date,
      number
    }
  },
  mounted () {
    this.getDate()
  },
  methods: {
    getDate () {
      if (Platform.is.electron) {
        window.ipcRenderer.on('getData', (event, name, date, number) => {
          this.name = name
          this.date = date
          this.number = number
        })
      } else {
        this.name = this.$route.query.name
        this.date = this.$route.query.date
        this.number = this.$route.query.number
      }
    }
  }
}
</script>

<style>

</style>
