/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Written by Uchephilz (https://www/uchephilz.com)
 */


"use strict";


const api = "{api}";
const accessToken = "{accessToken}";





var probelogr = (function () {


    var publicAPIs = {};


    /**
     * 
     * @returns {window.location.href|DOMString}
     */
    var getUrl = function () {
        return window.location.href;
    }

    /**
     * 
     * @param {type} tag
     * @param {type} body
     * @returns {String}
     */
    var makeBody = function (tag, body) {
        return JSON.stringify({tags: tag, body: body})
    }

    /**
     * 
     * @param {type} tag
     * @param {type} logBody
     * @param {type} xhr
     * @returns {probelogrprobelogr.getLogData.pushBody}
     */
    var getLogData = function (tag, logBody, xhr) {

        var url = getUrl();

        var referrer = document.referrer;
        var t = new Date().getTime();

        var linkData = {
            "currentUrl": url,
            "referrer": referrer,
            "visitTime": t
        }

        var logData = {
            "tag": tag,
            "logBody": logBody,
            "visitTime": t
        }

        var httpStatusData = {};
        if (xhr != null) {
            var httpStatusData = {
                "statusCode": xhr.status,
                "statusText": xhr.statusText
            }
        }

        var pushBody = {
            link: linkData,
            log: logData,
            httpStatus: httpStatusData
        }

        return pushBody;

    }

    /**
     * 
     * @param {type} requestBody
     * @returns {undefined}
     */
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

    /**
     * 
     * @param {type} tag
     * @param {type} body
     * @returns {undefined}
     */
    publicAPIs.pushLog = function (tag, body) {
        var requestBody = makeBody(tag, body)
        pushEngine(requestBody);
    };




    /**
     * 
     * @param {type} tag
     * @param {type} arrLink
     * @param {type} logBody
     * @returns {undefined}
     */
    publicAPIs.pushLogByLink = function (tag, arrLink, logBody) {

        var url = getUrl();

        arrLink.forEach(element => {

            console.log(element);

            var canPush = url.includes(element)

            if (canPush) {
                var pushBody = getLogData(tag, logBody);
                publicAPIs.pushLog(tag, JSON.stringify(pushBody));
            } else {
                console.log("Can't push");
            }


        });
    }

    /**
     * 
     * @param {type} tag
     * @returns {undefined}
     */
    publicAPIs.pushOnError = function (tag) {

        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", location);
        xhr.send();

        xhr.onload = function () {

            var statusCode = xhr.status;

            if (statusCode >= 300) {
                var pushBody = getLogData(tag, "", xhr);
                publicAPIs.pushLog(tag, JSON.stringify(pushBody));
            }
        }
    }

    // Return our public methods so that they can be accessed
    return publicAPIs;




})();
