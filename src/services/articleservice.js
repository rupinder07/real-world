import AxiosService from './baseaxiosservice'

const ArticleService = {

    fetchUserArticles: (token) => {
        return AxiosService.get('articles/feed', token);
    },

    fetchGlobalArticles: () => {
        return AxiosService.get('articles')
    }

}

export default ArticleService;