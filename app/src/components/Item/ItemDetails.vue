<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" xs12 sm8 offset-sm2>
      <v-btn fab dark small absolute top right color="teal" slot="activator"><v-icon dark>info</v-icon></v-btn>
      <v-card>
        <v-card-media
            :src="item.imgUrl"
            height="400px"
            contain
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1 class="headline mb-0">{{item.name}}</h1>
            <div class="grey--text">{{item.shortDesc}}</div>
          </div>
        </v-card-title>
        <v-slide-y-transition>
            <v-card-actions>            
                <v-spacer></v-spacer>
                <h2 class="grey--text">{{item.price}} EUR</h2>
                <v-btn flat @click="addProductToCart(item)"><v-icon>add_shopping_cart</v-icon></v-btn>
            </v-card-actions>
        </v-slide-y-transition>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dialog: false
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: mapActions([
    'addProductToCart'
  ])
};
</script>