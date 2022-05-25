fetch("file.json").then(function(resp){
	return resp.json();
})
.then(function(file){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of file){
		out += `
			<tr>
				<td>${product.machine_name}</td>
				<td>${product.machine_id}</td>
				<td>${product.currrent}</td>
				<td>${product.voltage}</td>
				<td>${product.power_factor}</td>
				<td>${product.active_power}</td>
				<td>${product.apparent_power}</td>
				<td>${product.reactive_power}</td>
				<td>${product.daily_energy}</td>
				<td>${product.monthly_energy}</td>
				<td>${product.yearly_energy}</td>
				<td>${product.idle_daily}</td>
				<td>${product.idle_monthly}</td>
				<td>${product.idle_yearly}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});