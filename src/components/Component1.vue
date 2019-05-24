<template>
    <div id="component1">
        item_id <input type=number v-model="product.item_id">
        product_name <input type=text v-model="product.product_name">
        price <input type=number v-model="product.price">
        category<input type=text v-model="product.category">

        <button v-on:click="callMethod()">{{value}}</button>
    </div>
</template>
<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    props:['value'],
    data(){
        return {
            product:{item_id:'',
            product_name:"",
            price:'',
            category : ""
            }
        }
    },
    methods: {
        ...mapActions([
            'post',
            'put',

        ]),
        callMethod(){
            if(this.value=='post')
                this.post(this.product);
            else
                this.put(this.product);
            
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
