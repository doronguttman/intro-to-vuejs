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
        </div>

        <div>
            <h2>Reviews</h2>
            <p v-if="reviews.length === 0">There are no reviews yet. Be the first one to review!</p>
            <ul v-else>
                <li v-for="review in reviews">
                    <p>{{ review.name }}<p>
                    <p>{{ review.review }}</p>
                    <span v-for="n in review.rating">⭐</span>
                </li>
            </ul>
        </div>

        <product-review @review-submitted="addReview"></product-review>
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
            reviews: [] as IProductReview[]
        }
    },
    methods: {
        addToCart(): void { this.$emit("add-to-cart", this.variants[this.selectedVariant].id); },
        updateProduct(index: number): void {
            this.selectedVariant = index;
        },
        addReview(review: IProductReview): void {
            this.reviews.push(review);
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