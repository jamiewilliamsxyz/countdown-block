import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

// Register new block type definition
registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null
} );
