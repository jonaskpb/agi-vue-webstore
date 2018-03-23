<template>
  <v-container>
    <v-snackbar :timeout="6000" color="success" :top="true" :value="checkoutSuccess">
      Waren wurden bestellt.          
    </v-snackbar>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Dein Einkaufswagen</h2>
        <br>
        <p v-show="!products.length"><i>Hier ist noch nichts. Füge einfach ein paar Produkte hinzu :)</i></p>
        <v-alert outline color="error" icon="warning" :value="checkoutStatus === 'failed'">Es ist ein Fehler aufgetreten, bitte versuche es erneut.</v-alert>        
        <br>
        <v-list two-line v-show="!!products.length">
          <template v-for="(item, index) in products">
            <v-list-tile
              avatar
              ripple
              :key="item.id"
            >
              <v-list-tile-avatar>
                <img :src="item.imgUrl">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>Menge: {{ item.quantity }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.price }} EUR</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider :key="index"></v-divider>
          </template>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Summe:</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ Math.round(total * 100) / 100 }} EUR</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-btn v-show="!!products.length" block color="secondary" dark @click="checkout(products)">Jetzt bestellen</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      checkoutSuccess: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products);
      this.checkoutSuccess = true;
    }
  }
}
</script>