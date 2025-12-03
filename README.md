# 🚀 MarkItDown Web：萬物轉 Markdown 的終極資料清洗神器

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Gemini](https://img.shields.io/badge/Powered%20by-Gemini%202.5%20Flash-orange) ![React](https://img.shields.io/badge/Built%20with-React-61DAFB)

> **LLM (大語言模型) 或 RAG (檢索增強生成) 開發者都知道，80% 時間是在「洗資料」，而不是寫 Prompt！** 🤯

要把 PDF 裡的表格、PPT 裡的圖片、Excel 裡的數據清洗成 LLM 看得懂的格式，真的會讓人崩潰。**MarkItDown Web** 就是為了拯救你的時間而生！

---

## 💎 這是什麼？

**MarkItDown Web** 是一個將微軟官方開源工具 `markitdown` 修改的更親民的網頁版。我們不只是一個轉檔工具，我們是 **LLM 時代的資料 ETL 神器**。

透過整合 Google 最新的 **Gemini 2.5 Flash** 模型，我們能將各種複雜、非結構化的文件（PDF, Images, Text）高效轉換為乾淨、語意化的 **Markdown**。

## 🔥 殺手級功能 (Killer Features)

### 1. 🎯 專為 RAG 設計的結構保留
它不只是轉出純文字，還會盡量保留 **標題 (#, ##)**、**列表 (-)**、**表格 (|--|)** 等結構。
> **為什麼這很重要？** 
> 乾淨的 Markdown 結構對於 RAG 的 **分塊 (Chunking)** 至關重要！結構越好，檢索越準，幻覺越少。

### 2. 👁️ LLM 視覺整合 (Vision Capabilities)
這是我覺得最厲害的地方！徹底解決 PDF 轉檔後「圖表資訊遺失」的痛點。
*   當遇到 PDF 中的統計圖表或 PPT 的架構圖時，傳統 OCR 只能投降。
*   **MarkItDown Web** 調用 Gemini 的視覺能力，自動生成圖片的詳細文字描述，並嵌入到 Markdown 中。

### 3. ⚡ 支援多種格式
將檔案拖曳進來，剩下的交給 AI：
*   ✅ **PDF**: 包含複雜排版與表格的文件。
*   ✅ **Images**: PNG, JPG, WebP (自動進行 OCR 與圖片描述)。
*   ✅ **Text/Code**: txt, csv, json, xml (自動整理成代碼塊)。

---

## 🛠️ 技術堆疊 (Tech Stack)

這是一個現代化的純前端應用 (Client-side heavy)，極速部署，隱私安全。

*   **Frontend**: React 19, TypeScript, Tailwind CSS
*   **AI Core**: Google Gemini API (`@google/genai`) - 使用 `gemini-2.5-flash` 模型實現極致速度與成本效益。
*   **Design**: 簡約、響應式設計，專注於內容轉換。

---

## 🚀 快速開始 (Quick Start)

想要在本地運行這個神器嗎？只需要幾分鐘：

1.  **Clone 專案**
    ```bash
    git clone https://github.com/your-username/markitdown-web.git
    cd markitdown-web
    ```

2.  **設定 API Key**
    由於這是純前端演示，請確保你在環境變數中設定了 Gemini API Key (通常透過 `process.env.API_KEY` 注入，或在 `services/geminiService.ts` 中配置)。

3.  **安裝依賴並啟動**
    ```bash
    npm install
    npm start
    ```

4.  **開始清洗資料！**
    打開瀏覽器，拖入原本讓你頭痛的 PDF，見證奇蹟。

---

## 💡 靈感來源

本專案修改自 Microsoft 官方開源專案 [MarkItDown](https://github.com/microsoft/markitdown)。我們致力於將這樣強大的 Python 工具體驗帶入 Web 介面，讓更多人能輕鬆使用。

---

<div align="center">
  <p>Made with ❤️ by Developers, for Developers.</p>
  <p>不再讓髒資料阻礙你的 LLM 和 RAG 開發之路。</p>  
</div>
