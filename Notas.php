AÑADIR ESTILOS Y SCRIPTS A COLA

add_action('wp_enqueue_scripts', 'enqueue_js');
function enqueue_js() {
    wp_enqueue_script('custom', get_stylesheet_directory_uri().'/scripts/custom.js');
}

add_action( 'wp_enqueue_scripts', 'my_plugin_assets' );
function my_plugin_assets() {
    wp_register_style( 'custom-gallery', plugins_url( '/css/gallery.css' , __FILE__ ) );
    wp_register_script( 'custom-gallery', plugins_url( '/js/gallery.js' , __FILE__ ) );

    wp_enqueue_style( 'custom-gallery' );
    wp_enqueue_script( 'custom-gallery' );
}
