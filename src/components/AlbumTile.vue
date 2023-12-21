<template>
    <h3 class="mb-3">{{ album.collectionName }}</h3>
    <img :src="album.artworkUrl100" alt="{{ album.collectionName }}" />
    <h5>$<span>{{ album.collectionPrice }}</span></h5>
</template>

<script lang="ts">

import { defineComponent, type PropType } from 'vue';
import type { Results } from '../types/ItunesTypes.interface';

export default defineComponent({
    props: {
        album: {
            type: Object as PropType<Results>,
            required: true,
        }
    },
    setup() {
        return {};
    }
})

</script>


<style scoped>
h3, h5 span {
    font-weight: bold;
    line-height: 120%;
}
h3 {text-shadow: -1px 1px #f00;}

</style>