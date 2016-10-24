function quickSort(A, i, j){
	
	if(i === j) return;

	var l = A.length-1;
	var up = i+1;
	var down = l;
	var x = A[i];

	while(1){
		while(A[up] < x && up<=l)up++;
		while(A[down] >= x && down>=0)down--;
		if(up < down){
			swap(A, up, down);
		}
		else break;

	}
	swap(A, down, x);
	quickSort(A, i, down-1);
	quickSort(A, down+1, l);
}

function swap(A, up, down){
	var temp = A[up];
	A[up] = A[down];
	A[down] = A[temp];
}

var A = new Array(8,9,7,5,4,3,2,1);
quickSort(A,0,A.length-1);
console.log(A);