"use strict";
Vue.component("product-review", {
    template: "\n    <form class=\"review-form\" @submit.prevent=\"onSubmit\">\n        <p>\n            <label for=\"name\">Name:</label>\n            <input id=\"name\" v-model=\"name\" placeholder=\"name\">\n        </p>\n\n        <p>\n            <label for=\"review\">Review:</label>      \n            <textarea id=\"review\" v-model=\"review\"></textarea>\n        </p>\n\n        <p>\n            <label for=\"rating\">Rating:</label>\n            <select id=\"rating\" v-model.number=\"rating\">\n            <option>5</option>\n            <option>4</option>\n            <option>3</option>\n            <option>2</option>\n            <option>1</option>\n            </select>\n        </p>\n            \n        <p>\n            <input type=\"submit\" value=\"Submit\">  \n        </p>\n    </form>\n    ",
    data: function () {
        return {
            name: null,
            review: null,
            rating: null
        };
    },
    methods: {
        onSubmit: function () {
            var productReview = {
                name: this.name || "",
                review: this.review || "",
                rating: this.rating || 0
            };
            this.$emit("review-submitted", productReview);
            this.name = null,
                this.review = null,
                this.rating = null;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsR0FBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QixRQUFRLEVBQUUscXlCQTJCVDtJQUNELElBQUksRUFBSjtRQUNJLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBcUI7WUFDM0IsTUFBTSxFQUFFLElBQXFCO1lBQzdCLE1BQU0sRUFBRSxJQUFxQjtTQUNoQyxDQUFBO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBUjtZQUNJLElBQUksYUFBYSxHQUFtQjtnQkFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQzthQUMzQixDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLmNvbXBvbmVudChcInByb2R1Y3QtcmV2aWV3XCIsIHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8Zm9ybSBjbGFzcz1cInJldmlldy1mb3JtXCIgQHN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB2LW1vZGVsPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXZpZXdcIj5SZXZpZXc6PC9sYWJlbD4gICAgICBcclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwicmV2aWV3XCIgdi1tb2RlbD1cInJldmlld1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJhdGluZ1wiPlJhdGluZzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwicmF0aW5nXCIgdi1tb2RlbC5udW1iZXI9XCJyYXRpbmdcIj5cclxuICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+ICBcclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBgLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBudWxsIGFzIHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgICAgIHJldmlldzogbnVsbCBhcyBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgICAgICByYXRpbmc6IG51bGwgYXMgbnVtYmVyIHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UmV2aWV3OiBJUHJvZHVjdFJldmlldyA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3OiB0aGlzLnJldmlldyB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyB8fCAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZXZpZXctc3VibWl0dGVkXCIsIHByb2R1Y3RSZXZpZXcpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBudWxsLFxyXG4gICAgICAgICAgICB0aGlzLnJldmlldyA9IG51bGwsXHJcbiAgICAgICAgICAgIHRoaXMucmF0aW5nID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19