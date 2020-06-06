<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\assets;

/**
 * Description of ProbelogrAsset
 *
 * @author uchephilz
 */
class ProbelogrAsset {

    private static $ACCESS_TOKEN = "";
    private static $URL = "";

    public static function updateConfig($url, $accessToken) {
        self::$URL = $url;
        self::$ACCESS_TOKEN = $accessToken;
    }

    private static function makeBody($tag, $body) {
        $bodyarray = ['tags' => $tag, 'body' => (string) $body];
        return json_encode($bodyarray);
    }

    public static function pushLog($tag, $body) {
        $logBody = self::makeBody($tag, $body);
        self::pushEngine($logBody);
    }

    private static function pushEngine($body) {

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => self::$URL,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => array("accessToken: " . self::$ACCESS_TOKEN, "content-type: application/json"),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);


        curl_close($curl);
        if ($err) {
            
            return null;
        } else {
            return json_decode($response);
        }
    }

}
