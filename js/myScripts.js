// Custom JS Document by Cheryl Wittmann

$(document).ready(function(){
   'use strict';

   
  getElementById('gallery1').click(function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'img/full/full_1.jpg', title:'My Caption' }, 
		{ href:'img/full/full_2.jpg', title:'My Second Caption' }
		{ href:'img/full/full_3.jpg', title:'My Third Caption' }
		{ href:'img/full/full_4.jpg', title:'My Fourth Caption' }
		{ href:'img/full/full_5.jpg', title:'My Fifth Caption' }
		{ href:'img/full/full_6.jpg', title:'My Sixth Caption' }
	] );
  
}); 