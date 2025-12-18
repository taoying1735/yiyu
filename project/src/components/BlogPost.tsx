import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, ArrowLeft, Tag, Heart, Share2, BookOpen, Clock } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // 计算阅读时间（假设每分钟200字）
  const calculateReadingTime = (content: string) => {
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  const readingTime = calculateReadingTime(post.content);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板！');
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - 心理健康博客</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:tag" content={post.tags.join(', ')} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* 文章头部导航 */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                to="/blog"
                className="inline-flex items-center text-gray-600 hover:text-rose-600 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                返回博客列表
              </Link>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleShare}
                  className="flex items-center text-gray-600 hover:text-rose-600 transition-colors"
                  title="分享文章"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 文章主体 */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* 文章封面图 */}
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                  <span className="text-white/90 font-medium">心理健康专栏</span>
                </div>
              </div>
            </div>

            {/* 文章内容 */}
            <div className="p-8 md:p-12">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  {post.title}
                </h1>

                {/* 文章元信息 */}
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-rose-500" />
                    <span className="text-sm font-medium">{new Date(post.date).toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-2 text-rose-500" />
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-rose-500" />
                    <span className="text-sm font-medium">预计阅读 {readingTime} 分钟</span>
                  </div>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* 文章正文 */}
              <div
                className="prose prose-lg prose-rose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* 文章底部互动区域 */}
              <div className="mt-16 pt-8 border-t-2 border-gray-100">
                <div className="text-center mb-8">
                  <Heart className="h-8 w-8 text-rose-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    觉得这篇文章有帮助吗？
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    如果您想了解更多关于自己的心理健康状况，不妨试试我们的专业评估工具，获得个性化的健康建议。
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium rounded-full hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      开始心理评估
                    </Link>

                    <button
                      onClick={handleShare}
                      className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:border-rose-300 hover:text-rose-600 transform hover:scale-105 transition-all duration-200"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      分享文章
                    </button>
                  </div>
                </div>

                {/* 相关文章推荐 */}
                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">推荐阅读</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {blogPosts
                      .filter(p => p.id !== post.id)
                      .slice(0, 2)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="group bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                        >
                          <h5 className="font-medium text-gray-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-1">
                            {relatedPost.title}
                          </h5>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};