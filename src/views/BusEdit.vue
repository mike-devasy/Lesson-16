<template>
 
		<v-sheet width="400" class="mx-auto pt-10">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="busData.number"
        label="Номер автобуса"
      ></v-text-field>

      <v-text-field
        v-model.number="busData.placesNumber"
        label="Кількість місць"
				type="number"
      ></v-text-field>
			<v-btn type="button" block  @click="onAction" class="mt-2">{{ actionButtonTitle }}</v-btn>
      <v-btn type="button" block  @click="onCancel"  class="mt-2">Відмінити</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BusEdit',

    data() {
        return {
            busData: {},
						busCopy:null
        }
    },

    computed: {
        ...mapGetters('buses', ['getItemById']),
        receivedBusId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedBusId ? 'Зберегти' : 'Створити'
        },
    },

    created() {
        this.busData = { ...this.getItemById(this.receivedBusId) }
    },

    methods: {
        ...mapActions('buses', ['addItem', 'updateItem']),
	 
        onAction() {
            if (!this.receivedBusId) this.addItem(this.busData)
            else {
					this.busCopy = this.getItemById(this.receivedBusId)
							const data = {}
							if(this.busData.number !== this.busCopy.number) data.number = this.busData.number
							if(this.busData.placesNumber !== this.busCopy.placesNumber) data.placesNumber = this.busData.placesNumber

                this.updateItem({
                    itemId: this.receivedBusId,
                    data
                })
								this.busData = {}

					} 
            this.$router.push({ name: 'busses' })
        },
        onCancel() {
            this.$router.push({ name: 'busses' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
