# GitHub Contribution Gravity Lens – Web UI

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fgravity-lens.rujuu.com)](https://gravity-lens.rujuu.com)
[![GitHub stars](https://img.shields.io/github/stars/Rujuu-prog/github-contribution-gravity-lens-web)](https://github.com/Rujuu-prog/github-contribution-gravity-lens-web/stargazers)
[![GitHub stars](https://img.shields.io/github/stars/Rujuu-prog/github-contribution-gravity-lens?label=main%20repo%20stars)](https://github.com/Rujuu-prog/github-contribution-gravity-lens/stargazers)

[English](./README.md)

GitHub のコントリビューショングラフを重力レンズ風に可視化する Web ツールです。プレビュー・カスタマイズ・ダウンロードが行えます。

> **GitHub プロフィールに自動で追加したい場合は？**
> 
> メインリポジトリ [github-contribution-gravity-lens](https://github.com/Rujuu-prog/github-contribution-gravity-lens) をご覧ください。GitHub Actions を設定するだけで、README に SVG を自動で埋め込めます。

## デモ

<p align="center">
  <img src="https://gravity-lens.rujuu.com/api/svg/Rujuu-prog?theme=deep-space" alt="Gravity Lens デモ (deep-space)" width="800">
</p>

## 特徴

- **6 テーマ対応** — github, deep-space, monochrome, solar-flare, event-horizon, paper-light
- **カスタマイズパラメータ** — 重力の強さ、アニメーション時間、クリップ率を調整可能
- **ライブプレビュー** — 設定変更を即座に確認
- **SVG ダウンロード** — 生成した SVG ファイルを直接保存
- **埋め込みコード生成** — Markdown / HTML のスニペットをコピー
- **パーマリンク** — `/u/[username]` で共有可能

## 使い方

### Web UI

**[gravity-lens.rujuu.com](https://gravity-lens.rujuu.com)** にアクセスし、GitHub ユーザー名を入力、テーマを選択、パラメータを調整して、ダウンロードまたは埋め込みコードをコピーしてください。

### API

API から直接 SVG を生成できます:

```
https://gravity-lens.rujuu.com/api/svg/[username]?theme=deep-space&strength=0.35&duration=14&clipPercent=95
```

| パラメータ | 型 | デフォルト | 説明 |
|-----------|------|---------|-------------|
| `theme` | string | `deep-space` | テーマ名 |
| `strength` | float | `0.35` | 重力レンズの強さ (0–1) |
| `duration` | integer | `14` | アニメーション時間（秒） |
| `clipPercent` | float | `95` | クリップ率 |

### 埋め込み

`<img>` タグを使って HTML が使える場所ならどこにでも埋め込めます:

```html
<img src="https://gravity-lens.rujuu.com/api/svg/YOUR_USERNAME?theme=deep-space" alt="GitHub Contribution Gravity Lens" width="800">
```

Markdown の場合:

```markdown
![GitHub Contribution Gravity Lens](https://gravity-lens.rujuu.com/api/svg/YOUR_USERNAME?theme=deep-space)
```

## テーマ

| テーマ | 説明 |
|-------|-------------|
| `github` | GitHub のデフォルトの緑色配色 |
| `deep-space` | 紫と青のダークスペーステーマ（デフォルト） |
| `monochrome` | グレースケールテーマ |
| `solar-flare` | オレンジと黄色のソーラーテーマ |
| `event-horizon` | 赤と深紅のダークテーマ |
| `paper-light` | 明るい背景向けのライトグリーンテーマ |

## 関連リポジトリ

- **[github-contribution-gravity-lens](https://github.com/Rujuu-prog/github-contribution-gravity-lens)** — メインリポジトリ。GitHub Actions を使ってプロフィール README に SVG を自動生成・埋め込みできます。
