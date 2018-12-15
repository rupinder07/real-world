import AxiosService from './baseaxiosservice';

const TagService = {

    fetchTags() {
        return AxiosService.get('tags');
    }
}

export default TagService;