<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4 q-px-lg q-py-lg">
            <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

                <q-list class="q-py-sm">
                    <q-item clickable>
                    <q-item-section avatar>
                        <q-icon color="primary" name="restaurant_menu" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('detail.nombre')}}</q-item-label>
                        <q-item-label caption>{{$route.query.name}}</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable>
                    <q-item-section avatar>
                        <q-icon color="red" name="event" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('detail.date')}}</q-item-label>
                        <q-item-label caption>{{$route.query.date}}</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item clickable>
                    <q-item-section avatar>
                        <q-icon color="amber" name="shopping_cart" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('detail.nombre')}}</q-item-label>
                        <q-item-label caption>{{$route.query.number}}</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-card>
        </div>
    </div>
</template>

<script>
export default {
//   mounted () {
//     this.getData()
//   },
//   methods: {
//     getData () {
//       window.ipcRenderer.recieve('test', (args) => {
//         alert('tt')
//       })
//     }
//   }
}
</script>

<style>

</style>
