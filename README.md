# Probelogr

# Introduction to Probelogr Implementation

This repository contains implementations of the Probelogr API on different languages.

## Prerequisite
Before you continue there are some There are some things you need to have done.
1. You should have registered on __[www.probelogr.com](https://www.probelogr.com "Probelogr's Homepage")__
2. You should have created a __Project__ > __App__ > __App Settings__
3. Your should have generated an __Access key__ in __App Settings__ and added one or more __Activity Tags__


# How to use Probelogr Implementation Code

## 1. Java Implementation
1.  Copy the java implementation code into your project in a directory if your chosing,
2.  __Set Up Java Config:__ Use the __ProbelogrCore.updateConfig(String url,String accessToken)__, it is a good idea to set this config in portion of the project that will only run once when the project starts ups.
3. __Pushing logs:__ The ProbelogrCore.pushLog(String,String | Object) method should be called to when your want to push a log to probelogr app account
the tag paremeter is must have been created for yout ap
```
ProbelogrCore.pushLog(String tag, String body);
or
ProbelogrCore.pushLog(String tag, Object body);

it should be noted that the pushLog(String tag, Object body); needs Gson dependency, as it serializes object to be sent as JSON Format
```
4. 
  
  
## 1. PHP Implementation

## 1. Javascript Implementation
