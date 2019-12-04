async function updateTable() {
	let extractedData;
	try{
	    let url = 'https://api.coinlore.com/api/tickers/';
        let response = await fetch(url);
        extractedData = await response.json();
    } catch(err) {
    	alert(err.message);
    }

    let table = document.querySelector(".theTable").lastChild;
    let i,j,a,b;
     /1/.test(location.pathname) ? ( i = 0, a = 10) : /2/.test(location.pathname) ? (i = 10, a = 20) : /3/.test(location.pathname) ? (i = 20, a = 30) : (i = 30, a = 40);
     for (i; i < a; i++) {
    	let row = document.createElement("tr");
    	let column;

	    let data = [extractedData.data[i].symbol,extractedData.data[i].name,"$"+ extractedData.data[i].price_usd,extractedData.data[i].tsupply +" "+ extractedData.data[i].symbol];
	    for (let j = 0; j < 4; j++) {
	    	column = document.createElement("td");
	    	let columnData = document.createTextNode(data[j]);
	    	column.appendChild(columnData);
	    	row.appendChild(column);
	    }
	    table.insertBefore(row, document.querySelector(".lastRow"));
    }

    let listContainer = document.querySelector(".theTableOnSmallScreen");
    let list = document.createElement("ul");

     /1/.test(location.pathname) ? (j = 0, b = 10) : /2/.test(location.pathname) ? (j = 10, b = 20) : /3/.test(location.pathname)? (j = 20, b = 30) : (j = 30, b = 40);
        for(j; j < b; j++){
    	let item, heading, content;
    	let listItems = document.createElement("li");
	    let data = [extractedData.data[j].symbol,extractedData.data[j].name,"$"+ extractedData.data[j].price_usd,extractedData.data[j].tsupply +" "+ extractedData.data[j].symbol];
	    let headings = ["Coin", "Code", "Price", "Total Supply"];
	    let icons =["💰", "📄", "🤑", "📉"]
	    for (let k = 0; k < 4; k++) {
	    	item = document.createElement("div");
	    	heading = document.createElement("h3");
	    	content = document.createElement("p");
	    	heading.innerHTML = icons[k]+headings[k];
	    	content.innerHTML = data[k];
	    	item.appendChild(heading);
	    	item.appendChild(content);
	    	listItems.appendChild(item);
	    }
	    list.appendChild(listItems);
	}
	listContainer.insertBefore(list, document.querySelector(".navigatePage"));
}
updateTable();