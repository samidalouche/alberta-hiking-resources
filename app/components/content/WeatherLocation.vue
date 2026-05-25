<script setup lang="ts">
defineProps<{
  name: string
  park?: string
  meteoblueForecast?: string
  meteoblueWebcams?: string
  accuweatherForecast?: string
  googleMaps?: string
  extraWebcams?: Array<{ label: string, url: string }>
}>()
</script>

<template>
  <div class="rounded-lg border border-default bg-default p-4 flex flex-col gap-3">
    <div>
      <p class="font-semibold text-highlighted">
        {{ name }}
      </p>
      <p
        v-if="park"
        class="text-sm text-muted"
      >
        {{ park }}
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <UButton
        v-if="meteoblueForecast"
        :to="meteoblueForecast"
        target="_blank"
        icon="i-lucide-cloud-sun"
        color="neutral"
        variant="soft"
        size="sm"
        label="Meteoblue forecast"
      />
      <UButton
        v-if="meteoblueWebcams"
        :to="meteoblueWebcams"
        target="_blank"
        icon="i-lucide-camera"
        color="neutral"
        variant="soft"
        size="sm"
        label="Meteoblue webcams"
      />
      <UButton
        v-for="webcam in extraWebcams"
        :key="webcam.url"
        :to="webcam.url"
        target="_blank"
        icon="i-lucide-camera"
        color="neutral"
        variant="soft"
        size="sm"
        :label="webcam.label"
      />
      <UButton
        v-if="accuweatherForecast"
        :to="accuweatherForecast"
        target="_blank"
        icon="i-lucide-thermometer-sun"
        color="neutral"
        variant="soft"
        size="sm"
        label="Accuweather forecast"
      />
      <UButton
        v-if="googleMaps"
        :to="googleMaps"
        target="_blank"
        icon="i-lucide-map-pin"
        color="neutral"
        variant="soft"
        size="sm"
        label="Google maps"
      />
    </div>
  </div>
</template>
