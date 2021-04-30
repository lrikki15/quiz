<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;    
    use PHPMailer\PHPMailer\SMTP;    
    require './phpmailer/src/PHPMailer.php';
    require './phpmailer/src/SMTP.php';
    require './phpmailer/src/Exception.php';

    function sendMailToAdmin(){
    
        $name = $_POST['form__name'];
        $phone = $_POST['form__phone'];
        $mailAdress = $_POST['form__mail'];
        $quizData = json_decode($_POST['quizData'], true);
        
        //Выдернуть из массива quizData
        // объект 
        switch($quizData['object']){
            case 'house':
                $object = 'дом';
            break;
            case 'folder':
                $object = 'склад';
            break;
            case 'shop':
                $object = 'магазин';
            break;
            case 'school':
                $object = 'школа';
            break;
            case 'office':
                $object = 'офис';
            break;
            case 'construct':
                $object = 'стройка';
            break;
            case 'other':
                $object = 'другое';
            break;
            case 'flat':
                $object = 'квартира';
            break;
            case 'tszh':
                $object = 'TCЖ';
            break;
        }
        // локация
        switch($quizData['location']){
            case 'arhangelsk':
                $location = 'Архангельск';
                break;
            case 'severodvinsk':
                $location = 'Cеверодвинск/Новодвинск';
            break;
            case 'region':
                $location = 'Архангельская область';
            break;
        }
        // параметры объекта
            // длина-ширина объекта
        $objectParams = '';
        if($quizData['objectWidth']){
            $objectParams .= 'Длина/Ширина объекта: ' . $quizData['objectWidth'] .'/'. $quizData['objectWidth'].'<br>';
        }
        if($quizData['perimeterWidth']){
            $objectParams .= 'Длина/Ширина периметра: ' . $quizData['perimeterWidth'] .'/'. $quizData['perimeterLength'].'<br>';
        }
        // всего камер
        $camsTotal = $quizData['camsTotal'];
        $howFast = $quizData['howfast'];

        // назначение камер
        $camsArts = '';
        switch($quizData['object']){
            case 'house':
                if($quizData['camsCount']['houseIn']){
                    $camsArts .= 'Камеры внутри дома : ' . $quizData['camsCount']['houseIn'] .'<br>'; 
                }
                if($quizData['camsCount']['housePerimeter']){
                    $camsArts .= 'Камеры по периметру дома : ' . $quizData['camsCount']['housePerimeter'].'<br>';
                }
                if($quizData['camsCount']['houseLandPerimeter']){
                    $camsArts .= 'Камеры по периметру участка : ' . $quizData['camsCount']['houseLandPerimeter'];
                }
                $object = 'дом';
            break;
            case 'folder':
                if($quizData['camsCount']['folderIn']){
                    $camsArts .= 'Камеры внутри склада : ' . $quizData['camsCount']['folderIn'].'<br>';
                }
                if($quizData['camsCount']['folderLoad']){
                    $camsArts .= 'Камеры в зону погрузки/разгрузки: ' . $quizData['camsCount']['folderLoad'].'<br>';
                }
                if($quizData['camsCount']['folderSubrooms']){
                    $camsArts .= 'Камера в подсобые помещения: ' . $quizData['camsCount']['folderSubrooms'].'<br>';
                }
                if($quizData['camsCount']['folderOther']){
                    $camsArts .= 'Другое(въезд, парковка, запасные выходы): ' . $quizData['camsCount']['folderOther'];
                }
                $object = 'склад';
            break;
            case 'shop':
                if($quizData['camsCount']['shopRoom']){
                    $camsArts .= 'Камеры в зал: '.$quizData['camsCount']['shopRoom'].'<br>';
                }
                if($quizData['camsCount']['shopCashier']){
                    $camsArts .= 'Камеры на кассу: '.$quizData['camsCount']['shopCashier'].'<br>';
                }
                if($quizData['camsCount']['shopSubroom']){
                    $camsArts .= 'Камеры в подсобые помещения: '.$quizData['camsCount']['shopSubroom'].'<br>';
                }
                if($quizData['camsCount']['shopStreet']){
                    $camsArts .= 'Камеры на улицу: '.$quizData['camsCount']['shopStreet'];
                }
                $object = 'магазин';
            break;
            case 'school':
                if($quizData['camsCount']['schoolPerimeter']){
                    $camsArts .= 'Камеры по периметру: '.$quizData['camsCount']['schoolPerimeter'].'<br>';
                }
                if($quizData['camsCount']['schoolEntrance']){
                    $camsArts .= 'Камеры на входе/выходе: '.$quizData['camsCount']['schoolEntrance'].'<br>';
                }
                if($quizData['camsCount']['schoolCorridor']){
                    $camsArts .= 'Камеры в коридоре: '.$quizData['camsCount']['schoolCorridor'].'<br>';
                }
                if($quizData['camsCount']['schoolClassrooms']){
                    $camsArts .= 'Камеры в классах: '.$quizData['camsCount']['schoolClassrooms'];
                }
                $object = 'школа';
            break;
            case 'office':
                if($quizData['camsCount']['officeCabinet']){
                    $camsArts .= 'Камеры в кабинет: '.$quizData['camsCount']['officeCabinet'].'<br>';
                }
                if($quizData['camsCount']['officeRecieption']){
                    $camsArts .= 'Камеры на ресепшен: '.$quizData['camsCount']['officeRecieption'].'<br>';
                }
                if($quizData['camsCount']['officeMeetingroom']){
                    $camsArts .= 'Камеры в переговорную: '.$quizData['camsCount']['officeMeetingroom'].'<br>';
                }
                if($quizData['camsCount']['officeStreet']){
                    $camsArts .= 'Камеры на улицу: '.$quizData['camsCount']['officeStreet'];
                }
                $object = 'офис';
            break;
            case 'construction':
                if($quizData['camsCount']['constructionPanoram']){
                    $camsArts .= 'Панорамные камеры: '.$quizData['camsCount']['constructionPanoram'].'<br>';
                }
                if($quizData['camsCount']['constructionSite']){
                    $camsArts .= 'Камеры на строительной площадке: '.$quizData['camsCount']['constructionSite'].'<br>';
                }
                if($quizData['camsCount']['constructionEntrance']){
                    $camsArts .= 'Камеры на въезд/выезд: '.$quizData['camsCount']['constructionEntrance'].'<br>';
                }
                if($quizData['camsCount']['constructionFolder']){
                    $camsArts .= 'Камеры склад материалов: '.$quizData['camsCount']['constructionFolder'].'<br>';
                }
                if($quizData['camsCount']['constructionRooms']){
                    $camsArts .= 'Камеры в бытовых помещениях: ' . $quizData['camsCount']['constructionRooms'];
                }
                $object = 'стройка';
            break;
            case 'other':
                if($quizData['camsCount']['otherIndoor']){
                    $camsArts .= 'Камера для помещений: ' . $quizData['camsCount']['otherIndoor'].'<br>';
                }
                if($quizData['camsCount']['otherOutdoor']){
                    $camsArts .= 'Уличная камера: ' . $quizData['camsCount']['otherOutdoor'];
                }
                $object = 'другое';
            break;
            case 'flat':
                if($quizData['camsCount']['flatIndoor']){
                    $camsArts .= 'Камера для помещений: '. $quizData['camsCount']['flatIndoor'];
                }
                $object = 'квартира';
            break;
            case 'tszh':
                if($quizData['camsCount']['tszhLevels']){
                    $camsArts .= 'Камеры на этажах: '. $quizData['camsCount']['tszhLevels'].'<br>';
                }
                if($quizData['camsCount']['tszhEntrance']){
                    $camsArts .= 'Камеры перед входной группой: '. $quizData['camsCount']['tszhEntrance'].'<br>';
                }
                if($quizData['camsCount']['tszhElevators']){
                    $camsArts .= 'Камеры в лифтах: ' . $quizData['camsCount']['tszhElevators'].'<br>';
                }
                if($quizData['camsCount']['tszhParking']){
                    $camsArts .= 'Камеры на парковке: ' . $quizData['camsCount']['tszhParking'].'<br>';
                }
                if($quizData['camsCount']['tszhYard']){
                    $camsArts .= 'Камеры во дворе: ' . $quizData['camsCount']['tszhYard'];
                }
                $object = 'TCЖ';
            break;
        }

        //интернет
        if($quizData['internet_need']){
            $internet = 'нужно подключение';
        }else{
            $internet = 'подключение не требуется';
        }
        //камеры со звуком
        if($quizData['sound_need']){
            $sound = $quizData['sound_need'];
        }else{
            $sound = 'не нужно';
        }
        // Отображение результата
        if($quizData['reserve_need']){
            $reserve = 'нужно';
        }else{
            $reserve = 'не нужно';
        }
        $body = "
        <span> $name </span><br>
        <span>Номер телефона: $phone</span><br>
        <span>E-mail: $mailAdress</span><br>
        <span>Локация: $location</span><br>
        <span>Объект: $object</span><br>
        <span>Объект: $objectParams</span><br>
        <span>Всего камер: $camsTotal</span><br>
        <span>Как быстро: $howFast</span><br>
        <span>Подключение интернета: $internet</span><br>
        <span>Камеры со звуком: $sound</span><br>
        <span>Резервное питание: $reserve</span><br>
        <span>$camsArts</span><br>
        ";
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();   
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth   = true;
            //$mail->SMTPDebug = 2;
            $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
           
            $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
            $mail->Username   = 'lrikki15@mail.ru'; // Логин на почте
            $mail->Password   = 'RhFcyFzIFgjxrF61638893'; // Пароль на почте
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
            $mail->setFrom('lrikki15@mail.ru', 'Квиз видеонаблюдение'); // Адрес самой почты и имя отправителя
        
            // Получатель письма
            $mail->addAddress($mailAdress);
            
            // Отправка сообщения   
            $mail->isHTML(true);
            $mail->Subject = 'New quiz answer';
            $mail->Body = $body;    

            // Проверяем отравленность сообщения
            // if ($mail->send()) {$result = "Письмо отправлено";} 
            if ($mail->send()) {$result = true;} 
            else {$result = "Ошибка отправки письма";}

        } catch (Exception $e) {
            // $result = "error";
            $result = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
            // $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        }
        return $result;
        // Отображение результата
        // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
    }
    function sendMailToUser(){
        $name = $_POST['form__name'];
        $phone = $_POST['form__phone'];
        $mailAdress = $_POST['form__mail'];
        $quizData = json_decode($_POST['quizData'], true);
        $pdfDoc = $_POST['pdfBase64'];

        $body = "";
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();   
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth   = true;
            //$mail->SMTPDebug = 2;
            $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
           
            $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
            $mail->Username   = 'lrikki15@mail.ru'; // Логин на почте
            $mail->Password   = 'RhFcyFzIFgjxrF61638893'; // Пароль на почте
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
            $mail->setFrom('lrikki15@mail.ru', 'Техносети: расчет стоимости системы видеонаблюдения'); // Адрес самой почты и имя отправителя
        
            // Получатель письма
            $mail->addAddress($mailAdress);
            
            // Отправка сообщения   
            $mail->isHTML(true);
            $mail->Subject = 'New quiz answer';
            $mail->Body = $body;  
            // $mail->AddStringAttachment($pdfDoc, 'Расчет стоимости системы видеонаблюдения.pdf', 'base64', 'application/octet-stream');  
            // $mail->AddStringAttachment($pdfReady, 'Расчет стоимости системы видеонаблюдения.pdf');
            $mail->addStringAttachment(base64_decode($pdfDoc), 'Расчет стоимости системы видеонаблюдения.pdf');


            // Проверяем отравленность сообщения
            // if ($mail->send()) {$result = "Письмо отправлено";} 
            if ($mail->send()) {$result = true;} 
            else {$result = "Ошибка отправки письма";}

        } catch (Exception $e) {
            // $result = "error";
            $result = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
            // $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        }
        return $result;
        // Отображение результата
        // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
    }
?>  