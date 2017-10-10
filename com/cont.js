var React = require('react');

var One = require('./one.js');
var Cont2 = require('./cont2.js');
var Detaile = require('./three.js');
var Recommend = require('./recommend.js');
var Cont = React.createClass({
	render:function(){
		return(
			<section>
				<One/>
				<Cont2/>
				<Detaile/>
				<Recommend />
			</section>
		)
	}
})
module.exports=Cont;