// Project only for desktops. No mobile support
'use strict'
const data = [
	{ buildingNo: "P11 A", floor: "parter", areaVolume: "64,32", gardenOrAttic: "ogródek", gardenOrAtticVolume: "12", price: "236500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P11 B", floor: "piętro", areaVolume: "75,00", gardenOrAttic: "ogródek", gardenOrAtticVolume: "85", price: "486500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P12 A", floor: "parter", areaVolume: "64,32", gardenOrAttic: "strych", gardenOrAtticVolume: "99", price: "256500", blueprint: "true", status: "wolny" },
	{ buildingNo: "P12 B", floor: "parter", areaVolume: "60,00", gardenOrAttic: "strych", gardenOrAtticVolume: "19", price: "286500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P13 A", floor: "piętro", areaVolume: "45,00", gardenOrAttic: "ogródek", gardenOrAtticVolume: "78", price: "716500", blueprint: "true", status: "rezerwacja" },
	{ buildingNo: "P13 B", floor: "piętro", areaVolume: "52,55", gardenOrAttic: "ogródek", gardenOrAtticVolume: "81", price: "368000", blueprint: "true", status: "wolny" },
	{ buildingNo: "P14 A", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P14 B", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P15 A", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P15 B", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "wolny" },
	{ buildingNo: "P16 A", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P16 B", floor: "piętro", areaVolume: "42,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "384500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P17 A", floor: "piętro", areaVolume: "72,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "330000", blueprint: "true", status: "wolny" },
	{ buildingNo: "P17 B", floor: "piętro", areaVolume: "94,60", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "510000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P18 A", floor: "parter", areaVolume: "64,32", gardenOrAttic: "ogródek", gardenOrAtticVolume: "12", price: "236500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P18 B", floor: "piętro", areaVolume: "75,00", gardenOrAttic: "ogródek", gardenOrAtticVolume: "85", price: "486500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P19 A", floor: "parter", areaVolume: "64,32", gardenOrAttic: "strych", gardenOrAtticVolume: "99", price: "256500", blueprint: "true", status: "wolny" },
	{ buildingNo: "P19 B", floor: "parter", areaVolume: "60,00", gardenOrAttic: "strych", gardenOrAtticVolume: "19", price: "286500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P20 A", floor: "piętro", areaVolume: "45,00", gardenOrAttic: "ogródek", gardenOrAtticVolume: "78", price: "716500", blueprint: "true", status: "rezerwacja" },
	{ buildingNo: "P20 B", floor: "piętro", areaVolume: "52,55", gardenOrAttic: "ogródek", gardenOrAtticVolume: "81", price: "368000", blueprint: "true", status: "wolny" },
	{ buildingNo: "P21 A", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P21 B", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P22 A", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P22 B", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "wolny" },
	{ buildingNo: "P23 A", floor: "piętro", areaVolume: "82,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "210000", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P23 B", floor: "piętro", areaVolume: "42,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "384500", blueprint: "true", status: "sprzedany" },
	{ buildingNo: "P24 A", floor: "piętro", areaVolume: "72,40", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "330000", blueprint: "true", status: "wolny" },
	{ buildingNo: "P24 B", floor: "piętro", areaVolume: "94,60", gardenOrAttic: "strych", gardenOrAtticVolume: "35", price: "510000", blueprint: "true", status: "sprzedany" }
]

let 	filteredData = data || filteredData, 
	page = 1,
	filterBy = {
		floor: [],
		status: [],
		gardenOrAttic: [],
		price: []
	},
	sortBy = "buildingNo", order = 'asc'

const closeDropdowns = () => {
	const arrows = document.querySelectorAll(".btn-expand i")
	arrows.forEach( arrow => {
		arrow.classList.remove("rotate")
	})
	const options = document.querySelectorAll(".options")
	options.forEach( option => {
		option.setAttribute("aria-hidden", "true")
		option.setAttribute("aria-expanded", "false")
		option.classList.remove("show")
	})
}

const clearSort = () => {
	document.querySelectorAll(".sort-active").forEach( sortArrow => {
		sortArrow.classList.remove("sort-active")
	})
}

const filterCheckboxes = document.querySelectorAll(".filter__checkbox")
filterCheckboxes.forEach(checkbox => {
	checkbox.addEventListener("click", e => {
		if(!filterBy[e.target.name].includes(e.target.value)) {
			filterBy[e.target.name].push(e.target.value)
		} else {
			const index = filterBy[e.target.name].indexOf(e.target.value)
			if (index !== -1) {
				filterBy[e.target.name].splice(index, 1)
			}
		}
	})
	
	const filterBtn = document.querySelector(".btn-filter")
	filterBtn.addEventListener("click", () => {
		page = 1
		filterTable(filterBy)
		drawTable(filteredData)
	})
})

const filterTable = () => {
	const filterByKey = key => item => filterBy[key].length
			? filterBy[key].includes(item[key]) : true
	
	const filterByPrice = key => item => filterBy[key].length
			? filterBy[key] > item[key] : true
	
	filteredData = data
			.filter(filterByKey("status"))
			.filter(filterByKey("gardenOrAttic"))
			.filter(filterByKey("floor"))
			.filter(filterByPrice("price"))
}

const sortButtons = document.querySelectorAll(".sort__buttons")
sortButtons.forEach( btn => {
	btn.addEventListener("click", e => {
		drawTable(filteredData, e.target.dataset.name, e.target.dataset.order)
		clearSort();
		e.target.classList.add("sort-active")
	})
})

const drawTable = (filteredData, sortBy, order) => {
	const tableBody = document.querySelector(".data__body"),
		maxOnPage = 10
	
	closeDropdowns()
	
	tableBody.innerHTML = ""
	appendPaginatorBtns(filteredData)
	
	filteredData = filteredData
		.filter((el, index) => 
			  index <= maxOnPage * page && 
			  index >= maxOnPage * page - maxOnPage
		)
		.sort((a, b) => {
			if(a[sortBy] < b[sortBy]) { 
				return order == "desc" ? 1 : -1
			}
			if(a[sortBy] > b[sortBy]) { 
				return order == "desc" ? -1 : 1
			}
			return 0
		})
		.forEach(filteredDataRow => {
			let statusStyle = "";
			if(filteredDataRow.status == "wolny") { statusStyle = "status-free"}
			if(filteredDataRow.status == "sprzedany") { statusStyle = "status-sold"}
			if(filteredDataRow.status == "rezerwacja") { statusStyle = "status-reservation"}
			
			const tableRow = 
				`<tr class="data__row">
					<td class="data__cell building-no">
						${filteredDataRow.buildingNo}
					</td>
					<td class="data__cell floor">
						${filteredDataRow.floor}
					</td>
					<td class="data__cell area-volume">
						${filteredDataRow.areaVolume} m<sup>2</sup>
					</td>
					<td class="data__cell garden-or-attic-volume">
						${filteredDataRow.gardenOrAttic} 
						${filteredDataRow.gardenOrAtticVolume} m<sup>2</sup>
					</td>
					<td class="data__cell price">
						${filteredDataRow.price.replace(/(\d{3})/g, '$1 ')} zł
					</td>
					<td class="data__cell blueprint">
						${filteredDataRow.blueprint 
						? "<a href=\"https://youtu.be/dQw4w9WgXcQ\" target=\"_blank\">pobierz</a>" : "XD"}
					</td>
					<td class="data__cell status ${statusStyle}">
						${filteredDataRow.status}
					</td>	
				</tr>`
		tableBody.innerHTML += tableRow
	})
}

const paginator = document.querySelector(".paginator")
const appendPaginatorBtns = filteredData => {
	paginator.innerHTML = ""
	if(filteredData.length) {
		const paginatorBtnsQuantity = Math.ceil(filteredData.length / 10)
		for(let i = 1; i <= paginatorBtnsQuantity; i++){
			paginator.innerHTML += `<div class="page page--btn">${i}</div>`
		}
		paginator.children[page-1].classList.add("page--active")
	} else {
		paginator.innerHTML = "<div class=\"page--info\">Brak rekordów</div>"
	}
}

paginator.addEventListener("click", e => {
	for (let i = 0; i < paginator.children.length; i++) {
		paginator.children[i].classList.remove("page--active")
	}
	e.target.classList.add("page--active")
	page = e.target.innerText
	clearSort();
	drawTable(filteredData)
})

drawTable(filteredData)

/////////////////////// dropdown checkboxes

const btnExpandDropdown = document.querySelectorAll(".btn-expand")

btnExpandDropdown.forEach(button => {
	button.addEventListener("click", e => {
		
		const topParentOfButton = e.target.parentNode.parentNode,
			options = topParentOfButton.querySelector(".options"),
			arrowIndicator = e.target.querySelector("i")
		
		let autoCloseDropdown = false
		
		const closeDropdown = () => {	
			options.setAttribute("aria-hidden", "true")
			options.setAttribute("aria-expanded", "false")
			options.classList.remove("show")
			arrowIndicator.classList.remove("rotate")
			autoCloseDropdown = false
		}
		
		const openDropdown = () => {	
			options.setAttribute("aria-hidden", "false")
			options.setAttribute("aria-expanded", "true")
			options.classList.add("show")
			arrowIndicator.classList.add("rotate")
		}
		
		options.addEventListener("mouseleave", e => {
			autoCloseDropdown = true
			window.setTimeout(() => {
				if(options.classList.contains("show") && autoCloseDropdown) {
					closeDropdown()
				}
			}, 2500)	
		})
		options.addEventListener("mouseenter", e => {
			autoCloseDropdown = false
		})
		
		if(options.classList.contains("show")) {
			closeDropdown()
		} else {
			openDropdown()
		}
	})
})

const resetFiltersBtn = document.querySelector(".reset--filters");
resetFiltersBtn.addEventListener("click", () => {
	
	Object.keys(filterBy).forEach( key => {
		filterBy[key] = []
	})
	
	filterCheckboxes.forEach(checkbox => {
		checkbox.checked = false
	})
	
	clearSort();
	
	sortBy = "buildingNo"
	order = 'asc'

	filterTable(filterBy)
	drawTable(filteredData)
})