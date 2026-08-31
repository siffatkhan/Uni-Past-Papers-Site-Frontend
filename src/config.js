// export const API_BASE_URL = "http://127.0.0.1:8000";
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const JOURNALS_API = `${API_BASE_URL}/journals/api`;
export const BOOKS_API = `${API_BASE_URL}/books/api`;
export const FEATURED_BLOG_API = `${JOURNALS_API}/featured`;
export const SUBJECTS_API = `${API_BASE_URL}/papers/api`;


