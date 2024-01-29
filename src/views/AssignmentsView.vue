<template>
	<main-masterpage>
		<div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError">Error</div>
					<assignments-list />
    <assignment-creator />
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
