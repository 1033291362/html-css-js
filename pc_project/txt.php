<?php
header("Content-type: text/html; charset=GBK"); 

$file=$_POST['name'];
$content=file_get_contents($file);
echo $content;

?>