
// product_page....>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response => response.json())
.then(data => showInfoForListing(data));


function showInfoForListing(data){
    for(let i=0; i< data.length; i++){
        let user=data[i];
        document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
    }
}