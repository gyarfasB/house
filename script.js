class Helyseg{

    hosszusag = -1
    szelesseg = -1
    magassag  = -1

    constructor(hosszusag, szelesseg, magassag){
        this.hosszusag = hosszusag;
        this.szelesseg = szelesseg;
        this.magassag = magassag;
    }

    getAlapterulet()
{
    return (this.szelesseg*this.hosszusag)/10000
}
getMennyezet()
{
    return this.getAlapterulet()
}
getFalfelulet()
{
    return ((2*this.szelesseg*this.magassag)+(2*this.hosszusag*this.magassag))/10000
}
} 

//--------------------------------------SZÁMOL----------------------------------

document.getElementById('SumAll').addEventListener('click', function(){
    let hossz = document.getElementById('hossz').value;
    let szé = document.getElementById('szel').value;
    let mag = document.getElementById('mag').value;

const enSzobam = new Helyseg(hossz, szé, mag)

document.getElementById('alapterulet').innerHTML = enSzobam.getAlapterulet() + ' m2'

let checkbox = document.getElementById('mennyezetCheck')
if(checkbox.checked == true){
    document.getElementById('falfelulet').innerHTML = enSzobam.getFalfelulet() + enSzobam.getMennyezet() + ' m2'
} else {
    document.getElementById('falfelulet').innerHTML = enSzobam.getFalfelulet() + ' m2'
}
})