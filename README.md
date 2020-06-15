# Probelogr

# Introduction to Probelogr Implementation

This repository contains implementations for the Probelogr API in different languages.

## Prerequisites
Before you continue, there are some things you need to have done:
1. You should have registered on __[www.probelogr.com](https://www.probelogr.com "Probelogr's Homepage")__
2. You should have created a __Project__ > __App__ > __App Settings__
3. Your should have generated an __Access key__ in __App Settings__ and added one or more __Activity Tags__


# How to use Probelogr Implementation Code

## 1. Java Implementation (ProbelogrCore.java)
1.  Copy the java implementation code into your project in a package of your choosing
2.  __Setup Java Config:__ Use the __ProbelogrCore.updateConfig(String probelogrApi,String accessToken)__. It is a good idea to set up this config in a portion of the project that will only run once when the project starts up.
3. __Pushing logs:__ The ProbelogrCore.pushLog(String,String | Object) method should be called when you want to push a log to the Probelogr account. The tag parameters must have already been created for your app in __App Settings__
```
ProbelogrCore.pushLog(String tag, String body);
or
ProbelogrCore.pushLog(String tag, Object body);
```
__NOTE:__ The pushLog(String tag, Object body); needs Gson dependency.
The Gson dependency is used to serialize objects to be sent in JSON Format

  
  
## 2. PHP Implementation (ProbelogrAsset.php)
1.  Copy the java implementation code into your project in a package of your choosing
2.  __Setup Java Config:__ Use the __app\assets\ProbelogrAsset::updateConfig($probelogrApiUrl,$accessToken)__. It is a good idea to set this config in a portion of the project that will only run once when the project starts ups.
3. __Pushing logs:__ The \app\assets\ProbelogrAsset::pushLog($tag, $log); method should be called when you want to push a log to your Probelogr account.
The tag parameters must have already been created for your app in __App Settings__
```
\app\assets\ProbelogrAsset::pushLog($tag, $log);
```
__NOTE:__ When you copy the PHP file, you are free to make changes as suit your software.

## 3. Javascript Implementation
#### There are are two way to implement use probelogr for your javascript application
__Remote Script:__
1. copy the scripts from the __probelogr.html__ file
```
//Paste this on top of your page, replace {accesstoken} with the accessToken that you genenrated
//on your app settings on probelogr.
<script src="http://api.probelogr.com/logit/js-script/{accessToken}"></script>

//Call the function below to push logs to your probelogr account.
//This can be done on  any portion of your webpage, but it must be below (<script src="http://api.probelogr.com/logit/js-script/{accessToken}"></script>)
probelogr.pushLog(tag,body);
```

2. If you need more customization then you can copy the __probelogr.js__ into your project and call the probelogr.pushLog(tag,body);
