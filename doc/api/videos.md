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
  videos: [
    {
      id: "動画のID (例: 22387da0-cae1-11e8-8760-b5fb1d75187d)",
      url: "動画のURL m3u8ファイル (例: /22387da0-cae1-11e8-8760-b5fb1d75187d/video.m3u8)",
      userid: "ユーザーID (例: user1)",
      username: "ユーザー名 (例: ばずとん)",
      reactions: {},
      rank: "ランキング数値 (例: 1)",
      comments: [],
      tags: [],
      timestamp: "登録された日付 (例: 2018-10-08T08:19:41.817Z)",
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
  id: "動画のID (例: 22387da0-cae1-11e8-8760-b5fb1d75187d)",
  url: "動画のURL m3u8ファイル (例: /22387da0-cae1-11e8-8760-b5fb1d75187d/video.m3u8)",
  userid: "ユーザーID (例: user1)",
  username: "ユーザー名 (例: ばずとん)",
  reactions: {},
  rank: "ランキングは未計算のため利用不可",
  comments: [],
  tags: [],
  timestamp: "登録された日付 (例: 2018-10-08T08:19:41.817Z)",
}
```