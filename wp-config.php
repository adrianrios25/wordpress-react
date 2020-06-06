<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress-react' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'KZ<^zAKN-/mES42b+8Vys6OS~FF+@J?e{ug_QoZza#JkJUHzC86?k06G-Z?-CcZ.' );
define( 'SECURE_AUTH_KEY',  '2K<,6mI=Q;Rsv~4ba/O_~]U8e~SqWW*#LPdJa0*.?v}<6Xd+rc@gV?#h[1&>Yq< ' );
define( 'LOGGED_IN_KEY',    'QgpY_V-X1%Qb:uU%u0;X1N?$^M.:Jk.:3la+rgF,J@uac)=N;f_cZN.}cQ!U5i;r' );
define( 'NONCE_KEY',        'j,y;z]}ePMX<x1@w){L|=*:/[u;CEBIp{2BO+p]U^OkT!W5w?]#(0v&r(j6J(v83' );
define( 'AUTH_SALT',        '/]W[_{>-3H!Xpr3aRk,*6j_c&z7LIu)),iT99Zt,oR&3Dh$/OtB7zXt~9g%&-Wc_' );
define( 'SECURE_AUTH_SALT', '))80=.ErC!bwH,V?TYHbsTS?f+STj8id:${VSK`cu<YJ[P?O9;XU5g#pU1{1iqLs' );
define( 'LOGGED_IN_SALT',   'sJfrzy*bSVH^#I?$_bfOXz6M>3P[1{n?2 jR__wL])5~l64&>eFRv@{W+Q$YU_VO' );
define( 'NONCE_SALT',       'rqJA_T1Yz2I^Q}3c([& 7|%]xAg<iSa<6j_0(Qd<awF{$AC+5FjOR8Q1+t?L&2=v' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
