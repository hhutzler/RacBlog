<?php
/* header('Content-Type: text/html; charset=utf-8'); */

/**
  * Theme Name child theme functions and definitions
  
  Currently NO Need for JQuery - could change ! 
  add_action( 'wp_enqueue_scripts', 'my_js_scripts' );
  
  pvLocal.css loads
  	- clock.css
  	- htmlTab01.css
  	CORS test: 
  	header("Access-Control-Allow-Origin: *");
 */


function my_js_scripts() {
/**
*	Use latest jQuery release 
*/
if( !is_admin() ){
	wp_deregister_script('jquery');
	wp_register_script('jquery', ("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), false, ''); 
	wp_enqueue_script('jquery');
	}
		/* 3.rd is an array that can handle any script that your new script depends on, such as jQuery. */
wp_enqueue_script('jsLib',  get_stylesheet_directory_uri().'/scripts/myJSLib.js', array( 'jquery' ),'0.9', false );
}

function my_css_style() {
 /* wp_enqueue_style( 'style-name', get_stylesheet_uri() );  //This is for getting style.css of current theme	*/
 wp_enqueue_style ( 'CSS_PV_Local',  get_stylesheet_directory_uri().'/css/genericCSS.css');  	
} 	

add_action( 'wp_enqueue_scripts', 'my_js_scripts' );
add_action( 'wp_enqueue_scripts', 'my_css_style' );


