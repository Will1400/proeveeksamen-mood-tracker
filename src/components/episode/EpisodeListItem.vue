<template>
	<div
		class="rounded-md bg-white m-auto p-4 shadow-md transform-gpu transition-all hover:shadow-xl hover:scale-101"
	>
		<div>
			<h2 class="font-semibold">{{ title }}</h2>
		</div>
		<div>
			<p class="text-gray-500">{{ dateFromNow() }}</p>
		</div>
		<div>
			<p class="overflow-hidden overflow-ellipsis max-chars">
				{{ description }}
			</p>
		</div>
		<div
			class="text-red-400 pt-1"
			:class="{ 'text-yellow-400': rating > 2 }"
		>
			<span class="text-black"> Rating: </span>
			<base-emoji classes="w-7 h-7 inline" :emoji="rating"></base-emoji>
		</div>
	</div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/da";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("da");
dayjs.extend(relativeTime);

export default {
	props: ["title", "date", "rating", "description"],
	methods: {
		dateFromNow() {
			return dayjs().to(dayjs(this.date));
		},
	},
};
</script>

<style scoped>
.max-chars {
	max-height: 6ch;
}
</style>
