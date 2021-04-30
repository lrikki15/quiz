<?php
    require_once 'sendmail.php';
    require_once './TCPDF/tcpdf.php';

   // $result1 = sendMailToAdmin();
    $result2 = sendMailToUser();

    echo json_encode($result2);
?>

