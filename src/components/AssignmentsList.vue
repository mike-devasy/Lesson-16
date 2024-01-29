<template>
    <v-sheet>
        <v-sheet class="mb-1 pl-6 text-h4   text-indigo-darken-1">Призначення</v-sheet>
            <v-list lines="one" class="pa-4" style="width: 530px; font-size: 20px">
							<v-sheet 
							v-for="item in getItemsList" :key="item.id"  class="d-flex justify-space-between ma-1 pa-1"
                    style="min-width: 300px; background-color: transparent">
										<v-sheet style="display: inline-block">{{ driverName(item) }}</v-sheet>
                    <v-sheet style="display: inline-block">{{ busNumber(item) }}</v-sheet>
									<v-btn @click="deleteItem(item.id)">Delete</v-btn>
							</v-sheet>
						</v-list>
    </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssignmentsList',

    computed: {
        ...mapGetters('assignments', ['getItemsList']),
        ...mapGetters('buses', {getBus:'getItemById'}),
        ...mapGetters('drivers', {getDriver:'getItemById'}),
  },
    
    created() {
        this.loadList()
    },
    methods: {
        ...mapActions('assignments', ['deleteItem', 'loadList']),
				driverName(item){
					return this. getDriver(item.driverId)?.name

				},
				busNumber(item){
					return this. getBus(item.busId)?.number
				}
    },
}
</script>

<style lang="scss" scoped></style>
