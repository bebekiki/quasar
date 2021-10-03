<template>

    <q-card style="width: 400px">
        <q-card-section class="row">
            <div class="text-h6">Add product</div>
            <q-space/>
            <q-btn flat color="dark" icon="close" v-close-popup />
        </q-card-section>

        <form @submit.prevent="submitProduct">
            <q-card-section>
                <div class="div q-mb-sm">
                    <q-input outlined
                    v-model="product.title"
                    label="Your title"
                    ref="inputTitle"
                    lazy-rules
                    :rules="[val => !!val || 'Field is required']"
                    autofocus
                    @input="$emit('input', $event)" />
                </div>
                <div class="div q-mb-sm">
                    <q-input outlined type="number"
                    v-model="product.price"
                    label="Your price"
                    ref="inputPrice"
                    lazy-rules
                    :rules="[val => (val !== null && val !== '') || 'Please type your price']"
                    />
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat type="submit" label="ADD" color="primary"/>
            </q-card-actions>
        </form>
    </q-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'addProduct',
  setup () {
    const product = ref({
      id: '',
      title: '',
      price: ''
    })
    const inputTitle = ref(null)
    const inputPrice = ref(null)
    const submitProduct = function () {
      if (this.$refs.inputTitle.validate() && this.$refs.inputPrice.validate()) {
        this.product.price = '$' + this.product.price
        this.$store.dispatch('products/addProduct', this.product)
        this.$emit('close')
      }
    }
    return {
      product,
      inputTitle,
      inputPrice,
      submitProduct
    }
  }
  // methods: {
  //   submitProduct () {
  //     if (this.$refs.inputTitle.validate() && this.$refs.inputPrice.validate()) {
  //       this.$store.dispatch('products/addProduct', this.product)
  //       this.$emit('close')
  //     }
  //   }
  // }
})
</script>

<style>

</style>
