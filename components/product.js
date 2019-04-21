"use strict";
Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: "\n    <div class=\"product\">\n        <div class=\"product-image\">\n            <img :src=\"image\">\n        </div>\n\n        <div class=\"product-info\">\n            <h1>{{ title }}</h1>\n            <p v-if=\"inStock\">In Stock</p>\n            <p v-else>Out of Stock</p>\n            <p>Shipping: {{ shipping }}</p>\n            <ul>\n                <li v-for=\"detail in details\">{{ detail }}</li>\n            </ul>\n\n            <div class=\"color-box\"\n                v-for=\"(variant, index) in variants\" \n                :key=\"variant.id\"\n                :style=\"{ backgroundColor: variant.color }\"\n                @mouseover=\"updateProduct(index)\">\n            </div>\n\n            <button v-on:click=\"addToCart\"\n                :disabled=\"!inStock\"\n                :class=\"{ disabledButton: !inStock }\">Add to Cart</button>\n        </div>\n\n        <product-tabs :reviews=\"reviews\"></product-tabs>\n    </div>\n    ",
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
    },
    mounted: function () {
        var _this = this;
        eventBus.$on("review-submitted", function (review) {
            _this.reviews.push(review);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0lBQ3JCLEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7U0FDakI7S0FDSjtJQUNELFFBQVEsRUFBRSxrOEJBNkJUO0lBQ0QsSUFBSSxFQUFKO1FBQ0ksT0FBTztZQUNILEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsZUFBZSxFQUFFLENBQUM7WUFDbEIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGVBQWU7YUFDbEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ047b0JBQ0ksRUFBRSxFQUFFLElBQUk7b0JBQ1IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLG9DQUFvQztvQkFDM0MsR0FBRyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLElBQUk7b0JBQ1IsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLG1DQUFtQztvQkFDMUMsR0FBRyxFQUFFLENBQUM7aUJBQ1Q7YUFDSjtZQUNELE9BQU8sRUFBRSxFQUFzQjtTQUNsQyxDQUFBO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsRUFBVCxjQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsYUFBYSxFQUFiLFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0tBQ0o7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUw7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0MsQ0FBQztRQUNELEtBQUssRUFBTDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JELENBQUM7UUFDRCxPQUFPLEVBQVA7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELFFBQVEsRUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDeEMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFQO1FBQUEsaUJBSUM7UUFIRyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsTUFBc0I7WUFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLmNvbXBvbmVudChcInByb2R1Y3RcIiwge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwcmVtaXVtOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj5cclxuICAgICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cclxuICAgICAgICAgICAgPHAgdi1pZj1cImluU3RvY2tcIj5JbiBTdG9jazwvcD5cclxuICAgICAgICAgICAgPHAgdi1lbHNlPk91dCBvZiBTdG9jazwvcD5cclxuICAgICAgICAgICAgPHA+U2hpcHBpbmc6IHt7IHNoaXBwaW5nIH19PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJkZXRhaWwgaW4gZGV0YWlsc1wiPnt7IGRldGFpbCB9fTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItYm94XCJcclxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKHZhcmlhbnQsIGluZGV4KSBpbiB2YXJpYW50c1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cInZhcmlhbnQuaWRcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IHZhcmlhbnQuY29sb3IgfVwiXHJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidXBkYXRlUHJvZHVjdChpbmRleClcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJhZGRUb0NhcnRcIlxyXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWluU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZEJ1dHRvbjogIWluU3RvY2sgfVwiPkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwcm9kdWN0LXRhYnMgOnJldmlld3M9XCJyZXZpZXdzXCI+PC9wcm9kdWN0LXRhYnM+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIkNPTVBcIixcclxuICAgICAgICAgICAgcHJvZHVjdDogXCJTb2Nrc1wiLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQ6IDAsXHJcbiAgICAgICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IFtcclxuICAgICAgICAgICAgICAgIFwiODAlIGNvdHRvblwiLFxyXG4gICAgICAgICAgICAgICAgXCIyMCUgcG9seWVzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkdlbmRlciBudXRyYWxcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB2YXJpYW50czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMjM0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiLi9hc3NldHMvdm1Tb2Nrcy1ncmVlbi1vbldoaXRlLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eTogMTBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIyMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi4vYXNzZXRzL3ZtU29ja3MtYmx1ZS1vbldoaXRlLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eTogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICByZXZpZXdzOiBbXSBhcyBJUHJvZHVjdFJldmlld1tdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRUb0NhcnQoKTogdm9pZCB7IHRoaXMuJGVtaXQoXCJhZGQtdG8tY2FydFwiLCB0aGlzLnZhcmlhbnRzW3RoaXMuc2VsZWN0ZWRWYXJpYW50XS5pZCk7IH0sXHJcbiAgICAgICAgdXBkYXRlUHJvZHVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYXJpYW50ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJhbmQgKyBcIiBcIiArIHRoaXMucHJvZHVjdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhcmlhbnRzW3RoaXMuc2VsZWN0ZWRWYXJpYW50XS5pbWFnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluU3RvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhcmlhbnRzW3RoaXMuc2VsZWN0ZWRWYXJpYW50XS5xdHkgPiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hpcHBpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlbWl1bSA/IFwiRnJlZVwiIDogMi45OTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBldmVudEJ1cy4kb24oXCJyZXZpZXctc3VibWl0dGVkXCIsIChyZXZpZXc6IElQcm9kdWN0UmV2aWV3KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmV2aWV3cy5wdXNoKHJldmlldyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyJdfQ==