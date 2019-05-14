<template>
    <li class="list-group-item" @click="onClick">
        <p>Server #{{ serverId }}</p>
    </li>
</template>

<script>
export default {
    props: {
        serverId: Number,
        serverStatus: String,
        onClick: Function
    },
}
</script>

<style scoped>
    li:hover {
        cursor: pointer;
        background-color: rgb(236, 236, 236);
    }
</style>
