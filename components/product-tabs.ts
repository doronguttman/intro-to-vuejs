Vue.component("product-tabs", {
    props: {
        reviews: {
            required: true,
            type: Array
        }
    },
    template: `
        <div>
            <span class="tab"
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ activeTab: selectedTab === tab }"
                @click="selectedTab = tab">
                {{ tab }}
            </span>

            <div v-show="selectedTab === 'Reviews'">
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

            <product-review v-show="selectedTab === 'Publish a Review'"></product-review>
        </div>
    `,
    data() {
        return {
            tabs: [
                "Reviews",
                "Publish a Review"
            ],
            selectedTab: "Reviews"
        }
    }
});