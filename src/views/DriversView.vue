<template>
    <main-masterpage>
			 <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError">Error</div>
			<v-sheet   width="800" class="d-flex justify-space-between ">
					<drivers-list :drivers-list="getFilteredList"/>
							<v-sheet >
						<v-sheet   class="mb-1 text-h6  text-indigo-darken-1">Введіть бажаний стаж шоферу:</v-sheet>
			<v-sheet fast-fail >
				<v-text-field
					v-model.number="searchExperienceMin"
					label="Мінімальний  стаж шофера"
							type="number"
				></v-text-field>
				<v-text-field
					v-model.number="searchExperienceMax"
					label="Максімальний  стаж шофера"
							type="number"
				></v-text-field>
						<v-btn 
						type="button" block  class="mt-2" @click="loadFilteredData([{fieldTitle:'experience', compareOperator: '>=', valueToCompare:searchExperienceMin},{fieldTitle:'experience', compareOperator: '<=', valueToCompare:searchExperienceMax}])">Фільтрувати</v-btn>
				<v-btn type="button" block   class="mt-2"  @click="onClear">Clear Filter</v-btn>
			</v-sheet>
				</v-sheet>
			</v-sheet>v-s
		</main-masterpage>
</template>

<script>
import DriversList from '@/components/DriversList.vue'
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'DriversView',
		components: {
        DriversList,
				MainMasterpage
    },
		data() {
        return {
          searchExperienceMin:null,
          searchExperienceMax:null,
        }
			},
		computed: {
			...mapGetters('drivers', ['getItemsList', 'isLoading', 'hasError']),
			getFilteredList() {
				return this.getItemsList
			}
		},
			methods: {
        ...mapActions('drivers', ['loadList', 'loadFilteredData']),
				onClear(){
					this.loadList()
					this.searchExperienceMin = null
					this.searchExperienceMax = null
				}
    },
}
</script>

<style lang="scss" scoped></style>
