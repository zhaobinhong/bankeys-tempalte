<?php

// Scan all the photos in the folder
$files = glob('images/photos/large/*.jpg');

$data = array();
foreach($files as $f){
	$data[] = array(
		'thumb' => str_replace('large', 'thumbs', $f),
		'large' => $f
	);
}

header('Content-type: application/json');

echo json_encode(array(
	'data' => $data,
));