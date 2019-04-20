Vue.component("product-review", {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" placeholder="name">
        </p>

        <p>
            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            </select>
        </p>
            
        <p>
            <input type="submit" value="Submit">  
        </p>
    </form>
    `,
    data() {
        return {
            name: null as string | null,
            review: null as string | null,
            rating: null as number | null
        }
    },
    methods: {
        onSubmit() {
            let productReview: IProductReview = {
                name: this.name || "",
                review: this.review || "",
                rating: this.rating || 0
            };
            this.$emit("review-submitted", productReview);
            this.name = null,
            this.review = null,
            this.rating = null
        }
    }
});