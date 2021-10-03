<template>
  <!-- <q-page class="flex flex-center"> -->
  <div class="q-ma-md">
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-6 col-md-3 q-pa-sm"
      v-for="(product, index) in products"
      :key="product.id">

      <card
        :product="product"
        :index="index"
      />

      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[35, 35]">
      <q-btn fab icon="add" color="primary" @click="addProduct = true" />
    </q-page-sticky>

  <q-dialog v-model="addProduct">
    <add-product
    @close="addProduct = false"
    />
  </q-dialog>

  </div>
  <!-- </q-page> -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import card from '../components/card.vue'
import addProduct from '../components/addProduct.vue'

export default defineComponent({
  components: { card, addProduct },
  name: 'PageIndex',
  setup () {
    return {
      addProduct: ref(false)
    }
  },
  computed: {
    products () {
      return this.$store.getters['products/allProducts']
    }
  }
})
</script>
