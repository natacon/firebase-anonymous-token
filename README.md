Firebase匿名ユーザトークン取得
===

モジュールをインストールする。
```
npm install
```

アクセス先のFirebase設定ファイルを作成する。
```
cp config.js.sample config.js
```

作成したconfig.jsを開き、利用したい環境に合わせて下記を置換する。
設定する値ははFirebaseコンソールのプロジェクトの設定画面を参照する
- API_KEY: ウェブ API キー
- PROJECT_ID: プロジェクト ID

実行して匿名認証トークンを得る
```
node main.js
```
