import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID ahp8KnZijz3ZGaazLryxXnn-3pFEdhzHVk7B7BgCd4Q'
	}
});

