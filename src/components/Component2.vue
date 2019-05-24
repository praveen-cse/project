<template>
<div id="component2">
        id <input type=number v-model="id">
        <button v-on:click="callmethod()">{{value}}</button>
        <p>Product_name : {{x.product_name}}</p>
        <p>Category : {{x.category}}</p></span>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    props: ['value'],
    data(){
        return {id:'',x : {
            item_id:'',
            product_name : '',
            price :'',
            category : ''}
        }
    },
    methods: {
        ...mapGetters([
            'getOne',
        ]),
        ...mapActions([
            'deleteele',
            'getElemById'
        ]),
        callmethod(){
            if(this.value == "delete")
                this.deleteele(this.id);
            else{
                this.getElemById(this.id);
                this.x= this.getOne();
            }
        }
    }
}
</script>

<style scoped>
#product-list{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list ul{
    padding: 0;
}
#product-list li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
