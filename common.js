
(function(){

		var content = [
									{
										id: 0,
										icon: 'mobile',
										title: 'MOBILE',
										text: 'Get notifications about new relaeses in our mobile app',
										cost: 10
									},
									{
										id: 1,
										icon: 'desktop',
										title: 'DESKTOP',
										text: 'Enjoy new episodes on your laptop in browser with our web service, '+
													'which supports all the platforms',
										cost: 15
									},
									{
										id: 2,
										icon: 'tv',
										title: 'TV',
										text: 'Watch your favorite series at home on large screen with our TV application',
										cost: 20
									}
		];
		
		//нарисовать один тариф
		function card( i ){
			var html ="<div class='item-wrap'>"+
									"<div id='"+i+"' class='item b-bott'>"+
										"<div class='icon icon-"+content[i].icon+"'></div>"+
										"<h3 class='title'>"+content[i].title+"</h3>"+
										"<p class='text'>"+content[i].text+"</p>"+
										"<div class='price-wrap'>"+
											"<span class='price'>"+
												"<span class='currency'>$</span>"+
												"<span class='value'>"+content[i].cost+"</span>"+
												"<span class='month'>/month</span>"+
											"</span>"+
										"</div>"+
									"</div>"+
								"</div>";
				return html;	
		}

		//нарисовать  в окне один тариф по клику
		function cardUp( i ){
			var html =	"<div id='"+i+"' class='item-card'>"+
										"<h4>Confirmation<span  class='confirm'></span></h4>"+				
										"<div class='icon icon-"+content[i].icon+"'></div>"+
										"<h3 class='title'>"+content[i].title+"</h3>"+
										"<p class='text'>"+content[i].text+"</p>"+
										"<div class='price-wrap'>"+
											"<span class='price'>"+
												"<span class='currency'>$</span>"+
												"<span class='value'>"+content[i].cost+"</span>"+
												"<span class='month'>/month</span>"+
											"</span>"+
										"</div>"+
										"<button>Confirm and play</button>"+
									"</div>";
								
				return html;	
		}

		var container = document.querySelector('.container');
		var shadow = document.querySelector('.shadow');

		// показать список тарифов
		for( var i = 0; i < content.length; i++){
				container.innerHTML += card( i );
		}
		
		container.innerHTML += "<div class='card'></div>";

		var card = document.querySelector('.card');
		var item =document.querySelectorAll('.item');

		//показать окно с выбранным тарифом
		for(var i = 0; i < item.length; i++ ){
			 item[i].addEventListener( 
					'click', 
					function(e){
							var id = e.currentTarget.id;
							card.innerHTML = cardUp( id );
							shadow.style.display = 'block';
							card.style.display = 'block';
							
							var left = container.clientWidth/2 - card.clientWidth/2; 
							card.style.left = left + "px";
							card.style.top =window.pageYOffset + 20 + "px";
							
							var confirm = document.querySelector('.confirm');
							confirm.onclick = function(){
											card.style.display = 'none';
											shadow.style.display = 'none';
									};	
					}, 
					false);
		}	
			
		 shadow.addEventListener( 
				'click', 
				function(e){
						e.currentTarget.style.display = 'none';
						card.style.display = 'none';
				}, 
				false);	
				
		//уровнять высоту текста
		var texts =document.querySelectorAll('.item .text');
		var max = 0;
		
		for( var h = 0; h <  texts.length; h++){
				if( texts[h].clientHeight > max )
						max = texts[h].clientHeight;
		}
		
		for( var h = 0; h <  texts.length; h++){
				texts[h].style.height = max + "px";
		}
		
		
}() );

 