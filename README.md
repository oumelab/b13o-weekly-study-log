# Bluberry Mojito 学習プロジェクト - 学習記録アプリ

1週間の学習時間を管理・可視化するアプリを構築しながら、useMemo と useCallback によるパフォーマンス最適化について学ぶ。<br />
React 学習コミュニティ [Blueberry Mojito](https://b13o.com/) の学習プロジェクトです。<br />
<br />
課題の実装の他、個人的な学習目的で私が行った変更や追加機能が含まれています。<br />

> [!NOTE]
> このリポジトリは、個人的な学習およびデモンストレーションの目的のみに使用されます。<br />
> This repository is for personal learning and demonstration purposes only.

<br />

## デモ

[https://oumelab.github.io/b13o-weekly-study-log/](https://oumelab.github.io/b13o-weekly-study-log/)

<br />

## 主な機能
1. 学習ログの記録:
    - 曜日、カテゴリ、作業時間、メモを入力して記録できる
    - 3段階の自己評価でモチベーションを設定できる
2. 学習データの可視化:
    - 日別の学習時間をグラフ表示
    - カテゴリー別の合計時間を表示
    - 先週のカテゴリー別の合計時間を表示
    - 全体の合計時間を表示
    - 自己評価の総計を表示
3. データ管理:
    - 学習ログの一覧表示
    - 不要なログの削除

<br />

## 技術スタック
- React
- Vite
- Tailwind CSS
- Recharts

<br />

## 機能追加予定
- [ ] `App.tsx` 内のロジックをカスタムフックに切り出す。（その際、`deleteLog` 関数も `useCallback` でメモ化する）
- [ ] フォーム入力中のバリデーションとして、自己評価が `negative` の場合は、改善のためにメモの項目の入力を必須にする。それ以外は任意。
- [ ] 今週1週間分のログを、JSON 形式のファイルでエクスポートできるようにする。

<br />

## 追加した機能・修正点など
- [x] レスポンシブ調整
- [x] グラフの表示調整（x軸の日付と線の余白など）<br />
      参考: [https://recharts.org/en-US/api](https://recharts.org/en-US/api)
- [x] フォームのセレクトボックスのプルダウン矢印をアイコンに変更