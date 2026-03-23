<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

const rulesUrl = computed(() => `${props.url}/about`)
</script>

<template>
  <ProseCardGroup>
    <ProseCard
      icon="i-lucide-link"
      title="Access Group"
      :to="url"
      target="_blank"
    >
      Access the group.
    </ProseCard>
    <ProseCard
      icon="i-lucide-scale"
      title="Group Rules"
      :to="rulesUrl"
      target="_blank"
    >
      The group rules.
    </ProseCard>
  </ProseCardGroup>
</template>
