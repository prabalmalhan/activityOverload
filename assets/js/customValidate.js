$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#sign-up-form').validate({
	    rules: {
	      name: {
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      password: {
	      	minlength: 6,
	        required: true
	      },
	      confirmation: {
	      	minlength: 6,
	     
	      	equalTo: #password
	      }
	    },
			success: function(element) {
				element
				.text('OK!').addClass('valid')
			}
	  });

});


// Greedy Algorithm	
// Activity Selection -
// Fractional knapsack - natrajan + csbreakdown
// Huffman Code - csbreakdown + mtsucsci
// Task Scheduling - GoGateIt


// krushkals - tushar roy
// prim - yakeel yusuf
// Bellman - bellman-ford in 5 minutes (michael sambol)
// dijkstra - michael sambol
 


// String:
// Naive String matching - Prabhjot Singh
// RabinKarp -
// String matching with Finite automata - kal Hammood
// kmp - tushar roy

// layout manager - container mei components wagera kaise aayenge
// Flow layout - saare horizontally
//  	3 constructor 
//  		flowLayout(){
//  			// saare line mei aayenge 5-5 ke gap mei
//  		}
//  		flowLayout(int how){//(FlowLayout.Left)
//  			how=? kahan se start hogi left right??
//  		}
//  		flowLayout(int how,horizontal,vertical){
//  			horizontal = distance in horizontally
//  			vertically = distance in vertically 
//  		}

//  		setllayout(fl)
//  		btn.add()
// grid matrix banti h
// 	grid(){
// 		equal no. of row and col
// 	}
// 	grid(int row,int coloumn){

// 	}
	
// cardLayout - components saare ek baari mei 

// container - jismei components panel - no menu no border for applets frame - for jframe frame mei panel no vice versa
// components 0 btn txtfiels

// borderLayout - Add(Left.btn)



// // mcrst 
// // https://docs.google.com/forms/d/1MHLE0PDrzDmvRo0PY2onwbrR2HxSvnbeskrKCLWym4E/formResponse


// // credits 71.35
// // without credits 76.65