import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

// Represents what the editor will render
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			<span>00 { __( 'Days', 'countdown-block') }</span>
			<span>00 { __( 'Hours', 'countdown-block') }</span>
			<span>00 { __( 'Minutes', 'countdown-block') }</span>
		</p>
	);
}
