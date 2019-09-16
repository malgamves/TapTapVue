<template>
    <div>
      <h2> Your user name: {{ uuid }}</h2>
      <h2> You are playing against </h2>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'GameInfo',
    data() {
        return { 
        }
    },
    
    computed: {
      ...mapGetters({
     uuid: 'getMyUuid',
      }),
    },
}
</script>

<style>

</style>