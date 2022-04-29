target = $('.browser-frame');
Draggable.create(target, { trigger: "#drag-handle"});

var handleResize = $("<div class='resize-handle'></div>").appendTo(target);


Draggable.create(handleResize, {
	type:"top,left",
	onPress: function(e) {
		e.stopPropagation(); 
	},
	onDrag: function(e) {
		parent = this.target.parentNode
		TweenLite.set(parent, { width: this.x, height: this.y - 132 - 55});
	}
});


// @dev for some reason this was giving the wrong block number...
//let web3 = new Web3(Web3.givenProvider);

/*
	web3.eth.getBlockNumber().then(data => {
	  document.getElementById('blockNumber').innerHTML = "Current Ethereum Block Number: " + data;
	});
*/

async function get() {
    let url = 'https://api.blockcypher.com/v1/eth/main'
    let obj = await (await fetch(url)).json(); 
    //console.log(obj);
    return obj;
}

setInterval(async function () {   

	var block = await get();
	

	document.getElementById('blockNumber').innerHTML = "Current Ethereum Block Number: " + block.height;
	
	console.log("Hello viewer. Here's the eth block number: " + block.height);

}, 10000);
