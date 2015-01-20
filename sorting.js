var bubbleSort =  function(arr){
	for (var i=0; i<arr.length-1; i++){
		for (var j=0; j<arr.length-i; j++){
			if(arr[j]>arr[j+1]){
				var temp =  arr[j+1];
				arr[j+1]=arr[j];
				arr[j]=temp;
			}

		}
	}
	return arr;

};

var merge =  function(arr1, arr2){
	var answer = [];
	while(arr1.length!==0 && arr2.length!==0){
		if(arr1[0]<arr2[0]){
			answer.push(arr1.shift());
		} else {
			answer.push(arr2.shift());
		}
	}
	while(arr2.length!==0){
		answer.push(arr2.shift());
	}
	while(arr1.length!==0){
		answer.push(arr1.shift());
	}
	return answer;
};


var mergeSort =  function(arr){
	if(arr.length<=1){
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid);

	left=mergeSort(left);
	right=mergeSort(right);
	return merge(left,right);
};