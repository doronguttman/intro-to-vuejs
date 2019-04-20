
var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        onSale: false,
        inStock: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender nutral"
        ],
        variants: [
            {
                id: 2234,
                color: "green",
                image: "./assets/vmSocks-green-onWhite.jpg"
            },
            {
                id: 2235,
                color: "blue",
                image: "./assets/vmSocks-blue-onWhite.jpg"
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function() { this.cart++ },
        updateProduct: function(variant: {id: number, color: string, image: string}) {
            this.image = variant.image;
        }
    }
});