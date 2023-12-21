<script lang="ts">
import { itunesSearch } from '../services/iTuynesAPI';
import type { ItunesTypes } from "../types/ItunesTypes.interface";
import { defineComponent, reactive, ref, toRefs } from 'vue';
import AlbumTile from './AlbumTile.vue';


export default defineComponent({
    mane: "SearchForm",
    components: {
        AlbumTile
    },

// using Vue3:  Composition API
setup() {
    let albumns = reactive<{data: ItunesTypes}>({ data: {} })
    let searchText = ref("")
    const searchItunes = async (search: string): Promise<void> => {
        const value = await itunesSearch(search)
        albumns.data = value;
        console.log("data: ", albumns)
    }
    return { searchItunes, ...toRefs(albumns), searchText }
},

// using: Options API 
 /*   data: () => {
        return {
            data: {} as ItunesTypes,
            searchText: "",
        };
    },
    methods: {
        async searchItunes(search: string): Promise<void> {
            const value = await itunesSearch(search);
            this.data = value;
            console.log("data: ", value)
        }
    }     */



    computed: {


        // see: https://pinia.vuejs.org/core-concepts/state.html
        // ...mapWritableState(useUserStore, ['searchText']),
    }

})
</script>



<template>
    <form @submit.prevent="searchItunes(searchText)" class="mt-12">
        <div class="form-group mb-5">
            <input type="text" v-model="searchText" class="form-input mr-4" />
            <button @click="searchItunes(searchText)" class="py-2 px-7 bg-black text-white">Search</button>    
        </div>
        <div v-if="data.results" class="results">
            <div v-for="album in data.results" :key="album.artistId" class="album" v-bind:style="{backgroundImage: 'url(' + album.artworkUrl100 + ')'}">
                <AlbumTile :album="album"/>
            </div> 
        </div>
    </form>
</template>




<style scoped>
.results {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: #d7dce0;
}
.album {
    background-color: #240102;
    background-blend-mode: luminosity;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;

    padding: .7rem 1rem 0 1rem;
    box-shadow: 0 0 10px #240102;
    border-radius: 5px;
    color: #fff
}

@media (max-width: 1024px) {
    .results {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 599px) {
    .results {
        grid-template-columns: 1fr;
    }
}
</style>