/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <a href="#cta" className="nav-cta">無料体験を申し込む</a>
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
            poster="https://picsum.photos/seed/study-hero/1920/1080?blur=2"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-her-laptop-at-night-41051-large.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-line"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">ONLINE TOEIC SCHOOL — SINCE 2025</p>

          <h1 className="hero-title">
            スコアは、<br />
            環境で<span className="accent">変えろ。</span>
          </h1>

          <div className="hero-sub">
            <p>ゼロから900点超えの講師たちが、あなたの隣に。</p>
            <p>日本語で、わかるまで、一緒に考えます。</p>
            <p>独学では作れない環境が、The Rep Englishにはあります。</p>
          </div>

          <div className="hero-actions">
            <a href="#cta" className="btn-primary">
              無料体験を申し込む <span className="arrow">→</span>
            </a>
            <p className="hero-note">30分・完全無料</p>
          </div>
        </div>

        <div className="hero-pillars">
          <div className="pillar">
            <div className="pillar-illustration">
              <img src="https://picsum.photos/seed/coach/400/300" alt="Coach" referrerPolicy="no-referrer" />
            </div>
            <div className="pillar-icon">💪</div>
            <div className="pillar-title">専属コーチ伴走</div>
            <div className="pillar-desc">ゼロから900点超えの講師があなたに合わせてプログラムを設計</div>
          </div>
          <div className="pillar">
            <div className="pillar-illustration">
              <img src="https://picsum.photos/seed/daily/400/300" alt="Daily Rep" referrerPolicy="no-referrer" />
            </div>
            <div className="pillar-icon">📅</div>
            <div className="pillar-title">毎日のDaily Rep</div>
            <div className="pillar-desc">短時間でも毎日続く独自トレーニングプログラム</div>
          </div>
          <div className="pillar">
            <div className="pillar-illustration">
              <img src="https://picsum.photos/seed/community/400/300" alt="Community" referrerPolicy="no-referrer" />
            </div>
            <div className="pillar-icon">👥</div>
            <div className="pillar-title">仲間のコミュニティ</div>
            <div className="pillar-desc">同じ目標を持つ仲間と、一緒に前に進める環境</div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section id="pain">
        <p className="section-label">THE PROBLEM</p>
        <h2 className="section-title">こんなこと、<br />思ったことありませんか？</h2>

        <div className="pain-grid">
          <div className="pain-content">
            <ul className="pain-list">
              <li>参考書を買ったけど、いつの間にか積んでしまった</li>
              <li>何から始めればいいのか、よくわからない</li>
              <li>スコアが伸び悩んで、少し自信をなくしている</li>
              <li>一人で勉強するのが、なんとなく不安</li>
            </ul>
            <div className="pain-illustration mt-8">
              <img src="https://picsum.photos/seed/struggle/800/600" alt="Struggling" className="rounded-lg opacity-80" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="pain-conclusion">
            <p>それは、あなたのせいじゃない。</p>
            <strong>一人で続けられる人のほうが、少ないんです。</strong>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <p className="section-label">OUR SOLUTION</p>
        <h2 className="section-title">毎日続けられる仕組みが、<br />ここにあります。</h2>
        <p className="section-body">ジムに行くと体が鍛えられるように、The Rep Englishに来れば、英語力が着実に積み上がります。毎日少しずつレップ（反復）を重ねること。コーチが隣にいるから、続けられる。</p>

        <div className="solution-illustration-main mt-12 mb-12">
          <img src="https://picsum.photos/seed/gym-study/1200/400" alt="Study Environment" className="w-full h-64 object-cover rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>

        <div className="solution-grid">
          <div className="solution-card">
            <div className="solution-num">01</div>
            <div className="solution-icon">📅</div>
            <div className="solution-title">DAILY REP</div>
            <div className="solution-desc">毎日の短いトレーニングで、確実に力をつける独自プログラム。15〜30分から始められます。</div>
          </div>
          <div className="solution-card">
            <div className="solution-num">02</div>
            <div className="solution-icon">🤝</div>
            <div className="solution-title">専属コーチ</div>
            <div className="solution-desc">あなたの弱点と目標を理解した専属コーチが毎日伴走。週次チェックインで軌道修正します。</div>
          </div>
          <div className="solution-card">
            <div className="solution-num">03</div>
            <div className="solution-icon">👥</div>
            <div className="solution-title">コミュニティ</div>
            <div className="solution-desc">同じ目標を持つ仲間と一緒に前に進める場所。毎日の小さな積み重ねをシェアできます。</div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section id="instructor">
        <p className="section-label">OUR INSTRUCTORS</p>

        <div className="instructor-intro">
          <div>
            <h2 className="section-title">教えるのは、<br />同じ経験をした<br />人たちです。</h2>
            <div className="instructor-main-illustration mt-8">
              <img src="https://picsum.photos/seed/teachers/600/400" alt="Instructors" className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <p className="section-body">The Rep Englishの講師は全員、日本語ネイティブ。英語ゼロの状態から、自力でスコア900点超えを達成してきました。<br /><br />「わからない」「どこから手をつければいい？」その気持ちを、誰よりもわかっています。</p>
          </div>
        </div>

        <div className="instructor-cards">
          <div className="instructor-card">
            <div className="instructor-avatar-img mb-6">
              <img src="https://picsum.photos/seed/kana/200/200" alt="Kana" className="w-20 h-20 rounded-full border-2 border-orange-brand" referrerPolicy="no-referrer" />
            </div>
            <div className="instructor-name">Kana</div>
            <div className="instructor-score">TOEIC 985</div>
            <div className="instructor-bio">ゼロから独学でスコアを積み上げてきた経験を活かし、一人ひとりに合わせた丁寧な指導を行います。</div>
          </div>
          <div className="instructor-card">
            <div className="instructor-avatar-img mb-6">
              <img src="https://picsum.photos/seed/instructor2/200/200" alt="Instructor 2" className="w-20 h-20 rounded-full border-2 border-white/10" referrerPolicy="no-referrer" />
            </div>
            <div className="instructor-name">Instructor 2</div>
            <div className="instructor-score">TOEIC 900+</div>
            <div className="instructor-bio">苦手な部分を一緒に整理して、着実に前に進めるよう全力でサポートします。</div>
          </div>
          <div className="instructor-card">
            <div className="instructor-avatar-img mb-6">
              <img src="https://picsum.photos/seed/instructor3/200/200" alt="Instructor 3" className="w-20 h-20 rounded-full border-2 border-white/10" referrerPolicy="no-referrer" />
            </div>
            <div className="instructor-name">Instructor 3</div>
            <div className="instructor-score">TOEIC 900+</div>
            <div className="instructor-bio">わかるまで何度でも一緒に考えます。あなたのペースに合わせた伴走が得意です。</div>
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section id="plan">
        <p className="section-label">PRICING PLANS</p>
        <h2 className="section-title">今の自分に合ったコースから<br />スタートできます。</h2>
        <p className="section-body">どのプランか迷っても大丈夫。無料体験でコーチと一緒に決めましょう。</p>

        <div className="plan-grid">
          <div className="plan-card">
            <div className="plan-name">FIRST REP</div>
            <div className="plan-target">TOEIC初挑戦の方</div>
            <div className="plan-price">¥15,990<span>/月</span></div>
            <div className="plan-note">まずはここから始めましょう</div>
          </div>
          <div className="plan-card featured">
            <div className="plan-badge">POPULAR</div>
            <div className="plan-name">ROAD TO 600</div>
            <div className="plan-target">600点突破を目指す方</div>
            <div className="plan-price">¥17,990<span>/月</span></div>
            <div className="plan-note">最も選ばれているプラン</div>
          </div>
          <div className="plan-card">
            <div className="plan-name">ROAD TO 800</div>
            <div className="plan-target">800点の壁を越えたい方</div>
            <div className="plan-price">¥19,980<span>/月</span></div>
            <div className="plan-note">ビジネスで差をつけるスコアへ</div>
          </div>
          <div className="plan-card">
            <div className="plan-name">ELITE REP</div>
            <div className="plan-target">800点超・さらに上を目指す方</div>
            <div className="plan-price">¥24,950<span>/月</span></div>
            <div className="plan-note">本気でトップを目指す方へ</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <p className="section-label">HOW IT WORKS</p>
        <h2 className="section-title">始めてから<br />最初の1ヶ月の流れ</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-title">無料体験申込</div>
            <div className="step-desc">コーチとオンラインで気軽に話す（30分）</div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-title">現状を整理</div>
            <div className="step-desc">弱点と目標スコアをコーチが一緒に把握</div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-title">Daily Repスタート</div>
            <div className="step-desc">毎日のトレーニングを開始</div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-title">週次チェックイン</div>
            <div className="step-desc">進捗確認と軌道修正</div>
          </div>
          <div className="step">
            <div className="step-num">05</div>
            <div className="step-title">コミュニティ参加</div>
            <div className="step-desc">仲間と一緒に継続していく</div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community">
        <div className="community-inner">
          <p className="section-label">COMMUNITY</p>
          <h2 className="section-title">一人じゃなかったから、<br />続けられた。</h2>
          <p className="community-body">
            The Rep Englishには、同じ目標を持つメンバーが集まっています。<br />
            毎日の小さな進捗をシェアして、お互いに励まし合える場所。<br />
            「今日もやった」が積み重なって、スコアになります。
          </p>
          <div className="community-tags">
            <div className="tag">毎日の学習報告</div>
            <div className="tag">質問し放題</div>
            <div className="tag">模試の振り返り</div>
            <div className="tag">スコア報告</div>
            <div className="tag">仲間との切磋琢磨</div>
          </div>
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
            <a href="#" className="btn-primary">
              無料体験を申し込む（所要3分） <span className="arrow">→</span>
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
    </>
  );
}
