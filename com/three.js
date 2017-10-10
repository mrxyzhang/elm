var React = require('react');

var Detaile = React.createClass({
	render:function(){
		var sty = {
			sty1:{
				width:'97%',
				margin:'0',
				padding:'0',
				padding:'1%',
				height:'500px'
			},
			sty2:{
				width:'47%',
				height:'230px',
				margin:'1%',
				float:'left'
			},
			sty3:{
				width:'31%',
				height:'230px',
				margin:'1%',
				float:'left'
			}
		}
		return(
			<div style={sty.sty1}>
				<p ><img style={sty.sty2} src="img/time1.jpg"/></p>
				<p ><img style={sty.sty2} src="img/time1.jpg"/></p>
				<p ><img style={sty.sty3} src="img/time.jpg"/></p>
				<p ><img style={sty.sty3} src="img/time.jpg"/></p>
				<p ><img style={sty.sty3} src="img/time.jpg"/></p>
			</div>
		)
	}
})

module.exports=Detaile;