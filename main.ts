Vue.config.devtools = true;
Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div class="color-box"
                v-for="(variant, index) in variants" 
                :key="variant.id"
                :style="{ backgroundColor: variant.color }"
                @mouseover="updateProduct(index)">
            </div>

            <button v-on:click="addToCart"
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }">Add to Cart</button>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
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
            cart: 0
        }
    },
    methods: {
        addToCart(): void { this.cart++ },
        updateProduct(index: number): void {
            this.selectedVariant = index;
        }
    },
    computed: {
        title(): string {
            return this.brand + " " + this.product;
        },
        image(): string {
            return this.variants[this.selectedVariant].image;
        },
        inStock(): boolean {
            return this.variants[this.selectedVariant].qty > 0;
        },
        shipping(): string | number {
            return this.premium ? "Free" : 2.99;
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        premium: true
    }
});