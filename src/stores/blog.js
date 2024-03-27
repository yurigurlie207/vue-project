// stores/blog.js
import { defineStore } from 'pinia'
import {client} from '../../sanity.js'

const  query = `*[_type == "post"]{mainImage,_createdAt,author->{name},title,body}`;

export const useBlogStore = defineStore("posts", {
    state: () => ({
        posts: localStorage.getItem("posts"),
    }),
    getters: {
      getPostIDs(state){
        let postIDs=[];
        for (let [index,post] of Object.entries(state.posts)) {
            let id = parseInt(index) + 1;
            postIDs.push(id)
        }
        return postIDs;
        },
      getTitles(state){
            let titles=[];
            for (let [index,post] of Object.entries(state.posts)) {
                titles.push(post["title"])
            }
            return titles;
        },
        getPublishedDates(state){
            let dates=[];
            for (let [index,post] of Object.entries(state.posts)) {
                dates.push(post["_createdAt"])
            }
            return dates;
        },
        getAuthors(state){
            let names=[];
            for (let [index,post] of Object.entries(state.posts)) {
                let name = post["author"]["name"];
                names.push(name)
            }
            return names;
        },
        getArticles(state){
            let articles=[];
            for (let [index,post] of Object.entries(state.posts)) {
                articles.push(post["body"])
            }
            return articles;
        },
        getImages(state) { /* only main image for article card */
            let images=[];
            for (let [index,post] of Object.entries(state.posts)) {
                let ref = post["mainImage"]["asset"]["_ref"];
                // let temp = ref.split('');
                // ref = temp.slice(6).join('');
                images.push(ref)
            }
            return images;
        }

    },
    actions: {
        fetchData() {
            this.error = this.home = null;
            this.loading = true;
            client.fetch(query).then(
             (posts) => {
             this.loading = false;
             this.posts = posts;
             localStorage.setItem("posts", JSON.stringify(posts))
            //  console.log(this.posts);
             },
             (error) => {
              this.error = error;
             }
            )
        },
    },
    persist: true, 
    
})


  



  