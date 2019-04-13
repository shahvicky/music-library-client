<template>
<div class="itemSection" v-if="track.mbid">
    <div class="row">
        <div class="col-sm-8">
            {{track.name}}
            {{track.artist}}
            {{track.url}}
        </div>
        <div class="col-sm-2 text-right">
            <button class="btn btn-primary" v-on:click="viewTrackDetails()">View</button>
        </div>
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
        // this.$state.store.
      },
      viewTrackDetails: function() {

      }
    },
}
</script>
<style>

.itemSection {
    padding: 20px 0;
    border-bottom: 1px solid #cfcfcf;
}
</style>
