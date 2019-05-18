<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>
      <v-btn
      depressed
      flat
      to="/"
      >toilet</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-btn>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      menuItems : [
        {
          icon: 'face', title: 'Sign up', link: '/signup'
        },
        {
          icon: 'lock_open', title: 'Sign in', link: '/signin'
        },
        // {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
        // {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
        {
          icon: 'person', title: 'Profile', link: '/profile'
        }
      ]
    }
  }
}
</script>
