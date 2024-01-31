<template>
 
		<v-sheet width="400" class="mx-auto">
    <v-form fast-fail  class="mt-10" @submit.prevent>
      <v-text-field
        v-model="driverData.name"
        label="ПІБ шофера"
      ></v-text-field>

      <v-text-field
        v-model.number="driverData.experience"
        label="Стаж шофера"
				type="number"
 
      ></v-text-field>
			<v-btn type="button" block class="mt-2"  @click="onAction" >{{ actionButtonTitle }}</v-btn>
      <v-btn type="button" block class="mt-2"   @click="onCancel"  >Відмінити</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DriverEdit',

    data() {
        return {
            driverData: {},
						driverCopy:null
        }
    },

    computed: {
        ...mapGetters('drivers', ['getItemById']),
        receivedId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedId ? 'Зберегти' : 'Створити'
        },
    },

    created() {
        this.driverData = { ...this.getItemById(this.receivedId) }
    },

    methods: {
        ...mapActions('drivers', ['addItem', 'updateItem']),
				onAction() {
            if (!this.receivedId) this.addItem(this.driverData)
            else {
					this.driverCopy = this.getItemById(this.receivedId)
							const data = {}
							if(this.driverData.name !== this.driverCopy.number) data.name = this.driverData.name
							if(this.driverData.experience !== this.driverCopy.experience) data.experience = this.driverData.experience

                this.updateItem({
                    itemId: this.receivedId,
                    data
                })
								this.driverData = {}

					} 
            this.$router.push({ name: 'drivers' })
        },
        onCancel() {
            this.$router.push({ name: 'drivers' })
        },
    },
}
</script>

<style lang="scss" scoped></style>
