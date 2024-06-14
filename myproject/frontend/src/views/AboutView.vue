<template>
  <PageTitle></PageTitle>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default{
  //components: {PageTitle,}
  data(){       return {  form:{title:''},  file: ''      }     },
    methods : {
    submitForm(){
              let formData = new FormData();
              formData.append('file', this.file);
              formData.append('title', this.board.title);
              this.axios.post('http://localhost:8000/api/board',  formData,
                  { headers: { 'Content-Type': 'multipart/form-data' }   }
              ).then((data) =>console.log(data.data))
        },    
        onChangeFileUpload(){
          this.file = this.$refs.file.files[0];
        }
}
}
</script>