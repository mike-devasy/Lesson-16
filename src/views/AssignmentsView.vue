<template>
	<main-masterpage>
		<div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError">Error</div>
					<v-sheet class="d-flex">
						<assignments-list />
    <v-sheet  class="ml-12">
			<v-sheet  class="mb-4 pl-4 text-h4  text-indigo-darken-1">Додавання призначення</v-sheet>
											<assignment-creator />
		</v-sheet> 
					</v-sheet>
	</main-masterpage>
  
</template>

<script>
import AssignmentsList from '@/components/AssignmentsList.vue'
import AssignmentCreator from '@/components/AssignmentCreator.vue'
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'AssignmentsView',
    components: { AssignmentsList, AssignmentCreator, MainMasterpage },
		computed: {
		...mapGetters('assignments', ['isLoading', 'hasError'])
		},
}
</script>

<style lang="scss" scoped></style>
