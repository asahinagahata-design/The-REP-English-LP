/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, type MouseEvent } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** 講師紹介 Note（テキストリンク用・既定は1枚目と同じURL） */
const NOTE_INSTRUCTORS_URL =
  import.meta.env.VITE_NOTE_INSTRUCTORS_URL?.trim() || 'https://note.com/info/n/nb82c0da3ed9d';

type NoteInstructorArticle = { url: string; title: string; image?: string };

const NOTE_INSTRUCTOR_ARTICLES: NoteInstructorArticle[] = [
  {
    url: import.meta.env.VITE_NOTE_ARTICLE_1_URL?.trim() || NOTE_INSTRUCTORS_URL,
    title:
      import.meta.env.VITE_NOTE_ARTICLE_CARD_TITLE?.trim() ||
      import.meta.env.VITE_NOTE_ARTICLE_1_TITLE?.trim() ||
      '講師紹介・想いを読む',
    image: import.meta.env.VITE_NOTE_ARTICLE_CARD_IMAGE?.trim() || import.meta.env.VITE_NOTE_ARTICLE_1_IMAGE?.trim() || undefined,
  },
  {
    url: import.meta.env.VITE_NOTE_ARTICLE_2_URL?.trim() || NOTE_INSTRUCTORS_URL,
    title: import.meta.env.VITE_NOTE_ARTICLE_2_TITLE?.trim() || '学習の進め方・ノウハウ',
    image: import.meta.env.VITE_NOTE_ARTICLE_2_IMAGE?.trim() || undefined,
  },
  {
    url: import.meta.env.VITE_NOTE_ARTICLE_3_URL?.trim() || NOTE_INSTRUCTORS_URL,
    title: import.meta.env.VITE_NOTE_ARTICLE_3_TITLE?.trim() || '受講の様子・リアルな声',
    image: import.meta.env.VITE_NOTE_ARTICLE_3_IMAGE?.trim() || undefined,
  },
];

const CALENDAR_BOOKING_URL = import.meta.env.VITE_CALENDAR_BOOKING_URL?.trim() ?? '';
/** 任意：公式LINE・別申込ページなど2つ目のリンク */
const SECONDARY_LINK_URL = import.meta.env.VITE_SECONDARY_LINK_URL?.trim() ?? '';
const SECONDARY_LINK_LABEL =
  import.meta.env.VITE_SECONDARY_LINK_LABEL?.trim() || '別の方法で申し込む';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? '';

/** ナビ・ヒーロー・フッター前CTA など共通の予約導線ラベル */
const TRIAL_CTA_LABEL = '完全無料の30分カウンセリングを申し込む';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const openTrialModal = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTrialModalOpen(true);
  }, []);

  const closeTrialModal = useCallback(() => {
    setTrialModalOpen(false);
  }, []);

  useEffect(() => {
    if (!trialModalOpen) return;
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setTrialModalOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [trialModalOpen]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "英語が本当に苦手でも大丈夫ですか？",
      a: "はい。講師全員が英語ゼロから始めた経験を持っています。どんなレベルの方でも丁寧に対応します。"
    },
    {
      q: "毎日どのくらいの時間が必要ですか？",
      a: "最低15〜30分から始められます。コーチと一緒に無理のないペースを設計しますので、お気軽にご相談ください。"
    },
    {
      q: "途中でプランを変更できますか？",
      a: "はい、スコアの進捗に合わせていつでも変更できます。コーチと相談しながら最適なプランに切り替えましょう。"
    },
    {
      q: "無料体験では何をするのですか？",
      a: "コーチとのオンライン面談（30分）で、現状確認と学習プランのご提案をします。入会の強制は一切ありません。"
    },
    {
      q: "解約はいつでもできますか？",
      a: "はい、月単位でご利用いただけます。いつでも解約可能で、違約金等は一切ございません。"
    },
    {
      q: "完全オンラインとはどういう意味ですか？",
      a: "全ての授業・コーチング・コミュニティがオンラインで完結します。全国どこからでも受講いただけます。"
    }
  ];

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">THE <span>REP</span> ENGLISH</a>
        <a href="#" className="nav-cta" onClick={openTrialModal}>
          {TRIAL_CTA_LABEL}
        </a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/the-rep-english-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-line"></div>

        <div className="hero-content">
          <p className="hero-title-lead">
            トイック専門塾 <span className="accent">The REP English</span>
          </p>

          <h1 className="hero-title hero-title-one-line">
            スコアは続けれる環境で<span className="accent">変わる</span>
          </h1>

          <div className="hero-sub">
            <p>ゼロから900点超えの講師たちが、あなたの隣に。</p>
            <p>日本語で、わかるまで、一緒に考えます。</p>
            <p>独学では作れない環境が、The Rep Englishにはあります。</p>
          </div>

          <div className="hero-actions">
            <a href="#" className="btn-primary" onClick={openTrialModal}>
              {TRIAL_CTA_LABEL} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news">
        <p className="section-label">NEWS</p>
        <h2 className="section-title section-title--sm">お知らせ</h2>
        <div className="news-cards">
          <a href="#" className="news-card" onClick={openTrialModal}>
            <div className="news-card-media">
              <img src="https://picsum.photos/seed/news-toeic-june/640/360" alt="" referrerPolicy="no-referrer" />
            </div>
            <span className="news-card-text">6月TOEIC直前対策講座に申し込む</span>
          </a>
          <a href="#" className="news-card" onClick={openTrialModal}>
            <div className="news-card-media">
              <img src="https://picsum.photos/seed/news-study-club/640/360" alt="" referrerPolicy="no-referrer" />
            </div>
            <span className="news-card-text">〇〇と学ぶ、点数アップ部　申し込みはこちら</span>
          </a>
          <a href="#" className="news-card" onClick={openTrialModal}>
            <div className="news-card-media">
              <img src="https://picsum.photos/seed/news-2026-goal/640/360" alt="" referrerPolicy="no-referrer" />
            </div>
            <span className="news-card-text">2026年内に目標点数に向けて対策講座</span>
          </a>
        </div>
      </section>

      {/* PAIN */}
      <section id="pain">
        <p className="section-label">THE PROBLEM</p>

        <div className="pain-hook-row">
          <h2 className="pain-hook-title">TOEICで独学続かないですよね。</h2>
          <ul className="pain-list pain-list--hook">
            <li>参考書を買ったけど、すべて手をつけられていない</li>
            <li>何から始めればいいのか、よくわからない</li>
            <li>スコアが伸び悩んで、少し自信をなくしている</li>
            <li>苦手が分からない</li>
          </ul>
        </div>

        <div className="pain-conclusion pain-conclusion--full">
          <p className="pain-hook-title pain-conclusion-headline">続かないのは、あなたのせいじゃない。</p>
          <p className="pain-hook-title pain-conclusion-headline">私たちはすべてのTOEIC受験者の味方です。</p>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <p className="section-label">OUR SOLUTION</p>
        <h2 className="section-title">毎日続けられる仕組みが、<br />ここにあります。</h2>
        <p className="section-body">ジムにいくように、学習できるオンライン空間。</p>

        <div className="solution-grid">
          <div className="solution-card">
            <div className="solution-num">01</div>
            <div className="solution-title">始めやすさ</div>
            <div className="solution-desc">気軽にできるコミュニティ参加。業界最安値のマンツーマン指導</div>
          </div>
          <div className="solution-card">
            <div className="solution-num">02</div>
            <div className="solution-title">しっかりしたサポート体制</div>
            <div className="solution-desc">メンターがついて合格までしっかりサポート</div>
          </div>
          <div className="solution-card">
            <div className="solution-num">03</div>
            <div className="solution-title">選び抜かれた最高の講師たち</div>
            <div className="solution-desc">実績と伴走力を兼ね備えた講師がサポートします</div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section id="instructor">
        <p className="section-label">OUR INSTRUCTORS</p>

        <div className="instructor-intro">
          <div className="instructor-intro-text">
            <h2 className="section-title">教えるのは、同じ挑戦、挫折をした私たちです。</h2>
            <p className="section-body">The Rep Englishの講師は全員、日本語ネイティブ。英語ゼロの状態から、自力でスコア900点超えを達成してきました。<br /><br />「わからない」「どこから手をつければいい？」その気持ちを、誰よりもわかっています。</p>
            <p className="instructor-note-link-wrap">
              <a href={NOTE_INSTRUCTORS_URL} className="instructor-note-link" target="_blank" rel="noopener noreferrer">
                講師紹介は Note で見る →
              </a>
            </p>
          </div>
          <div className="instructor-note-cards">
            {NOTE_INSTRUCTOR_ARTICLES.map((article, index) => (
              <a
                key={`instructor-note-${index}`}
                href={article.url}
                className="instructor-note-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="instructor-note-card-media">
                  {article.image ? (
                    <img src={article.image} alt="" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="instructor-note-card-media-fallback" aria-hidden>
                      <span className="instructor-note-card-fallback-logo">note</span>
                    </div>
                  )}
                </div>
                <div className="instructor-note-card-body">
                  <span className="instructor-note-card-site">note.com</span>
                  <p className="instructor-note-card-title">{article.title}</p>
                  <span className="instructor-note-card-cta">
                    記事を開く <span className="arrow">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section id="plan">
        <p className="section-label">PRICING PLANS</p>
        <h2 className="section-title plan-title-inline">今の自分に合ったコースからスタートできます。</h2>
        <p className="plan-sublead">シンプルな料金プラン</p>
        <p className="plan-appeal">入会金なしで始められます</p>
        <p className="section-body plan-intro-body">どのプランか迷っても大丈夫。無料体験でコーチと一緒に決めましょう。</p>

        <div className="plan-grid">
          <div className="plan-card">
            <div className="plan-name">FIRST REP</div>
            <div className="plan-target">TOEIC初挑戦の方</div>
            <div className="plan-lessons">月5回レッスン：50分レッスン（4回）と30分のコーチング（1回）</div>
            <div className="plan-price">¥15,990<span>/月</span></div>
            <div className="plan-note">まずはここから始めましょう</div>
          </div>
          <div className="plan-card featured">
            <div className="plan-badge">POPULAR</div>
            <div className="plan-name">ROAD TO 600</div>
            <div className="plan-target">600点突破を目指す方</div>
            <div className="plan-lessons">月5回レッスン：50分レッスン（4回）と30分のコーチング（1回）</div>
            <div className="plan-price">¥17,990<span>/月</span></div>
            <div className="plan-note">最も選ばれているプラン</div>
          </div>
          <div className="plan-card">
            <div className="plan-name">ROAD TO 800</div>
            <div className="plan-target">800点の壁を越えたい方</div>
            <div className="plan-lessons">月5回レッスン：50分レッスン（4回）と30分のコーチング（1回）</div>
            <div className="plan-price">¥19,980<span>/月</span></div>
            <div className="plan-note">ビジネスで差をつけるスコアへ</div>
          </div>
          <div className="plan-card">
            <div className="plan-name">ELITE REP</div>
            <div className="plan-target">800点超・さらに上を目指す方</div>
            <div className="plan-lessons">月5回レッスン：50分レッスン（4回）と30分のコーチング（1回）</div>
            <div className="plan-price">¥24,950<span>/月</span></div>
            <div className="plan-note">本気でトップを目指す方へ</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <p className="section-label">HOW IT WORKS</p>
        <h2 className="section-title">入会後の流れ</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-title">無料体験</div>
            <div className="step-desc">まずは雰囲気を知る</div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-title">ヒアリング</div>
            <div className="step-desc">専属のメンターがついてヒアリング</div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-title">レッスンスタート</div>
            <div className="step-desc">プランに沿って学習開始</div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-title">専属メンターとの確認</div>
            <div className="step-desc">進捗を共有し軌道修正</div>
          </div>
          <div className="step">
            <div className="step-num">05</div>
            <div className="step-title">コミュニティ参加</div>
            <div className="step-desc">仲間と一緒に学べる</div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community">
        <div className="community-inner">
          <p className="section-label">COMMUNITY</p>
          <h2 className="section-title community-title-inline">一人じゃなかったから、続けられた。</h2>
          <p className="community-body">
            The Rep Englishには、同じ目標を持つメンバーが集まっています。<br />
            毎日の小さな進捗をシェアして、お互いに励まし合える場所。<br />
            「今日もやった」が積み重なって、スコアになります。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">よくある質問</h2>

        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item transition-all duration-300 ${openFaq === index ? 'border-orange-brand' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-q">
                {item.q}
                <span className={`ml-auto transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              <div className={`faq-a overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta">
        <div className="cta-inner">
          <p className="cta-label">FREE TRIAL</p>
          <h2 className="cta-title">まず一歩、<br />踏み出してみてください。</h2>
          <p className="cta-sub">無料体験は30分。コーチと話すだけでOKです。<br />入会の強制は一切ありません。</p>
          <div className="cta-actions">
            <a href="#" className="btn-primary" onClick={openTrialModal}>
              {TRIAL_CTA_LABEL} <span className="arrow">→</span>
            </a>
            <p className="hero-note" style={{ color: 'var(--gray)' }}>完全無料・強制入会なし</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">THE <span>REP</span> ENGLISH</div>
        <div className="footer-copy">© 2025 GLOOVY HOUSE Co., Ltd. All rights reserved.</div>
      </footer>

      {trialModalOpen && (
        <div className="trial-modal-backdrop" onClick={closeTrialModal} role="presentation">
          <div
            className="trial-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="trial-modal-header">
              <h2 id="trial-modal-title" className="trial-modal-title">
                無料体験・ご予約
              </h2>
              <button
                type="button"
                className="trial-modal-close"
                onClick={closeTrialModal}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
            <div className="trial-modal-body">
              <p className="trial-modal-lead">
                無料カウンセリングは Google カレンダーから日時を選んでご予約ください（30分・無料）。
              </p>
              <div className="trial-modal-links">
                {CALENDAR_BOOKING_URL ? (
                  <a
                    href={CALENDAR_BOOKING_URL}
                    className="trial-modal-link trial-modal-link--primary btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    カレンダーで予約する <span className="arrow">↗</span>
                  </a>
                ) : (
                  <p className="trial-modal-hint">
                    <code>.env</code> の <code>VITE_CALENDAR_BOOKING_URL</code> に予約ページのURLを設定してください。
                  </p>
                )}
                {SECONDARY_LINK_URL && (
                  <a
                    href={SECONDARY_LINK_URL}
                    className="trial-modal-link trial-modal-link--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SECONDARY_LINK_LABEL} <span className="arrow">↗</span>
                  </a>
                )}
                {CONTACT_EMAIL && (
                  <a href={`mailto:${CONTACT_EMAIL}`} className="trial-modal-link trial-modal-link--mail">
                    メールで問い合わせ
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
