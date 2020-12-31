<template>
	<el-container>
		<el-aside width="150px">
			<div class="title">Vue Element Admin</div>
			<el-menu
				:default-active="$route.path"
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				:collapse="isCollapse"
				router
			>
				<el-menu-item index="/dashboard">
					<i class="el-icon-menu"></i>
					<span slot="title">Dashboard</span>
				</el-menu-item>
				<el-menu-item index="/documentation">
					<i class="el-icon-menu"></i>
					<span slot="title">Documentation</span>
				</el-menu-item>
				<el-menu-item index="/guide">
					<i class="el-icon-menu"></i>
					<span slot="title">Guide</span>
				</el-menu-item>
				<el-submenu index="/nested">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">Nested Routes</span>
					</template>
					<el-submenu index="/nested/menu1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">Menu1</span>
						</template>
						<el-menu-item index="/nested/menu1/menu1-1">Menu1-1</el-menu-item>
						<el-menu-item index="/nested/menu1/menu1-2">Menu1-2</el-menu-item>
					</el-submenu>
					<el-menu-item index="/nested/menu2">Menu2</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>header</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: 'Layout',
	data() {
		return {
			isCollapse: false
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>

<style lang="scss" scoped></style>
