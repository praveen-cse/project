function fun() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var k=JSON.parse(this.responseText);
        var dd='<table border="1px bold black"><tr><th>Id</th><th>Product</th><th>Price</th><th>Category</th></tr>';
        for(i=0;i<k.length;i++)
        dd+='<tr><td>'+k[i].item_id+'</td><td>'+k[i].product_name+'</td><td>'+k[i].price+'</td><td>'+k[i].category+'</td></tr>';
        dd+='</table>'
        document.getElementById('productlist').innerHTML=dd;
    }
  }
    xhttp.open("GET", "http://localhost:3000/GETALL", true);
    xhttp.send();
  }