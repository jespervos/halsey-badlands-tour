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
</script>

<template>
  <div class="flex flex-col items-center gap-y-16">
    <header>
      <h1 class="sr-only">Halsey Back to Badlands, The Tour</h1>
      <img
        src="/img/header.webp"
        alt="Halsey back to badlands, the tour"
        class="max-w-[25rem]"
      />
    </header>
    <fieldset>
      <legend class="sr-only">Filter by continent</legend>
      <div class="flex gap-2 flex-wrap">
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
        <label class="pill">
          <input
            v-model="filter"
            type="radio"
            name="continent"
            value="north-america"
            class="appearance-none"
          />
          <span>North America</span>
        </label>
        <label class="pill">
          <input
            v-model="filter"
            type="radio"
            name="continent"
            value="uk-europe"
            class="appearance-none"
          />
          <span>UK & Europe</span>
        </label>
        <label class="pill">
          <input
            v-model="filter"
            type="radio"
            name="continent"
            value="australia"
            class="appearance-none"
          />
          <span>Australia</span>
        </label>
      </div>
    </fieldset>
    <ul class="flex flex-col items-center gap-y-12">
      <template v-for="show in shows" :key="show._id">
        <Show
          v-if="filter === 'all' || show.continent === filter"
          v-bind="show"
        />
      </template>
    </ul>
    <footer>
      <img
        src="/img/footer.webp"
        alt="illustration of mountains"
        class="max-w-[12rem]"
      />
    </footer>
  </div>
</template>
