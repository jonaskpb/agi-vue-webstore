<template>
<v-flex xs12 sm8 offset-sm2>
  <v-card>         
    <v-card-media
        :src="item.imgUrl"
        height="200px"
        contain
    >       
    </v-card-media>
    <v-card-text style="position: relative">
      <h1 class="headline mb-0">{{item.name}}</h1>
      <ItemDetails :item="item"></ItemDetails>
    </v-card-text>
    <v-slide-y-transition>
        <v-card-actions>                        
            <v-spacer></v-spacer>
            <h2 class="grey--text">{{item.price}} EUR</h2>
            <v-btn flat @click="addProductToCart(item)"><v-icon>add_shopping_cart</v-icon></v-btn>
        </v-card-actions>
    </v-slide-y-transition>
  </v-card>
</v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ItemDetails from "./ItemDetails.vue"

export default {
  data () {
    return {

    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ItemDetails
  },
  methods: mapActions([
    'addProductToCart'
  ])
};
</script>
