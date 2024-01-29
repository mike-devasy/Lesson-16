<template>
    <v-sheet  class="mb-4 pl-4 text-h4  text-indigo-darken-1">Додавання призначення</v-sheet>
    <v-sheet class="pl-4 text-h5 mb-4">
        <v-sheet class="pl-4 text-h5 mb-4" width="500"
            >Шофер

            <select v-model="assignment.driverId">
                <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">
                    {{ driver.name }} - {{ driver.experience }}
                </option>
            </select>
        </v-sheet>
    </v-sheet>

 
    <v-sheet class="pl-4 text-h5 mb-4">
        <v-sheet class="pl-4 text-h5 mb-4" width="500"
            >Автобус

            <select v-model="assignment.busId">
                <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
                    {{ bus.number }} - {{ bus.placesNumber }}
                </option>
            </select>
        </v-sheet>
    </v-sheet>
    <v-btn class="ml-4 bg-indigo" @click="odAdd">Додати призначення</v-btn>
</template>
 

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssignmentCreator',

    data() {
        return {
            assignment: {},
        }
    },

    computed: {
        ...mapGetters('drivers', {getDriversList: 'getItemsList'}),
        ...mapGetters('buses', {getBusesList:'getItemsList'}),
		 
    },
created () {
	this.loadDriversList()
	this.loadBusesList()
},
    methods: {
        ...mapActions('assignments', ['addItem']),
        ...mapActions('drivers', {loadDriversList:'loadList'}),
        ...mapActions('buses', {loadBusesList:'loadList'}),
        odAdd() {
            this.addItem(this.assignment)
            this.assignment = {}
        },
    },
}
</script>

<style lang="scss" scoped>
select{
	width: 300px;
	padding-left: 40px;
}
</style>
