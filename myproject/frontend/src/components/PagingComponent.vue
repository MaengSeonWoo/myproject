<template>
    <nav aria-label="Page navigation example" id="paging">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item" v-for="page in pageArr">
        <a class="page-link" href="#" @click.prevent="goPage(page)">{{ page }}</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</template>
<script>
    export default {
        props : ["currentPage",
                "firstPage",
                "lastPage",
                "startIdx",
                "endIdx"
            ],            
        data(){
            return{}
        },
        computed:{
            pageArr(){
                const pages = []
                for(let i=this.startIdx;i<=this.endIdx;i++){
                    pages.push(i);
                }
                return pages;
            }
        },
        created(){},
        methods : {
            goPage(page){
                console.log(`${page}페이지`);
                this.$emit('go-page', page);
            }
        }
    }
    
</script>
<style>
    #paging{
        text-align: center;
        display: inline-block;
    }
</style>