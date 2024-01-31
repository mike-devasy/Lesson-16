<template>
<v-select   
v-model="assignment.driverId"
      :items="getDriversList"
      item-value="id"
      label="Шофер" :item-props="driverProps">
		</v-select>
    <v-sheet class=" text-h5 mb-4">
			<v-select   
       v-model="assignment.busId"
      :items="getBusesList"
      item-value="id"
      label="Автобус" :item-props="busProps">
		</v-select>
     
    </v-sheet>
    <v-btn class=" bg-indigo" height="50" @click="odAdd">Додати призначення</v-btn>
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
				driverProps (item) {
        return {
          title: item.name,
          subtitle: item.experience,
        }
      },
				busProps (item) {
        return {
          title: item.number,
          subtitle: item.placesNumber,
        }
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
