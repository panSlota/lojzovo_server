<?php
 
    require_once(realpath(dirname(__FILE__) . "/../resources/config.php"));
 
    require_once(LIBRARY_PATH . "/templateFunctions.php");
     
    $setInIndexDotPhp = "Hey! I was set in the index.php file.";
    $variables = array(
        'setInIndexDotPhp' => $setInIndexDotPhp
    );
     
    renderLayoutWithContentFile("home.php", $variables);
 
?>