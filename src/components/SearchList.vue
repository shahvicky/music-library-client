<template>
<div class="itemSection" v-if="track.mbid">
    <div class="row">
        <div class="col-sm-2">
          {{track.name}}
        </div>
        <div class="col-sm-2">
          {{track.artist}}
        </div>
        <div class="col-sm-6">
          {{track.url | colEntryLengthRestrict}}
        </div>
        <!-- <div class="col-sm-2 text-right">
            <button class="btn btn-primary" v-on:click="viewTrackDetails()">View</button>
        </div> -->
        <div class="col-sm-2 text-right">
            <button class="btn btn-secondary" v-on:click="addTrackToLibrary()">Add To Library</button>
        </div> 
    </div>
</div>

</template>
<script>
  /* ============
   * Single Item in list component
   * ============
   *
   */
export default {
  props: ['track'],
  data() {
    return {
      
    }
  },

    methods: {
      addTrackToLibrary: function() {
        this.$store.dispatch('addmusic/addToAcc', this.track.mbid);
      },
      viewTrackDetails: function() {
        
      }
    },
    filters: {
      colEntryLengthRestrict: function(input) {
        let length = 60, ending = '..';
        if (input.length > length) {
          return input.substring(0, length - ending.length) + ending;
        } else {
          return input;
        }
      }
    }
}
</script>
<style>

.itemSection {
    padding: 20px 0;
    border-bottom: 1px solid #cfcfcf;
}
</style>
