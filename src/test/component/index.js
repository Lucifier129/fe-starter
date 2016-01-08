export default class List extends React.Component {
	static defaultProps = {
		className: 'test'
	}
	constructor(props, context) {
		super(props, context)
		this.abc = 'abdsf'
	}
	componentDidMount() {
		$(this.refs.list).find('li:eq(2)').css({
			background: '#f00'
		})
	}
	handleClick = e => {
		console.log($(e.currentTarget).index)
	}
	render() {
		let { className } = this.props
		let list = new Array(10).join('@').split('@').map(() => Math.random().toString(36).substr(2))
		return (
		<ul ref="list" className={ className }>
			{
				list.map((str, index) => <li key={index} onClick={this.handleClick}>{str}</li>)
			}
		</ul>)
	}
}