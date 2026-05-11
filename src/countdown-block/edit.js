import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, DateTimePicker, PanelBody } from '@wordpress/components'
import './editor.scss';

// Represents what the editor will render
export default function Edit( { attributes, setAttributes } ) {
	const { targetDate, expiryMessage } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Countdown Settings">
					<DateTimePicker
						currentDate={ targetDate }
						onChange={ ( date ) => setAttributes( { targetDate: date } ) }
						is12Hour={ true }
					/>
				</PanelBody>

				<PanelBody title="Expiry Settings">
					<TextControl
						label="Expiry message"
						onChange={ ( msg ) => setAttributes( { expiryMessage: msg } ) }
						value={ expiryMessage }
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
