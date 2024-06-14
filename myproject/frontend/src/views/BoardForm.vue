<template>
    <div>게시판</div>
    <div class = "row">
       
        <select v-model="pageUnit" @change="goPage(1)">
                <option>2</option>
                <option>5</option>
                <option>10</option>
        </select>
    
        <table v-for = "B in board">
        <tr>
            <td>{{ B.no }}</td>
            <td>{{ B.title }}</td>
            <td>{{ B.writer }}</td>
            <td>{{ B.content }}</td>
            <td>{{ B.filename }}</td>
            <td>{{ B.uploadfile }}</td>
            <button @click = "delHandler">삭제</button>
        </tr>
    </table>
        <PagingComponent v-bind="page" @go-page="goPage"/>
        <button @click = "addHandler">등록</button>
        <button @click = "modifyHandler">수정</button>
    </div>
</template>
<script>
import PageMixin from '../mixin.js';
import axios from 'axios';
import PagingComponent from '@/components/PagingComponent.vue';
    export default{
        mixins : [PageMixin],
        components : {PagingComponent},
        data(){
            return{
                page : {},
                pageUnit : 5,
                board : []
            }
        },
        created(){
            this.goPage(1)
        },
        methods : {
            async goPage(page){
            let pageUnit = this.pageUnit;
            let result = await axios.get(`/api/board?pageUnit=${pageUnit}&page=${page}`)
            this.board = result.data.list
            this.page = this.pageCalc(page, result.data.count,5,pageUnit)
        },
        }
    }
</script>
<style>
   
</style>