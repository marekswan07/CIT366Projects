function Set() {
	
	
	this.intersection = function(listA, listB) {

		if(listA === null || listB === null){
			return null;
		}
    
	   var resultList = []; //create a result list array

			if (listA === null || listB === null ){ // checks for null inputs
				return null; // exit and return null error
			}

			for (var i  = 0; i < listA.length; i++ ){
				var nextValue = listA[i];

				for (var j = 0; j < listB.length; j++){
					if(listB[j] === nextValue){
						resultList.push(listB[j]);
						break;
					}
				}
			}
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];

	   if(listA === null || listB === null){
		   return null;
	   }

	   var SD = this.symmetricDifference(listA,listB);
	   var inter = this.intersection(listA,listB);

	   resultList = inter.concat(SD);

	   resultList.push();


	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

		if(listA === null || listB === null){
			return null;
		}

	   var resultList = [];

        if (listA === null || listB === null ){ // checks for null inputs
            return null; // exit and return null error
        }

        for(var i = 0; i < listA.length; i++){ //loop every element in listA
        	for(var j = 0; j < listB.length;j++){ // loop every element in listB for each element in A
        		var found = false; //this sets to true if a matching element is found
        		if (listA[i] == listB[j]){ //if listA is equal to List B, break the loop and start on new element
        			found = true;
        			break;
				}
            }
            if (found != true){
        		resultList.push(listA[i]); // after every element in listB, if found is still false, add to result array
			}
		}

	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

		if(listA === null || listB === null){
			return null;
		}

	   var resultList = [];

	   var RCA = this.relativeComplement(listA,listB); //gets RC for A/B
	   var RCB = this.relativeComplement(listB,listA); //gets RC for B/A

	   resultList = RCA.concat(RCB); // joins together RCA and RCB arrays into resultList array as elements.

	   resultList.push(); // push results to

       
	   return resultList;

	}
	

}
