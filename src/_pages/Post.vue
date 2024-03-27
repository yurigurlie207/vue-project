<script setup>
import { PortableText } from '@portabletext/vue'
import { useBlogStore } from '../stores/blog';
import { h } from "vue";
import { urlFor } from '../../sanity.js'

// const { slug } = useRoute().params;

const store = useBlogStore();

// const postIDs = store.getPostIDs;
const body = store.getArticles;
const title = store.getTitles;
const published = store.getPublishedDates;
const author = store.getAuthors

const myPortableTextComponents = {
  block: {
    normal: ({ value }, { slots }) => h("p", { class: "font-thin text-sm pt-5" }, slots.default?.()),
  },
  types: {
    image: ({ value }) => h('img', { src: urlFor(value) }),
  },
   marks: {link: ({ value }, {slots}) => h('a', { class: "text-primary hover:text-secondary" }, slots.default?.() )}
};

</script>

 <template>
    <main class="blog-content">
      <p><span class="text-sm" >PUBLISHED: </span ><span class="font-thin text-sm">{{ published[$route.params.id] }}</span></p>
    
      <h2 class="text-primary">{{ title[$route.params.id-1] }}</h2>
      <p class="pb-10">{{ author[$route.params.id-1] }}</p>
     <PortableText :value='body[$route.params.id-1]' :components='myPortableTextComponents' />
   
    </main>
</template>

