import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, Tag, BookOpen, ArrowRight, Clock } from 'lucide-react';

export const BlogList: React.FC = () => {
  // 计算阅读时间
  const calculateReadingTime = (content: string) => {
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  return (
    <>
      <Helmet>
        <title>心理健康博客 - 心理测试与心理健康评估资讯</title>
        <meta name="description" content="浏览我们的心理健康博客，获取最新的心理测试资讯、抑郁症筛查指南以及心理健康评估知识。帮助您更好地了解自己，关注心理健康。" />
        <meta name="keywords" content="心理测试, 心理健康评估, 抑郁症测试, 心理咨询, 心理健康博客" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* 页面头部 */}
        <div className="bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-12 w-12 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">心理健康专栏</h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                探索专业的心理测试知识，了解如何进行心理健康评估，以及如何更好地照顾您的心理健康。
              </p>

              {/* 统计信息 */}
              <div className="flex items-center justify-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">{blogPosts.length}</div>
                  <div className="text-sm text-white/80">专业文章</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100K+</div>
                  <div className="text-sm text-white/80">用户信赖</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">在线服务</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                {/* 文章封面 */}
                <div className="relative h-48 bg-gradient-to-br from-rose-300 via-pink-300 to-purple-400 p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                      最新
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* 文章内容 */}
                <div className="p-6">
                  {/* 文章元信息 */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-rose-500" />
                      <span>{new Date(post.date).toLocaleDateString('zh-CN', {
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>

                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-rose-500" />
                      <span>{post.author}</span>
                    </div>

                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-rose-500" />
                      <span>{calculateReadingTime(post.content)} 分钟阅读</span>
                    </div>
                  </div>

                  {/* 文章摘要 */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 阅读按钮 */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium text-sm group-hover:font-semibold transition-all"
                  >
                    阅读全文
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* 底部CTA */}
          <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">准备好了解自己的心理健康状况了吗？</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              我们提供专业的心理测试和评估工具，帮助您更好地了解自己，获得个性化的健康建议。
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-rose-600 font-medium rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              开始心理评估
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};