<template>
    <div>
        <h1>고객등록</h1>
        <div>
        name<input v-model = "customer.name">
        </div>
        <div>
        email<input v-model = "customer.email">
        </div>
        <div>
        phone<input v-model = "customer.phone">
        </div>
        <div>
        address<input v-model = "customer.address">
        </div>
        <button @click = "addHandler">등록</button>
        <button @click = "modifyHandler">수정</button>
        <button @click = "delHandler">삭제</button>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        props : {
            customerdata: {type: Object}
        },
     data(){return{
        customer : {}//{}{...this.customerdata}
     }},
    //  watch :{
    //     customerdata(newQuestion,oldQuestion){
    //         this.customer = {...newQuestion}
    //     }
    //  },
     created() {

     },
     methods : {
        async addHandler(){
        //    if(check){
                await axios.post("/api/customer", this.customer)
            .then(json => this.$emit("/api/customer"))
            .then(json => this.$router.go(this.$router.currentRoute))       
        //    }           
        },
        // check(){
        //     if(this.customer.name == ''){
        //         alert('이름입력')
        //         return false
        //     }else if(this.customer.email == ''){
        //         alert('이메일입력')
        //         return false
        //     }
        // }
        modifyHandler(){
            axios.put("/api/customer"+`${this.customer.id}`, this.customer)
            .then(json => this.$emit("/api/customer"))
        },
        delHandler(){
            axios.delete("/api/customer", this.customer)
            .then(json => this.$emit(''))
        },
     }
     }
</script>
<style>
</style>