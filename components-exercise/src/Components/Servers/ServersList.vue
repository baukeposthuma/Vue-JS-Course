<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-list-item
                :serverId="server.id"
                :serverStatus="server.status"
                :onClick="() => switchServer(server.id)"
                v-for="server in servers"
                :key="server.id">
            </server-list-item>
        </ul>
    </div>
</template>

<script>
import ServerListItem from './../../Components/Servers/ServerListItem.vue'

export default {
    props: {
        servers: Array
    },
    methods: {
        switchServer(id) {
            this.$emit('switchServer', id)
        }
    },
    components: {
        'server-list-item': ServerListItem
    },
}
</script>
