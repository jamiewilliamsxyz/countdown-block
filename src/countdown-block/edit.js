import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

// Represents what the editor will render
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'Countdown Block - hello from the editor!',
				'countdown-block'
			) }
		</p>
	);
}
