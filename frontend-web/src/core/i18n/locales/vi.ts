import { TranslationDictionary } from '../types';

export const viDictionary: TranslationDictionary = {
  common: {
    loading: 'Đang tải...',
    save: 'Lưu',
    cancel: 'Hủy',
    submit: 'Gửi',
    edit: 'Chỉnh sửa',
    delete: 'Xóa',
    back: 'Quay lại',
    tryAgain: 'Thử lại',
  },
  navigation: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
    projects: 'Dự án',
    experience: 'Kinh nghiệm',
    resume: 'Hồ sơ',
    contact: 'Liên hệ',
  },
  pages: {
    heroTitle: 'Kiến trúc sư phần mềm & Kỹ sư Fullstack',
    heroSubtitle: 'Xây dựng hệ thống phân tán và ứng dụng web hiện đại chuẩn doanh nghiệp.',
    projectsTitle: 'Dự án nổi bật',
    experienceTitle: 'Hành trình sự nghiệp',
    contactTitle: 'Liên hệ công việc',
  },
  forms: {
    nameLabel: 'Họ và tên',
    namePlaceholder: 'Nguyễn Văn A',
    emailLabel: 'Địa chỉ Email',
    emailPlaceholder: 'nguyenvana@example.com',
    messageLabel: 'Nội dung tin nhắn',
    messagePlaceholder: 'Nội dung tin nhắn của bạn...',
  },
  validation: {
    required: 'Trường này là bắt buộc.',
    invalidEmail: 'Vui lòng nhập địa chỉ email hợp lệ.',
    minLength: 'Phải có ít nhất {min} ký tự.',
  },
  project: {
    viewProject: 'Xem dự án',
    sourceCode: 'Mã nguồn',
    technologies: 'Công nghệ',
  },
};
