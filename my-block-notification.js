const {
	blocks: { registerBlockType },
	blockEditor: { RichText },
} = wp;

registerBlockType( 'my-block/notification', {
	title: 'My Notification',
	icon: 'info',
	category: 'formatting',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p'
		},
	},
	edit: ( props ) => {
		const { attributes: { content }, setAttributes } = props;
		const style = {
			background: '#1e73be',
			color: '#fff',
			padding: '20px 45px',
		};
		return (
			<div style={ style }>
				<RichText
					tagName="span"
					onChange={ (newContent) => {
						setAttributes( { content: newContent } );
					} }
					value={ content }
					placeholder={ 'Tulis info disini' }
				/>
			</div>
		);
	},
	save: (props) => {
		return (
			<div>
				<RichText.Content
					tagName="p"
					value={ props.attributes.content }
				/>
			</div>
		);
	},
} );
