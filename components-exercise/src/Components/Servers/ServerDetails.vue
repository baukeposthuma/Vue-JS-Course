<template>
    <div class="col-xs-12 col-sm-6">
        <h5>Server #{{ selectedServerId }}</h5>
        <p>Status: {{ servers[selectedServerId - 1].status }}</p>
        <button @click="rebootServer(selectedServerId - 1)">Reboot server</button>
    </div>
</template>

<script>
export default {
    props: {
        servers: Array,
        selectedServerId: Number
    },
    methods: {
        rebootServer(id) {
            this.servers[id].status = 'Normal'
        }
    }
}
</script>
