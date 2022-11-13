# openapi-typescript-example

[【OpenAPI】APIスキーマから勝手に型がつくaxiosを作って幸せになる【openapi-typescript】](https://zenn.dev/sum0/articles/8e903ed05ba681)のサンプルレポジトリです

## openapi-typescriptのバージョンに関する注意

2022/11時点でopenapi-typescriptのメジャーバージョンは6です。
それに伴い生成するスキーマファイルの内容が一部変更があリます。
この変更はヘルパー等に影響はありませんが、5系を利用している方は[openapi-typescript-v5](https://github.com/mymactive/openapi-typescript-example/tree/openapi-typescript-v5)ブランチを参照してください。

## ディレクトリ構成

記事上のファイルは以下のディレクトリに保管してあります。

- root
  - openapi.yaml
  - models
    - schema.ts
    - schemaHelper.ts
  - utils
    - axiosUtils.ts
  - hooks
    - useAppSWR.ts
