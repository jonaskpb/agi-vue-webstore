<template>
  <v-container fluid grid-list-md>    
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2><div><h1>Kategorie: {{$route.params.name}}</h1></div></v-flex>
      <Item v-for="it in items" :item="it" :key="it._id"></Item> 
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Item from "./Item/Item.vue"

export default {
  computed: mapGetters({
    items: 'allCategoryProducts'
  }),    
  created () {
    this.$store.dispatch('getAllCategoryProducts', this.$route.params.name)
  },
  components: {
    Item
  }
}
</script>

<style>

</style>
