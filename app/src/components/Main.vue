<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>        
        <Item v-for="it in products" :item="it" :key="it._id"></Item> 
    </v-layout>
  </v-container>
</template>

<script>
import Item from "./Item/Item.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Item
    },
    computed: mapGetters({
        products: 'highlightedProducts'
    }),    
    created () {
        this.$store.dispatch('getHighlightedProducts')
    }
}
</script>