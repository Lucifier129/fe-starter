


let List = React.createClass({
	componentDidMount() {
		$(this.refs.list).find('li:eq(2)').css({
			background: '#f00'
		})
	},
	render() {
		let list = new Array(10).join('@').split('@').map(() => Math.random().toString(36).substr(2))
		return (
		<ul ref="list">
		{
			list.map(str => <li>{str}</li>)
		}
		</ul>)
	}
})

export default List