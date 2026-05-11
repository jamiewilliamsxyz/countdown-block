<?php
/*
File used when rendering block type on the server to show on the frontend

Attributes exposed to this file:
	- $attributes (array): The block attributes.
	- $content (string): The block default content.
	- $block (WP_Block): The block instance.
 */

?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Countdown Block - hello from a dynamic block!', 'countdown-block' ); ?>
</p>
