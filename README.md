# [b13o] 学習記録アプリ: useMemo と useCallback によるパフォーマンス最適化入門

## 技術スタック
- React
- Vite
- Tailwind CSS
- Recharts

## さらなるステップ🔥
- [ ] `App.tsx` 内のロジックをカスタムフックに切り出す。（その際、`deleteLog` 関数も `useCallback` でメモ化する）
- [ ] フォーム入力中のバリデーションとして、自己評価が `negative` の場合は、改善のためにメモの項目の入力を必須にする。それ以外は任意。
- [ ] 今週1週間分のログを、JSON 形式のファイルでエクスポートできるようにする。