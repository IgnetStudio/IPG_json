<?php

if( !isset($_GET['callback']) || empty($_GET['callback']) ) {
    header('HTTP/1.0 404 Not Found');
    die();
}

// Dane pobierane z bazy danych
$data = array(
    'firstName' => 'Jan',
    'lastName' => 'Nowak Jeziorański',
    'age' => 33
);

header('Content-Type: text/javascript');
?>
<?php echo $_GET['callback']; ?>(<?php echo json_encode($data); ?>);