<template>
  <li class="flex flex-col items-center">
    <div class="order-2 relative mb-2">
      <h2 class="text-large">{{ location }}</h2>
      <div class="text-large absolute inset-0 text-shadow-primary blur-[1px]">
        {{ location }}
      </div>
    </div>
    <NuxtTime
      :datetime="date"
      year="numeric"
      month="long"
      day="numeric"
      class="order-1 text-small"
    />
    <NuxtLink :to="link" class="order-3 button">Tickets</NuxtLink>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  location: string;
  date: string;
  link: string;
}>();
</script>
