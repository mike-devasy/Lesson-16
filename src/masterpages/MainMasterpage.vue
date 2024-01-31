<template>
		<nav>
			<router-link to="/"> Home </router-link> | <router-link :to="{ name: 'drivers' }"> Drivers </router-link> |
			<router-link :to="{ name: 'busses' }"> Busses </router-link>
			|
			<router-link :to="{ name: 'assignments' }"> Assignments </router-link>
			|
			<router-link to="/about"> About </router-link> |
			<router-link to="/contacts"> My Contacts </router-link>
	</nav>
      
	 
	<slot></slot>

</template>

<script>
	export default {
		name:'MainMasterpage',
 
	}
</script>

<style lang="scss" scoped>

</style>