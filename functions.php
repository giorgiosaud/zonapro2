<?php
require_once( 'wp-sass/wp-sass.php' );
function my_theme_enqueue_styles() {
	wp_enqueue_style( 'scss-style', get_stylesheet_directory_uri() . '/scss/style.scss.php' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );