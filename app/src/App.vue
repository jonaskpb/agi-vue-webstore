<template>
  <v-app>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      clipped
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.dest"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app style="z-index: 90;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/cart">
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'home',
          title: 'Hervorgehoben',
          dest: '/'
        },
        {
          icon: 'view_list',
          title: 'Kategorien',
          dest: '/categories'
        },
      ],
      title: 'Material Shop'
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  },
  name: 'App'
}
</script>
