<template>
    <div id="product-list">
        <h2>Cart</h2>
        <ul>
            <li v-for="product in getall">
                <span class="item_id">  {{ product.item_id }}</span>
                <span class="product_name">  {{ product.product_name }}</span>
                <span class="price">  {{ product.price }}</span>
                <span class="Category"> {{product.category}}</span>
            </li>
        </ul>
        <component1 value="post" /><br/><br/>
        <component1 value="put" /><br/><br/>
        <component2 value="getById"/><br/><br/>
        
        <component2 value="delete"/>
    </div>
</template>

<script>
import component1 from './Component1.vue'
import component2 from './Component2.vue'
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'getall'
        ])
    },
    components: {
        'component1':component1,
        'component2':component2
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
