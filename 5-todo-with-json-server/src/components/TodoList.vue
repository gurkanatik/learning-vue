<template>
  <ul class="list-group">
    <li class="list-group-item d-flex align-items-center justify-content-between"
        :class="{completed: item.status === 1, pending: item.status === 0, deleted: item.status === 2}"
        v-for="item in $store.state.todoList"
        :key="item.id">
      <span>{{ item.todo }}</span>
      <div>
        <button class="btn btn-sm btn-success mx-1" v-if="item.status !== 1">
          <font-awesome-icon icon="fa-solid fa-check" />
          Move to completed
        </button>
        <button class="btn btn-sm btn-warning mx-1" v-if="item.status !== 0">
          <font-awesome-icon icon="fa-solid fa-spinner fa-spin" class="fa-spin" />
          Move to pending
        </button>
        <button class="btn btn-sm btn-danger mx-1" v-if="item.status !== 2">
          <font-awesome-icon icon="fa-solid fa-trash" />
          Move to deleted
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>