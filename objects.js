var cars  = {
name: "Enterprise",  
type: ['economy', 'midsize'],
econ: 100,
econBooked: 90,
mid: 150,
midBooked: 147,

econAvail: function() {
    return this.econ - this.econBooked;
},

midAvail: function() {
    return this.mid - this.midBooked;
},


bookEcon: function() {
    if (this.econAvail() != 0) {
    return this.econBooked++;
    }
},

bookMid: function() {
    if(this.midAvail() != 0) {
    return this.midBooked++;
}
}
};



function update() {
    document.getElementById('name').innerHTML = cars.name;
    document.getElementById('econ').innerHTML = cars.econAvail();
    document.getElementById('mid').innerHTML = cars.midAvail();
    
}

    
function rentEcon() {
    
    cars.bookEcon();
    document.getElementById('econ').innerHTML = cars.econAvail();
    }

 
function rentMid() {
    cars.bookMid();
    document.getElementById('mid').innerHTML = cars.midAvail();

}