<template>
  <v-layout>
    <v-card contextual-style="dark">
      <div slot="body">
        <b-input-group :size="'lg'">
          <b-form-input type="text" v-model="searchKey"></b-form-input>
          <b-input-group-append>
            <b-button size="lg" variant="success" @click="searchMusic()">Search</b-button>
          </b-input-group-append>
        </b-input-group>
        <div>
          <SearchList v-for="res in searchResults"
          :key="res.url"
          :track="res">
          </SearchList>
        </div>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
/* ============
 * Add Music Index Page
 * ============
 *
 * Page where the user can view the add music information.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';
import SearchList from '@/components/SearchList.vue';
export default {
  /**
   * The name of the page.
   */
  name: 'AddMusicIndex',

  data() {
    return {
      searchKey: '',
    }
  },

  methods: {
    searchMusic: function() {
      if(this.searchKey.length > 0) {
        this.$store.dispatch('addmusic/searchMusic', this.searchKey);
      }
    }
  },

  computed: {
    searchResults: function() {
      return this.$store.state.addmusic.searchTrackResults;
    }
  },
  // watch: {
  //   'searchKey': function(oldKey, newKey) {
  //     console.log(newKey);
  //     if(newKey == '' || newKey.length == 0) {
        
  //     }
  //   }
  // },

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
    SearchList
  },
};
</script>
