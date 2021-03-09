
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let sortedTowel = [];
  for (let i = 0; i < matrix.length; i++) {	
		if (i % 2 == 1) {
			for (let k = matrix[i].length-1; k >= 0; k--) {
			  sortedTowel = sortedTowel.concat(matrix[i][k]);
			}		
		} else {
				sortedTowel = sortedTowel.concat(matrix[i]);
			}    	
  }
  
	return sortedTowel;
}