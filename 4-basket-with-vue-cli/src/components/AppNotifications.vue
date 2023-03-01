<template>
  <div v-if="providedData.notifications.length">
    <div v-for="notification in providedData.notifications" :key="notification.id">
      <div class="notification notification-{{notification.class_name}}">{{ notification.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["providedData"]
}
</script>