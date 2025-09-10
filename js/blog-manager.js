// Blog 文章管理系統
// 這個檔案用於管理所有 Blog 文章的基本資訊

const blogPosts = [
    {
        id: 'responsive-design',
        title: {
            zh: '響應式網頁設計的最佳實踐',
            en: 'Best Practices for Responsive Web Design'
        },
        category: 'frontend',
        categoryName: {
            zh: '前端開發',
            en: 'Frontend'
        },
        date: '2025-09-10',
        readTime: {
            zh: '8 分鐘閱讀',
            en: '8 min read'
        },
        excerpt: {
            zh: '探討現代響應式設計的核心原則，包括 Flexbox、Grid 佈局以及媒體查詢的進階應用技巧。',
            en: 'Exploring core principles of modern responsive design, including Flexbox, Grid layout, and advanced media query techniques.'
        },
        tags: ['CSS', 'HTML', 'RWD', 'Flexbox', 'Grid'],
        url: 'blog/responsive-design.html',
        featured: true,
        views: 1234
    },
    {
        id: 'vscode-extension',
        title: {
            zh: 'VS Code 擴展開發指南',
            en: 'VS Code Extension Development Guide'
        },
        category: 'tools',
        categoryName: {
            zh: '開發工具',
            en: 'Dev Tools'
        },
        date: '2025-09-08',
        readTime: {
            zh: '12 分鐘閱讀',
            en: '12 min read'
        },
        excerpt: {
            zh: '從零開始學習 VS Code 擴展開發，包括 API 使用、調試技巧以及發布流程的完整教學。',
            en: 'Learn VS Code extension development from scratch, including API usage, debugging tips, and complete publishing workflow.'
        },
        tags: ['VS Code', 'TypeScript', 'API', 'Extension'],
        url: 'blog/vscode-extension.html',
        featured: false,
        views: 892
    },
    {
        id: 'student-to-engineer',
        title: {
            zh: '從學生到工程師的轉換心得',
            en: 'Transitioning from Student to Engineer'
        },
        category: 'career',
        categoryName: {
            zh: '職涯心得',
            en: 'Career'
        },
        date: '2025-09-05',
        readTime: {
            zh: '6 分鐘閱讀',
            en: '6 min read'
        },
        excerpt: {
            zh: '分享從學校畢業到進入職場的心路歷程，包括技能準備、面試經驗與職涯規劃建議。',
            en: 'Sharing the journey from graduation to entering the workforce, including skill preparation, interview experience, and career planning advice.'
        },
        tags: ['職涯', '心得', '新人', 'Career', 'Experience'],
        url: 'blog/student-to-engineer.html',
        featured: true,
        views: 1567
    },
    {
        id: 'database-optimization',
        title: {
            zh: '資料庫設計原則與最佳化策略',
            en: 'Database Design Principles & Optimization Strategies'
        },
        category: 'backend',
        categoryName: {
            zh: '後端開發',
            en: 'Backend'
        },
        date: '2025-09-02',
        readTime: {
            zh: '15 分鐘閱讀',
            en: '15 min read'
        },
        excerpt: {
            zh: '深入探討關聯式資料庫的設計原則，索引優化技巧，以及 SQL 查詢效能提升方法。',
            en: 'In-depth exploration of relational database design principles, index optimization techniques, and SQL query performance improvement methods.'
        },
        tags: ['SQL', 'Database', 'Performance', '資料庫', '效能'],
        url: 'blog/database-optimization.html',
        featured: false,
        views: 743
    },
    {
        id: 'javascript-es6',
        title: {
            zh: 'JavaScript ES6+ 進階特性詳解',
            en: 'Advanced ES6+ JavaScript Features Explained'
        },
        category: 'frontend',
        categoryName: {
            zh: '前端開發',
            en: 'Frontend'
        },
        date: '2025-08-30',
        readTime: {
            zh: '10 分鐘閱讀',
            en: '10 min read'
        },
        excerpt: {
            zh: '詳細介紹 ES6 之後的 JavaScript 新特性，包括解構賦值、箭頭函數、Promise 與 async/await 的實際應用。',
            en: 'Detailed introduction to JavaScript features after ES6, including destructuring, arrow functions, Promise and async/await practical applications.'
        },
        tags: ['JavaScript', 'ES6+', 'Async', 'Modern JS'],
        url: 'blog/javascript-es6.html',
        featured: true,
        views: 2156
    },
    {
        id: 'advanced-git',
        title: {
            zh: 'Git 版本控制進階應用',
            en: 'Advanced Git Version Control Applications'
        },
        category: 'tools',
        categoryName: {
            zh: '開發工具',
            en: 'Dev Tools'
        },
        date: '2025-08-28',
        readTime: {
            zh: '9 分鐘閱讀',
            en: '9 min read'
        },
        excerpt: {
            zh: '超越基礎指令的 Git 進階技巧，包括分支策略、衝突解決以及團隊協作的最佳實踐。',
            en: 'Advanced Git techniques beyond basic commands, including branching strategies, conflict resolution, and team collaboration best practices.'
        },
        tags: ['Git', 'Version Control', 'Teamwork', '版本控制', '團隊協作'],
        url: 'blog/advanced-git.html',
        featured: false,
        views: 1089
    }
];

// 類別定義
const categories = {
    all: {
        zh: '全部',
        en: 'All'
    },
    frontend: {
        zh: '前端開發',
        en: 'Frontend'
    },
    backend: {
        zh: '後端開發',
        en: 'Backend'
    },
    tools: {
        zh: '開發工具',
        en: 'Dev Tools'
    },
    career: {
        zh: '職涯心得',
        en: 'Career'
    }
};

// 獲取文章列表的函數
function getBlogPosts(category = 'all', lang = 'zh') {
    let filteredPosts = blogPosts;
    
    if (category !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }
    
    return filteredPosts.map(post => ({
        ...post,
        title: post.title[lang],
        categoryName: post.categoryName[lang],
        excerpt: post.excerpt[lang],
        readTime: post.readTime[lang]
    }));
}

// 獲取特色文章
function getFeaturedPosts(lang = 'zh') {
    return getBlogPosts('all', lang).filter(post => post.featured);
}

// 獲取最新文章
function getLatestPosts(count = 3, lang = 'zh') {
    return getBlogPosts('all', lang)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
}

// 獲取熱門文章（根據瀏覽次數）
function getPopularPosts(count = 3, lang = 'zh') {
    return getBlogPosts('all', lang)
        .sort((a, b) => b.views - a.views)
        .slice(0, count);
}

// 搜尋文章
function searchPosts(query, lang = 'zh') {
    const lowerQuery = query.toLowerCase();
    return getBlogPosts('all', lang).filter(post => 
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

// 獲取相關文章
function getRelatedPosts(currentPostId, count = 3, lang = 'zh') {
    const currentPost = blogPosts.find(post => post.id === currentPostId);
    if (!currentPost) return [];
    
    const relatedPosts = blogPosts
        .filter(post => post.id !== currentPostId)
        .filter(post => 
            post.category === currentPost.category ||
            post.tags.some(tag => currentPost.tags.includes(tag))
        )
        .sort((a, b) => {
            // 優先相同類別，然後是共同標籤數量
            const aScore = (a.category === currentPost.category ? 10 : 0) +
                         a.tags.filter(tag => currentPost.tags.includes(tag)).length;
            const bScore = (b.category === currentPost.category ? 10 : 0) +
                         b.tags.filter(tag => currentPost.tags.includes(tag)).length;
            return bScore - aScore;
        })
        .slice(0, count);
    
    return relatedPosts.map(post => ({
        ...post,
        title: post.title[lang],
        categoryName: post.categoryName[lang],
        excerpt: post.excerpt[lang],
        readTime: post.readTime[lang]
    }));
}

// 生成文章卡片 HTML
function generateBlogCard(post) {
    return `
        <article class="blog-card" data-category="${post.category}">
            <div class="blog-card-image">
                <div class="blog-card-category">${post.categoryName}</div>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-date">${post.date}</div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-footer">
                    <div class="blog-card-tags">
                        ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${post.url}" class="blog-card-link">
                        ${currentLanguage === 'zh' ? '閱讀更多' : 'Read More'} <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `;
}

// 添加新文章的函數（供管理使用）
function addNewPost(newPost) {
    // 驗證必要欄位
    const requiredFields = ['id', 'title', 'category', 'date', 'excerpt', 'tags', 'url'];
    for (let field of requiredFields) {
        if (!newPost[field]) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
    
    // 檢查ID是否重複
    if (blogPosts.some(post => post.id === newPost.id)) {
        throw new Error(`Post with ID ${newPost.id} already exists`);
    }
    
    // 設定預設值
    const postWithDefaults = {
        featured: false,
        views: 0,
        readTime: { zh: '5 分鐘閱讀', en: '5 min read' },
        categoryName: categories[newPost.category] || { zh: '其他', en: 'Other' },
        ...newPost
    };
    
    blogPosts.unshift(postWithDefaults); // 添加到開頭（最新）
    return postWithDefaults;
}

// 導出給全域使用
if (typeof window !== 'undefined') {
    window.BlogManager = {
        posts: blogPosts,
        categories: categories,
        getBlogPosts,
        getFeaturedPosts,
        getLatestPosts,
        getPopularPosts,
        searchPosts,
        getRelatedPosts,
        generateBlogCard,
        addNewPost
    };
}

// Node.js 環境導出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        blogPosts,
        categories,
        getBlogPosts,
        getFeaturedPosts,
        getLatestPosts,
        getPopularPosts,
        searchPosts,
        getRelatedPosts,
        generateBlogCard,
        addNewPost
    };
}
