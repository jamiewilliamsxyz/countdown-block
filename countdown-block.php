<?php
/**
 * Plugin Name:       Countdown Block
 * Description:       Countdown timer Gutenberg block for WordPress sites
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Jamie Williams
 * Author URI:        https://jamiewilliams.me/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/jamiewilliamsxyz/countdown-block
 * Text Domain:       countdown-block
 * Domain Path:       /languages
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
Registers block metadata from blocks-manifest.php and registers the block type
Registers assets so they can be enqueued through block editor
*/
function create_block_countdown_block_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'create_block_countdown_block_block_init' );
