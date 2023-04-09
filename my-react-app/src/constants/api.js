const URL_API = {
    BASE_URL: 'https://localhost:44377/api/',
    POST_URL: 'Post',
    CATEGORY_URL: 'Categories',
    AUTHOR_URL: 'Author'
  };
  
  const POST_API = `${URL_API.BASE_URL}${URL_API.POST_URL}`;
  const CATEGORY_API = `${URL_API.BASE_URL}${URL_API.CATEGORY_URL}`;
  const AUTHOR_API = `${URL_API.BASE_URL}${URL_API.AUTHOR_URL}`;
  
  export { POST_API, CATEGORY_API, AUTHOR_API };
  