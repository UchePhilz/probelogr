# Probelogr

# Introduction to Probelogr Implementation

This repository contains implementations of the Probelogr API on different languages.

## Prerequisite
Before you continue there are some things you need to have done.
1. You should have registered on __[www.probelogr.com](https://www.probelogr.com "Probelogr's Homepage")__
2. You should have created a __Project__ > __App__ > __App Settings__
3. Your should have generated an __Access key__ in __App Settings__ and added one or more __Activity Tags__


# How to use Probelogr Implementation Code

## 1. Java Implementation (ProbelogrCore.java)
1.  Copy the java implementation code into your project in a package if your chosing,
2.  __Set Up Java Config:__ Use the __ProbelogrCore.updateConfig(String probelogrApi,String accessToken)__, it is a good idea to set this config in a portion of the project that will only run once when the project starts ups.
3. __Pushing logs:__ The ProbelogrCore.pushLog(String,String | Object) method should be called to when your want to push a log to probelogr app account
the tag paremeter is must have been created for yout ap
```
ProbelogrCore.pushLog(String tag, String body);
or
ProbelogrCore.pushLog(String tag, Object body);
```
__NOTE:__ The pushLog(String tag, Object body); needs Gson dependency,
The Gson dependency is used to serialize object to be sent in JSON Format

  
  
## 2. PHP Implementation (ProbelogrAsset.php)
1.  Copy the php implementation code into your project in a directory if your chosing,
2.  __Set Up Java Config:__ Use the __app\assets\ProbelogrAsset::updateConfig($probelogrApiUrl,$accessToken)__, it is a good idea to set this config in a portion of the project that will only run once when the project starts ups.
3. __Pushing logs:__ The \app\assets\ProbelogrAsset::pushLog($tag, $log); method should be called to when your want to push a log to probelogr app account
the tag paremeter is must have been created for your app
```
\app\assets\ProbelogrAsset::pushLog($tag, $log);
```
__NOTE:__ When you copy the php file, you are free to make changes as suits your software.

## 3. Javascript Implementation
#### There are are two way to implement use probelogr for your javascript application
__Remote Script:__
1. Use copy the scripts the probelogr.html file
```
paste this on top of your page, replace {accesstoken} with your accessToken that you genenrated
on yout app settings on probelogr.
<script src="http://api.probelogr.com/logit/js-script/{accessToken}"></script>

Call the function below to push logs to your probelogr account.
at any portion of your webpage, but it must be below (<script src="http://api.probelogr.com/logit/js-script/{accessToken}"></script>)

probelogr.pushLog(tag,body);
```

2. if you need more customization then you can copy the probelogr.js
