var mergeSortObj = {
	a:new Array(1,4,3,6,5,7,4,56),
	sort:function(){
			if(this.a.length<2)return this;

			var si = 0;
			var ei = this.a.length;

			var r = Math.round((si + ei)/2);

			var left = this.a.slice(si,r);
			var right = this.a.slice(r);

			//var merged = merge(left,right);
			var leftObj = Object.create(mergeSortObj);
			var rightObj = Object.create(mergeSortObj);
			leftObj.a = left;
			rightObj.a = right;

			return this.merge(leftObj.sort(),rightObj.sort());
		},
	merge:function(left,right){
			var ll = left.a.length;
			var rl = right.a.length;

			var merged = new Array(ll+rl);
			var mergedObj = Object.create(mergeSortObj);
			mergedObj.a = merged;


			var i,j,k;
			i=j=k=0;

			for(;k<mergedObj.a.length;k++){
				if(left.a[i] < right.a[j]){
					mergedObj.a[k++] = left.a[i++];
				} else{
					mergedObj.a[k++] = right.a[j++];
				}
			}
			return mergedObj;
		}
}

mergeSortObj1 = Object.create(mergeSortObj);
mergeSortObj1.a = [1,3,4,5,6,3,2,4];
console.log(mergeSortObj1.sort());
console.log(mergeSortObj1.a);





























