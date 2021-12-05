<?php
    $config = array(
        "database" => array(
            "database1" => array(
                "dbname" => "database1", //XXX
                "username" => "dbUser", //XXX
                "password" => "pa$$", //XXX
                "host" => "localhost" //XXX
            )
        ),
        "urls" => array(
            "defaultURL" => "http://IP:port" //TODO: IP od Lojzika, dekuji
        ),
        "paths" => array(
            "res" => "/res", //TODO: zjistit jestli je tohle dobre
            "images" => array(
                "content" => $_SERVER["DOCUMENT_ROOT"] . "/img/content",
                "layout" => $_SERVER["DOCUMENT_ROOT"] . "/img/layout"
            )
        )
    );
    defined("LIBRARY_PATH")
        or define("LIBRARY_PATH", realpath(dirname(__FILE__) . '/lib'));
         
    defined("TEMPLATES_PATH")
        or define("TEMPLATES_PATH", realpath(dirname(__FILE__) . '/templates'));
    //errors
    ini_set("error_reporting", "true");
    error_reporting(E_ALL | E_STRICT);
?>
