<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;    
    use PHPMailer\PHPMailer\SMTP;    
    
    function sendMailToAdmin(){
        
        
    
        require './phpmailer/src/PHPMailer.php';
        require './phpmailer/src/SMTP.php';
        require './phpmailer/src/Exception.php';
    
        $name = $_POST['form__name'];
        $phone = $_POST['form__phone'];
        $mail = $_POST['form__mail'];
        $quizData = $_POST['quizData'];
        // Отображение результата
        echo json_encode($quizData['object']);  
        // $body = "
        // <h2>Новая заявка с квиза</h2>
        // <b>Имя:</b> $name<br>
        // <b>Телефон:</b><a href='tel:$phone'> $phone</a><br> 
        // <b>Электронная почта:</b> $mail<br>
        // <b>:</b> $cargo_description<br>
        // ";
        // $mail = new PHPMailer(true);
    
        // try {
        //     $mail->isSMTP();   
        //     $mail->CharSet = "UTF-8";
        //     $mail->SMTPAuth  = true;
        //     //$mail->SMTPDebug = 2;
        //     $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
        
        //     // Настройки вашей почты
        //     $mail->Host = 'mail.hosting.reg.ru';
        //     //$mail->Host = 'server248.hosting.reg.ru';
        //     $mail->Port = 465;
        //     $mail->Username = 'info@xn--b1aebbaawaoi0cijgb8frfxb.xn--p1ai';
        //     $mail->Password = 'sle251220';
        //     /*$mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
        //     $mail->Username   = 'lrikki15'; // Логин на почте
        //     $mail->SMPTAuth   = true; // 
        //     $mail->Password   = 'AacajUAu12T&'; // Пароль на почте*/
        //     //'durizpgdeqqhmmqp'
        //     $mail->Port       = 465;
        //     $mail->SMTPSecure = 'ssl';
        //     $mail->setFrom('info@xn--b1aebbaawaoi0cijgb8frfxb.xn--p1ai', 'Форма обратной связи сайта'); // Адрес самой почты и имя отправителя
        
        //     // Получатель письма
        //     $mail->addAddress('fedorov803@mail.ru'); //
    
        
        // // Отправка сообщения
        // $mail->isHTML(true);
        // $mail->Subject = 'Новая заявка';
        // $mail->Body = $body;    
        
        // // Проверяем отравленность сообщения
        // if ($mail->send()) {$result = 'Запрос отправлен';} 
        // else {$result = "Ошибка отправки";}
        
        // } catch (Exception $e) {
        //     $result = "Ошибка связи с сервером";
        //     $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        // }
        
        
    
    }
    
?>  