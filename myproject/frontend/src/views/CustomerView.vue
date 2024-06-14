<template>
    <div>고객관리</div>
    <div class = "row">
        <div class = "col md-12 col-lg-7 border">
            <select v-model="pageUnit" @change="goPage(1)">
                <option>2</option>
                <option>5</option>
                <option>10</option>
            </select>
            <table class="table table-striped table-hober" v-for = "customer in customers" >
                <tr @click = "updateFormHandler(customer)">
                <td>{{customer.id}}</td>
                <td>{{customer.name}}</td>  
                <td>{{customer.email}}</td>  
                <td>{{customer.phone}}</td>  
                <td>{{customer.address}}</td>
                 </tr>   
            </table>
            <PagingComponent v-bind="page" @go-page="goPage"/>
        </div>
        <div class = "col md-12 col-lg-5 border">
            <CustomerInsertView :customerdata = "customer" ref="customerForm"></CustomerInsertView>
        </div>
    </div>
</template>
<script>
import PageMixin from '../mixin.js';
import axios from 'axios';
import PagingComponent from '@/components/PagingComponent.vue';
import CustomerInsertView from './CustomerInsertView.vue';
    export default {
        props : {
            customerdata: {type: Object}
        },
        mixins : [PageMixin],
        components : {PagingComponent, CustomerInsertView},
     data(){return{
        customers : [],
        page : {},
        pageUnit : 10,
        customerdata : {},
        customer : {}
     }},
     created(){
       this.goPage(1)
     },
     methods : {
        async goPage(page){
            let pageUnit = this.pageUnit;
            let result = await axios.get(`/api/customer?pageUnit=${pageUnit}&page=${page}`)
            this.customers = result.data.list
            this.page = this.pageCalc(page, result.data.count,5,pageUnit)
        },
        updateFormHandler(customer){
            //this.customer = customer;     
            this.$refs.customerForm.customer = {...customer};
        },
     }
     }
</script>
<style>
    table td{
        display: inline-block;
        width: 15%;
    }
    table th{
        display: inline-block;
        width: 20%;
    }
</style>