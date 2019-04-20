"use strict";
Vue.config.devtools = true;
Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: "\n    <div class=\"product\">\n        <div class=\"product-image\">\n            <img :src=\"image\">\n        </div>\n\n        <div class=\"product-info\">\n            <h1>{{ title }}</h1>\n            <p v-if=\"inStock\">In Stock</p>\n            <p v-else>Out of Stock</p>\n            <p>Shipping: {{ shipping }}</p>\n            <ul>\n                <li v-for=\"detail in details\">{{ detail }}</li>\n            </ul>\n\n            <div class=\"color-box\"\n                v-for=\"(variant, index) in variants\" \n                :key=\"variant.id\"\n                :style=\"{ backgroundColor: variant.color }\"\n                @mouseover=\"updateProduct(index)\">\n            </div>\n\n            <button v-on:click=\"addToCart\"\n                :disabled=\"!inStock\"\n                :class=\"{ disabledButton: !inStock }\">Add to Cart</button>\n\n            <div class=\"cart\">\n                <p>Cart({{ cart }})</p>\n            </div>\n        </div>\n    </div>\n    ",
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
            cart: 0
        };
    },
    methods: {
        addToCart: function () { this.cart++; },
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
        premium: true
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMzQixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUNyQixLQUFLLEVBQUU7UUFDSCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO0tBQ0o7SUFDRCxRQUFRLEVBQUUscStCQStCVDtJQUNELElBQUk7UUFDQSxPQUFPO1lBQ0gsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixlQUFlLEVBQUUsQ0FBQztZQUNsQixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsZUFBZTthQUNsQjtZQUNELFFBQVEsRUFBRTtnQkFDTjtvQkFDSSxFQUFFLEVBQUUsSUFBSTtvQkFDUixLQUFLLEVBQUUsT0FBTztvQkFDZCxLQUFLLEVBQUUsb0NBQW9DO29CQUMzQyxHQUFHLEVBQUUsRUFBRTtpQkFDVjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsSUFBSTtvQkFDUixLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsbUNBQW1DO29CQUMxQyxHQUFHLEVBQUUsQ0FBQztpQkFDVDthQUNKO1lBQ0QsSUFBSSxFQUFFLENBQUM7U0FDVixDQUFBO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsRUFBVCxjQUFvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsRUFBYixVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFMO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNDLENBQUM7UUFDRCxLQUFLLEVBQUw7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNyRCxDQUFDO1FBQ0QsT0FBTyxFQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxRQUFRLEVBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hDLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQztBQUVILElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2QsRUFBRSxFQUFFLE1BQU07SUFDVixJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsSUFBSTtLQUNoQjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5jb25maWcuZGV2dG9vbHMgPSB0cnVlO1xyXG5WdWUuY29tcG9uZW50KFwicHJvZHVjdFwiLCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHByZW1pdW06IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VcIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxyXG4gICAgICAgICAgICA8cCB2LWlmPVwiaW5TdG9ja1wiPkluIFN0b2NrPC9wPlxyXG4gICAgICAgICAgICA8cCB2LWVsc2U+T3V0IG9mIFN0b2NrPC9wPlxyXG4gICAgICAgICAgICA8cD5TaGlwcGluZzoge3sgc2hpcHBpbmcgfX08L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImRldGFpbCBpbiBkZXRhaWxzXCI+e3sgZGV0YWlsIH19PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1ib3hcIlxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIodmFyaWFudCwgaW5kZXgpIGluIHZhcmlhbnRzXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwidmFyaWFudC5pZFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogdmFyaWFudC5jb2xvciB9XCJcclxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJ1cGRhdGVQcm9kdWN0KGluZGV4KVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cImFkZFRvQ2FydFwiXHJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaW5TdG9ja1wiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkQnV0dG9uOiAhaW5TdG9jayB9XCI+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXJ0KHt7IGNhcnQgfX0pPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnJhbmQ6IFwiQ09NUFwiLFxyXG4gICAgICAgICAgICBwcm9kdWN0OiBcIlNvY2tzXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudDogMCxcclxuICAgICAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGV0YWlsczogW1xyXG4gICAgICAgICAgICAgICAgXCI4MCUgY290dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIjIwJSBwb2x5ZXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiR2VuZGVyIG51dHJhbFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIyMzQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIuL2Fzc2V0cy92bVNvY2tzLWdyZWVuLW9uV2hpdGUuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcXR5OiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMjIzNSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiLi9hc3NldHMvdm1Tb2Nrcy1ibHVlLW9uV2hpdGUuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcXR5OiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNhcnQ6IDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFkZFRvQ2FydCgpOiB2b2lkIHsgdGhpcy5jYXJ0KysgfSxcclxuICAgICAgICB1cGRhdGVQcm9kdWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhcmlhbnQgPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmFuZCArIFwiIFwiICsgdGhpcy5wcm9kdWN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFudHNbdGhpcy5zZWxlY3RlZFZhcmlhbnRdLmltYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5TdG9jaygpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFudHNbdGhpcy5zZWxlY3RlZFZhcmlhbnRdLnF0eSA+IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGlwcGluZygpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVtaXVtID8gXCJGcmVlXCIgOiAyLjk5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjYXBwXCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJlbWl1bTogdHJ1ZVxyXG4gICAgfVxyXG59KTsiXX0=