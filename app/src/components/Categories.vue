<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12 sm12>
                <v-list>
                    <v-list-tile v-for="item in categories" v-bind:key="item._id" :to="'categories/' + item.name">            
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                        </v-list-tile-content>                           
                    </v-list-tile>                        
                </v-list>
            </v-flex>
        </v-layout>            
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    computed: mapGetters({
        categories: 'allCategories'
    }),    
    created () {
        this.$store.dispatch('getAllCategories')
    }
}
</script>

<style>

</style>
