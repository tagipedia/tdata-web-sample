# tdata_web_sample

## Restful Api


#### Getting public access token 

Request 
  
```
curl -XPOST https://tagipedia.com/oauth/token \
-d "grant_type=client_credentials&client_id=:client_id&client_secret=:client_secret"
```

&nbsp;&nbsp;&nbsp;&nbsp; **client_id** get from tagipedia Team

&nbsp;&nbsp;&nbsp;&nbsp; **client_secret** get from tagipedia Team


Response 
```
{
  "access_token": "",
  "token_type": ""
}
```

___

#### Creating user

Request 
  
```
curl -XPOST https://tagipedia.com/api/0.2/public/users/create_auto_generated_user \
  -d "access_token=:access_token"

```
&nbsp;&nbsp;&nbsp;&nbsp; **access_token**  get from *<a href="#getting-public-access-token"> public access token</a>*

Response 
```
{
  "time": "",
  "success": true,
  "content": {
      "token": "",
      "refresh_token": "",
      "expires_in": "",
      "token_type": ""
  }
}
```

___

#### Creating content service

Request 
  
```
curl -XPOST https://tagipedia.com/api/0.2/public/content_services \
  -d "access_token=:token&content_service[main_topic][title]=:content_service_title"
```
&nbsp;&nbsp;&nbsp;&nbsp; **token**  get from *<a href="#creating-user"> creating user</a>*

&nbsp;&nbsp;&nbsp;&nbsp; **content_service_title**  *String*

Response 
```
{
  "time": "",
  "success": true,
  "content": {
      "id": Integer,
      "map_id": null,
      "main_topic": {
          "id": Integer,
          "tag": "",
          "title": ""
      }
  }
}
```

##### Associate map with created content service
Contact Tagipedia team and we will associate drawn map to your created content service.

## Add tdata to your App

### Installation

#### To integrate TMaps into your Web project, add it to your project:
1. Add <script src="CONTACT_US_FOR_SCRIPT"></script> to your project (Request script and map id from Tagipedia Team)
2. Read our sample for examples

#### Beacon iframe

add this div where you want to render the beacon iframe.

```html
  <div id="beaconiframe"></div>
```

add script in your controller.

```javascript
  $(document).ready(function(){
    const tdata = new TData({
      selector: '#beaconiframe',
      access_token: :access_token,
      path: '#!/services/' + content_service_id + '/beacon'
    });
  });
```

&nbsp;&nbsp;&nbsp;&nbsp; **content_service_id**  get from *<a href="#creating-content-service"> creating content service</a>*

&nbsp;&nbsp;&nbsp;&nbsp; **access_token**  get from *<a href="#creating-user"> creating user</a>*

___

#### Analytics iframe

add this div where you want to render the analytics iframe.

```html
  <div id="analyticsiframe"></div>
```

add script in your controller.

```javascript
  $(document).ready(function(){
    const tdata = new TData({
      selector: '#analyticsiframe',
      access_token: :access_token,
      path: '#!/services/' + content_service_id + '/analytics'
    });
  });
```

&nbsp;&nbsp;&nbsp;&nbsp; **content_service_id**  get from *<a href="#creating-content-service"> creating content service</a>*

&nbsp;&nbsp;&nbsp;&nbsp; **access_token**  get from *<a href="#creating-user"> creating user</a>*


___

#### HeatMap iframe

add this div where you want to render the heatmap iframe.

```html
  <div id="heatmapiframe"></div>
```

add script in your controller.

```javascript
  $(document).ready(function(){
    const tdata = new TData({
      selector: '#heatmapiframe',
      access_token: :access_token,
      path: '#!/services/' + content_service_id + '/heatMap'
    });
  });
```

&nbsp;&nbsp;&nbsp;&nbsp; **content_service_id**  get from *<a href="#creating-content-service"> creating content service</a>*

&nbsp;&nbsp;&nbsp;&nbsp; **access_token**  get from *<a href="#creating-user"> creating user</a>*
