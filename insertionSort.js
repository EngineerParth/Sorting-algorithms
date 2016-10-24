function insertionSort(a){
	var i, j, key;

	for(j=1;j<a.length;j++){
		i=j-1;
		key=a[j];

		while(i>=0 && a[i]>key){
			a[i+1]=a[i];
			i--;
		}
		//a=swap(a,i+1,j);

		a[i+1]=key;

	}
	return a;
}

var param = [1,2,5,4,3,6,7];
console.log(insertionSort(param));