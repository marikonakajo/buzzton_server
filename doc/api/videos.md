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

有効な動画のみ返答されます。
報告済み動画は返答されません。

```json
{
  "videos": [
    {
      "reactions": {
        "like": 0
      },
      "comments": [],
      "tags": [
        "#いいよ",
        "#楽しい"
      ],
      "_id": "動画 docid (例: 5bc0be56cc0e070026683b95)",
      "id": "動画のID (例: e681f290-ce33-11e8-8c09-a70871eb6645)",
      "user": {
        "_id": "動画作成ユーザー docid (例: 5bc0bdd7cb033538fc30ec46)", 
        "id": "a",
        "name": "moto"
      },
      "url": "動画のURL m3u8 (例: /e681f290-ce33-11e8-8c09-a70871eb6645/video.m3u8)",
      "vaild": true,
      "rank": 1,
      "message": "いいよね！ #いいよ #楽しい",
      "createdAt": "2018-10-14T03:24:31.859Z",
      "updatedAt": "2018-10-14T03:24:31.859Z",
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
```

Request Parameter:

```
```

Request Body:

```multipart/form-data
name: video (mp4ファイルをfileオブジェクトとして送信)
message: コメント (タグ入り) (例: いいよね！ #いいよ #楽しい)
```

Response Status Code:

```
成功: 200
失敗: 400
 アップロードのform-data名がvideoではない
 ファイルがアップロードされなかった
```

Response Body:
新しく作成された動画に関する情報が戻ります。
返答にある 動画のID を使って 動画情報のGET APIなどを呼び出してください

```json

{
  "comments": [],
  "tags": [
    "#いいよ",
    "#楽しい"
  ],
  "_id": "動画 docid (例: 5bc0be56cc0e070026683b95)",
  "id": "動画のID (例: e681f290-ce33-11e8-8c09-a70871eb6645)",
  "user": {
    "_id": "ユーザー docid (例: 5bc0bdd7cb033538fc30ec46)",
    "id": "ユーザーID (例: a)",
    "name": "ユーザー名 (例: moto)"
  },
  "url": "動画のURL m3u8 (例: /e681f290-ce33-11e8-8c09-a70871eb6645/video.m3u8)",
  "vaild": true,
  "rank": 1,
  "message": "いいよね！ #いいよ #楽しい",
  "reactions": {
    "like": 0
  }
}
```

## 動画情報を取得する

Path : `/api/videos/:id`

Method: `GET`

Request Header:

```
Content-Type: application/json
```

Request Parameter:

```
id : `動画のID`
```

Request Body:

```
```

Response Status Code:

```
成功: 200
```

Response Body:

有効な動画のみ返答されます。
報告済み動画は返答されません。

```json
{
  "reactions": {
    "like": 0
  },
  "comments": [
    {
      "_id": "5bc2b88c1711b303b7503131",
      "text": "その発想はなかった！",
      "user": {
        "_id": "5bc0bdd7cb033538fc30ec46",
        "id": "a",
        "name": "moto"
      },
      "like": 0,
      "__v": 0
    }
  ],
  "tags": [
    "#いいよ",
    "#楽しい"
  ],
  "_id": "動画 docid (例: 5bc0be56cc0e070026683b95)",
  "id": "動画のID (例: e681f290-ce33-11e8-8c09-a70871eb6645)",
  "user": {
    "_id": "ユーザー docid (例: 5bc0bdd7cb033538fc30ec46)",
    "id": "ユーザーID (例: a)",
    "name": "ユーザー名 (例: moto)"
  },
  "url": "動画のURL m3u8 (例: /e681f290-ce33-11e8-8c09-a70871eb6645/video.m3u8)",
  "vaild": true,
  "rank": 1,
  "message": "いいよね！ #いいよ #楽しい",
  "createdAt": "2018-10-14T03:24:31.859Z",
  "updatedAt": "2018-10-14T03:31:24.164Z",
  "__v": 1
}
```

## 動画にコメントする

Path : `/api/videos/:id/comments`

Method: `POST`

Request Header:

```
Content-Type: application/json
```

Request Parameter:

```
id : `動画のID`
```

Request Body:

```json
{
	"message": "その発想はなかった！"
}
```

Response Status Code:

```
成功: 200
```

Response Body:

```
```

## 動画にリアクション(Like)する

Path : `/api/videos/:id/reactions/like`

Method: `POST`

Request Header:

```
Content-Type: application/json
```

Request Parameter:

```
id : `動画のID`
```

Request Body:

```
```

Response Status Code:

```
成功: 200
```

Response Body:

```
```