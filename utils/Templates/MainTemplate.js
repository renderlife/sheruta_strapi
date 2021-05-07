

module.exports = ({
    heading,
    subHeading,
    body,
    actionURL,
    actionText
}) => {
    return `<html>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <style></style>
    <script src="https://kit.fontawesome.com/e5a7a5b6be.js" crossorigin="anonymous"></script>

    <title>Email verification</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
        @media screen {
            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 400;
                src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 700;
                src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
            }
        }

        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* MOBILE STYLES */
        @media screen and (max-width:600px) {
            h1 {
                font-size: 32px !important;
                line-height: 32px !important;
            }
        }

        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>

<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div
        style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
        We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table width="100%" cellspacing="0" cellpadding="0" border="0">
        <!-- LOGO -->
        <tbody>
            <tr>
                <td bgcolor="00ba74" align="center">
                    <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td style="padding: 40px 10px 40px 10px;" valign="top" align="center"> </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0px 10px 0px 10px;" bgcolor="#00ba74" align="center">
                    <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;"
                                    valign="top" bgcolor="#ffffff" align="center">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/sheruta-1368d.appspot.com/o/LOGO%2Fsheruta%20logo%20%20green%20new.png?alt=media&token=b87f4d95-550c-430b-a0e1-56f72b5c2d0f"
                                        style="display: block; border: 0px;" width="225" height="220">
                                    <h1 style="font-size: 28px; font-weight: bold; margin: 2;"> ${heading} </h1>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0px 10px 0px 10px;" bgcolor="#f4f4f4" align="center">
                    <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                    bgcolor="#ffffff" align="left">
                                    <p style="margin: 0;"> ${subHeading}, </p>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" align="left">
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>

                                        </tbody>
                                    </table>
                                </td>
                            </tr> <!-- COPY -->
                            <tr>
                                <td style="padding: 0px 30px 0px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                    bgcolor="#ffffff" align="left">
                                    <p style="margin: 0;">${body}</p>
                                </td>
                            </tr> <!-- COPY -->
                            <tr>
                                <td style="padding: 20px 30px 60px 30px;" bgcolor="#ffffff" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="border-radius: 3px;" bgcolor="#202323" align="center"><a href=${actionURL} target="_blank"
                                                        style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #202323; display: inline-block;">${actionText}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                    bgcolor="#ffffff" align="left">
                                    <p style="margin: 0;">Love,<br>Sheruta Team</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 30px 10px 0px 10px;" bgcolor="#f4f4f4" align="center">
                    <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"
                                    bgcolor="#00ba74" align="center">
                                    <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more
                                        help?</h2>
                                    <p style="margin: 0;">We are here to help you <output></output></p>
                                    <div class='d-flex justify-content-between ml-5 mr-5 mt-3'>
                                        <a style="color: #444343; font-size: 30px;" 111111 href="http://www.instagram.com/sheruta_ng"><i
                                                class="fab fa-instagram"></i></a>
                                        <a style="color: #444343; font-size: 30px;" 111111 href="http://www.twitter.com/sheruta_ng"><i
                                                class="fab fa-twitter"></i></a>
                                        <a style="color: #444343; font-size: 30px;" 111111 href="https://facebook.com/sheruta.ng"><i
                                                class="fab fa-facebook"></i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0px 10px 0px 10px;" bgcolor="#f4f4f4" align="center">
                    <table style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"
                                    bgcolor="#f4f4f4" align="left"> <br>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>


    <script type="text/javascript"></script>
</body>

</html>`
}

