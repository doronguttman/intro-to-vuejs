Vue.config.devtools = true;

var app = new Vue({
    el: "#app",
    data: {
        brand: "COMP",
        product: "Socks",
        selectedVariant: 0,
        onSale: false,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender nutral"
        ],
        variants: [
            {
                id: 2234,
                color: "green",
                image: "./assets/vmSocks-green-onWhite.jpg",
                qty: 10
            },
            {
                id: 2235,
                color: "blue",
                image: "./assets/vmSocks-blue-onWhite.jpg",
                qty: 0
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() { this.cart++ },
        updateProduct(index: number) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].qty > 0;
        }
    }
});