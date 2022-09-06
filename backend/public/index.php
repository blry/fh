<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require '../PHPMailer/src/Exception.php';
    require '../PHPMailer/src/PHPMailer.php';
    require '../PHPMailer/src/SMTP.php';

    header('Access-Control-Allow-Origin: *');

    if (
        !isset($_POST['sender']) ||
        !filter_var($_POST['sender'], FILTER_VALIDATE_EMAIL) ||
        !isset($_POST['name']) ||
        !isset($_POST['message'])
    ) {
        echo 'Validation required';
        die();
    }

    $sender = $_POST['sender'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $ip = $_SERVER['REMOTE_ADDR'];

    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->Username = 'asterpu@finhubss.com';
        $mail->Password = file_get_contents($_ENV['SMTP_PASSWORD_FILE']);
        $mail->SMTPSecure = 'ssl';

        //Recipients
        $mail->setFrom('asterpu@finhubss.com', 'FINHUBSS.COM Contact Form');
        $mail->addAddress('info@finhubss.com');
        $mail->addReplyTo($sender, $name);
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        $mail->isHTML(false);
        $mail->Subject = 'FinHub Concact Form - ' . $name;
        $mail->Body = "Name: $name\r\nEmail: $sender\r\nIP:$ip\r\nMessage: $message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
