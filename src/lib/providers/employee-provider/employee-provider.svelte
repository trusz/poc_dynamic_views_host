<script lang="ts">

	type Employee = {
		id: number,
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
				id: crypto.randomUUID(),
				name:   "Leanne Graham",
				isAdmin:false,
			},
			{
				id: crypto.randomUUID(),
				name: "Ervin Howell",
				isAdmin:false,
			},
			{
				id: crypto.randomUUID(),
				name: "Clementine Bauch",
				isAdmin: false,
			},
			{
				id: crypto.randomUUID(),
				name: "Patricia Lebsack",
				isAdmin: false,
			},
			{
				id: crypto.randomUUID(),
				name: "Chelsey Dietrich",
				isAdmin: false,
			},
			{
				id: crypto.randomUUID(),
				name: "Mrs. Dennis Schulist",
				isAdmin: false,
			},
		]

		const empJson = JSON.stringify(employees)
		window.localStorage.setItem("employees", empJson)
	}


	init()

</script>

