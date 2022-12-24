// elemen html
let modal = document.getElementById("modal");
let floating_button =document.getElementById("floating_button");
let modal_bg = document.getElementById("modal_bg");
let addlist_from = document.getElementById("addlist_from");
let root =document.getElementById("root");
let subtitle =document.getElementById("subtitle");
//data subtitle
subtitle.innerHTML = new Date().toDateString();
//data belanja 
let data_list_belanja = [];
// even listener
floating_button.addEventListener('click', ()=>{
  // modal
  if(modal.style.display == "none"){
    showModal();
    return
    
  }
  //sembunyaikan kembali
  hideModal();
  
})
//even listener modalm_bg
modal_bg.addEventListener("click", ()=>{
  hideModal();

})
// even addlist_from
addlist_from.addEventListener("submit", (event)=>{
  //stop reload page
  event.preventDefault();
  //value input data field
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;
  //push data ke data list belanja
  data_list_belanja.push({
    nama_barang : barang,
    harga_barang : harga,
    tanggal : new Date().toDateString()

  })

  
   //clear input
   event.target.barang.value="";
   event.target.harga.value="";
   hideModal();
   renderToHtml();

})
//show modal
function showModal(){
  modal.style.display = "flex";
  floating_button.style.backgroundColor =' gray'
  floating_button.style.transform = 'rotate(45deg)';
}
//hide modal
function hideModal(){
  modal.style.display = "none";
  floating_button.style.backgroundColor = 'aquamarine'
  floating_button.style.transform = 'rotate(0deg)';
}
//render function
function renderToHtml(){
  //clear element div
  root.innerHTML = "";
  //perulangan
  data_list_belanja.forEach ((e, i)=>{

    root.innerHTML += `
    <div class="card">
    <small> ${e.tanggal} </small>
    <div>
    ${e.nama_barang} <span> Rp. ${e.harga_barang} </span>
    </div>
    <button onclick="handleDelete(${i})"> Selesai </button>
    </div>
    `
  });
}
//fuction dalate item
function handleDelete(index){
  data_list_belanja.splice(index, 1);
  renderToHtml();
}

