
var React = require('react');
var ReactDOM = require('react-dom');

var Cont = require('./com/cont.js');
var Foot = require('./com/foot.js');

var Demo = React.createClass({
	render:function(){
		var sty = {
			sty1:{
				display:'flex',
				flexDirection:'column'
			},
			sty2:{
				flex:1
			},
			sty3:{
				height:'44px',
				position:'fixed',
				bottom:'0'
			}
		}
		return(
			
			<div style={sty.sty1}>
				<Cont style={sty.sty2}/>
				<Foot style={sty.sty3}/>
			</div>
		)
	}
})
/*Demo.prototype.sty={
	sty1:{
		display:'flex',
		flexDirection:'column'
	},
	sty2:{
		flex:1
	},
	sty3:{
		height:'44px',
		position:'fixed',
		bottom:'0'
	}
}*/
//页面渲染
ReactDOM.render(<Demo/>,document.getElementById('box'));