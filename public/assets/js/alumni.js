

fetch("https://api.apispreadsheets.com/data/10244/").then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(
            data=>{

            console.log(data.data);
            if (data.data.length > 0) {

              var temp = "";
              data.data.forEach((data) => {
                temp += "<tr>";
                temp += "<td>" + "<p>&#128512;</p>" + "</td>";
                temp += "<td>" +"<strong>"+ data.Nama +"</strong>"+ "</td>";
                temp += "<td>" +"<strong>"+ data.Angkatan +"</strong>"+ "</td>";
                // temp += "<td>" +"<strong>"+ data.Pesan_dan_Doa +"</strong>"+ "</td>";
              });
              document.getElementById('data').innerHTML = temp;
            }
          }

            ).catch(err => console.log(err))
	}
	else{
		// ERROR
	}
})




