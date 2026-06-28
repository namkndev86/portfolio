import { TranslationDictionary } from '../types';

export const jaDictionary: TranslationDictionary = {
  common: {
    loading: '読み込み中...',
    save: '保存',
    cancel: 'キャンセル',
    submit: '送信',
    edit: '編集',
    delete: '削除',
    back: '戻る',
    tryAgain: '再試行',
  },
  navigation: {
    home: 'ホーム',
    about: '概要',
    projects: 'プロジェクト',
    experience: '経歴',
    resume: '履歴書',
    contact: 'お問い合わせ',
  },
  pages: {
    heroTitle: 'ソフトウェアアーキテクト & フルスタックエンジニア',
    heroSubtitle: 'エンタープライズ品質の分散システムと現代的なWebアプリケーションを構築します。',
    projectsTitle: '注目プロジェクト',
    experienceTitle: 'キャリアの歩み',
    contactTitle: 'お問い合わせ',
  },
  forms: {
    nameLabel: 'お名前',
    namePlaceholder: '山田 太郎',
    emailLabel: 'メールアドレス',
    emailPlaceholder: 'taro@example.com',
    messageLabel: 'メッセージ本文',
    messagePlaceholder: 'メッセージを入力してください...',
  },
  validation: {
    required: 'この項目は必須です。',
    invalidEmail: '有効なメールアドレスを入力してください。',
    minLength: '少なくとも {min} 文字以上必要です。',
  },
  project: {
    viewProject: 'プロジェクトを見る',
    sourceCode: 'ソースコード',
    technologies: '使用技術',
  },
};
