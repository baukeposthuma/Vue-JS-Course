<template>
    <p>Server Status: {{ status }}</p>
</template>

<script>
export default {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = "Normal"
        }
    }
};
</script>

<style lang="scss">
</style>
