Vue.config.devtools = true;

var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: [] as number[]
    },
    methods: {
        updateCart(id: number) {
            this.cart.push(id);
        }
    }
});