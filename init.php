<?php
/**
 * Plugin Name: Brok Guten Blocks
 * Description: brok-guten-blocks es una herramienta de desarrollo de bloques para Gutenberg
 * Version: 1.0.0
 * Author: mowomo
 * Url: mowomo.com
 * @package brok-guten-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class brok_guten_blocks {
    private static $instance;
    private $slug;
    private $blockNames;
    private $wordpressPackages;
    private $version;

    public static function brok_guten_blocks__init() {
        if (!self::$instance) {
            self::$instance = new brok_guten_blocks();
        } else {
            echo 'There is already a created instance of this class.';
        }
    }

    private function __construct() {
        // CONFIGURAR ESTAS VARIABLES -----------------------------------------------
        $this->slug              = 'brok-guten-blocks';
        $this->blockNames        = array('bloque-ejemplo');//Array
        $this->wordpressPackages = array('wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n', 'wp-components');
        $this->version           = '1.0.0';
        //---------------------------------------------------------------------------

        add_filter( 'block_categories', function( $categories, $post ) {
            return array_merge(
                $categories,
                array(
                    array(
                        'slug' => 'brok-guten-blocks',
                        'title' => __( 'brok-guten-blocks', 'brok-guten-blocks' ),
                    ),
                )
            );
        }, 10, 2 );
        add_action( 'init', array( $this, 'brok_guten_blocks_register_dynamic_editor_assets' ) );
    }

    public function brok_guten_blocks_register_dynamic_editor_assets() {
        $slug              = $this->slug;
        $blockNames        = $this->blockNames;
        $wordpressPackages = $this->wordpressPackages;
        $version           = $this->version;

        wp_register_script(
            $slug .'/editor-script',
            plugins_url('./build/block.build.js', __FILE__),
            $wordpressPackages,
            $version
        );
        wp_register_style(
            $slug .'/editor-style',
            plugins_url('./build/block.editor.build.css', __FILE__),
            array(),
            filemtime( plugin_dir_path( __FILE__ ) . './build/block.editor.build.css' )
        );
        wp_register_style(
            $slug .'/style',
            plugins_url('./build/block.style.build.css', __FILE__),
            array(),
            filemtime( plugin_dir_path( __FILE__ ) . './build/block.style.build.css' )
        );

        for ($i=0; $i < count($blockNames); $i++) {
            register_block_type(
                $slug .'/'. $blockNames[$i],
                array(
                    'editor_script' => $slug .'/editor-script',
                    'editor_style'  => $slug .'/editor-style',
                    'style'         => $slug .'/style'
                ) );
        }
    }
}

brok_guten_blocks::brok_guten_blocks__init();
