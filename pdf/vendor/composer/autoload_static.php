<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit67fbf698b1b5f923e7b744f040f51c9b
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Component\\Process\\' => 26,
            'Symfony\\Component\\HttpFoundation\\' => 33,
        ),
        'C' => 
        array (
            'Checking\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Component\\Process\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/process',
        ),
        'Symfony\\Component\\HttpFoundation\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/http-foundation',
        ),
        'Checking\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/Checking',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit67fbf698b1b5f923e7b744f040f51c9b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit67fbf698b1b5f923e7b744f040f51c9b::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit67fbf698b1b5f923e7b744f040f51c9b::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}