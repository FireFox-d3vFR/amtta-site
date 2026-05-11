<script setup lang="ts">
import type { NavigationItem } from "../../lib/content/navigation";

defineProps<{
  items: NavigationItem[];
}>();
</script>

<template>
  <details class="group lg:hidden">
    <summary
      class="list-none rounded border border-white/40 px-3 py-2 text-sm font-semibold text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-800"
      aria-label="Ouvrir ou fermer la navigation principale"
    >
      Menu
    </summary>

    <nav
      class="absolute inset-x-0 top-full border-t border-green-900/20 bg-white text-green-950 shadow-lg"
      aria-label="Navigation principale mobile"
    >
      <ul class="mx-auto max-w-6xl px-4 py-3">
        <li v-for="item in items" :key="item.href" class="border-b border-green-900/10 last:border-b-0">
          <a
            :href="item.href"
            class="block rounded py-3 text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-green-700"
          >
            {{ item.label }}
          </a>

          <ul v-if="item.children?.length" class="pb-3 pl-4">
            <li v-for="child in item.children" :key="child.href">
              <a
                :href="child.href"
                class="block rounded py-2 text-sm text-green-900 outline-none focus-visible:ring-2 focus-visible:ring-green-700"
              >
                {{ child.label }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </details>
</template>
