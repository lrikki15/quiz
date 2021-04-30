<?php
    // массив наименований ghjlerwbb
        $indoorCamName = 'EZ-HAC-T1A21P-0360B'; // название камеры для установки в помещениях
        $indoorCamWithSoundName = 'EZ-HAC-T5B20P-A-0360B'; // название камеры со звуком для установки в помещениях
        $outdoorCamName = 'EZ-HAC-B5B20P-A-0280B'; // название камеры для установки на улице
        $panoramCamName = 'DH-SD49225-HC-LA'; // название панорамной камеры
        $registrator1_4Name = 'DH-XVR5104C-X1'; // название регистратора для количества 1-4
        $registrator5_8Name = 'DH-XVR5104C-X1'; // название регистратора для количества 5-8
        $registrator8_16Name = 'DH-XVR5116HS-X'; // название регистратора для количества 8-16
        $registrator16moreName = 'DH-XVR4232AN-X'; // название регистратора для количества 16+
        $ibp1_4Name = 'BBG-125'; // название ибп для количества 1-4
        $ibp5_8Name = 'BBG-12108'; // название ибп для количества 5-8
        $cableName = 'cable'; // называние кабеля
        //фотографии в папке с фото называть точно так же, как заданы выше переменные
    // массив цен
        $prices['indoorCamera'] = 2190;
        $prices['indoorCameraWithSound'] = 2190;
        $prices['outdoorCamera'] = 2890;
        $prices['panoramCamera'] = 28990;
        $prices['registrator1_4'] = 6000;
        $prices['registrator5_8'] = 9000;
        $prices['registrator8_16'] = 16000;
        $prices['registrator16more'] = 22200;
        $prices['cable'] = 80;
        $prices['complectInternet'] = 8750;
        $prices['hardDisk1Tb'] = 4100;
        $prices['hardDisk2Tb'] = 5500;
        $prices['hardDisk4Tb'] = 9400;
        $prices['hardDisk6Tb'] = 14800;
        $prices['hardDisk8Tb'] = 19500;
        $prices['hardDisk10Tb'] = 25900;
        $prices['hardDisk12Tb'] = 29800;
        $prices['complectMontage'] = 6050;
        $prices['ibp1_4'] = 2250;
        $prices['ibp5_8'] = 4250;
        $prices['indoorCameraMontage'] = 1600;
        $prices['outdoorCameraMontage'] = 2500;
        $prices['montageCableIndoor'] = 30;
        $prices['montageCableOutdoor'] = 40;
        $prices['systemCustmization'] = 2000;
        $prices['internetInstallation'] = 2500;
    // подключаем библиотеку
    require_once './TCPDF/tcpdf.php';
    require_once './TCPDF/config/tcpdf_config.php';

    function createPDF($info){

    // входные данные
        $name = $info['form__name'];
        $phone = $info['form__phone'];
        $mailAdress = $info['form__mail'];
        $quizData = json_decode($info['quizData'], true);
        $object = '';
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
            case 'construction':
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
        $camsTotal = $quizData['camsTotal'];
    // create new PDF document
        $pdf = new TCPDF('P', 'mm', 'A4', true, 'UTF-8');
        $pdf->SetFont('dejavusans', '', 14, '', true);
        $pdf->AddPage();
    // наружные-внутренние-панорамные камеры
        $сamsHtml = '';
        if($quizData['cameraIndoor']){
            if($quizData['sound_need']){
                $сamsHtml .= '<tr class="greybottom">
                <td width="60" vertical-align="middle" colspan="2"><img align=center src="./assets/images/pdf/'.$indoorCamName.'.png" width="50" height="50"></td>
                <td width="230" vertical-align="middle" align="center"><span>'.$indoorCamName.'</span></td>
                <td width="80" vertical-align="middle" align="center"><span>'. $prices['indoorCamera'] .'</span></td>
                <td width="85" vertical-align="middle" align="center"><span>'. ($quizData['cameraIndoor']-$quizData['sound_need']) .'</span></td>
                <td width="75" vertical-align="middle" align="center"><span>'. $prices['indoorCamera']*($quizData['cameraIndoor']-$quizData['sound_need']) .'</span></td>
                </tr>';
            }
            else{
                $сamsHtml .= '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/'.$indoorCamName.'.png" width="50" height="50"></td>
                <td width="230" align="center"><span>'.$indoorCamName.'</span></td>
                <td width="80" align="center"><span>'. $prices['indoorCamera'] .'</span></td>
                <td width="85" align="center"><span>'. $quizData['cameraIndoor'] .'</span></td>
                <td width="75" align="center"><span>'. $prices['indoorCamera']*$quizData['cameraIndoor'] .'</span></td>
                </tr>';
            }
        }
        if($quizData['sound_need']){
            $сamsHtml .= '<tr class="greybottom">
            <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$indoorCamWithSoundName.'.jpg" width="50" height="50"></td>
            <td width="230" align="center"><span>EZ-HAC-T5B20P-A-0360B</span></td>
            <td width="80" align="center"><span>'. $prices['indoorCameraWithSound'] .'</span></td>
            <td width="85" align="center"><span>'. $quizData['sound_need'] .'</span></td>
            <td width="75" align="center"><span>'. $prices['indoorCameraWithSound']*$quizData['sound_need'] .'</span></td>
            </tr>';
        }
        if($quizData['cameraOutdoor']){
            $сamsHtml .= '<tr class="greybottom">
            <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/'.$outdoorCamName.'.jpg" width="50" height="50"></td>
            <td width="230" align="center">'.$outdoorCamName.'</td>
            <td width="80" align="center"><span>'. $prices['outdoorCamera'] .'</span></td>
            <td width="85" align="center"><span>'. $quizData['cameraOutdoor'] .'</span></td>
            <td width="75" align="center"><span>'. $prices['outdoorCamera']*$quizData['cameraOutdoor'] .'</span></td>
            </tr>';
        }
        if($quizData['cameraPanoram']){
            $сamsHtml .= '<tr class="greybottom">
            <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/'.$panoramCamName.'.jpg" width="50" height="50"></td>
            <td width="230" align="center"><span>'.$panoramCamName.'</span></td>
            <td width="80" align="center"><span>'. $prices['panoramCamera'] .'</span></td>
            <td width="85" align="center"><span>'. $quizData['cameraPanoram'] .'</span></td>
            <td width="75" align="center"><span>'. $prices['panoramCamera']*$quizData['cameraPanoram'] .'</span></td>
            </tr>';  
        }
    // видеорегистраторы
        $regHtml = '';
        $camsTotal = $quizData['camsTotal'];
        switch($camsTotal) {
            case $camsTotal >= 1 && $camsTotal <= 4:
                $regHtml = '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$registrator1_4Name.'.png" width="50" height="50"></td>
                <td width="230" align="center"><span>'.$registrator1_4Name.'</span></td>
                <td width="80" align="center"><span>'. $prices['registrator1_4'] .'</span></td>
                <td width="85" align="center"><span> 1 шт </span></td>
                <td width="75" align="center"><span>'. $prices['registrator1_4'] .'</span></td>
                </tr>';
            break;
            case $camsTotal > 4 && $camsTotal <= 8:
                $regHtml = '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$registrator5_8Name.'.png" width="50" height="50"></td>
                <td width="230" align="center"><span>'.$registrator5_8Name.'</span></td>
                <td width="80" align="center"><span>'. $prices['registrator5_8'] .'</span></td>
                <td width="85" align="center"><span> 1 шт </span></td>
                <td width="75" align="center"><span>'. $prices['registrator5_8'] .'</span></td>
                </tr>';
            break;
            case $camsTotal > 8 && $camsTotal <= 16:
                $regHtml = '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$registrator16moreName.'.jpg" width="50" height="50"></td>
                <td width="230" align="center"><span>'.$registrator16moreName.'</span></td>
                <td width="80" align="center"><span>'. $prices['registrator8_16'] .'</span></td>
                <td width="85" align="center"><span> 1 шт </span></td>
                <td width="75" align="center"><span>'. $prices['registrator8_16'] .'</span></td>
                </tr>';
            break;
            case $camsTotal > 16:
                $regHtml = '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$registrator16more.'.jpg" width="50" height="50"></td>
                <td width="230" align="center"><span>'.$registrator16more.'</span></td>
                <td width="80" align="center"><span>'. $prices['registrator16more'] .'</span></td>
                <td width="85" align="center"><span> 1 шт </span></td>
                <td width="75" align="center"><span>'. $prices['registrator16more'] .'</span></td>
                </tr>';
            break;
        }
    // длина кабеля объект и периметр
        if($quizData['objectWidth']){
            $objectCableLenght = $quizData['objectWidth'] + $quizData['objectLength'];
        }
        else{
            $objectCableLenght = 0;
        }
        if($quizData['perimeterWidth']){
            $perimetralCableLenght = $quizData['perimeterWidth'] + $quizData['perimeterLength'];
        }
        else{
            $perimetralCableLenght = 0;
        }
        
        $resultLength = $objectCableLenght + $perimetralCableLenght;
        $cableHTML = '<tr class="greybottom">
        <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$cableName.'.jpg" width="50" height="50"></td>
        <td width="230" align="center"><span>Кабель витая пара</span></td>
        <td width="80" align="center"><span>'.$prices['cable'].'</span></td>
        <td width="85" align="center"><span>'.$resultLength.' м </span></td>
        <td width="75" align="center"><span>'.$resultLength*$prices['cable'].'</span></td>
        </tr>';
    // если нужен интернет
        $internetHTML = '';
        if($quizData['internet_need']){
            $internetHTML = '<tr class="greybottom">
            <td width="60"><img align=center src="./assets/images/pdf/fromArchieve/default.jpg" width="50" height="50"></td>
            <td width="230" align="center"><span>Комплект оборудования</span></td>
            <td width="80" align="center"><span>' . $prices['complectInternet'] . '</span></td>
            <td width="85" align="center"><span> 1 шт </span></td>
            <td width="75" align="center"><span>' . $prices['complectInternet'] . '</span></td>
            </tr>';
        }
    // жесткий диск для хранения архива
        $currentHard = '';
        switch ($quizData['archieve']) {
            case 7:
                if ($camsTotal >= 1 && $camsTotal <= 4) {
                    $currentHard = 'hardDisk1Tb';
                } else if ($camsTotal > 4 && $camsTotal <= 8) {
                    $currentHard = 'hardDisk1Tb';
                } else if ($camsTotal > 8 && $camsTotal <= 16) {
                    $currentHard = 'hardDisk2Tb';
                } else if ($camsTotal > 16 && $camsTotal <= 32) {
                    $currentHard = 'hardDisk4Tb';
                } else if ($camsTotal > 32) {
                    $currentHard = 'hardDisk8Tb';
                }
            break;
            case 14:
                if ($camsTotal >= 1 && $camsTotal <= 4) {
                    $currentHard = 'hardDisk1Tb';
                } else if ($camsTotal > 4 && $camsTotal <= 8) {
                    $currentHard = 'hardDisk2Tb';
                } else if ($camsTotal > 8 && $camsTotal <= 16) {
                    $currentHard = 'hardDisk4Tb';
                } else if ($camsTotal > 16 && $camsTotal <= 32) {
                    $currentHard = 'hardDisk8Tb';
                } else if ($camsTotal > 32) {
                    $currentHard = 'hardDisk12Tb';
                }
            break;
            case 30:
                if ($camsTotal >= 1 && $camsTotal <= 4) {
                    $currentHard = 'hardDisk2Tb';
                } else if ($camsTotal > 4 && $camsTotal <= 8) {
                    $currentHard = 'hardDisk4Tb';
                } else if ($camsTotal > 8 && $camsTotal <= 16) {
                    $currentHard = 'hardDisk8Tb';
                } else if ($camsTotal > 16 && $camsTotal <= 32) {
                    $currentHard = 'hardDisk12Tb';
                } else if ($camsTotal > 32) {
                    $currentHard = '2hardDisk8Tb';
                }
            break;
        }
        if($currentHard == '2hardDisk8Tb'){
            $archieveHTML = '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/skyhawk2.jpg" width="50" height="auto"></td>
                <td width="230" align="center"><span>Хард диск</span></td>
                <td width="80" align="center"><span>' . $prices['hardDisk8Tb'] . '</span></td>
                <td width="85" align="center"><span> 2 шт </span></td>
                <td width="75" align="center"><span>' . $prices['hardDisk8Tb']*2 . '</span></td>
                </tr>';
        }
        else{
            $archieveHTML = '<tr class="greybottom">
                <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/skyhawk2.jpg" width="50" height="auto"></td>
                <td width="230" align="center"><span>Хард диск</span></td>
                <td width="80" align="center"><span>' . $prices[$currentHard] . '</span></td>
                <td width="85" align="center"><span> 1 шт </span></td>
                <td width="75" align="center"><span>' . $prices[$currentHard] . '</span></td>
                </tr>';
        }
    // монтажный комплект
        $montageComplectHtml = '<tr class="greybottom">
        <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/default.jpg" width="50" height="50"></td>
        <td width="230" align="center"><span>Монтажный комплект</span></td>
        <td width="80" align="center"><span>' . $prices['complectMontage'] . '</span></td>
        <td width="85" align="center"><span> 1 шт </span></td>
        <td width="75" align="center"><span>' . $prices['complectMontage'] . '</span></td>
        </tr>';
    // ибп
        $ibpHtml = '';
        switch ($camsTotal) {
            case $camsTotal >= 1 && $camsTotal <= 4:
                $ibp1_4 = 1;
                $ibp5_8 = 0;
                break;
            case $camsTotal > 4 && $camsTotal <= 8:
                $ibp1_4 = 0;
                $ibp5_8 = 1;
                break;
            case $camsTotal > 8 && $camsTotal <= 12:
                $ibp1_4 = 1;
                $ibp5_8 = 1;
                break;
            case $camsTotal > 12 && $camsTotal <= 16:
                $ibp1_4 = 0;
                $ibp5_8 = 2;
                break;
            case $camsTotal > 16 && $camsTotal <= 20:
                $ibp1_4 = 1;
                $ibp5_8 = 2;
                break;
            case $camsTotal > 20 && $camsTotal <= 24:
                $ibp1_4 = 0;
                $ibp5_8 = 3;
                break;
            case $camsTotal > 24 && $camsTotal <= 28:
                $ibp1_4 = 1;
                $ibp5_8 = 3;
                break;
            case $camsTotal > 28 && $camsTotal <= 32:
                $ibp1_4 = 0;
                $ibp5_8 = 4;
                break;
            case $camsTotal > 32:
                $ibp1_4 = 0;
                $ibp5_8 = 5;
                break;
        }
        if($ibp1_4 != 0){
            $ibpHtml .= '<tr class="greybottom">
            <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$ibp1_4Name.'.jpg" width="50" height="50"></td>
            <td width="230" align="center"><span>'.$ibp1_4Name.'</span></td>
            <td width="80" align="center"><span>' . $prices['ibp1_4'] . '</span></td>
            <td width="85" align="center"><span>' . $ibp1_4 . 'шт </span></td>
            <td width="75" align="center"><span>сумма</span></td>
            </tr>';
        }
        if($ibp5_8 != 0){
            $ibpHtml .= '<tr class="greybottom">
            <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/'.$ibp5_8Name.'.jpg" width="50" height="50"></td>
            <td width="230" align="center"><span>'.$ibp5_8Name.'</span></td>
            <td width="80" align="center"><span>' . $prices['ibp5_8'] . '</span></td>
            <td width="85" align="center"><span>' . $ibp5_8 . 'шт </span></td>
            <td width="75" align="center"><span>сумма</span></td>
            </tr>';
        }
    // если требуется монтаж
        $montageHtml='';
        $montagePrice = 0;
        if($quizData['complectation'] == 'montage'){
            if($quizData['cameraIndoor']){
                if ($quizData['sound_need']) {
                    $montagePrice += ($quizData['cameraIndoor']-$quizData['sound_need'])*$prices['indoorCameraMontage'] + $quizData['sound_need']*$prices['indoorCameraWithSound']; // мотаж камер без звука и со звуком в помещении
                } else {
                    $montagePrice += $quizData['cameraIndoor']*$prices['indoorCameraMontage']; // мотаж камер без звука в помещении
                }
                $montagePrice += $quizData['cameraIndoor']*$objectCableLenght*$prices['montageCableIndoor']; // мотаж кабеля в помещении
            }
            if($quizData['cameraOutdoor']){
                $montagePrice += $quizData['cameraOutdoor']*$prices['outdoorCameraMontage']; // мотаж камер уличных
            }
            if($quizData['cameraPanoram']){
                $montagePrice += $quizData['cameraPanoram']*$prices['outdoorCameraMontage']; // монтаж камер панорамных
                $montagePrice += $quizData['cameraPanoram']*$objectCableLenght*$prices['montageCableOutdoor']; // монтаж кабеля панорамных
            }
            if($quizData['camsPerimetralCount']){
                $montagePrice += $quizData['camsPerimetralCount']*$perimetralCableLenght*$prices['montageCableOutdoor']; // монтаж периметрального кабеля
            }
            if ($quizData['cameraOutdoor']) { // монтаж кабеля по периметру объекта
                if ($quizData['camsPerimetralCount']) {
                    $montagePrice += $objectCableLenght * $prices['montageCableOutdoor']*($quizData['cameraOutdoor'] - $quizData['camsPerimetralCount']);
                } else {
                    $montagePrice += $objectCableLenght * $prices['montageCableOutdoor'] * $quizData['cameraOutdoor'];
                }
            }   
            $montagePrice += $prices['systemCustmization'];
            $montagePrice += $prices['internetInstallation'];
            $montageHtml .= '<tr class="greybottom">
            <td width="60" colspan="2" align="center" colspan="2"><img align=center src="./assets/images/pdf/fromArchieve/default.jpg" width="50" height="50"></td>
            <td width="230" align="center"><span> Монтаж и настройка оборудования </span></td>
            <td width="80" align="center"><span>' . $montagePrice . '</span></td>
            <td width="85" align="center"><span> 1шт </span></td>
            <td width="75" align="center"><span>' . $montagePrice . '</span></td>
            </tr>';
        }
    $html = <<<EOF
        <style>
            h1{
                text-align: center;
                font-size: 16px;
            }
            td{
                font-size: 8px;
                vertical-align: middle;
                border-bottom: 1px solid grey;
            }
            .info{
                font-size: 8px;
            }
        </style>
        <h1>Коммерческое предложение № 1</h1>
        <p class="info">Имя: $name</p>
        <p class="info">Телефон: $phone</p>
        <p class="info">Объект: $object</p>
        <p class="info">Общее количество камер: $camsTotal</p>
        <table class="table" cellpadding="4" cellspacing="0">
            <tr class="table_header">
                <td width="60" class='center' colspan="2" colspan="2"></td>
                <td width="230"  class='center'><span>Наименование</span></td>
                <td width="80" class='center' ><span>Стоимость, руб.</span></td>
                <td width="85"  class='center'><span>Кол-во, ед.</span></td>
                <td width="75" class='center' ><span>Сумма, руб.</span></td>
            </tr>
            $сamsHtml
            $regHtml
            $ibpHtml
            $cableHTML
            $internetHTML
            $archieveHTML
            $montageComplectHtml
            $montageHtml
            <tr class="table_footer">
                <td width="60" class='center'></td>
                <td width="230" class='center'><span>Итого: </span></td>
                <td width="80" class='center'><span></span></td>
                <td width="85" class='center'><span></span></td>
                <td width="75" class='center'><span>сумма</span></td>
            </tr>
        </table>
        EOF;
    $pdf->writeHTML($html, true, false, false, false, '');
            $attachment = $pdf->Output('e-tickets.pdf', 'S');
            return $attachment;
    }
?>