import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, DateTime, PanelBody } from '@wordpress/components'
import './editor.scss';

// Represents what the editor will render
export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
			<InspectorControls>
				<PanelBody title="Countdown Settings">
					<TextControl
						label="Expiry message"
						onChange={ ( expiryMessage ) => setAttributes( { expiryMessage: expiryMessage } ) }
						value={ attributes.expiryMessage }
					/>
				</PanelBody>
			</InspectorControls>

			<p { ...useBlockProps() }>
				<span>00 { __( 'Days', 'countdown-block') }</span>
				<span>00 { __( 'Hours', 'countdown-block') }</span>
				<span>00 { __( 'Minutes', 'countdown-block') }</span>
			</p>
		</>
	);
}
