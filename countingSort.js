var countingSortObj = {
	a:[],
	initializeArray: function(length,val){
		var arr=[],i;
		for(i=0;i<length;i++){
			arr[i]=val;
		}
		return arr;
	},
	sort: function(){
		var i;
		var c=this.initializeArray(this.a.length,0);
		var b=this.initializeArray(this.a.length,0);
		for(i=0;i<this.a.length;i++)
			c[this.a[i]]++;
		for(i=1;i<this.a.length;i++)
			c[i]+=c[i-1];
		for(i=0;i<this.a.length;i++){
			b[c[this.a[i]]-1]=this.a[i];
			c[this.a[i]]--;
		}
		return b;
		}
};

//var param = [1,2,4,3,6,9,0,8,4,3];
var submit_=document.getElementById("btnSubmit");
submit_.addEventListener("click",function(e){
  var inputSequence=document.getElementById("txtInputSequence").value;
  if(inputSequence!==null){
    var data=inputSequence.split(" ");
    var intData=toIntArray(data);  
    countingSortObj1=Object.create(countingSortObj);
    countingSortObj1.a=intData;
    document.getElementById("sortedSequence").innerHTML=countingSortObj1.sort();  
  }
});

function toIntArray(stringarr){
  var intarr=[];
  var i;
  for(i=0;i<stringarr.length;i++){
    intarr[i]=parseInt(stringarr[i]);
  }
  return intarr;
}

// countingSortObj1 = Object.create(countingSortObj);
// countingSortObj1.a = param;
// console.log(countingSortObj1.sort());



































// function countingSort(a){
// 	var i;
// 	var c=initializeArray(this.a.length,0);
// 	var b=initializeArray(this.a.length,0);
// 	for(i=0;i<this.a.length;i++)
// 		c[a[i]]++;
// 	for(i=1;i<this.a.length;i++)
// 		c[i]+=c[i-1];
// 	for(i=0;i<this.a.length;i++){
// 		b[c[a[i]]-1]=a[i];
// 		c[a[i]]--;
// 	}
// 	return b;
// }

// //creates an array of specified size with given initial value
// function initializeArray(length, val){
// 	var arr=[],i;
// 	for(i=0;i<length;i++){
// 		arr[i]=val;
// 	}
// 	return arr;
// }

//console.log(countingSort(param));