<template>

    <q-card style="width: 400px">
        <q-card-section class="row">
            <div class="text-h6">Edit product</div>
            <q-space/>
            <q-btn flat color="dark" icon="close" v-close-popup />
        </q-card-section>

        <form @submit.prevent="editProduct">
            <q-card-section>
                <div class="div q-mb-sm">
                    <q-input outlined
                    v-model="newtitle"
                    label="Your title"
                    ref="inputTitle"
                    lazy-rules
                    :rules="[val => !!val || 'Field is required']"
                    autofocus />
                </div>
                <div class="div q-mb-sm">
                    <q-input outlined type="number"
                    v-model="newprice"
                    label="Your price"
                    ref="inputPrice"
                    lazy-rules
                    :rules="[val => (val !== null && val !== '') || 'Please type your price']"
                    />
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat type="submit" label="EDIt" color="primary"/>
            </q-card-actions>
        </form>
    </q-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'editProduct',
  props: {
    value: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup () {
    const newtitle = ref(null)
    const newprice = ref(null)
    const inputTitle = ref(null)
    const inputPrice = ref(null)
    const product = ref({
      id: '',
      title: '',
      price: ''
    })

    const editProduct = function () {
      if (this.$refs.inputTitle.validate() && this.$refs.inputPrice.validate()) {
        this.product.id = this.value.id
        this.product.title = this.newtitle
        this.product.price = '$' + this.newprice
        this.$store.dispatch('products/editProduct', { index: this.index, product: this.product })
        this.$emit('close')
      }
    }
    return {
      inputTitle,
      inputPrice,
      newtitle,
      newprice,
      editProduct,
      product
    }
  },
  mounted () {
    this.newtitle = this.value.title
    this.newprice = this.value.price.replace('$', '')
  }
})
</script>

<style>

</style>
