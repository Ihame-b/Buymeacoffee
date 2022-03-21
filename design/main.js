const form = document.getElementById('form');
form.addEventListener("submit", payNow);

function payNow(e) {
 e.preventDefault();
 
    FlutterwaveCheckout({
      
      public_key: "FLWPUBK_TEST-f0cc1b7d0d1eb823850c4a1ce19efbe0-X",
      tx_ref: "AK_"+Math.floor((Math.random() * 1000000000) + 1),
      amount: document.getElementById("amount").value,
      currency: "RWF",
	  
      //payment_options: "card,mobilemoney,ussd",
	  
      customer: {
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phoneNumber").value,
        name: document.getElementById("fullName").value,
      },
	  
      callback: (data)=> { 
		  const reference = data.tx_ref;
      alert('Payment complete! Reference: ' + reference);
      },
	  
      customizations: {
        title: "AppKinda",
        description: "FlutterWave Integration in Javascript.",
		    logo: "C:\Users\IHAME\Desktop\WebDesign\IhameWebsite\design\20211128_231345_0000.png",
      },
    });
  }