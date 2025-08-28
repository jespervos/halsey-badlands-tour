<template>
  <li class="flex flex-col items-center">
    <div class="order-2 relative mb-2">
      <h2 class="text-large">{{ location }}</h2>
      <div class="text-large absolute inset-0 text-shadow-primary blur-[1px]">
        {{ location }}
      </div>
    </div>
    <p class="order-1 text-small">{{ formattedDate }}</p>
    <NuxtLink :to="link" class="order-3 button">Tickets</NuxtLink>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  location: string;
  date: string;
  link: string;
}>();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formattedDate = computed(() => {
  const [year, month, day] = props.date.split("-").map(Number);
  return `${day} ${months[month - 1]} ${year}`;
});
</script>
