import { createStore } from "vuex";
import buses from '@/store/modules/buses'
import drivers from '@/store/modules/drivers'
import assignments from '@/store/modules/assignments'
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
		buses,
		drivers,
		assignments
	},
});
