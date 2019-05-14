<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <server-list :servers="servers" @switchServer="selectedServer = $event"></server-list>
            <server-details :selectedServerId="selectedServer" :servers="servers"></server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import ServersList from './../../Components/Servers/ServersList.vue'
import ServerDetails from './../../Components/Servers/ServerDetails.vue'

export default {
    data: () => {
        return {
            selectedServer: 1,
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Normal' },
            ]
        }
    },
    methods: {
        changeSelectedServer: (serverId) => {
            this.selectedServer = serverId
            console.log(this.servers);
        }
    },
    components: {
        'server-list': ServersList,
        'server-details': ServerDetails
    }
}
</script>
