let Page = {
    data: '',
    expire: ''
  };
  
  //localStorage.set(page, data);
  
  //save page
  const cachePage = (page, data) => {
    Page.data = data;
    let today = new Date();
    Page.expire = today.setDate(today.getDate()+1);
    //Page.expire = today.setSeconds(today.getSeconds()+10);
    localStorage.setItem('Page' + page, JSON.stringify(Page));
  }
  //get page
  const getPageCached = (page) => {
    let data = localStorage.getItem('Page' + page);
    if (data === null) return null;
    let cached = JSON.parse(data);
    let today = new Date();
    let expire = new Date(cached.expire);
    if(expire < today) return null;
    return cached.data;
  }
  //update page
  
  /*const updatePage = (page, data) => {
    Page.data = data;
    let today = new Date();
    Page.expire = today.setDate(today.getDate()+1);
    localStorage.setItem('Page' + page, JSON.stringify(Page));
  }*/