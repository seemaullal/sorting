var bubbleSort =  function(arr){
	stillSwapping = true;
	while (stillSwapping) {
		stillSwapping =  false;
		for (var i=0; i<arr.length-1; i++){
				if(arr[i]>arr[i+1]){
					var temp =  arr[i+1];
					arr[i+1]=arr[i];
					arr[i]=temp;
					stillSwapping = true;
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
	answer=answer.concat(arr1.concat(arr2));
	//answer.concat(arr2);
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

// for(var i=10; i < 20; i++) {
//     var num_items = Math.pow(2,i);
//     var native_test_array = [];
//     var b_test_array = [];
//     var m_test_array = []
//     for(var j=0; j < num_items; j++) {
//         var rand = Math.floor(Math.random() * num_items);
//         native_test_array.push(rand);
//         b_test_array.push(rand);
//         m_test_array.push(rand);
//     }

//     console.time(num_items + "native");
//     native_test_array.sort();
//     console.timeEnd(num_items + "native");

//     console.time(num_items + "bubble");
//     bubbleSort(b_test_array);
//     console.timeEnd(num_items + "bubble");

//     console.time(num_items + "merge");
//     mergeSort(m_test_array);
//     console.timeEnd(num_items + "merge");  
// }