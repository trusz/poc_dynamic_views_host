<script lang="ts">

	type Employee = {
		name: string
		isAdmin: boolean
	}

	function init(){
		if(hasEmployees()){
			return
		}

		addDefaultEmployees()
	}

	function hasEmployees(){
		const empJson = window.localStorage.getItem("employees") ?? ""
		if(!empJson){ return false }
		const employees = JSON.parse(empJson)
		const isArray = Array.isArray(employees)
		if(!isArray){ return false }


		const isEmpty = employees.length === 0
		if(isEmpty){
			return false
		}

		return true
	}

	function addDefaultEmployees(){
		const employees: Employee[] = [
			{
				name:   "Leanne Graham",
				isAdmin:false,
			},
			{
				name: "Ervin Howell",
				isAdmin:false,
			},
			{
				name: "Clementine Bauch",
				isAdmin: false,
			},
			{
				name: "Patricia Lebsack",
				isAdmin: false,
			},
			{
				name: "Chelsey Dietrich",
				isAdmin: false,
			},
			{
				name: "Mrs. Dennis Schulist",
				isAdmin: false,
			},
		]

		const empJson = JSON.stringify(employees)
		window.localStorage.setItem("employees", empJson)
	}


	init()

</script>

