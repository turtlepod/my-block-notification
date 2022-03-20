<?php
/**
 * Plugin Name: My Notification
 */

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script(
		'my-block-notification',
		trailingslashit( plugin_dir_url( __FILE__ ) ) . 'my-block-notification.min.js',
		[
			'wp-element',
			'wp-blocks',
			'wp-components',
			'wp-editor',
		],
		'0.1.0',
		true
	);
} );

add_action( 'wp_head', function() {
?>
<style>
.wp-block-my-block-notification {
	background: #1e73be;
	color: #fff;
	padding: 20px 45px;
}
.wp-block-my-block-notification p {
	padding: 0;
	margin: 0;
}
</style>
<?php
} );
