<script setup>
import { useBlogStore } from '../stores/blog';
import { urlFor } from '../../sanity.js'
import ArticleCard from '/src/_components/ArticleCard.vue';

const store = useBlogStore();
store.fetchData();

const postIDs = store.getPostIDs;
const titles = store.getTitles;
const images = store.getImages;

const imageUrls =[];
for (let i = 0; i < images.length; i++) {
  imageUrls.push(urlFor(images[i]));
}

</script>

<template>
    <main class="blog-content">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(value,key) in postIDs" :key="key">
            <a :href="'/blog/' + value.toString()"><ArticleCard :title="titles[key]" :image="imageUrls[key]" /></a>
        </div>
      </div>
  
    </main>
</template>


