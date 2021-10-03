<template>
  <div class="q-ma-md">
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-6 col-md-3 q-pa-sm"
      v-for="(meteo, index ) in meteos" :key="meteo.id">
      <card-about
      :id="meteo.id"
      :name="meteo.name"
      :year="meteo.year"
      color="secondary"
      :pantone_value="meteo.pantone_value"
      :index="index"
      />
      </div>
    </div>
  </div>
</template>

<script>
import cardAbout from '../components/cardAbout.vue'
// import { mapActions } from 'vuex'

export default {
  components: {
    cardAbout
  },
  computed: {
    meteos () {
      return this.$store.getters['abouts/meteos']
    }
  },
  mounted () {
    // this.getMeteos()
    this.$store.dispatch('abouts/getMeteos')
  },
  methods: {
    // ...mapActions('about', ['getMeteos'])
  }
}
</script>

<style>

</style>
