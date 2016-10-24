var selectionSortObj = {
	a:[],
	sort:function(){
		var i,j,min,l;
		//var a = a;
		l = this.a.length;

		for(j=0;j<l-1;j++){
			min=j;

			for(i=j+1;i<l;i++){
				if(this.a[i]<this.a[min])
					min = i;
			}
			
			if(min != j){

				this.a = this.swap(j,min);
			}
		}
		return this.a;
	},
	swap:function(i,j){
		var temp = this.a[i];
		this.a[i] = this.a[j];
		this.a[j] = temp;

		return this.a;
	}
}

var selectionSortObj1 = Object.create(selectionSortObj);
selectionSortObj1.a = [8,5,2,6,9,3,1,4,7,0];
console.log(selectionSortObj1.sort());

//This code was used initially but now the functional implementation is converted into Object implementation
// function selectionSort(a){
// 	var i,j,min,l;
// 	//var a = a;
// 	l = a.length;

// 	for(j=0;j<l-1;j++){
// 		min=j;

// 		for(i=j+1;i<l;i++){
// 			if(a[i]<a[min])
// 				min = i;
// 		}
		
// 		if(min != j){

// 			a = swap(a,j,min);
// 		}
// 	}

// 	return a;
// }

// function swap(a, i ,j){
// 	var temp = a[i];
// 	a[i] = a[j];
// 	a[j] = temp;

// 	return a;
// }

// var param = [8,5,2,6,9,3,1,4,7,0];

// console.log(selectionSort(param));

