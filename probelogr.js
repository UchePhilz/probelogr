/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


"use strict";


const api = "{api}";
const accessToken = "{accessToken}";

var probelogr = (function () {

    'use strict';

    
    var publicAPIs = {};

  
    var makeBody = function (tag, body) {
        return JSON.stringify({tags: tag, body: body})
    }

    var pushEngine = function (requestBody) {

        var xhttp = new XMLHttpRequest();

        xhttp.open("POST", api, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('accessToken', accessToken);
        xhttp.send(requestBody);


        xhttp.onload = function () {
            var data = JSON.parse(this.responseText);
            // console.log(data);
            if (data.retn == 0) {
                console.log(data);
            } else {
                throw data
            }
        };

    }

    // A public method
    publicAPIs.pushLog = function (tag, body) {
        var requestBody = makeBody(tag, body)
        pushEngine(requestBody);
    };

    
    return publicAPIs;

})();

