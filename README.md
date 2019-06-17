![javaScript icon](https://github.com/Zefevr/FinalEvaluation/blob/master/dev-icons/js.svg)
![react icon](https://github.com/Zefevr/FinalEvaluation/blob/master/dev-icons/react.svg)
![redux icon](https://github.com/Zefevr/FinalEvaluation/blob/master/dev-icons/redux.svg)
![html icon](https://github.com/Zefevr/FinalEvaluation/blob/master/dev-icons/html.svg)
![css icon](https://github.com/Zefevr/FinalEvaluation/blob/master/dev-icons/css.svg)


# StreamZF App
This repo contains a bolierplate for an streaming app. It uses React/Redux in the frontend, the backend exposes a REST API done by a json-server and the OBS is connected using Rtmp-server.

_______________________________________________________________________________

### Installation:

Clone this repository:

* On Server's folder: Run `npm i`to install dependencies and `npm start`.

* On Rtmpserver's folder: Run `npm i`to install dependencies and `npm start`.

* On Client's folder: Run `npm i` to install dependencies and `npm start` to listen to local port.


_______________________________________________________________________________

### List of features:

1. OAuth:
  
    Ability to login using google authentication.

2. CRUD:
 
    Logged in users can edit / create / delete their streams.
    Not logged users can only see the list of streams and watch them

3. Streaming:
  
    Using an OBS program to stream and connected to the application by rtmpserver.

_______________________________________________________________________________

### Pre-requesists:

1. Get OAuth Client-Id:

    [here](https://developers.google.com/fit/android/get-api-key) it explains how to get a client-id for google OAuth.
  
    After cloning the repository, you can replace this client-id and put it in [client/src/components/GoogleAuth.js]  (https://github.com/Zefevr/StreamZF/blob/master/client/src/components/GoogleAuth.js)
  
2. Install OBS:

    You will need to have an OBS streaming program, you can get it [here](https://obsproject.com).
 
    In settings / stream:
      * Set URL : rtmp://localhost/live
      * Set Key : "ID of the stream you created in you the app"
  
  

