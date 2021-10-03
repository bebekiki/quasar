<template>
    <div>
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle2 text-left">
              {{product.title}}
          </div>
          <div class="absolute-bottom text-subtitle2 text-right">
              {{product.price}}
          </div>
        </q-img>
        <q-card-actions>
          <q-btn flat @click="edit()">
              <q-icon name="edit" />
          </q-btn>
          <q-space/>
          <q-btn flat  @click="deleteP(id, index)">
              <q-icon name="delete" />
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-dialog v-model="editProduct">
          <editProduct
          :value="product"
          :index="index"
          @input="$emit('input', $event.target.value)"
          @close="editProduct = false"
          />
      </q-dialog>

    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import editProduct from './editProduct.vue'

export default defineComponent({
  components: { editProduct },
  name: 'card',
  props: {
    product: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 1
    }
  },
  setup () {
    const editProduct = ref(false)
    const deleteP = function (id, index) {
      this.$store.dispatch('products/deleteProduct', { id: id, index: index })
    }
    const edit = function () {
      this.editProduct = true
    }
    return {
      deleteP,
      edit,
      editProduct
    }
  }
})
</script>

<style>

</style>
