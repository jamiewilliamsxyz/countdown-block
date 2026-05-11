<?php
// File used when rendering block type on the server to show on the frontend

$target_date    = $attributes['targetDate'] ?? '';
$expiry_message = $attributes['expiryMessage'] ?? 'Expired';
?>
<p <?php echo get_block_wrapper_attributes(); ?>
	data-target="<?php echo esc_attr( $target_date ); ?>"
	data-expiry="<?php echo esc_attr( $expiry_message ); ?>"
>
	<span class="countdown-days">00 <?php esc_html_e( 'Days', 'countdown-block' ); ?></span>
	<span class="countdown-hours">00 <?php esc_html_e( 'Hours', 'countdown-block' ); ?></span>
	<span class="countdown-minutes">00 <?php esc_html_e( 'Minutes', 'countdown-block' ); ?></span>
</p>
