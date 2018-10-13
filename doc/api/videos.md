# 動画に関する処理

## 動画の一覧を取得する

Path : `/api/videos`

Method: `GET`

Request Header:

```
Content-Type: application/json
```

Request Parameter:

```
```

Request Body:

```
```

Response Status Code:

```
成功: 200
```

Response Body:

```json
{
  "videos": [
    {
      "reactions": {
        "good": []
      },
      "comments": [],
      "tags": [],
      "_id": "動画 docid (例: 5bc0be56cc0e070026683b95)",
      "id": "動画のID (例: e681f290-ce33-11e8-8c09-a70871eb6645)",
      "user": "動画作成ユーザー docid (例: 5bc0bdd7cb033538fc30ec46)", 
      "url": "動画のURL m3u8 (例: /e681f290-ce33-11e8-8c09-a70871eb6645/video.m3u8)",
      "vaild": true,  //(true:有効, false:無効)
      "rank": 1, //ランキング数値
      "createdAt": "作成日  (例: 2018-10-12T15:31:34.292Z)",
      "updatedAt": "更新日  (例: 2018-10-12T15:31:34.292Z)",
      "__v": 0
    }
  ]
}
```

## 動画をアップロードする
ファイルのフォーマットは tiktokからエクスポートされた動画 mp4 がアップロードされることを想定

Path : `/api/videos`

Method: `POST`

Request Header:

```
Content-Type: multipart/form-data
```

Request Parameter:

```
```

Request Body:

```
name: video
value: ファイルオブジェクト

Content-Disposition: form-data; name="video"; filename="xxxxxx.mp4" 
```

Response Status Code:

```
成功: 200
失敗: 400
 アップロードのform-data名がvideoではない
 ファイルがアップロードされなかった
```

Response Body:
新しく作成された動画に関する情報が戻ります

```json
{
  "reactions": {
    "good": []
  },
  "comments": [],
  "tags": [],
  "_id": "動画 docid (例: 5bc0be56cc0e070026683b95)",
  "id": "動画のID (例: e681f290-ce33-11e8-8c09-a70871eb6645)",
  "user": {
    "_id": "ユーザー docid (例: 5bc0bdd7cb033538fc30ec46)",
    "id": "ユーザーID (例: a)",
    "name": "ユーザー名 (例: moto)"
  },
  "url": "動画のURL m3u8 (例: /e681f290-ce33-11e8-8c09-a70871eb6645/video.m3u8)",
  "vaild": true, //(true:有効, false:無効)
  "rank": 1 //ランキング数値
}
```