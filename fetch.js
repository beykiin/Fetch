veriGetir= async ()=>{
    let veri=await fetch("https://randomuser.me/api/?results=50")
    console.log(veri)
    let veri2=await veri.text()
    let veri3=JSON.parse(veri2)
    console.log(veri2)
    console.log(veri3)
    console.log(veri3["results"][0].name.first)
    
}
// veriGetir()

veriGetir2=()=>{
    fetch("https://randomuser.me/api/?results=50")
    .then((veri)=>veri.json())
    .then((sonuc)=>console.log(sonuc))
}
veriGetir2()