
<?php

      $to= "rsvp@adamandciara.com";
      $headers = "From: Wedding RSVP <rsvp@adamandciara.com>\r\n" .
      "X-Mailer: php\r\n";
      $headers .= "Reply-To: rsvp@adamandciara.com\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      $subject = "Wedding RSVP";
      $mailbody .= "<style>a {color:#04a6e1; } html,body{font-family: Arial, Verdana;}</style>";
      $mailbody .= "<span style='font-family:Arial,Verdana;'>";
      $mailbody .= "RSVP reply from - " . $_POST["RSVPName"] . "<br>" ;
      $mailbody .= "Invitation has been ". $_POST["RSVPChk"] . "<br>";
      $mailbody .= "Message - ". $_POST["RSVPMessage"] . "";

      //send the email
      if(mail($to, $subject, $mailbody, $headers)) 
      {
        print "<h2>RSVP sent, Thanks.</h2>";
      } 
      else 
      {
        print "<p class='dialogerror'>Problem in Sending RSVP.</p>";
      }
?>

