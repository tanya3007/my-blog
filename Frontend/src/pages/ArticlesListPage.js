import React from 'react';
import articles from './articles-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
  return (
    <div>
      <ArticlesList articles={articles}/>
    </div>
  )
}


export default ArticlesListPage;