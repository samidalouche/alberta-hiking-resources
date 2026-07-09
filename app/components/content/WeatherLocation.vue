<script setup lang="ts">
defineProps<{
  name: string
  park?: string
  meteoblueWeather?: string
  meteoblueAirQuality?: string
  meteoblueWebcams?: string
  windyWind?: string
  windyRain?: string
  windySmoke?: string
  windyWebcams?: string
  accuweather?: string
  theweathernetwork?: string
  environmentCanada?: string
  iqair?: string
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
        v-if="meteoblueWeather"
        :to="meteoblueWeather"
        target="_blank"
        icon="i-lucide-cloud-sun"
        color="neutral"
        variant="soft"
        size="sm"
        label="Meteoblue weather"
      />
      <UButton
        v-if="meteoblueAirQuality"
        :to="meteoblueAirQuality"
        target="_blank"
        icon="i-lucide-wind"
        color="neutral"
        variant="soft"
        size="sm"
        label="Meteoblue air quality"
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
        v-if="windyWind"
        :to="windyWind"
        target="_blank"
        icon="i-lucide-wind"
        color="neutral"
        variant="soft"
        size="sm"
        label="Windy wind"
      />
      <UButton
        v-if="windyRain"
        :to="windyRain"
        target="_blank"
        icon="i-lucide-cloud-rain"
        color="neutral"
        variant="soft"
        size="sm"
        label="Windy rain"
      />
      <UButton
        v-if="windySmoke"
        :to="windySmoke"
        target="_blank"
        icon="i-lucide-flame"
        color="neutral"
        variant="soft"
        size="sm"
        label="Windy smoke"
      />
      <UButton
        v-if="windyWebcams"
        :to="windyWebcams"
        target="_blank"
        icon="i-lucide-camera"
        color="neutral"
        variant="soft"
        size="sm"
        label="Windy webcams"
      />
      <UButton
        v-if="iqair"
        :to="iqair"
        target="_blank"
        icon="i-lucide-gauge"
        color="neutral"
        variant="soft"
        size="sm"
        label="IQAir"
      />
      <UButton
        v-if="accuweather"
        :to="accuweather"
        target="_blank"
        icon="i-lucide-thermometer-sun"
        color="neutral"
        variant="soft"
        size="sm"
        label="Accuweather"
      />
      <UButton
        v-if="theweathernetwork"
        :to="theweathernetwork"
        target="_blank"
        icon="i-lucide-cloud-sun-rain"
        color="neutral"
        variant="soft"
        size="sm"
        label="The Weather Network"
      />
      <UButton
        v-if="environmentCanada"
        :to="environmentCanada"
        target="_blank"
        icon="i-lucide-radar"
        color="neutral"
        variant="soft"
        size="sm"
        label="Environment Canada"
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
