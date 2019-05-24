import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {item_id : 1,product_name: 'Samsung Galaxy J6 Infinity', price: 13000,category : 'Mobile'},
            {item_id : 2,product_name: 'Redmi Y3', price: 10000,category : 'Mobile'},
            {item_id : 3,product_name: 'Samsung 14inch TV', price: 42000,category : 'TV'},
            {item_id : 4,product_name: 'Samsung 32Gb Pendrive', price: 13000,category : 'Pendrive'}
        ],
        pro:{
            item_id:'',
            product_name : '',
            price :'',
            category : ''
        }
    },
    getters: {
        getall: (state) => {
            var products = state.products.map( product => {
                //total_amount += product.price;
                return {
                    item_id : product.item_id,
                    product_name : product.product_name,
                    price: product.price,
                    category : product.category
                };
            });
            return products;
        },
        getOne: (state) => {
            var p={};
            p.item_id=state.pro.item_id;
            p.product_name=state.pro.product_name;
            p.price=state.pro.price;
            p.category=state.pro.category;
            return p;
        } 
    },
    mutations: {
        post: (state, payload) => {
            state.products.push(payload);
            //total_amount+=payload.price;
        },
        put: (state,payload) => {
            state.products.find(product => {
                if (product.item_id == payload.item_id)
                {
                    product.price = payload.price;
                    //total_amount += (product.price - payload.price);
                }
            });
        },
        deleteele: (state,payload) => {
            let c=0;
            console.log(payload);
            state.products.forEach(product => {
                if(product.item_id == payload)
                {
                    state.products.splice(c,1);
                    //total_amount -=payload.price;
                }
                c+=1;
            });
        },
        getElemById: (state,payload )=> {
            state.products.forEach(product=>{
                if(product.item_id==payload)
                {
                    state.pro.item_id=product.item_id;
                    state.pro.product_name=product.product_name;
                    state.pro.price=product.price;
                    state.pro.category=product.category;
                }            
        });
    }
},
    actions: {
        post: (context, payload) => {
                  context.commit('post', payload);
        },
        put: (context,payload) => {
            context.commit('put',payload);
        },
        deleteele : (context,payload) => {
            context.commit('deleteele',payload);
        },
        getElemById : (context,payload) => {
            context.commit('getElemById',payload);
        }
    }
});
