"use strict";
Vue.component("product-review", {
    template: "\n    <form class=\"review-form\" @submit.prevent=\"onSubmit\">\n        <p v-if=\"errors.length\">\n            <b>Please correct the following error(s):</b>\n            <ul>\n                <li v-for=\"error in errors\">{{ error }}</li>\n            </ul>\n        </p>\n\n        <p>\n            <label for=\"name\">Name:</label>\n            <input id=\"name\" v-model=\"name\" placeholder=\"name\">\n        </p>\n\n        <p>\n            <label for=\"review\">Review:</label>      \n            <textarea id=\"review\" v-model=\"review\"></textarea>\n        </p>\n\n        <p>\n            <label for=\"rating\">Rating:</label>\n            <select id=\"rating\" v-model.number=\"rating\">\n            <option>5</option>\n            <option>4</option>\n            <option>3</option>\n            <option>2</option>\n            <option>1</option>\n            </select>\n        </p>\n            \n        <p>\n            <input type=\"submit\" value=\"Submit\">  \n        </p>\n    </form>\n    ",
    data: function () {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        };
    },
    methods: {
        onSubmit: function () {
            this.errors.splice(0);
            if (!this.name) {
                this.errors.push("Name required.");
            }
            if (!this.review) {
                this.errors.push("Review required.");
            }
            if (!this.rating) {
                this.errors.push("Rating required.");
            }
            if (this.errors.length > 0)
                return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsR0FBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM1QixRQUFRLEVBQUUseS9CQWtDVDtJQUNELElBQUksRUFBSjtRQUNJLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBcUI7WUFDM0IsTUFBTSxFQUFFLElBQXFCO1lBQzdCLE1BQU0sRUFBRSxJQUFxQjtZQUM3QixNQUFNLEVBQUUsRUFBYztTQUN6QixDQUFBO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBUjtZQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDdEM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUN4QztZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRW5DLElBQUksYUFBYSxHQUFtQjtnQkFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQzthQUMzQixDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiVnVlLmNvbXBvbmVudChcInByb2R1Y3QtcmV2aWV3XCIsIHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8Zm9ybSBjbGFzcz1cInJldmlldy1mb3JtXCIgQHN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIj5cclxuICAgICAgICA8cCB2LWlmPVwiZXJyb3JzLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICA8Yj5QbGVhc2UgY29ycmVjdCB0aGUgZm9sbG93aW5nIGVycm9yKHMpOjwvYj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiZXJyb3IgaW4gZXJyb3JzXCI+e3sgZXJyb3IgfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdi1tb2RlbD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIj5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicmV2aWV3XCI+UmV2aWV3OjwvbGFiZWw+ICAgICAgXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJldmlld1wiIHYtbW9kZWw9XCJyZXZpZXdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyYXRpbmdcIj5SYXRpbmc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInJhdGluZ1wiIHYtbW9kZWwubnVtYmVyPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPiAgXHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgYCxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogbnVsbCBhcyBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgICAgICByZXZpZXc6IG51bGwgYXMgc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICAgICAgcmF0aW5nOiBudWxsIGFzIG51bWJlciB8IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9yczogW10gYXMgc3RyaW5nW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiTmFtZSByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJldmlldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIlJldmlldyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJhdGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIlJhdGluZyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UmV2aWV3OiBJUHJvZHVjdFJldmlldyA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3OiB0aGlzLnJldmlldyB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnJhdGluZyB8fCAwXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZXZpZXctc3VibWl0dGVkXCIsIHByb2R1Y3RSZXZpZXcpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBudWxsLFxyXG4gICAgICAgICAgICB0aGlzLnJldmlldyA9IG51bGwsXHJcbiAgICAgICAgICAgIHRoaXMucmF0aW5nID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19