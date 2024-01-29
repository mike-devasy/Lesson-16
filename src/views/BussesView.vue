<template>
    <main-masterpage>
			<div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError">Error</div>
			<div v-else>
							<v-list lines="one" class="pa-4" style="width: 430px; font-size: 20px;">
				<v-sheet
			v-for="bus in getItemsList"
			:key="bus.id" class="d-flex justify-space-between  mb-6  "
				> 
			 
				<v-sheet class="d-flex justify-space-between  ma-1 pa-1 " style="min-width: 300px;background-color: transparent;">
					<v-sheet style="display: inline-block;">{{ bus.number }}</v-sheet> 
					 <v-sheet style="display: inline-block;">{{ bus.placesNumber }}</v-sheet>
			
					</v-sheet>
					<v-sheet class="d-flex justify-space-between">
				<v-sheet class="ma-1 pa-1">
					<button @click="onEdit(bus.id)" >
							<font-awesome-icon :icon="['far', 'pen-to-square']" style="color: #0d27c9;" />
					</button>
				</v-sheet>
				<v-sheet class="ma-1 pa-1 ">
					<button @click="deleteItem(bus.id)" >
							<font-awesome-icon fade :icon="['far', 'trash-can']"  style="color: #f61e1e; display: inline-block" />
					</button>
				</v-sheet>
			</v-sheet>
			
			</v-sheet>
			</v-list>
					<v-btn class="ml-4 bg-indigo-darken-1" width="200">
								<router-link :to="{ name: 'busses-config' }" style="color:aliceblue;"> Додати автобус </router-link>
							</v-btn>
			</div>
		</main-masterpage>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
export default {
    name: 'BussesView',
    components:{MainMasterpage},
    computed: {
        ...mapGetters('buses', ['getItemsList', 'isLoading', 'hasError']),
    },
		created() {
        this.loadList()
    },
    methods: {
        ...mapActions('buses', ['deleteItem', 'loadList']),
        onEdit(busId) {
            this.$router.push({
                name: 'busses-config',
                params: {
                    id: busId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.item{
	justify-content: space-between;
}
</style>
