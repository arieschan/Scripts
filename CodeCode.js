    (function() {
        document.getElementById("getcode").onclick = function() { 
        var ten = document.getElementById("text").value;
		var key1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$(%+^:.,|<)[]";
		var key2 = "3z_x5vktq_72igeu6jcbnmd1pr_0ol89asyw.f,h|=.,|<)[]";
		var a = key1.split('');
		var b = key2.split('');
		var c = ten.split('');
		var temp = "X";
		for (var i =0 ; i <ten.length;i++){
			for (var j = 0 ; j < key2.length;j++){
				if(c[i] == b[j]){
					if (a[j]=='$')
						temp+='.';
					else
						temp+=a[j];
					break;
				}
			}
		}
		document.getElementById("code").innerHTML = "Code : "+temp;
        };
    })();
