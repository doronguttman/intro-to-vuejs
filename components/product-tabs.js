"use strict";
Vue.component("product-tabs", {
    props: {
        reviews: {
            required: true,
            type: Array
        }
    },
    template: "\n        <div>\n            <span class=\"tab\"\n                v-for=\"(tab, index) in tabs\"\n                :key=\"index\"\n                :class=\"{ activeTab: selectedTab === tab }\"\n                @click=\"selectedTab = tab\">\n                {{ tab }}\n            </span>\n\n            <div v-show=\"selectedTab === 'Reviews'\">\n                <h2>Reviews</h2>\n                <p v-if=\"reviews.length === 0\">There are no reviews yet. Be the first one to review!</p>\n                <ul v-else>\n                    <li v-for=\"review in reviews\">\n                        <p>{{ review.name }}<p>\n                        <p>{{ review.review }}</p>\n                        <span v-for=\"n in review.rating\">\u2B50</span>\n                    </li>\n                </ul>\n            </div>\n\n            <product-review v-show=\"selectedTab === 'Publish a Review'\"></product-review>\n        </div>\n    ",
    data: function () {
        return {
            tabs: [
                "Reviews",
                "Publish a Review"
            ],
            selectedTab: "Reviews"
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC10YWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtJQUMxQixLQUFLLEVBQUU7UUFDSCxPQUFPLEVBQUU7WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxLQUFLO1NBQ2Q7S0FDSjtJQUNELFFBQVEsRUFBRSxxNkJBd0JUO0lBQ0QsSUFBSTtRQUNBLE9BQU87WUFDSCxJQUFJLEVBQUU7Z0JBQ0YsU0FBUztnQkFDVCxrQkFBa0I7YUFDckI7WUFDRCxXQUFXLEVBQUUsU0FBUztTQUN6QixDQUFBO0lBQ0wsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5jb21wb25lbnQoXCJwcm9kdWN0LXRhYnNcIiwge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICByZXZpZXdzOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiBBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFiXCJcclxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKHRhYiwgaW5kZXgpIGluIHRhYnNcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlVGFiOiBzZWxlY3RlZFRhYiA9PT0gdGFiIH1cIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0ZWRUYWIgPSB0YWJcIj5cclxuICAgICAgICAgICAgICAgIHt7IHRhYiB9fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cInNlbGVjdGVkVGFiID09PSAnUmV2aWV3cydcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5SZXZpZXdzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJyZXZpZXdzLmxlbmd0aCA9PT0gMFwiPlRoZXJlIGFyZSBubyByZXZpZXdzIHlldC4gQmUgdGhlIGZpcnN0IG9uZSB0byByZXZpZXchPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJyZXZpZXcgaW4gcmV2aWV3c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyByZXZpZXcubmFtZSB9fTxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyByZXZpZXcucmV2aWV3IH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWZvcj1cIm4gaW4gcmV2aWV3LnJhdGluZ1wiPuKtkDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8cHJvZHVjdC1yZXZpZXcgdi1zaG93PVwic2VsZWN0ZWRUYWIgPT09ICdQdWJsaXNoIGEgUmV2aWV3J1wiPjwvcHJvZHVjdC1yZXZpZXc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJzOiBbXHJcbiAgICAgICAgICAgICAgICBcIlJldmlld3NcIixcclxuICAgICAgICAgICAgICAgIFwiUHVibGlzaCBhIFJldmlld1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGFiOiBcIlJldmlld3NcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19