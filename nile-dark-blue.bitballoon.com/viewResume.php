<?php
header("Content-Length: " . filesize ('MyResume.pdf') );
header("Content-type: application/pdf");
header("Content-disposition: inline;
filename=".basename('MyResume.pdf'));
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
$filepath = readfile('MyResume.pdf');
?>