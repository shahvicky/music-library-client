<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Your Music Library
      </span>
      <div slot="body">
        <b-row>
          <b-col>
              <b-form-group horizontal label="Filter" class="mb-0">
                  <b-input-group>
                      <b-form-input v-model="filterTracks" placeholder="Type to Search" />
                      <b-input-group-append>
                      <b-btn :disabled="!filterTracks" @click="filterTracks = ''">Clear</b-btn>
                      </b-input-group-append>
                  </b-input-group>
              </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPageTracks" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-table hover :fixed="true"
          :filter="filterTracks"
          :fields="trackFields"
          :items="tracks"
          :per-page="perPageTracks"
          :current-page="currentPageTrack"
          :striped="true"
          @filtered="onFilteredTracks">
          <template slot="trkTrackIcon" scope="data">
              <img v-if="data.value" :src="data.value">
              <img v-else src="./../../assets/images/music.jpg">
          </template>
        </b-table>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="tracks.length" :per-page="perPageTracks" v-model="currentPageTrack" class="my-0" />
        </b-col>
      </div>
      <div slot="footer">
        
      </div>
    </v-card>
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',
  data() {
    return {
      filterTracks: null,
      perPageTracks: 5,
      pageOptions: [5, 10, 15, 20, 25],
      currentPageTrack: 1,
      totalRowsTracks: 0,
      trackFields: [
        {
          key: 'trkTrackIcon',
          label: '',
        },
        {
          key: 'trkTrackName',
          label: 'Track Name',
          sortable: true
        },
        {
          key: 'trkTrackArtist',
          label: 'Artist',
          sortable: true
        },
        {
          key: 'trkTrackAlbum',
          label: 'Album',
          sortable: true
        },
        {
          key: 'trkTrackUrl',
          label: '',
        }
      ],
    }
  },

  methods: {
    onFilteredTracks: function(filteredItems) {
      this.totalRowsTracks = filteredItems.length;
      this.currentPageTrack = 1;
    }
  },

  mounted() {
    this.$store.dispatch('dashboard/getTracks');
  },
  computed: {
    tracks: function() {
      let tracks = this.$store.state.dashboard.tracks;
      this.totalRowsTracks = tracks.length;
      return tracks;
    }
  },
  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
  },
};
</script>
