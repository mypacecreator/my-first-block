import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const edit = ( { className } ) => (
	<div className={ className }>
		<InnerBlocks />
	</div>
);

const save = ( { className } ) => (
	<div className={ className }>
		<InnerBlocks.Content />
	</div>
);
registerBlockType( 'my-first-block/hello', {
	title: 'hello',
	icon: 'palmtree',
	category: 'common',
	edit,
	save,
} );
