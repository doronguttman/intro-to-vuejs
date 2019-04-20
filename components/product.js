"use strict";
Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: "\n    <div class=\"product\">\n        <div class=\"product-image\">\n            <img :src=\"image\">\n        </div>\n\n        <div class=\"product-info\">\n            <h1>{{ title }}</h1>\n            <p v-if=\"inStock\">In Stock</p>\n            <p v-else>Out of Stock</p>\n            <p>Shipping: {{ shipping }}</p>\n            <ul>\n                <li v-for=\"detail in details\">{{ detail }}</li>\n            </ul>\n\n            <div class=\"color-box\"\n                v-for=\"(variant, index) in variants\" \n                :key=\"variant.id\"\n                :style=\"{ backgroundColor: variant.color }\"\n                @mouseover=\"updateProduct(index)\">\n            </div>\n\n            <button v-on:click=\"addToCart\"\n                :disabled=\"!inStock\"\n                :class=\"{ disabledButton: !inStock }\">Add to Cart</button>\n        </div>\n\n        <div>\n            <h2>Reviews</h2>\n            <p v-if=\"reviews.length === 0\">There are no reviews yet. Be the first one to review!</p>\n            <ul v-else>\n                <li v-for=\"review in reviews\">\n                    <p>{{ review.name }}<p>\n                    <p>{{ review.review }}</p>\n                    <span v-for=\"n in review.rating\">\u2B50</span>\n                </li>\n            </ul>\n        </div>\n\n        <product-review @review-submitted=\"addReview\"></product-review>\n    </div>\n    ",
    data: function () {
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
            reviews: []
        };
    },
    methods: {
        addToCart: function () { this.$emit("add-to-cart", this.variants[this.selectedVariant].id); },
        updateProduct: function (index) {
            this.selectedVariant = index;
        },
        addReview: function (review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title: function () {
            return this.brand + " " + this.product;
        },
        image: function () {
            return this.variants[this.selectedVariant].image;
        },
        inStock: function () {
            return this.variants[this.selectedVariant].qty > 0;
        },
        shipping: function () {
            return this.premium ? "Free" : 2.99;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0lBQ3JCLEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7U0FDakI7S0FDSjtJQUNELFFBQVEsRUFBRSxnNUNBeUNUO0lBQ0QsSUFBSSxFQUFKO1FBQ0ksT0FBTztZQUNILEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsZUFBZSxFQUFFLENBQUM7WUFDbEIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGVBQWU7YUFDbEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ047b0JBQ0ksRUFBRSxFQUFFLElBQUk7b0JBQ1IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLG9DQUFvQztvQkFDM0MsR0FBRyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLElBQUk7b0JBQ1IsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLG1DQUFtQztvQkFDMUMsR0FBRyxFQUFFLENBQUM7aUJBQ1Q7YUFDSjtZQUNELE9BQU8sRUFBRSxFQUFzQjtTQUNsQyxDQUFBO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsRUFBVCxjQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsYUFBYSxFQUFiLFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO1FBQ0QsU0FBUyxFQUFULFVBQVUsTUFBc0I7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFMO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNDLENBQUM7UUFDRCxLQUFLLEVBQUw7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRCxDQUFDO1FBQ0QsT0FBTyxFQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxRQUFRLEVBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hDLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5jb21wb25lbnQoXCJwcm9kdWN0XCIsIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcHJlbWl1bToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJpbWFnZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxoMT57eyB0aXRsZSB9fTwvaDE+XHJcbiAgICAgICAgICAgIDxwIHYtaWY9XCJpblN0b2NrXCI+SW4gU3RvY2s8L3A+XHJcbiAgICAgICAgICAgIDxwIHYtZWxzZT5PdXQgb2YgU3RvY2s8L3A+XHJcbiAgICAgICAgICAgIDxwPlNoaXBwaW5nOiB7eyBzaGlwcGluZyB9fTwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiZGV0YWlsIGluIGRldGFpbHNcIj57eyBkZXRhaWwgfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWJveFwiXHJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIih2YXJpYW50LCBpbmRleCkgaW4gdmFyaWFudHNcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJ2YXJpYW50LmlkXCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiB2YXJpYW50LmNvbG9yIH1cIlxyXG4gICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cInVwZGF0ZVByb2R1Y3QoaW5kZXgpXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiYWRkVG9DYXJ0XCJcclxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpblN0b2NrXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZGlzYWJsZWRCdXR0b246ICFpblN0b2NrIH1cIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+UmV2aWV3czwvaDI+XHJcbiAgICAgICAgICAgIDxwIHYtaWY9XCJyZXZpZXdzLmxlbmd0aCA9PT0gMFwiPlRoZXJlIGFyZSBubyByZXZpZXdzIHlldC4gQmUgdGhlIGZpcnN0IG9uZSB0byByZXZpZXchPC9wPlxyXG4gICAgICAgICAgICA8dWwgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwicmV2aWV3IGluIHJldmlld3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57eyByZXZpZXcubmFtZSB9fTxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHJldmlldy5yZXZpZXcgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCJuIGluIHJldmlldy5yYXRpbmdcIj7irZA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cHJvZHVjdC1yZXZpZXcgQHJldmlldy1zdWJtaXR0ZWQ9XCJhZGRSZXZpZXdcIj48L3Byb2R1Y3QtcmV2aWV3PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBicmFuZDogXCJDT01QXCIsXHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IFwiU29ja3NcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50OiAwLFxyXG4gICAgICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBbXHJcbiAgICAgICAgICAgICAgICBcIjgwJSBjb3R0b25cIixcclxuICAgICAgICAgICAgICAgIFwiMjAlIHBvbHllc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJHZW5kZXIgbnV0cmFsXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdmFyaWFudHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMjIzNCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi4vYXNzZXRzL3ZtU29ja3MtZ3JlZW4tb25XaGl0ZS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBxdHk6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMjM1LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIuL2Fzc2V0cy92bVNvY2tzLWJsdWUtb25XaGl0ZS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBxdHk6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcmV2aWV3czogW10gYXMgSVByb2R1Y3RSZXZpZXdbXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYWRkVG9DYXJ0KCk6IHZvaWQgeyB0aGlzLiRlbWl0KFwiYWRkLXRvLWNhcnRcIiwgdGhpcy52YXJpYW50c1t0aGlzLnNlbGVjdGVkVmFyaWFudF0uaWQpOyB9LFxyXG4gICAgICAgIHVwZGF0ZVByb2R1Y3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFyaWFudCA9IGluZGV4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkUmV2aWV3KHJldmlldzogSVByb2R1Y3RSZXZpZXcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5yZXZpZXdzLnB1c2gocmV2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmFuZCArIFwiIFwiICsgdGhpcy5wcm9kdWN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFudHNbdGhpcy5zZWxlY3RlZFZhcmlhbnRdLmltYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5TdG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFudHNbdGhpcy5zZWxlY3RlZFZhcmlhbnRdLnF0eSA+IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGlwcGluZygpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVtaXVtID8gXCJGcmVlXCIgOiAyLjk5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19