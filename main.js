"use strict";
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
                color: "green"
            },
            {
                id: 2235,
                color: "blue"
            }
        ]
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2QsRUFBRSxFQUFFLE1BQU07SUFDVixJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsT0FBTztRQUNoQixLQUFLLEVBQUUsb0NBQW9DO1FBQzNDLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFLElBQUk7UUFDYixPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7U0FDbEI7UUFDRCxRQUFRLEVBQUU7WUFDTjtnQkFDSSxFQUFFLEVBQUUsSUFBSTtnQkFDUixLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxJQUFJO2dCQUNSLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0o7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjYXBwXCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvZHVjdDogXCJTb2Nrc1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi4vYXNzZXRzL3ZtU29ja3MtZ3JlZW4tb25XaGl0ZS5qcGdcIixcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIGluU3RvY2s6IHRydWUsXHJcbiAgICAgICAgZGV0YWlsczogW1xyXG4gICAgICAgICAgICBcIjgwJSBjb3R0b25cIixcclxuICAgICAgICAgICAgXCIyMCUgcG9seWVzdGVyXCIsXHJcbiAgICAgICAgICAgIFwiR2VuZGVyIG51dHJhbFwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICB2YXJpYW50czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMjIzNCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIyMzUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSk7Il19