<script setup lang="ts">
import { showsQuery } from "~/sanity/queries";
import type { ShowsQueryResult } from "~/sanity/types";

const { data: shows } = await useSanityQuery<ShowsQueryResult>(showsQuery);

useSeoMeta({
  title: "Back to Badlands Tour",
  description: "Halsey Back to Badlands, The Tour",
  ogImage: "/og-image.png",
});

const filter = ref<string>("all");

// Get unique continents that have shows
const availableContinents = computed(() => {
  if (!shows.value) return [];
  const continents = new Set(shows.value.map((show: any) => show.continent));
  return Array.from(continents);
});

// Define continent labels
const continentLabels = {
  "north-america": "North America",
  "uk-europe": "UK & Europe",
  australia: "Australia",
};
</script>

<template>
  <div class="flex flex-col items-center gap-y-32">
    <img
      src="/img/background.webp"
      alt=""
      class="fixed w-screen h-screen top-0 left-0 object-cover"
    />
    <header class="w-full relative">
      <h1 class="sr-only">Halsey Back to Badlands, The Tour</h1>
      <img
        src="/img/header.webp"
        alt="Halsey back to badlands, the tour"
        class="max-w-[min(100%,35rem)] mx-auto"
      />
    </header>
    <fieldset
      v-if="availableContinents.length > 1"
      class="relative max-w-full overflow-hidden"
    >
      <legend class="sr-only">Filter by continent</legend>
      <div class="flex gap-2 flex-wrap justify-center">
        <label class="pill">
          <input
            v-model="filter"
            type="radio"
            name="continent"
            value="all"
            class="appearance-none"
          />
          <span>All</span>
        </label>
        <label
          v-for="continent in availableContinents"
          :key="continent"
          class="pill"
        >
          <input
            v-model="filter"
            type="radio"
            name="continent"
            :value="continent"
            class="appearance-none"
          />
          <span>{{
            continentLabels[continent as keyof typeof continentLabels] ||
            continent
          }}</span>
        </label>
      </div>
    </fieldset>
    <ul class="flex flex-col items-center gap-y-12 relative">
      <template v-for="show in shows" :key="show._id">
        <Show
          v-if="filter === 'all' || show.continent === filter"
          v-bind="show"
        />
      </template>
    </ul>
    <footer class="relative">
      <img
        src="/img/footer.webp"
        alt="illustration of mountains"
        class="max-w-[12rem]"
      />
    </footer>
  </div>
</template>
