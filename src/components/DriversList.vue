<template>
 
    <v-sheet>
        <v-list lines="one" class="pa-4 fill-height" style="width: 430px; font-size: 20px">
            <v-sheet v-for="driver in driversList" :key="driver.id" class="d-flex justify-space-between mb-6">
                <v-sheet
                    class="d-flex justify-space-between ma-1 pa-1"
                    style="min-width: 300px; background-color: transparent"
                >
                    <v-sheet style="display: inline-block">{{ driver.name }}</v-sheet>
                    <v-sheet style="display: inline-block">{{ driver.experience }}</v-sheet>
                </v-sheet>
                <v-sheet class="d-flex justify-space-between">
                    <v-sheet class="ma-1 pa-1">
                        <router-link
                            :to="{
                                name: 'drivers-config',
                                params: {
                                    id: driver.id,
                                },
                            }"
                            @click="onEdit(driver.id)"
                        >
                            <font-awesome-icon :icon="['far', 'pen-to-square']" style="color: #0d27c9" />
                        </router-link>
                    </v-sheet>
                    <v-sheet class="ma-1 pa-1">
                        <button @click="deleteItem(driver.id)">
                            <font-awesome-icon 
														    fade
                                :icon="['far', 'trash-can']"
                                style="color: #f61e1e; display: inline-block"
                            />
                        </button>
                    </v-sheet>
                </v-sheet>
            </v-sheet>
        </v-list>
        <v-btn class="ml-4 bg-indigo-darken-1" width="200" height="40">
        <router-link :to="{ name: 'drivers-config' }" style="color: aliceblue"> Додати водія </router-link>
        </v-btn>
    </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DriversList',
props: {
	driversList: {
		type: Array,
		required:true
	},
},
    created() {
        this.loadList()
    },
    methods: {
        ...mapActions('drivers', ['deleteItem', 'loadList']),
				onEdit(driverId) {
            this.$router.push({
                name: 'drivers-config',
                params: {
                    id: driverId,
                },
            })
        },	
    },
}
</script>
