import Article from "../model/article.js";
class ArticleController {
    articleList = [];
    
    save(obj){
        const article = new Article(obj.title , obj.content);
        this.articleList.push(article);
        console.log(this.articleList);
    };
}

class ArticleDelete{
    articleList=[];

    delete(){
        const article= new Article(this.title, this.content)
    }
}

const aController = new ArticleController

export default aController;