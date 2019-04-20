"use strict";
Vue.config.devtools = true;
Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: "\n    <div class=\"product\">\n        <div class=\"product-image\">\n            <img :src=\"image\">\n        </div>\n\n        <div class=\"product-info\">\n            <h1>{{ title }}</h1>\n            <p v-if=\"inStock\">In Stock</p>\n            <p v-else>Out of Stock</p>\n            <p>Shipping: {{ shipping }}</p>\n            <ul>\n                <li v-for=\"detail in details\">{{ detail }}</li>\n            </ul>\n\n            <div class=\"color-box\"\n                v-for=\"(variant, index) in variants\" \n                :key=\"variant.id\"\n                :style=\"{ backgroundColor: variant.color }\"\n                @mouseover=\"updateProduct(index)\">\n            </div>\n\n            <button v-on:click=\"addToCart\"\n                :disabled=\"!inStock\"\n                :class=\"{ disabledButton: !inStock }\">Add to Cart</button>\n        </div>\n    </div>\n    ",
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
            ]
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
    }
});
var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart: function (id) {
            this.cart.push(id);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMzQixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUNyQixLQUFLLEVBQUU7UUFDSCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO0tBQ0o7SUFDRCxRQUFRLEVBQUUsbzRCQTJCVDtJQUNELElBQUk7UUFDQSxPQUFPO1lBQ0gsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixlQUFlLEVBQUUsQ0FBQztZQUNsQixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsZUFBZTthQUNsQjtZQUNELFFBQVEsRUFBRTtnQkFDTjtvQkFDSSxFQUFFLEVBQUUsSUFBSTtvQkFDUixLQUFLLEVBQUUsT0FBTztvQkFDZCxLQUFLLEVBQUUsb0NBQW9DO29CQUMzQyxHQUFHLEVBQUUsRUFBRTtpQkFDVjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsSUFBSTtvQkFDUixLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsbUNBQW1DO29CQUMxQyxHQUFHLEVBQUUsQ0FBQztpQkFDVDthQUNKO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxTQUFTLEVBQVQsY0FBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLGFBQWEsRUFBYixVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFMO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNDLENBQUM7UUFDRCxLQUFLLEVBQUw7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRCxDQUFDO1FBQ0QsT0FBTyxFQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxRQUFRLEVBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hDLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQztBQUVILElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2QsRUFBRSxFQUFFLE1BQU07SUFDVixJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxFQUFjO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsVUFBVSxFQUFWLFVBQVcsRUFBVTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcclxuVnVlLmNvbXBvbmVudChcInByb2R1Y3RcIiwge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwcmVtaXVtOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj5cclxuICAgICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cclxuICAgICAgICAgICAgPHAgdi1pZj1cImluU3RvY2tcIj5JbiBTdG9jazwvcD5cclxuICAgICAgICAgICAgPHAgdi1lbHNlPk91dCBvZiBTdG9jazwvcD5cclxuICAgICAgICAgICAgPHA+U2hpcHBpbmc6IHt7IHNoaXBwaW5nIH19PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJkZXRhaWwgaW4gZGV0YWlsc1wiPnt7IGRldGFpbCB9fTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItYm94XCJcclxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKHZhcmlhbnQsIGluZGV4KSBpbiB2YXJpYW50c1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cInZhcmlhbnQuaWRcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IHZhcmlhbnQuY29sb3IgfVwiXHJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidXBkYXRlUHJvZHVjdChpbmRleClcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJhZGRUb0NhcnRcIlxyXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWluU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZEJ1dHRvbjogIWluU3RvY2sgfVwiPkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIkNPTVBcIixcclxuICAgICAgICAgICAgcHJvZHVjdDogXCJTb2Nrc1wiLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQ6IDAsXHJcbiAgICAgICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IFtcclxuICAgICAgICAgICAgICAgIFwiODAlIGNvdHRvblwiLFxyXG4gICAgICAgICAgICAgICAgXCIyMCUgcG9seWVzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkdlbmRlciBudXRyYWxcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB2YXJpYW50czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyMjM0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiLi9hc3NldHMvdm1Tb2Nrcy1ncmVlbi1vbldoaXRlLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eTogMTBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIyMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi4vYXNzZXRzL3ZtU29ja3MtYmx1ZS1vbldoaXRlLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eTogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRUb0NhcnQoKTogdm9pZCB7IHRoaXMuJGVtaXQoXCJhZGQtdG8tY2FydFwiLCB0aGlzLnZhcmlhbnRzW3RoaXMuc2VsZWN0ZWRWYXJpYW50XS5pZCk7IH0sXHJcbiAgICAgICAgdXBkYXRlUHJvZHVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYXJpYW50ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJhbmQgKyBcIiBcIiArIHRoaXMucHJvZHVjdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhcmlhbnRzW3RoaXMuc2VsZWN0ZWRWYXJpYW50XS5pbWFnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluU3RvY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhcmlhbnRzW3RoaXMuc2VsZWN0ZWRWYXJpYW50XS5xdHkgPiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hpcHBpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlbWl1bSA/IFwiRnJlZVwiIDogMi45OTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgZWw6IFwiI2FwcFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHByZW1pdW06IHRydWUsXHJcbiAgICAgICAgY2FydDogW10gYXMgbnVtYmVyW11cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlQ2FydChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydC5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==