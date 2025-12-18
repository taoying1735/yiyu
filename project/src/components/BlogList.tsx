import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, Tag } from 'lucide-react';

export const BlogList: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>心理健康博客 - 心理测试与心理健康评估资讯</title>
        <meta name="description" content="浏览我们的心理健康博客，获取最新的心理测试资讯、抑郁症筛查指南以及心理健康评估知识。帮助您更好地了解自己，关注心理健康。" />
        <meta name="keywords" content="心理测试, 心理健康评估, 抑郁症测试, 心理咨询, 心理健康博客" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            心理健康与测试指南
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索专业的心理测试知识，了解如何进行心理健康评估，以及如何更好地照顾您的心理健康。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`} className="block mt-2">
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-rose-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="mt-3 text-gray-600">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-rose-600 hover:text-rose-700 font-medium text-sm flex items-center"
                  >
                    阅读全文 &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};
