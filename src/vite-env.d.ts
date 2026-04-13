/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 無料カウンセリング用（Googleカレンダー予約ページなど） */
  readonly VITE_CALENDAR_BOOKING_URL?: string;
  /** 任意：LINE公式・別申込URLなど */
  readonly VITE_SECONDARY_LINK_URL?: string;
  readonly VITE_SECONDARY_LINK_LABEL?: string;
  /** 任意：mailto リンク表示用 */
  readonly VITE_CONTACT_EMAIL?: string;
  /** 任意：「講師紹介は Note で見る」リンク先（未設定時は1枚目の記事URLと同じ既定値） */
  readonly VITE_NOTE_INSTRUCTORS_URL?: string;
  /** 任意：1枚目カード（従来互換） */
  readonly VITE_NOTE_ARTICLE_CARD_TITLE?: string;
  readonly VITE_NOTE_ARTICLE_CARD_IMAGE?: string;
  readonly VITE_NOTE_ARTICLE_1_URL?: string;
  readonly VITE_NOTE_ARTICLE_1_TITLE?: string;
  readonly VITE_NOTE_ARTICLE_1_IMAGE?: string;
  readonly VITE_NOTE_ARTICLE_2_URL?: string;
  readonly VITE_NOTE_ARTICLE_2_TITLE?: string;
  readonly VITE_NOTE_ARTICLE_2_IMAGE?: string;
  readonly VITE_NOTE_ARTICLE_3_URL?: string;
  readonly VITE_NOTE_ARTICLE_3_TITLE?: string;
  readonly VITE_NOTE_ARTICLE_3_IMAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
